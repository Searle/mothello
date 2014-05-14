#!/usr/bin/node

'use strict';

    // Builds an optimized function that calculates the valid moves.
    // The resulting function is fast, but still contains to many loops
    // and ifs, so I'm not very happy about it yet.
    // It's pretty much the bootleneck of the whole computaion.
    // At least that's what Firebug says.
    //
    function makeGetValidMoves() {

        var result= [];

        result.push(""
            , " return function( cellScore, colMask, posList, posH, posV, posDiag1, posDiag2 ) {"
            , "     var cellScore2= cellScore.concat();"
            , "     var valid, cell, score;"
            , "     var result= [];"
        );

        var checkValid= function(posArray, move, base, mul, len) {

            result.push(""
                , "     valid= posList[" + posArray + "[" + move + "] ^ colMask];"
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
                    , "             while (score--) result.push(cell);"
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

        return result;
    }

    // Generate specialized function for making a the specified move.
    // The produced code does pretty well nothing superfluous. Most
    // values can be prcomputed so it mainly uses constants and no loops.
    // So it's fast. If you can make it faster, please let me know!
    //
    function makeSetAt(move) {

        var movey= move >> 3;
        var movex= move & 7;

        var result= [];

        var shl= function(name, value) {
            if (value) return '(' + name + ' << ' + value + ')';
            return name;
        };

        var encloseIfContainsCode= function(aBefore, aAfter, func) {
            var lastLength= result.length;
            func();
            if (lastLength != result.length) {
                for (var i in aBefore) result.splice(lastLength++, 0, aBefore[i]);
                for (var i in aAfter)  result.splice(result.length, 0, aAfter[i]);
            }
        };

        var recalcValid;

        var addRecalcValid= function(recalcValid, hIndex, vIndex, d1Index, d2Index) {

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

                    var qmovex= movex;
                    var qmovey= movey;
        
                    var brackets= '';
                    var found= 0;

                    var qrecalcValid= recalcValid.concat();
        
                    for (var max= 1; max < 7; max++) {
        
                        qmovex += dx;
                        qmovey += dy;
        
                        if (qmovex < 0 || qmovex >= 8 || qmovey < 0 || qmovey >= 8) break;

                        found= max;
                                
                        var qmovex2= qmovex + qmovex;
                        var qmovey2= qmovey + qmovey;
        
                        var qmovedax= qmovex >= qmovey ? qmovey2 : qmovex2;
                        var qmoveday= qmovey - qmovex + 7;
        
                        var qmovedbx= (7 - qmovex) >= qmovey ? qmovex2 : 14 - qmovey2;
                        var qmovedby= qmovey + qmovex;
        
                        if (max > 1) {
                            result.push(""
                                , "     if (qi >= " + max + ") {"
                            );
                            brackets += '}';
                        }
                        
                        result.push(""
                            , "         posH[" + qmovey + "] ^= " + ((3 << qmovex2)) + ";"
                            , "         posV[" + qmovex + "] ^= " + ((3 << qmovey2)) + ";"
                            , "         posDiag1[" + qmoveday + "] ^= " + ((3 << qmovedax)) + ";"
                            , "         posDiag2[" + qmovedby + "] ^= " + ((3 << qmovedbx)) + ";"
                        );

                        qrecalcValid= addRecalcValid(qrecalcValid, qmovey, qmovex, qmoveday, qmovedby);
                    }

                    if (brackets.length) result.push(""
                        , '     ' + brackets
                    );
                    if (found == 1) {
                        result.push(""
                            , "         diff += colDiff + colDiff;"
                        );
                    }                    
                    else if (found > 1) {
                        result.push(""
                            , "         diff += (colDiff + colDiff) * qi;"
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
            , " function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {"
            , "     var pos, qi;"
            , "     boardLog[boardLog.length]= " + move + ";"
            , "     diff += colDiff;"
        );

        recalcValid= addRecalcValid([0, 0], movey, movex, moveday, movedby);
        
        result.push(""
            , "     pos= posList[posH[" + movey + "] ^ colMask];"
            , "     posH[" + movey + "] |= " + shl('col', movex2) + ";"
        );

        flip(movex2 + 11, -1, 0);
        flip(movex2 + 12,  1, 0);

        result.push(""
                , "     pos= posList[posV[" + movex + "] ^ colMask];"
                , "     posV[" + movex + "] |= " + shl('col', movey2) + ";"
        );

        flip(movey2 + 11, 0, -1);
        flip(movey2 + 12, 0,  1);

        result.push(""
            , "     pos= posList[posDiag1[" + moveday + "] ^ colMask];"
            , "     posDiag1[" + moveday + "] |= " + shl('col', movedax) + ";"
        );

        flip(movedax + 11, -1, -1);
        flip(movedax + 12,  1,  1);

        result.push(""
            , "     pos= posList[posDiag2[" + movedby + "] ^ colMask];"
            , "     posDiag2[" + movedby + "] |= " + shl('col', movedbx) + ";"
        );

        flip(movedbx + 11, -1,  1);
        flip(movedbx + 12,  1, -1);

        result.push(""
            , "     col= 3 - col;"
            , "     colMask= 65535 - colMask;"
            , "     colDiff= -colDiff;"
            , " }"
        );

        // if (move == 22) { console.log(result.join("\n")); die(); }

        return result;
    }



    var code= 'function makeGetValidMoves() {' + makeGetValidMoves().join('\n') + ';\n};\n';

    code+= 'function makeSetAt() {\n return [\n'

//console.log(makeSetAt(0));
    for ( var i= 0; i < 64; i++ ) code+= makeSetAt(i).join('\n') + ',\n';

    code+= ' ];\n}\n';


console.log(code);