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
