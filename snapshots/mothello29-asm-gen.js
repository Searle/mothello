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

    var code= 'function makeGetValidMoves() {' + makeGetValidMoves().join('\n') + ';\n};';

console.log(code);