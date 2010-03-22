
Reversi.addEngine({
    name: "raisin.random",
    author: "D.Raisin",
    title: "Random playing",
    desc: "Playing random",
    implementation: function() {



        function calcMove( timeLeft ) {
            var moves= this.getValidMoves();
            return moves[Math.floor(Math.random() * moves.length)];
        };



        return {
            // init: init,
            calcMove: calcMove,
        }
    }
});












    // ====================================================================
    //  UCT
    //  See Sylvain Gelly's Thesis about MoGo
    // ====================================================================













/*



    function computeMove(tip) {
        var moves= unique(getValidMoves());
        if (moves[0] == 64) {
            status('Pass. I can\'t make a move :-(', 3);
            if (!tip) pass();
            refreshBoard();
            return 0;
        }

        var secs= document.getElementById('time').value;
        if (secs < 1) secs= 1;


        var doMove= function(move) {
            if (!tip) {
                setAt[move]();
                refreshBoard();
                markCell(move, 'last-move');
            }
            else {
                updateUI();
                markCell(move, 'tip-move');
            }

            status('Done.'
                    + ' My move is ' + ((move & 7) + 1) + '-' + ((move >> 3) + 1) + '.'
                    + ' Calculated ' + games + ' games.'
                , 3);
        }


        var rootNode= {
            move: 65,       // NOP
            childNodes: [],
            // validMoves: unique(getValidMoves())
            value: 0,
            nb: 0
        };

        // var gameState= new Core.GameState();
        // gameState.capture();
        captureBoard();

        var INFINITY= 100000000000;

        function descendByUCB1(node) {
            var childNodes= node.childNodes;
            var i;

            var nb= 0;
            i= childNodes.length;
            while (i--) {
                nb= nb + childNodes[i].nb;
            }

            // Math.log ist ln
            var dividend= 2 * Math.log(nb); //  / Math.log(10);
            // var dividend= Math.log(nb) / 5;

            var maxv= -INFINITY;
            var maxi= 0;
            i= childNodes.length;
            while (i--) {
                var childNode= childNodes[i];

                if (childNode.nb == 0) {
                    return childNode;
                }

                // Valkyria:
                // winrate := next.Wins/next.Visits;
                // uct := UCTK*Sqrt(ln(n.Visits)/(5*next.Visits));
                // uctvalue := winrate + uct;

                //var v= Math.sqrt(dividend / childNode.nb) - childNode.value / childNode.nb;
                childNode.prob= childNode.value / childNode.nb;
                var v= Math.sqrt(dividend / childNode.nb) + childNode.prob;

                if (v > maxv) {
                    maxv= v;
                    maxi= i;
                }
            }
            return childNodes[maxi];
        }

        function playOneSequence() {

            restoreBoard();

            var nodes= [ rootNode ];
            var nodei = 0;
            while (nodes[nodei].childNodes.length) {
                nodes[nodei + 1]= descendByUCB1(nodes[nodei]);
                setAt[nodes[nodei + 1].move]();
                nodei++;
            }

            var nextMoves= getValidMoves();
            var node= nodes[nodei];

            var uniqueNextMoves= unique(nextMoves);
            for (var i in uniqueNextMoves) {
                node.childNodes[i]= {
                    move: uniqueNextMoves[i],
                    childNodes: [],
                    // validMoves: nextMoves0,
                    value: 0,
                    nb: 0
                };
            }

    var xx= 0;

            // Play random game
            while (true) {

    if (xx++ > 300) {
    break;
    }

                if (nextMoves[0] == 64) {
                    pass();
                    nextMoves= getValidMoves();
                    if (nextMoves[0] == 64) break;
                }
                nextMove= nextMoves[Math.floor(Math.random() * nextMoves.length)];
                setAt[nextMove]();
                nextMoves= getValidMoves();
            }

            // richtig!
            var value= (diff > 0 ? 1 : 0) ^ ((capCol + nodei) & 1);

            node.value= value;
            node.nb= 1;

            // Update values
            for ( ; --nodei >= 0; ) {
                value= 1 - value;
                nodes[nodei].value += value;
                nodes[nodei].nb++;
            }
        }

        UI.setTimeout(function() {
            for (var i= 0; i < 8000; i++) {
                playOneSequence();
            }

            var resultNode= rootNode.childNodes[0];
            for (var i= rootNode.childNodes.length; i-- > 1; ) {
                if (resultNode.prob < rootNode.childNodes[i].prob) {
                    resultNode= rootNode.childNodes[i];
                }
            }

            // var resultNode= descendByUCB1(rootNode);
            // playOneSequence();

            restoreBoard();
            doMove(resultNode.move);
        }, 1);

    }


*/
