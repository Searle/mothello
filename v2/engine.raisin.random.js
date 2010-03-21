
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
