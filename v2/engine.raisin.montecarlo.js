


Compute= (function() {

    var moves;

    var oppMoves;
    var oppScores;

    var games;
    var gamesPerMove;

    var scores;

    // Debug stuff
    var r= function(v) { var s= '        ' + (Math.round(v * 10) / 10); return s.substr(s.length - 8); };
    var prefix= function(alg, move) { return alg + " " + Core.colName(Core.col()) + " " + ('' + (move + 100)).substr(1) + ":  "; };

    var calcMoveScoreOppMax= function () {
        scores= [];

        for (var movei in moves) {
            var move= moves[movei];

            var n= oppMoves[movei].length;
            var opps= oppScores[movei];

            var max= -999999;
            for (var oppMovei= n; oppMovei--; ) {
                if (opps[oppMovei] > max) max= opps[oppMovei];
            }

            scores[move]= -max;

            if (1) {
                UI.log(prefix('OppMax', move) + "max=" + r(max) + " score=" + r(scores[move]));
            }
        }
    };

    var calcMoveScoreTest1= function () {
        scores= [];

        for (var movei in moves) {
            var move= moves[movei];

            var n= oppMoves[movei].length;
            var opps= oppScores[movei];

            var d= 0;
            for (var oppMovei= n; oppMovei--; ) {
                d += opps[oppMovei];
            }
            d /= n;

            var dd = 0;
            for (var oppMovei= n; oppMovei--; ) {
                var score= opps[oppMovei];
                dd -= score < d ? score : d + Math.pow(score - d, 2);
            }
            scores[move]= dd / n;

            if (1) {
                UI.log(prefix('Test1', move) + " score=" + r(scores[move]));
            }
        }
    };

    var calcMoveScoreCK= function () {
        scores= [];

        // A3: -17 ...
        // A5: <f>(A3-25)^$A$1</f>
        // K5: <f>(SUM($A5:$G5)^(1/$A$1)*($A3)/COUNT($A3:$G3))</f>

        for (var movei in moves) {
            var move= moves[movei];

            var n= oppMoves[movei].length;
            var opps= oppScores[movei];
            var max= -99999999;
            var sum= 0;

            for (oppMovei= n; oppMovei--; ) {
                var score= opps[oppMovei];
                if (score > max) max= score;

                sum += Math.pow(score - gamesPerMove, 8);
            }

            scores[move]= -Math.floor(Math.pow(sum, 1/8) * max / oppMoves[movei].length);

            UI.log(prefix('CK', move) + ' score=' + scores[move]);
        }
    };

    var calcMoveScore= function () {
        // capCol == 1 ? calcMoveScoreMin() : calcMoveScoreCK();     // Min 10s
        // capCol == 1 ? calcMoveScoreCK() : calcMoveScoreMin();     // Min 10s 17:27
        // capCol == 1 ? calcMoveScoreCK() : calcMoveScoreOppMax();     // Min 10s 17:27
        // calcMoveScoreOppMax();
        // calcMoveScoreOppMax();
        // calcMoveScoreCK();
        calcMoveScoreTest1();
    };

    var avgScore= function(opps, oppm) {

        // UI.log(opps); UI.log(oppm);

        var min= 999999999;
        var max= -999999999;
        var d= 0;
        var n= oppm ? oppm.length : opps.length;
        for ( var i= n; i--; ) {
            var score= oppm ? opps[oppm[i]] : opps[i];
            if (score > max) max= score;
            if (score < min) min= score;
            d += score;
        }

        // returns contains the average score - 30% * (max - min).
        // Now all moves with scores > d can be removed.

        return d / n - (max - min) * 0.3;
    };

    /**
     *  Eliminate useless moves from the queue.
     */
    var reduceMoves= function() {

        var before= moves.length;
        var oppBefore= 0;
        var oppAfter= 0;

        // Reduce moves

        calcMoveScore();
        var d= avgScore(scores, moves);

        var newMoves= [];
        var newOppMoves= [];
        var newOppScores= [];
        for (var movei= moves.length; movei--; ) {
            if (scores[moves[movei]] < d) {
                UI.log("reduceMoves: eliminate " + moves[movei] + ", because " + scores[moves[movei]] + ' < ' + d);
                continue;
            }
            oppBefore += oppMoves[movei].length;
            newMoves[newMoves.length]= moves[movei];
            newOppMoves[newOppMoves.length]= oppMoves[movei];
            newOppScores[newOppScores.length]= oppScores[movei];
        }
        moves= newMoves;
        oppMoves= newOppMoves;
        oppScores= newOppScores;

        // Reduce oppMoves

        for (var movei in moves) {
            var move= moves[movei];

            var oppm= oppMoves[movei];
            var opps= oppScores[movei];

            var d= avgScore(opps);

            var newOppMove=  [];
            var newOppScore= [];

            for (var oppMovei= oppm.length; oppMovei--; ) {
                if (opps[oppMovei] < d) continue;
                newOppMove[newOppMove.length]=   oppm[oppMovei];
                newOppScore[newOppScore.length]= opps[oppMovei];
            }

            oppAfter += newOppMove.length;

            oppMoves[movei]=  newOppMove;
            oppScores[movei]= newOppScore;
        }

        UI.log("reduceMoves: before=" + before + " after=" + moves.length + " oppBefore=" + oppBefore + " oppAfter=" + oppAfter);
    };

    var run= function (startTime, endTime, initialMoves, doneFn) {

        // Start removing stupid moves from the list of considered moves after 1/3 of the time
        var cleanupTime= startTime + (endTime - startTime) * 333;

        var gameState= new Core.GameState();
        var col= Core.col();

        gameState.capture();

        moves= initialMoves;

        games= 0;
        gamesPerMove= 0;
        
        scores= [];
        oppMoves= [];
        oppScores= [];

        for (var movei in moves) {
            var move= moves[movei];

            Core.makeMove(move);
            oppMoves[movei]= Core.getUniqueValidMoves();
            oppScores[movei]= Core.zeroes(oppMoves[movei].length);
            gameState.restore();
        }

        var dots= '';

        var time;
        var nextMoves;
        var nextMove;
        var move, movei;
        var oppMove, oppMovei;

        var inner= function() {

            time= new Date().getTime();

            if (cleanupTime && time > cleanupTime) {
                reduceMoves();
                cleanupTime= Math.max(time + 500, (time + endTime) / 2);
            }

            if (moves.length > 1 && time < endTime) {

                UI.status("Thinking" + dots, 0, 1);
                dots= dots.length > 30 ? '' : dots + '.';

                var nextTime= time + 100;
                while(true) {

                    time= new Date().getTime();
                    if (time > endTime || time > nextTime) break;

                    gamesPerMove++;

                    for (movei in moves) {
                        move= moves[movei];

                        for (oppMovei in oppMoves[movei]) {
                            oppMove= oppMoves[movei][oppMovei];

                            gameState.restore();
                            Core.makeMove(move);

// UI.log(oppMoves[move]);

                            Core.makeMove(oppMove);

                            while (1) {
                                nextMoves= Core.getValidMoves();
                                if ( nextMoves[0] == 64 ) {
                                    Core.pass();
                                    nextMoves= Core.getValidMoves();
                                    if ( nextMoves[0] == 64 ) break;
                                }
                                nextMove= nextMoves[Math.floor(Math.random() * nextMoves.length)];
                                Core.makeMove(nextMove);
                            }

                            var diff= Core.diff();
                            if (col == 2) {
                                if (diff > 0) oppScores[movei][oppMovei]++;
                                if (diff < 0) oppScores[movei][oppMovei]--;
                            }
                            else {
                                if (diff < 0) oppScores[movei][oppMovei]++;
                                if (diff > 0) oppScores[movei][oppMovei]--;
                            }

                            games++;
                        }

                    }
                }
                setTimeout(inner, 1);
                return;
            }

            gameState.restore();

            calcMoveScore();

            moves.sort(function(a, b) { return scores[b] - scores[a]; });

            // UI.log(getValidMoves());

            var s= '';
            for (var movei in moves) {
                s += ' ' + moves[movei] + ':' + (Math.floor(scores[moves[movei]] * 10) / 10);
            }
            UI.log("Scores:" + s);

            doneFn(moves[0], ' Calculated ' + games + ' games.');

            // UI.log(scores);
        }

        setTimeout(inner, 1);
    };


    return {
        run: run,
    };

})();   // END Compute
