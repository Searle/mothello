
// ====================================================================
//  Reversi Shootout
//  MoThello Version 2008-08-20. Inspired by MoGo.
//  (c) 2008 by Dietrich Raisin, info1@raisin.de, www.raisin.de
//
//  Released under the Artistic License 2.0. Here are the terms:
//  http://www.opensource.org/licenses/artistic-license-2.0.php
//
//  To make a copy, this file is the only one you need. No images were
//  used, the stones are unicode characters.
//
//  Lessons learned:
//  - Hashes are slow
//  - Function calls are slow
//  - Generating new arrays is slow
//  - JITs may be slower (MoThello is slower on Tamarin and V8)
// ====================================================================

var undefined= undefined;       // jQuery does that, because defined variables are faster than not-defined ones.

Core= (function() {

    var boardLog;               // Log of the moves made

    var posH;                   // Board from a horizontal point of view
    var posV;                   // Board from a vertical point of view
    var posDiag1;               // Board from a diagonal point of view
    var posDiag2;               // Board from the other diagonal point of view

    var col;                    // Current player's color. 1 (white) or 2 (black).
    var colMask;                // 0 if col == 1, or 0xFFFF if col == 2
    var colDiff;                // 1 if col == 1, or -1 if col == 2

    var diff;                   // Current score (if positive, points that white is ahead, otherwise -points that black is ahead)

    var posList;                // See initPosList

    var getValidMoves;          // Function generated by makeGetValidMoves()
    var validMovesCheck;        // Flag indicating if the board is already initialized
    var validMoves;

    var zero64;                 // 64 x 0

    /*
    var recalcValidHV;
    var recalcValidDiag;
    var validHV;
    var validDiag;
    var validMoves;
    */

    var endTime= 0;             // Used by computeMove()
    var stopCalculating;

    var cellScore;

    var setAt;

    // ====================================================================
    //  Core
    // ====================================================================

    // FIXME: This is only correct for MonteCarlo
    var initCellScore= function() {

        // Generates a basic Scoring (how intense will a certain position be looked at):
        // 6 4 4 4 ..
        // 4 1 2 2 ..
        // 4 2 4 2 ..
        // 4 2 2 2 ..
        // ..

        cellScore= [];
        for (var i= 0; i < 64; i++) {
            cellScore[i]= 2;
        }
        for (var i= 0; i < 8; i++) {
            cellScore[i] += 2;
            cellScore[i * 8] += 2;
            cellScore[i + 56] += 2;
            cellScore[i * 8 + 7] += 2;
        }
        for (var i= 2; i < 6; i++) {
            cellScore[i + 16]++;
            cellScore[i * 8 + 2]++;
            cellScore[i + 40]++;
            cellScore[i * 8 + 5]++;
        }
        cellScore[9]= cellScore[14]= cellScore[49]= cellScore[54]= 1;
    }

    // FIXME: == newGame ??
    var initBoard= function() {
        posH= [];
        posV= [];
        posDiag1= [];
        posDiag2= [];

        for ( var y= 8; y--; ) {
            posH.push(0);
            posV.push(0);
        }

        for ( var y= 15; y--; ) {
            posDiag1.push(0);
            posDiag2.push(0);
        }

        boardLog= [];

        // Black begins
        col= 2;
        colMask= 65535;
        colDiff= -1;

        stopCalculating= false;

        diff= 0;
    /*
        recalcValidHV= 0;
        recalcValidDiag= 0;
        validHV= validMovesCheck.concat();
        validDiag= validMovesCheck.concat();
        validMoves= [];
    */

        validMoves= [];

        // Set the 4 center pieces
        setAt[28]();
        setAt[27]();
        setAt[35]();
        setAt[36]();
    }

    //  The entries for all possible positions for one row are stored in the
    //  posList array. The index consists of 2 * 8 bits for the 8 cells. 2 bits
    //  are used as follows: 0= empty, 1=white, 2=black, 3=empty.
    //
    //  The entries can be used for either opponent. One of the opponent
    //  looks up posList[n], the other posList[n ^ 0xffff].
    //
    //  Each entry looks like this:
    //  [ valid2, valid1, valid0,
    //      newpos0, newpos1, ... , newpos7,
    //      flipped0-left, flipped0-right, flipped1-left, flipped1-right, ... , flipped7-left, flipped7-right,
    //  ]
    //
    //  validN      0..  Valid moves for white in that position.
    //
    //  newposN     3..  New position if white's move is N.
    //              The new position includes the flipped captures stones if there are any.
    //
    //  flippedN    11.. Number of flipped stones to the left and to the right if white's move is N.
    //
    var initPosList= function( doneFn ) {

        posList= new Array(65536);

        var pos0= 0;

        // We do this chunk-wise, otherwise slow browsers will complain.
        var nextChunk= function() {

            for ( var chunk= 8192; chunk--; pos0++ ) {

                var pos= pos0;
                var had= 0;
                var want1= 0;
                var want2= 0;
                var had1pos= -1;
                var wantpos= -1;
                var valid= [ 9, 9, 9 ];
                var newpos= [ pos0, pos0, pos0, pos0, pos0, pos0, pos0, pos0 ];
                var flipped= [ 0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0,  0, 0 ];
                var validi= 0;

                for ( var j= 0; j < 8; j++ ) {

                    if ( (pos & 3) == 1 ) {
                        if ( wantpos >= 0 ) {
                            if ( want2 ) {
                                valid[validi++]= wantpos;

                                // Flip captured stones
                                newpos[wantpos] ^=
                                    ~(-1 << (j + j - wantpos - wantpos - 2))
                                    << (wantpos + wantpos + 2);
                                flipped[wantpos + wantpos + 1]= j - wantpos -1;
                            }
                            wantpos= -1;
                        }
                        had= 1;
                        want2= 0;
                        newpos[j]= undefined;
                    }
                    else if ( (pos & 3) == 2 ) {
                        if ( had == 1 ) {
                            had= 2;
                            had1pos= j;
                        }
                        want2= 1;
                        newpos[j]= undefined;
                    }
                    else {
                        if ( had == 2 ) {
                            valid[validi++]= j;

                            // Flip captured stones
                            newpos[j] ^=
                                ~(-1 << (j + j - had1pos - had1pos))
                                << (had1pos + had1pos);
                            flipped[j + j]= j - had1pos;
                        }
                        wantpos= j;
                        had= want1= want2= 0;

                        newpos[j]= newpos[j] & ~(3 << (j + j)) | (1 << (j + j));
                    }

                    pos >>= 2;
                }

                // Additionally to it's purpose of concating, "concat" clones the array, which is
                // what we need here.
                posList[pos0]= valid.sort().concat(newpos).concat(flipped); // .concat(set1).concat(set2);

                // UI.log(valid);
            }

UI.log("iniPosList: " + pos0);

            if ( pos0 < 65536 ) {
                UI.setTimeout(function() { nextChunk(); }, 1);
                return;
            }
            if ( doneFn ) doneFn();
            UI.log("initPosList DONE");
        }
        UI.setTimeout(function() { nextChunk(); }, 1);
    }


    // ====================================================================
    //  Code generation
    // ====================================================================

    // Important Optimization to reduce Closure overhead for FF in make*-Functions
    // Change to "" to turn off.
    var localize= "local_";
    localize= "";


    // Builds an optimized function that calculates the valid moves.
    // High speed of this function is absolutely vital, because it's by
    // far the most often called. (12000 times/sec with my FF3.5)
    // The resulting function is fast, but still contains to many loops
    // and ifs, so I'm not very happy about it yet.
    // It's pretty much the bootleneck of the whole computaion.
    // At least that's what Firebug says.
    //
    var makeGetValidMoves= function() {

        var result= [];

        result.push(""
            , " function() {"
            , "     var cellScore2= cellScore.concat();"
            , "     var valid, cell, score;"
            , "     var result= [];"
        );
        
        if ( localize ) {
            result.push(""
                // Closures are expensive. Fetch the required read-only values and put them into locals.
                , "     var " + localize + "posList= posList;"
                , "     var " + localize + "colMask= colMask;"
                , "     var " + localize + "posH= posH;"
                , "     var " + localize + "posV= posV;"
                , "     var " + localize + "posDiag1= posDiag1;"
                , "     var " + localize + "posDiag2= posDiag2;"
            );
        }
        
        var checkValid= function(posArray, move, base, mul, len) {

            result.push(""
                , "     valid= " + localize + "posList[" + localize + posArray + "[" + move + "] ^ " + localize + "colMask];"
            );

            if (mul == -1) mul= ' - ';
            else if (mul == 1) mul= (base ? ' + ' : '');
            else if (mul > 0) mul= (base ? ' + ' : '') + mul + ' * ';
            else mul= (base ? ' - ' : ' -') + -mul + ' * ';

            if (base == 0) base= '';

            for (var i= 0; i < 3; i++) {
                result.push(""
                    , "     if (valid[" + i + "] < " + len + ") {"
                    , "         if (score= cellScore2[" + base + mul + "valid[" + i + "]]) {"
                    , "             cell= " + base + mul + "valid[" + i + "];"
                    , "             cellScore2[cell]= 0;"
                    , "             while (score--) result[result.length]= cell;"
                    , "         }"
                );
            };
            result.push(""
                , "     }}}"
            );
        }

        for (var i= 0; i < 8; i++) {
            checkValid('posH',      i, i * 8, 1, 8);
            checkValid('posV',      i, i,     8, 8);
        }
        for (var i= 2; i < 8; i++) {
            checkValid('posDiag1',  i, 7 - i, 9,  i + 1);
            checkValid('posDiag2',  i, i * 8, -7, i + 1);
        }
        for (var i= 8; i < 13; i++) {
            checkValid('posDiag1',  i, (i - 7) * 8, 9,  15 - i);
            checkValid('posDiag2',  i, 49 + i,      -7, 15 - i);
        }

        result.push(""
            , "     if (result.length) return result;"
            , "     return [ 64 ];"     // pass
            , " }"
        );

        // UI.log(result.join("\n"));

        eval("getValidMoves= (" + result.join('') + ");");
    }


/*
    // Unused
    var makeGetValidMoves2= function() {

        var result= [];

        var checkValid= function(posArray, recalcVar, recalcBit, move, base, mul, len) {

            // result[result.length] is faster than result.push, according to the net

            result.push(""
                , "     if (recalcValid" + recalcVar + " & " + (1 << recalcBit) + ") {"

                // , "         UI.log('recalcing: " + recalcVar + ", " + recalcBit + "');"

                , "         pos= posList[" + posArray + "[" + move + "] ^ colMask];"
            );

            if (mul == -1) mul= ' - ';
            else if (mul == 1) mul= (base ? ' + ' : '');
            else if (mul > 0) mul= (base ? ' + ' : '') + mul + ' * ';
            else mul= (base ? ' - ' : ' -') + -mul + ' * ';

            if (base == 0) base= '';

            for (var i= 0; i < 3; i++) {
                var cell= base + mul + "pos[" + i + "]"
                result.push(""
                    , "         if (pos[" + i + "] < " + len + ") {"
                    , "             valid" + recalcVar + "[" + cell + "] |= " + (1 << recalcBit) + ";"
                );
            };
            result.push(""
                , "         }}}"
                , "     }"
            );
        }

        result.push(""
            , " function() {"
            , "     if (recalcValidHV == 0 && recalcValidDiag == 0) {"
            , "         return validMoves;"
            , "     }"

            // , "     UI.log('=====================');"

            , "     var pos, cell;"
            , "     var result= [];"

            , "     cell= 64;"
            , "     while (cell--) {"
            , "         validHV[cell] &= ~recalcValidHV;"
            , "         validDiag[cell] &= ~recalcValidDiag;"
            , "     }"
        );

        for (var i= 0; i < 8; i++) {
            checkValid('posH',      'HV',   i,      i, i * 8, 1, 8);
            checkValid('posV',      'HV',   i + 16, i, i,     8, 8);
        }
        for (var i= 2; i < 8; i++) {
            checkValid('posDiag1',  'Diag', i,      i, 7 - i,  9, i + 1);
            checkValid('posDiag2',  'Diag', i + 16, i, i * 8, -7, i + 1);
        }
        for (var i= 8; i < 13; i++) {
            checkValid('posDiag1',  'Diag', i,      i, (i - 7) * 8,  9, 15 - i);
            checkValid('posDiag2',  'Diag', i + 16, i, 49 + i,      -7, 15 - i);
        }

        result.push(""

            , "     validMoves= [];"
            , "     cell= 64;"
            , "     while (cell--) if (validHV[cell] || validDiag[cell]) {"
            , "         var score= cellScore[cell];"
            , "         while (score--) validMoves[validMoves.length]= cell;"
            , "     }"

            , "     recalcValidHV= recalcValidDiag= 0;"
            , "     return validMoves;"
            , " }"
        );

        UI.log(result.join("\n"));

        eval("getValidMoves= (" + result.join('') + ");");
    }
*/

    // Generate specialized function for making a the specified move.
    // The produced code does pretty well nothing superfluous. Most
    // values can be precomputed so it mainly uses constants and no loops.
    // So it's fast. If you can make it faster, please let me know!
    //
    var makeSetAt= function(move) {

        var movey= move >> 3;
        var movex= move & 7;

        var result= [];

        var colShl= function(value) {
            if (value) return "(" + localize + "col << " + value + ")";
            return localize + "col";
        };

        var encloseIfContainsCode= function(aBefore, aAfter, func) {
            var lastLength= result.length;
            func();
            if (lastLength != result.length) {
                for ( var i in aBefore ) result.splice(lastLength++, 0, aBefore[i]);
                for ( var i in aAfter ) result.splice(result.length, 0, aAfter[i]);
            }
        };

        var recalcValid;

        var addRecalcValid= function(recalcValid, hIndex, vIndex, d1Index, d2Index) {

            // Defunct... Doesn't work this way
            return recalcValid;

            var newRecalcValid= [
                recalcValid[0] | (1 << hIndex)  | (1 << (vIndex + 16)),
                recalcValid[1] | (1 << d1Index) | (1 << (d2Index + 16))
            ];
            if (newRecalcValid[0] != recalcValid[0]) {
                result.push(""
                    , "         recalcValidHV   |= 0x" + (newRecalcValid[0] & ~recalcValid[0]).toString(16) + "; // " + newRecalcValid[0].toString(16)
                );
            }
            if (newRecalcValid[1] != recalcValid[1]) {
                result.push(""
                    , "         recalcValidDiag |= 0x" + (newRecalcValid[1] & ~recalcValid[1]).toString(16) + "; // " + newRecalcValid[1].toString(16)
                );
            }
            return newRecalcValid;
        }

        // fixme: name turn
        var flip= function(posIndex, dx, dy) {

            encloseIfContainsCode([ ""
                    , "     if (qi= pos[" + posIndex + "]) {"
                ], [ ""
                    , "}"
                ], function() {

                    var moveHVx= movex;
                    var moveHVy= movey;

                    var brackets= '';
                    var found= 0;

                    var qrecalcValid= recalcValid.concat();

                    for (var max= 1; max < 7; max++) {

                        moveHVx += dx;
                        if (moveHVx < 0 || moveHVx >= 8) break;

                        moveHVy += dy;
                        if (moveHVy < 0 || moveHVy >= 8) break;

                        found= max;

                        var moveHVx2= moveHVx + moveHVx;
                        var moveHVy2= moveHVy + moveHVy;

                        var moveDiag1x= moveHVx >= moveHVy ? moveHVy2 : moveHVx2;
                        var moveDiag1y= moveHVy - moveHVx + 7;

                        var moveDiag2x= (7 - moveHVx) >= moveHVy ? moveHVx2 : 14 - moveHVy2;
                        var moveDiag2y= moveHVy + moveHVx;

                        if (max > 1) {
                            result.push(""
                                , "     if (qi >= " + max + ") {"
                            );
                            brackets += '}';
                        }

                        result.push(""
                            , "         posH[" + moveHVy + "] ^= " + ((3 << moveHVx2)) + ";"
                            , "         posV[" + moveHVx + "] ^= " + ((3 << moveHVy2)) + ";"
                            , "         posDiag1[" + moveDiag1y + "] ^= " + ((3 << moveDiag1x)) + ";"
                            , "         posDiag2[" + moveDiag2y + "] ^= " + ((3 << moveDiag2x)) + ";"
                        );

                        qrecalcValid= addRecalcValid(qrecalcValid, moveHVy, moveHVx, moveDiag1y, moveDiag2y);
                    }

                    if (brackets.length) result.push(""
                        , '     ' + brackets
                    );
                    if (found == 1) {
                        result.push(""
                            , "         diff += " + localize + "colDiff + " + localize + "colDiff;"
                        );
                    }
                    else if (found > 1) {
                        result.push(""
                            , "         diff += (" + localize + "colDiff + " + localize + "colDiff) * qi;"
                        );
                    }
                }
            );
        };

        var movex2= movex + movex;
        var movey2= movey + movey;

        var movedax= movex >= movey ? movey2 : movex2;
        var moveday= movey - movex + 7;

        var movedbx= (7 - movex) >= movey ? movex2 : 14 - movey2;
        var movedby= movey + movex;

        result.push(""
            , " function() {"
            , "     var pos, qi;"
            , "     boardLog[boardLog.length]= " + move + ";"
            , "     diff += " + localize + "colDiff;"
        );

        if ( localize ) {
            result.push(""

                // Closures are expensive. Fetch the required read-only values and put them into locals.
                , "     var " + localize + "posList= posList;"
                , "     var " + localize + "col= col;"
                , "     var " + localize + "colMask= colMask;"
                , "     var " + localize + "colDiff= colDiff;"
            );
        }
        
        recalcValid= addRecalcValid([0, 0], movey, movex, moveday, movedby);

        result.push(""
            , "     pos= " + localize + "posList[posH[" + movey + "] ^ " + localize + "colMask];"
            , "     posH[" + movey + "] |= " + colShl(movex2) + ";"
        );

        flip(movex2 + 11, -1, 0);
        flip(movex2 + 12,  1, 0);

        result.push(""
                , "     pos= " + localize + "posList[posV[" + movex + "] ^ " + localize + "colMask];"
                , "     posV[" + movex + "] |= " + colShl(movey2) + ";"
        );

        flip(movey2 + 11, 0, -1);
        flip(movey2 + 12, 0,  1);

        result.push(""
            , "     pos= " + localize + "posList[posDiag1[" + moveday + "] ^ " + localize + "colMask];"
            , "     posDiag1[" + moveday + "] |= " + colShl(movedax) + ";"
        );

        flip(movedax + 11, -1, -1);
        flip(movedax + 12,  1,  1);

        result.push(""
            , "     pos= " + localize + "posList[posDiag2[" + movedby + "] ^ " + localize + "colMask];"
            , "     posDiag2[" + movedby + "] |= " + colShl(movedbx) + ";"
        );

        flip(movedbx + 11, -1,  1);
        flip(movedbx + 12,  1, -1);

        result.push(""
            , "     col= 3 - " + localize + "col;"
            , "     colMask= 65535 - " + localize + "colMask;"
            , "     colDiff= -" + localize + "colDiff;"
            , " }"
        );

        // if (move == 22) { UI.log(result.join("\n")); die(); }

        // Note: blah = new Function( ... ) won't work because we need a closure here.
        eval("setAt[" + move + "]= (" + result.join("\n") + ");");
    }


    // ====================================================================
    //  Stuff
    // ====================================================================

/*
    var unique= function(a) {
        var lookup= [];
        var result= [];
        for (var i= a.length; i--; ) {
            if ( a[i] in lookup ) continue;
            result[result.length]= a[i];
            lookup[a[i]]= 1;
        }
        return result;
    }
*/
    // Seems to be significantly faster (5x FF 3.5, 2x Webkit) :-/ -> Hashes ARE slow...
    var unique= function(a) {
        var result= [];
        var result_length= 0;
        var i, j, n;
        again:
        for ( i= 0, n= a.length; i < n; i++ ) {
            for ( j= result_length; j--; ) {
                if ( result[j] == a[i] ) continue again;
            }
            result[result_length++] = a[i];
        }
        return result;
    }

    var finished= function() {
        if (boardLog.length < 4) return true;
        if (boardLog[boardLog.length - 2] == 64 && boardLog[boardLog.length - 1] == 64) return true;
        if (getValidMoves()[0] == 64) {
            swapCol();
            var fin= getValidMoves()[0] == 64;
            swapCol();
            return fin;
        }
        return false;
    }

    var swapCol= function() {
        col= 3 - col;
        colMask= 65535 - colMask;
        colDiff= -colDiff;
    }

    var pass= function() {
        boardLog[boardLog.length]= 64;
        swapCol();
    }

    // slow! but doesn't matter, not used by computer player
    var undo= function(count) {
        var flog2= boardLog.concat(); // clone

        initBoard();
        for (var i= 4; i < flog2.length - count; i++) {
            setAt[flog2[i]]();
        }
    }

    // Retrieves the color of a given cell
    var colAtCell= function(cell) {
        var movey= cell >> 3;
        var movex= cell & 7;
        var result= (posH[movey] >> (movex + movex)) & 3;
        return result == 3 ? 0 : result;
    }

    var colName= function(col) {
        if (col == 1) return "White";
        if (col == 2) return "Black";
        return "?"
    }

    // GameState Class
    var GameState= function () {

        var capPosH= [], capPosV= [], capPosDiag1= [], capPosDiag2= [];
        var capBoardLog= [];

        var capCol, capColMask, capColDiff;
        var capDiff;

        var captureState= function() {

            for ( var y= 8; y--; ) {
                capPosH[y]= posH[y];
                capPosV[y]= posV[y];
            }

            for ( var y= 15; y--; ) {
                capPosDiag1[y]= posDiag1[y];
                capPosDiag2[y]= posDiag2[y];
            }

            capBoardLog.splice(boardLog.length, 999);
            for ( var i= boardLog.length; i--; ) {
                capBoardLog[i]= boardLog[i];
            }

            capCol= col;
            capColMask= colMask;
            capColDiff= colDiff;

            capDiff= diff;
        }

        var restoreState= function() {

            for ( var y= 8; y--; ) {
                posH[y]= capPosH[y];
                posV[y]= capPosV[y];
            }

            for ( var y= 15; y--; ) {
                posDiag1[y]= capPosDiag1[y];
                posDiag2[y]= capPosDiag2[y];
            }

            boardLog.splice(capBoardLog.length, 999);
            for ( var i= capBoardLog.length; i--; ) {
                boardLog[i]= capBoardLog[i];
            }
        /*
            validHV= [];
            validDiag= [];
            for (var i= 64; i--; ) {
                validHV[i]= capValidHV[i];
                validDiag[i]= capValidDiag[i];
            }

            validMoves= [];
            for (var i= capValidMoves.length; i--; ) {
                validMoves[i]= capValidMoves[i];
            }

            recalcValidHV= capRecalcValidHV;
            recalcValidDiag= capRecalcValidDiag;
        */

            col= capCol;
            colMask= capColMask;
            colDiff= capColDiff;

            diff= capDiff;
        }

        this.capture= captureState;
        this.restore= restoreState;
    }

    var init= function( doneFn ) {

        zero64= [];
        for ( var i= 64; i--; ) zero64[i]= 0;

        initCellScore();
        makeGetValidMoves();

        setAt= []
        for ( var i= 64; i--; ) makeSetAt(i);
        setAt[64]= pass;
        setAt[65]= function() {}; // NOP

        initPosList(function() {
            initBoard();
            if ( doneFn ) doneFn();
        });
    };

    function colAtXY( x, y ) {
        return (posH[y] >> (x * 2)) & 3;
    };

    var computeMove= function(secs, doneFn) {

        var moves= unique(getValidMoves());

        if ( moves[0] == 64 ) {
            if ( doneFn ) doneFn(64, "Pass. I can\'t make a move :-(");
            return;
        }

        if ( moves.length == 1 ) {
            if ( doneFn ) doneFn(moves[0], "Making the only possible move.");
            return;
        }

        if ( secs < 1 ) secs= 1;

        var startTime= new Date().getTime();

        endTime= startTime + secs * 1000;

        var gameState= new GameState();
        gameState.capture();

        Compute.run(startTime, endTime, moves, function (move, comment) {
            gameState.restore();

            endTime= 0;

            // TODO: Check Valid Move

            if ( doneFn ) doneFn(move, comment);
        });

    };

    // Is there a faster way?
    var zeroes= function (length) {
        return zero64.concat().splice(0, length);
    }

    return {
        init:           init,
        colAtXY:        colAtXY,
        colAtCell:      colAtCell,
        finished:       finished,
        computeMove:    computeMove,
        pass:           pass,
        colName:        colName,
        GameState:      GameState,
        zeroes:         zeroes,

        makeMove:       function (move) { setAt[move](); },
        getValidMoves:  function () { return getValidMoves(); },
        getUniqueValidMoves:  function () { return unique(getValidMoves()); },
        col:            function () { return col; },

        // FIXME: raus. lastMove() reicht evt
        boardLog:       function () { return boardLog; },
        
        started:        function () { return boardLog.length >= 4; },
        computing:      function () { return endTime; },
        stopComputing:  function () {
                            endTime= 1;
                            stopCalculating= true;
                        },
        stopping:       function() {
                            return stopCalculating;
                        },

        diff:           function () { return diff; },
  };

})();   // END Core


// EOF
