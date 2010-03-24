
Reversi.addEngine({
    name:       "raisin.random",
    author:     "D.Raisin",
    email:      "info1@raisin.de",
    version:    "2010030100",
    title:      "Random playing",
    description: "Playing random",
    implementation:  {

        run: function (startTime, endTime, initialMoves, doneFn) {
            doneFn(initialMoves[Math.floor(Math.random() * initialMoves.length)]);
        }
    }
});
