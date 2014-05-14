function makeGetValidMoves() {
 return function( cellScore, colMask, posList, posH, posV, posDiag1, posDiag2 ) {
     var cellScore2= cellScore.concat();
     var valid, cell, score;
     var result= [];

     valid= posList[posH[0] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[valid[0]]) {
             cell= valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[valid[1]]) {
             cell= valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[valid[2]]) {
             cell= valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[0] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[8 * valid[0]]) {
             cell= 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[8 * valid[1]]) {
             cell= 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[8 * valid[2]]) {
             cell= 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[1] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[8 + valid[0]]) {
             cell= 8 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[8 + valid[1]]) {
             cell= 8 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[8 + valid[2]]) {
             cell= 8 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[1] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[1 + 8 * valid[0]]) {
             cell= 1 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[1 + 8 * valid[1]]) {
             cell= 1 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[1 + 8 * valid[2]]) {
             cell= 1 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[2] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[16 + valid[0]]) {
             cell= 16 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[16 + valid[1]]) {
             cell= 16 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[16 + valid[2]]) {
             cell= 16 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[2] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[2 + 8 * valid[0]]) {
             cell= 2 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[2 + 8 * valid[1]]) {
             cell= 2 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[2 + 8 * valid[2]]) {
             cell= 2 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[3] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[24 + valid[0]]) {
             cell= 24 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[24 + valid[1]]) {
             cell= 24 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[24 + valid[2]]) {
             cell= 24 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[3] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[3 + 8 * valid[0]]) {
             cell= 3 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[3 + 8 * valid[1]]) {
             cell= 3 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[3 + 8 * valid[2]]) {
             cell= 3 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[4] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[32 + valid[0]]) {
             cell= 32 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[32 + valid[1]]) {
             cell= 32 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[32 + valid[2]]) {
             cell= 32 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[4] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[4 + 8 * valid[0]]) {
             cell= 4 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[4 + 8 * valid[1]]) {
             cell= 4 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[4 + 8 * valid[2]]) {
             cell= 4 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[5] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[40 + valid[0]]) {
             cell= 40 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[40 + valid[1]]) {
             cell= 40 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[40 + valid[2]]) {
             cell= 40 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[5] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[5 + 8 * valid[0]]) {
             cell= 5 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[5 + 8 * valid[1]]) {
             cell= 5 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[5 + 8 * valid[2]]) {
             cell= 5 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[6] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[48 + valid[0]]) {
             cell= 48 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[48 + valid[1]]) {
             cell= 48 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[48 + valid[2]]) {
             cell= 48 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[6] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[6 + 8 * valid[0]]) {
             cell= 6 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[6 + 8 * valid[1]]) {
             cell= 6 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[6 + 8 * valid[2]]) {
             cell= 6 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posH[7] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[56 + valid[0]]) {
             cell= 56 + valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[56 + valid[1]]) {
             cell= 56 + valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[56 + valid[2]]) {
             cell= 56 + valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posV[7] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[7 + 8 * valid[0]]) {
             cell= 7 + 8 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[7 + 8 * valid[1]]) {
             cell= 7 + 8 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[7 + 8 * valid[2]]) {
             cell= 7 + 8 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[2] ^ colMask];

     if (valid[0] < 3) {
         if (score= cellScore2[5 + 9 * valid[0]]) {
             cell= 5 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 3) {
         if (score= cellScore2[5 + 9 * valid[1]]) {
             cell= 5 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 3) {
         if (score= cellScore2[5 + 9 * valid[2]]) {
             cell= 5 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[2] ^ colMask];

     if (valid[0] < 3) {
         if (score= cellScore2[16 - 7 * valid[0]]) {
             cell= 16 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 3) {
         if (score= cellScore2[16 - 7 * valid[1]]) {
             cell= 16 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 3) {
         if (score= cellScore2[16 - 7 * valid[2]]) {
             cell= 16 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[3] ^ colMask];

     if (valid[0] < 4) {
         if (score= cellScore2[4 + 9 * valid[0]]) {
             cell= 4 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 4) {
         if (score= cellScore2[4 + 9 * valid[1]]) {
             cell= 4 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 4) {
         if (score= cellScore2[4 + 9 * valid[2]]) {
             cell= 4 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[3] ^ colMask];

     if (valid[0] < 4) {
         if (score= cellScore2[24 - 7 * valid[0]]) {
             cell= 24 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 4) {
         if (score= cellScore2[24 - 7 * valid[1]]) {
             cell= 24 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 4) {
         if (score= cellScore2[24 - 7 * valid[2]]) {
             cell= 24 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[4] ^ colMask];

     if (valid[0] < 5) {
         if (score= cellScore2[3 + 9 * valid[0]]) {
             cell= 3 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 5) {
         if (score= cellScore2[3 + 9 * valid[1]]) {
             cell= 3 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 5) {
         if (score= cellScore2[3 + 9 * valid[2]]) {
             cell= 3 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[4] ^ colMask];

     if (valid[0] < 5) {
         if (score= cellScore2[32 - 7 * valid[0]]) {
             cell= 32 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 5) {
         if (score= cellScore2[32 - 7 * valid[1]]) {
             cell= 32 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 5) {
         if (score= cellScore2[32 - 7 * valid[2]]) {
             cell= 32 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[5] ^ colMask];

     if (valid[0] < 6) {
         if (score= cellScore2[2 + 9 * valid[0]]) {
             cell= 2 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 6) {
         if (score= cellScore2[2 + 9 * valid[1]]) {
             cell= 2 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 6) {
         if (score= cellScore2[2 + 9 * valid[2]]) {
             cell= 2 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[5] ^ colMask];

     if (valid[0] < 6) {
         if (score= cellScore2[40 - 7 * valid[0]]) {
             cell= 40 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 6) {
         if (score= cellScore2[40 - 7 * valid[1]]) {
             cell= 40 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 6) {
         if (score= cellScore2[40 - 7 * valid[2]]) {
             cell= 40 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[6] ^ colMask];

     if (valid[0] < 7) {
         if (score= cellScore2[1 + 9 * valid[0]]) {
             cell= 1 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 7) {
         if (score= cellScore2[1 + 9 * valid[1]]) {
             cell= 1 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 7) {
         if (score= cellScore2[1 + 9 * valid[2]]) {
             cell= 1 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[6] ^ colMask];

     if (valid[0] < 7) {
         if (score= cellScore2[48 - 7 * valid[0]]) {
             cell= 48 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 7) {
         if (score= cellScore2[48 - 7 * valid[1]]) {
             cell= 48 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 7) {
         if (score= cellScore2[48 - 7 * valid[2]]) {
             cell= 48 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[7] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[9 * valid[0]]) {
             cell= 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[9 * valid[1]]) {
             cell= 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[9 * valid[2]]) {
             cell= 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[7] ^ colMask];

     if (valid[0] < 8) {
         if (score= cellScore2[56 - 7 * valid[0]]) {
             cell= 56 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 8) {
         if (score= cellScore2[56 - 7 * valid[1]]) {
             cell= 56 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 8) {
         if (score= cellScore2[56 - 7 * valid[2]]) {
             cell= 56 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[8] ^ colMask];

     if (valid[0] < 7) {
         if (score= cellScore2[8 + 9 * valid[0]]) {
             cell= 8 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 7) {
         if (score= cellScore2[8 + 9 * valid[1]]) {
             cell= 8 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 7) {
         if (score= cellScore2[8 + 9 * valid[2]]) {
             cell= 8 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[8] ^ colMask];

     if (valid[0] < 7) {
         if (score= cellScore2[57 - 7 * valid[0]]) {
             cell= 57 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 7) {
         if (score= cellScore2[57 - 7 * valid[1]]) {
             cell= 57 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 7) {
         if (score= cellScore2[57 - 7 * valid[2]]) {
             cell= 57 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[9] ^ colMask];

     if (valid[0] < 6) {
         if (score= cellScore2[16 + 9 * valid[0]]) {
             cell= 16 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 6) {
         if (score= cellScore2[16 + 9 * valid[1]]) {
             cell= 16 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 6) {
         if (score= cellScore2[16 + 9 * valid[2]]) {
             cell= 16 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[9] ^ colMask];

     if (valid[0] < 6) {
         if (score= cellScore2[58 - 7 * valid[0]]) {
             cell= 58 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 6) {
         if (score= cellScore2[58 - 7 * valid[1]]) {
             cell= 58 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 6) {
         if (score= cellScore2[58 - 7 * valid[2]]) {
             cell= 58 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[10] ^ colMask];

     if (valid[0] < 5) {
         if (score= cellScore2[24 + 9 * valid[0]]) {
             cell= 24 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 5) {
         if (score= cellScore2[24 + 9 * valid[1]]) {
             cell= 24 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 5) {
         if (score= cellScore2[24 + 9 * valid[2]]) {
             cell= 24 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[10] ^ colMask];

     if (valid[0] < 5) {
         if (score= cellScore2[59 - 7 * valid[0]]) {
             cell= 59 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 5) {
         if (score= cellScore2[59 - 7 * valid[1]]) {
             cell= 59 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 5) {
         if (score= cellScore2[59 - 7 * valid[2]]) {
             cell= 59 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[11] ^ colMask];

     if (valid[0] < 4) {
         if (score= cellScore2[32 + 9 * valid[0]]) {
             cell= 32 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 4) {
         if (score= cellScore2[32 + 9 * valid[1]]) {
             cell= 32 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 4) {
         if (score= cellScore2[32 + 9 * valid[2]]) {
             cell= 32 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[11] ^ colMask];

     if (valid[0] < 4) {
         if (score= cellScore2[60 - 7 * valid[0]]) {
             cell= 60 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 4) {
         if (score= cellScore2[60 - 7 * valid[1]]) {
             cell= 60 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 4) {
         if (score= cellScore2[60 - 7 * valid[2]]) {
             cell= 60 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag1[12] ^ colMask];

     if (valid[0] < 3) {
         if (score= cellScore2[40 + 9 * valid[0]]) {
             cell= 40 + 9 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 3) {
         if (score= cellScore2[40 + 9 * valid[1]]) {
             cell= 40 + 9 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 3) {
         if (score= cellScore2[40 + 9 * valid[2]]) {
             cell= 40 + 9 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     valid= posList[posDiag2[12] ^ colMask];

     if (valid[0] < 3) {
         if (score= cellScore2[61 - 7 * valid[0]]) {
             cell= 61 - 7 * valid[0];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[1] < 3) {
         if (score= cellScore2[61 - 7 * valid[1]]) {
             cell= 61 - 7 * valid[1];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     if (valid[2] < 3) {
         if (score= cellScore2[61 - 7 * valid[2]]) {
             cell= 61 - 7 * valid[2];
             cellScore2[cell]= 0;
             while (score--) result.push(cell);
         }

     }}}

     if (result.length) return result;
     return [ 64 ];
 };
};
function makeSetAt() {
 return [

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 0;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= col;

     if (qi= pos[12]) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     if (qi >= 2) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 3) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 4) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 5) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 6) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     if (qi >= 2) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 3) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 4) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 5) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 6) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[0] ^ colMask];
     posDiag2[0] |= col;

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 1;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 2) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 3) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 4) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 5) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     if (qi >= 6) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 3) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 4) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 5) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 6) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[1] ^ colMask];
     posDiag2[1] |= (col << 2);

     if (qi= pos[13]) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 2;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 4);

     if (qi= pos[15]) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     if (qi >= 2) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 2) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 3) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 4) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     if (qi >= 5) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 4) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[5] ^ colMask];
     posDiag1[5] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[2] ^ colMask];
     posDiag2[2] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 3;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 6);

     if (qi= pos[17]) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 2) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     if (qi >= 3) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 2) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 3) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     if (qi >= 4) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[4] ^ colMask];
     posDiag1[4] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[3] ^ colMask];
     posDiag2[3] |= (col << 6);

     if (qi= pos[17]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 3) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 4;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 8);

     if (qi= pos[19]) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 2) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 3) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     if (qi >= 4) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 2) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     if (qi >= 3) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[3] ^ colMask];
     posDiag1[3] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 3) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[4] ^ colMask];
     posDiag2[4] |= (col << 8);

     if (qi= pos[19]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 4) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 5;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 10);

     if (qi= pos[21]) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 2) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 3) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 4) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     if (qi >= 5) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     if (qi >= 2) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[2] ^ colMask];
     posDiag1[2] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[5] ^ colMask];
     posDiag2[5] |= (col << 10);

     if (qi= pos[21]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 4) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 5) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 6;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 12);

     if (qi= pos[23]) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 2) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 3) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 4) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 5) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     if (qi >= 6) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 3) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[1] ^ colMask];
     posDiag1[1] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= (col << 12);

     if (qi= pos[23]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 6) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 7;
     diff += colDiff;

     pos= posList[posH[0] ^ colMask];
     posH[0] |= (col << 14);

     if (qi= pos[25]) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     if (qi >= 2) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     if (qi >= 3) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     if (qi >= 4) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     if (qi >= 5) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     if (qi >= 6) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     if (qi >= 2) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 3) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[0] ^ colMask];
     posDiag1[0] |= col;

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 14);

     if (qi= pos[25]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 5) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 6) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 8;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 3) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 4) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 5) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 6) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 2) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 3) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 4) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 5) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     if (qi >= 6) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= col;

     if (qi= pos[12]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[1] ^ colMask];
     posDiag2[1] |= col;

     if (qi= pos[12]) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 9;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 2);

     if (qi= pos[13]) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 3) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 4) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 5) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 6) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 3) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 4) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[2] ^ colMask];
     posDiag2[2] |= (col << 2);

     if (qi= pos[13]) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 10;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 3) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 4) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 5) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[3] ^ colMask];
     posDiag2[3] |= (col << 4);

     if (qi= pos[15]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 11;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 6);

     if (qi= pos[17]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 3) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 4) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[5] ^ colMask];
     posDiag1[5] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[4] ^ colMask];
     posDiag2[4] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 3) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 12;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 8);

     if (qi= pos[19]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 3) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 4) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 3) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[4] ^ colMask];
     posDiag1[4] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[5] ^ colMask];
     posDiag2[5] |= (col << 8);

     if (qi= pos[19]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 4) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 13;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 10);

     if (qi= pos[21]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 3) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 4) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 5) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[3] ^ colMask];
     posDiag1[3] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= (col << 10);

     if (qi= pos[21]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 14;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 12);

     if (qi= pos[23]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 3) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 4) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 5) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 6) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[2] ^ colMask];
     posDiag1[2] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 12);

     if (qi= pos[23]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 15;
     diff += colDiff;

     pos= posList[posH[1] ^ colMask];
     posH[1] |= (col << 14);

     if (qi= pos[25]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 4) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 5) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 6) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[1] ^ colMask];
     posDiag1[1] |= (col << 2);

     if (qi= pos[13]) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= (col << 12);

     if (qi= pos[23]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 5) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 6) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 16;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= col;

     if (qi= pos[12]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 4) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 6) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     if (qi >= 2) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 2) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 3) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 4) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[9] ^ colMask];
     posDiag1[9] |= col;

     if (qi= pos[12]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[2] ^ colMask];
     posDiag2[2] |= col;

     if (qi= pos[12]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 17;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 2);

     if (qi= pos[13]) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 5) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 6) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 3) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= (col << 2);

     if (qi= pos[13]) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[3] ^ colMask];
     posDiag2[3] |= (col << 2);

     if (qi= pos[13]) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 18;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 4);

     if (qi= pos[15]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 4) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 5) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 2) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[4] ^ colMask];
     posDiag2[4] |= (col << 4);

     if (qi= pos[15]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 19;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 3) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 4) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 2) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[5] ^ colMask];
     posDiag2[5] |= (col << 6);

     if (qi= pos[17]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 3) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 20;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 8);

     if (qi= pos[19]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 4) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 3) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[5] ^ colMask];
     posDiag1[5] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 2) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 21;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 10);

     if (qi= pos[21]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 4) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 5) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[4] ^ colMask];
     posDiag1[4] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 2) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 10);

     if (qi= pos[21]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 22;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 12);

     if (qi= pos[23]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 4) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 5) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 6) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[3] ^ colMask];
     posDiag1[3] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 2) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= (col << 10);

     if (qi= pos[21]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 23;
     diff += colDiff;

     pos= posList[posH[2] ^ colMask];
     posH[2] |= (col << 14);

     if (qi= pos[25]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 5) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 6) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     if (qi >= 2) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[2] ^ colMask];
     posDiag1[2] |= (col << 4);

     if (qi= pos[15]) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 2) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[9] ^ colMask];
     posDiag2[9] |= (col << 10);

     if (qi= pos[21]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 4) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 5) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 24;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= col;

     if (qi= pos[12]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 5) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 6) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 2) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     if (qi >= 3) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 2) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 3) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[10] ^ colMask];
     posDiag1[10] |= col;

     if (qi= pos[12]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[3] ^ colMask];
     posDiag2[3] |= col;

     if (qi= pos[12]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 3) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 25;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 2);

     if (qi= pos[13]) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 5) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 6) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 3) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[9] ^ colMask];
     posDiag1[9] |= (col << 2);

     if (qi= pos[13]) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[4] ^ colMask];
     posDiag2[4] |= (col << 2);

     if (qi= pos[13]) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 3) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 26;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 4);

     if (qi= pos[15]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 4) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 5) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 3) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= (col << 4);

     if (qi= pos[15]) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 2) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[5] ^ colMask];
     posDiag2[5] |= (col << 4);

     if (qi= pos[15]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 3) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 27;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 6);

     if (qi= pos[17]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 3) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 4) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 3) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 2) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 3) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= (col << 6);

     if (qi= pos[17]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 3) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 28;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 4) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 3) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 2) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 3) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 8);

     if (qi= pos[19]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 3) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 29;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 10);

     if (qi= pos[21]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 4) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 5) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 3) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[5] ^ colMask];
     posDiag1[5] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 2) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 3) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= (col << 8);

     if (qi= pos[19]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 30;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 12);

     if (qi= pos[23]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 5) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 6) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 3) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[4] ^ colMask];
     posDiag1[4] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 3) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[9] ^ colMask];
     posDiag2[9] |= (col << 8);

     if (qi= pos[19]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 31;
     diff += colDiff;

     pos= posList[posH[3] ^ colMask];
     posH[3] |= (col << 14);

     if (qi= pos[25]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 5) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 6) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     if (qi >= 3) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[3] ^ colMask];
     posDiag1[3] |= (col << 6);

     if (qi= pos[17]) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 2) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 3) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[10] ^ colMask];
     posDiag2[10] |= (col << 8);

     if (qi= pos[19]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 4) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 32;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= col;

     if (qi= pos[12]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 5) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 6) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 2) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 3) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     if (qi >= 4) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 2) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[11] ^ colMask];
     posDiag1[11] |= col;

     if (qi= pos[12]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[4] ^ colMask];
     posDiag2[4] |= col;

     if (qi= pos[12]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 4) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 33;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 2);

     if (qi= pos[13]) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 5) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 6) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 3) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 4) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[10] ^ colMask];
     posDiag1[10] |= (col << 2);

     if (qi= pos[13]) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[5] ^ colMask];
     posDiag2[5] |= (col << 2);

     if (qi= pos[13]) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 4) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 34;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 4);

     if (qi= pos[15]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 5) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 4) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[9] ^ colMask];
     posDiag1[9] |= (col << 4);

     if (qi= pos[15]) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 2) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= (col << 4);

     if (qi= pos[15]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 4) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 35;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 6);

     if (qi= pos[17]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 3) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 4) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= (col << 6);

     if (qi= pos[17]) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 2) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 3) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 4) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 36;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 8);

     if (qi= pos[19]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 4) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 4) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 2) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 3) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 4) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 37;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 4) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 5) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 4) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 3) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 4) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[9] ^ colMask];
     posDiag2[9] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 38;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 12);

     if (qi= pos[23]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 5) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 6) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 4) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[5] ^ colMask];
     posDiag1[5] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 3) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 4) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[10] ^ colMask];
     posDiag2[10] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 39;
     diff += colDiff;

     pos= posList[posH[4] ^ colMask];
     posH[4] |= (col << 14);

     if (qi= pos[25]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 5) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 6) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     if (qi >= 4) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[4] ^ colMask];
     posDiag1[4] |= (col << 8);

     if (qi= pos[19]) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 2) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 3) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 4) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[11] ^ colMask];
     posDiag2[11] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 3) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 40;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= col;

     if (qi= pos[12]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 6) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 2) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 3) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 4) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     if (qi >= 5) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[12] ^ colMask];
     posDiag1[12] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[5] ^ colMask];
     posDiag2[5] |= col;

     if (qi= pos[12]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 4) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 5) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 41;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 2);

     if (qi= pos[13]) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 6) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 3) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 4) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 5) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[11] ^ colMask];
     posDiag1[11] |= (col << 2);

     if (qi= pos[13]) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= (col << 2);

     if (qi= pos[13]) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 4) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 5) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 42;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 4);

     if (qi= pos[15]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 4) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 5) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[10] ^ colMask];
     posDiag1[10] |= (col << 4);

     if (qi= pos[15]) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 2) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 4) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 5) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 43;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 3) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 4) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 5) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[9] ^ colMask];
     posDiag1[9] |= (col << 6);

     if (qi= pos[17]) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 2) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 3) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 4) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 44;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 8);

     if (qi= pos[19]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 4) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 4) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 5) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= (col << 8);

     if (qi= pos[19]) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 3) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 4) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[9] ^ colMask];
     posDiag2[9] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 45;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 10);

     if (qi= pos[21]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 5) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 4) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 5) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 3) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 4) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 5) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[10] ^ colMask];
     posDiag2[10] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 46;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 6) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 4) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 5) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 4) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 5) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[11] ^ colMask];
     posDiag2[11] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 47;
     diff += colDiff;

     pos= posList[posH[5] ^ colMask];
     posH[5] |= (col << 14);

     if (qi= pos[25]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 4) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 5) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 6) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 4) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     if (qi >= 5) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[5] ^ colMask];
     posDiag1[5] |= (col << 10);

     if (qi= pos[21]) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 2) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 3) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 4) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 5) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[12] ^ colMask];
     posDiag2[12] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 48;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 6) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 2) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 3) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 4) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 5) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     if (qi >= 6) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[13] ^ colMask];
     posDiag1[13] |= col;

     if (qi= pos[12]) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[6] ^ colMask];
     posDiag2[6] |= col;

     if (qi= pos[12]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 5) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 6) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 49;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 2);

     if (qi= pos[13]) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 6) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 3) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 4) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 5) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 6) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[12] ^ colMask];
     posDiag1[12] |= (col << 2);

     if (qi= pos[13]) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 5) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 6) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 50;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 4) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 5) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 6) {

         posH[0] ^= 48;
         posV[2] ^= 3;
         posDiag1[5] ^= 3;
         posDiag2[2] ^= 48;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[11] ^ colMask];
     posDiag1[11] |= (col << 4);

     if (qi= pos[15]) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 2) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 5) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 51;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 6);

     if (qi= pos[17]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 5) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     if (qi >= 6) {

         posH[0] ^= 192;
         posV[3] ^= 3;
         posDiag1[4] ^= 3;
         posDiag2[3] ^= 192;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[10] ^ colMask];
     posDiag1[10] |= (col << 6);

     if (qi= pos[17]) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 3) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[9] ^ colMask];
     posDiag2[9] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 52;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 8);

     if (qi= pos[19]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 5) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     if (qi >= 6) {

         posH[0] ^= 768;
         posV[4] ^= 3;
         posDiag1[3] ^= 3;
         posDiag2[4] ^= 768;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[9] ^ colMask];
     posDiag1[9] |= (col << 8);

     if (qi= pos[19]) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 3) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 4) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[10] ^ colMask];
     posDiag2[10] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 53;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 10);

     if (qi= pos[21]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 5) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     if (qi >= 6) {

         posH[0] ^= 3072;
         posV[5] ^= 3;
         posDiag1[2] ^= 3;
         posDiag2[5] ^= 3072;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= (col << 10);

     if (qi= pos[21]) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 4) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 5) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[11] ^ colMask];
     posDiag2[11] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 54;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 12);

     if (qi= pos[23]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 6) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 5) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     if (qi >= 6) {

         posH[0] ^= 12288;
         posV[6] ^= 3;
         posDiag1[1] ^= 3;
         posDiag2[6] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 4) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 5) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     if (qi >= 6) {

         posH[0] ^= 3;
         posV[0] ^= 3;
         posDiag1[7] ^= 3;
         posDiag2[0] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[12] ^ colMask];
     posDiag2[12] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 55;
     diff += colDiff;

     pos= posList[posH[6] ^ colMask];
     posH[6] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 3) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 4) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 5) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 6) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 5) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     if (qi >= 6) {

         posH[0] ^= 49152;
         posV[7] ^= 3;
         posDiag1[0] ^= 3;
         posDiag2[7] ^= 49152;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag1[6] ^ colMask];
     posDiag1[6] |= (col << 12);

     if (qi= pos[23]) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 2) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 3) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 4) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 5) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     if (qi >= 6) {

         posH[0] ^= 12;
         posV[1] ^= 3;
         posDiag1[6] ^= 3;
         posDiag2[1] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[13] ^ colMask];
     posDiag2[13] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 56;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= col;

     if (qi= pos[12]) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 6) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[0] ^ colMask];
     posV[0] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

     if (qi >= 2) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     if (qi >= 3) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     if (qi >= 4) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     if (qi >= 5) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     if (qi >= 6) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[14] ^ colMask];
     posDiag1[14] |= col;

     pos= posList[posDiag2[7] ^ colMask];
     posDiag2[7] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 6) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 57;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 2);

     if (qi= pos[13]) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

         diff += colDiff + colDiff;

}

     if (qi= pos[14]) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     if (qi >= 6) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[1] ^ colMask];
     posV[1] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 3) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 4) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 5) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 6) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[13] ^ colMask];
     posDiag1[13] |= (col << 2);

     if (qi= pos[13]) {

         posH[6] ^= 3;
         posV[0] ^= 12288;
         posDiag1[13] ^= 3;
         posDiag2[6] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posDiag2[8] ^ colMask];
     posDiag2[8] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 6) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 58;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 4);

     if (qi= pos[15]) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[16]) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[2] ^ colMask];
     posV[2] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 4) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 5) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 6) {

         posH[1] ^= 48;
         posV[2] ^= 12;
         posDiag1[6] ^= 12;
         posDiag2[3] ^= 48;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[12] ^ colMask];
     posDiag1[12] |= (col << 4);

     if (qi= pos[15]) {

         posH[6] ^= 12;
         posV[1] ^= 12288;
         posDiag1[12] ^= 12;
         posDiag2[7] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 3;
         posV[0] ^= 3072;
         posDiag1[12] ^= 3;
         posDiag2[5] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[9] ^ colMask];
     posDiag2[9] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 59;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 6);

     if (qi= pos[17]) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[18]) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[3] ^ colMask];
     posV[3] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 5) {

         posH[2] ^= 192;
         posV[3] ^= 48;
         posDiag1[6] ^= 48;
         posDiag2[5] ^= 192;

     if (qi >= 6) {

         posH[1] ^= 192;
         posV[3] ^= 12;
         posDiag1[5] ^= 12;
         posDiag2[4] ^= 192;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[11] ^ colMask];
     posDiag1[11] |= (col << 6);

     if (qi= pos[17]) {

         posH[6] ^= 48;
         posV[2] ^= 12288;
         posDiag1[11] ^= 48;
         posDiag2[8] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 12;
         posV[1] ^= 3072;
         posDiag1[11] ^= 12;
         posDiag2[6] ^= 12;

     if (qi >= 3) {

         posH[4] ^= 3;
         posV[0] ^= 768;
         posDiag1[11] ^= 3;
         posDiag2[4] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[10] ^ colMask];
     posDiag2[10] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 60;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 8);

     if (qi= pos[19]) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[20]) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[4] ^ colMask];
     posV[4] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 768;
         posV[4] ^= 192;
         posDiag1[6] ^= 192;
         posDiag2[7] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 768;
         posV[4] ^= 48;
         posDiag1[5] ^= 48;
         posDiag2[6] ^= 768;

     if (qi >= 6) {

         posH[1] ^= 768;
         posV[4] ^= 12;
         posDiag1[4] ^= 12;
         posDiag2[5] ^= 768;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[10] ^ colMask];
     posDiag1[10] |= (col << 8);

     if (qi= pos[19]) {

         posH[6] ^= 192;
         posV[3] ^= 12288;
         posDiag1[10] ^= 192;
         posDiag2[9] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 48;
         posV[2] ^= 3072;
         posDiag1[10] ^= 48;
         posDiag2[7] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 12;
         posV[1] ^= 768;
         posDiag1[10] ^= 12;
         posDiag2[5] ^= 12;

     if (qi >= 4) {

         posH[3] ^= 3;
         posV[0] ^= 192;
         posDiag1[10] ^= 3;
         posDiag2[3] ^= 3;

     }}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[11] ^ colMask];
     posDiag2[11] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     }}

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 61;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 10);

     if (qi= pos[21]) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[22]) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

     }

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[5] ^ colMask];
     posV[5] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 3072;
         posV[5] ^= 768;
         posDiag1[6] ^= 768;
         posDiag2[9] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 3072;
         posV[5] ^= 192;
         posDiag1[5] ^= 192;
         posDiag2[8] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 3072;
         posV[5] ^= 48;
         posDiag1[4] ^= 48;
         posDiag2[7] ^= 3072;

     if (qi >= 6) {

         posH[1] ^= 3072;
         posV[5] ^= 12;
         posDiag1[3] ^= 12;
         posDiag2[6] ^= 3072;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[9] ^ colMask];
     posDiag1[9] |= (col << 10);

     if (qi= pos[21]) {

         posH[6] ^= 768;
         posV[4] ^= 12288;
         posDiag1[9] ^= 768;
         posDiag2[10] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 192;
         posV[3] ^= 3072;
         posDiag1[9] ^= 192;
         posDiag2[8] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 48;
         posV[2] ^= 768;
         posDiag1[9] ^= 48;
         posDiag2[6] ^= 48;

     if (qi >= 4) {

         posH[3] ^= 12;
         posV[1] ^= 192;
         posDiag1[9] ^= 12;
         posDiag2[4] ^= 12;

     if (qi >= 5) {

         posH[2] ^= 3;
         posV[0] ^= 48;
         posDiag1[9] ^= 3;
         posDiag2[2] ^= 3;

     }}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[12] ^ colMask];
     posDiag2[12] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     }

         diff += (colDiff + colDiff) * qi;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 62;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 12);

     if (qi= pos[23]) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     if (qi >= 6) {

         posH[7] ^= 3;
         posV[0] ^= 49152;
         posDiag1[14] ^= 3;
         posDiag2[7] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     if (qi= pos[24]) {

         posH[7] ^= 49152;
         posV[7] ^= 49152;
         posDiag1[7] ^= 49152;
         posDiag2[14] ^= 3;

         diff += colDiff + colDiff;

}

     pos= posList[posV[6] ^ colMask];
     posV[6] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 12288;
         posV[6] ^= 3072;
         posDiag1[6] ^= 3072;
         posDiag2[11] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 12288;
         posV[6] ^= 768;
         posDiag1[5] ^= 768;
         posDiag2[10] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 12288;
         posV[6] ^= 192;
         posDiag1[4] ^= 192;
         posDiag2[9] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 12288;
         posV[6] ^= 48;
         posDiag1[3] ^= 48;
         posDiag2[8] ^= 3072;

     if (qi >= 6) {

         posH[1] ^= 12288;
         posV[6] ^= 12;
         posDiag1[2] ^= 12;
         posDiag2[7] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[8] ^ colMask];
     posDiag1[8] |= (col << 12);

     if (qi= pos[23]) {

         posH[6] ^= 3072;
         posV[5] ^= 12288;
         posDiag1[8] ^= 3072;
         posDiag2[11] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 768;
         posV[4] ^= 3072;
         posDiag1[8] ^= 768;
         posDiag2[9] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 192;
         posV[3] ^= 768;
         posDiag1[8] ^= 192;
         posDiag2[7] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 48;
         posV[2] ^= 192;
         posDiag1[8] ^= 48;
         posDiag2[5] ^= 48;

     if (qi >= 5) {

         posH[2] ^= 12;
         posV[1] ^= 48;
         posDiag1[8] ^= 12;
         posDiag2[3] ^= 12;

     if (qi >= 6) {

         posH[1] ^= 3;
         posV[0] ^= 12;
         posDiag1[8] ^= 3;
         posDiag2[1] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[13] ^ colMask];
     posDiag2[13] |= col;

     if (qi= pos[12]) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

         diff += colDiff + colDiff;

}

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },

 function( boardLog, posList, posH, posV, posDiag1, posDiag2 ) {
     var pos, qi;
     boardLog[boardLog.length]= 63;
     diff += colDiff;

     pos= posList[posH[7] ^ colMask];
     posH[7] |= (col << 14);

     if (qi= pos[25]) {

         posH[7] ^= 12288;
         posV[6] ^= 49152;
         posDiag1[8] ^= 12288;
         posDiag2[13] ^= 3;

     if (qi >= 2) {

         posH[7] ^= 3072;
         posV[5] ^= 49152;
         posDiag1[9] ^= 3072;
         posDiag2[12] ^= 3;

     if (qi >= 3) {

         posH[7] ^= 768;
         posV[4] ^= 49152;
         posDiag1[10] ^= 768;
         posDiag2[11] ^= 3;

     if (qi >= 4) {

         posH[7] ^= 192;
         posV[3] ^= 49152;
         posDiag1[11] ^= 192;
         posDiag2[10] ^= 3;

     if (qi >= 5) {

         posH[7] ^= 48;
         posV[2] ^= 49152;
         posDiag1[12] ^= 48;
         posDiag2[9] ^= 3;

     if (qi >= 6) {

         posH[7] ^= 12;
         posV[1] ^= 49152;
         posDiag1[13] ^= 12;
         posDiag2[8] ^= 3;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posV[7] ^ colMask];
     posV[7] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 49152;
         posV[7] ^= 12288;
         posDiag1[6] ^= 12288;
         posDiag2[13] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 49152;
         posV[7] ^= 3072;
         posDiag1[5] ^= 3072;
         posDiag2[12] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 49152;
         posV[7] ^= 768;
         posDiag1[4] ^= 768;
         posDiag2[11] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 49152;
         posV[7] ^= 192;
         posDiag1[3] ^= 192;
         posDiag2[10] ^= 768;

     if (qi >= 5) {

         posH[2] ^= 49152;
         posV[7] ^= 48;
         posDiag1[2] ^= 48;
         posDiag2[9] ^= 3072;

     if (qi >= 6) {

         posH[1] ^= 49152;
         posV[7] ^= 12;
         posDiag1[1] ^= 12;
         posDiag2[8] ^= 12288;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag1[7] ^ colMask];
     posDiag1[7] |= (col << 14);

     if (qi= pos[25]) {

         posH[6] ^= 12288;
         posV[6] ^= 12288;
         posDiag1[7] ^= 12288;
         posDiag2[12] ^= 12;

     if (qi >= 2) {

         posH[5] ^= 3072;
         posV[5] ^= 3072;
         posDiag1[7] ^= 3072;
         posDiag2[10] ^= 48;

     if (qi >= 3) {

         posH[4] ^= 768;
         posV[4] ^= 768;
         posDiag1[7] ^= 768;
         posDiag2[8] ^= 192;

     if (qi >= 4) {

         posH[3] ^= 192;
         posV[3] ^= 192;
         posDiag1[7] ^= 192;
         posDiag2[6] ^= 192;

     if (qi >= 5) {

         posH[2] ^= 48;
         posV[2] ^= 48;
         posDiag1[7] ^= 48;
         posDiag2[4] ^= 48;

     if (qi >= 6) {

         posH[1] ^= 12;
         posV[1] ^= 12;
         posDiag1[7] ^= 12;
         posDiag2[2] ^= 12;

     }}}}}

         diff += (colDiff + colDiff) * qi;

}

     pos= posList[posDiag2[14] ^ colMask];
     posDiag2[14] |= col;

     col= 3 - col;
     colMask= 65535 - colMask;
     colDiff= -colDiff;
 },
 ];
}

