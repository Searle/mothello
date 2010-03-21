
// ====================================================================
//  Reversi Shootout
//  MoThello Version 2008-08-20. Inspired by MoGo.
//  (c) 2008 by Dietrich Raisin, info1@raisin.de, www.raisin.de
//
//  Released under the Artistic License 2.0. Here are the terms:
// ====================================================================

UI= (function() {

    // ====================================================================
    //  Output
    // ====================================================================

    // See: http://de.wikipedia.org/wiki/Benutzer:Buncic/Unicode/Geometrische_Formen
    var stoneFg= function(col) {
        return ' \u25CB\u25CF '.substr(col & 3, 1);
    }

    var stoneBg= function(col) {
        return ' \u25CF  '.substr(col & 3, 1);
    }

    var hStatusTimer= null;     // Used by status(). Timer for switching back the status information to default value

    var defaultStatus= function() {
        clearTimeout(hStatusTimer);
        hStatusTimer= null;
        var status= Core.finished() ? 'wins' : 'leads';
        var diff= Core.diff();
        if (diff > 0) {
            status= 'White ' + status + ' by ' + diff + ' points';
        }
        else if ( diff < 0 ) {
            status= 'Black ' + status + ' by ' + (-diff) + ' points';
        }
        else {
            status= Core.finished() ? 'it\'s a draw' : 'The game is even';
        }
        if ( Core.finished() ) {
            status= 'Game over, ' + status + '!';
        }
        else {
            status= Core.colName(Core.col()) + '\'s turn. ' + status + '.';
        }
        console.log(status);
        document.getElementById('status').innerHTML= status;
    }

    var status= function(html, secs, noConsole) {
        if (!noConsole) console.log('STATUS: ' + html);
        document.getElementById('status').innerHTML= html;
        if (hStatusTimer) {
            clearTimeout(hStatusTimer);
            hStatusTimer= null;
        }
        if (secs) {
            hStatusTimer= setTimeout(defaultStatus, secs * 1000);
        }
    }

    var printBoard= function() {

        var html= '<table cellspacing="0" cellpadding="0">';
        var i= 0;
        for (var y= 0; y < 8; y++) {
            html += '<tr>';
            for (var x= 0; x < 8; x++, i++) {
                html += '<td onclick="Reversi.clickCell(' + i + ')" id="cell' + i + '"><div class="cell"></div></td>';
            }
            html += '</tr>';
        }
        html += '</table>';
        document.getElementById('board').innerHTML= html;
    }

    var unmarkAllCells= function() {
        for (var i= 0; i < 64; i++) {
            (document.getElementById('cell' + i) || {}).className= '';
        }
    }

    var markCell= function(cell, class_) {
         (document.getElementById('cell' + cell) || {}).className= class_;
    }

    // ====================================================================
    //  Debugging
    // ====================================================================

    var pldump= function(pos) {

        var newpos= pos;
        var i= 8;
        var result= '';
        while (i--) {
            result += '.OX,'.substr((newpos ^ colMask) & 3, 1);
            newpos >>= 2;
        }
        return result + ' ' + pos;
    }

    var clickDump= function(posXName) {
        if (posXName == 'sit') {
            var s= '';
            var boardLog= Core.boardLog();
            for (var i= 4; i < boardLog.length; i++) {
                s += 'move(' + boardLog[i] + '); ';
                if (i & 1) s += ' ';
            }
            console.log(s);
            return;
        }
        if (posXName == 'validMoves') {
            console.log(getValidMoves());
            return
        }
        var posX;
        if (posXName == 'posH') posX= posH;
        if (posXName == 'posV') posX= posV;
        if (posXName == 'posDiag1') posX= posDiag1;
        if (posXName == 'posDiag2') posX= posDiag2;
        console.log('============= ' + posXName + ' =============');
        for (var i= 0; i < posX.length; i++) {
            console.log(pldump(posX[i] ^ colMask));
        }
    }

    // ====================================================================
    //  UI
    // ====================================================================

    var computing= function() {
        if ( !initPosListDone ) {
            status("Please wait until the game is ready!");
            return true;
        }
        if ( Core.computing() ) {
            status("Please wait until the computer has made it's move!", 0, true);
            return true;
        }
        return false;
    }

    var computerCol= 0;
    var oldComputerCol= 0;

    var setComputerCol= function(newCol) {
        if (computerCol == 3) {
            oldComputerCol= newCol;
            return;
        }
        computerCol= newCol;
    }

    var updateUI= function() {
        var begun= Core.started();
        var is_finished= Core.finished();
        var computing= Core.computing();

        var up= function(button, on) {
            document.getElementById('button_' + button).className= on ? 'button' : 'button_off';
        };

        // <a id="button_new_game" class="button" href="javascript:clickNewGame();">New</a>
        up("new_game",  !computing && begun);
        up("undo",      !computing && begun);
        up("pass",      !computing && !is_finished);
        up("tip",       !computing && !is_finished);
        up("stop",      computing);
        up("settings",  true);
    }

    var refreshBoard= function() {
        var i= 0;
        for (var y= 0; y < 8; y++) {
            for (var x= 0; x < 8; x++) {
                var stone= Core.colAtXY(x, y);
                (document.getElementById('cell' + i) || {}).innerHTML=
                      '<div class="cell">'
                    +   '<div class="num debug">' + i + '</div>'
                    +   '<div class="stone-bg">' + stoneBg(stone) + '</div>'
                    +   '<div class="stone-fg">' + stoneFg(stone) + '</div>'
                    + '</div>'
                i++;
            }
        }
        var cells= Core.finished() ? [] : Core.getValidMoves();

        unmarkAllCells();
        for (var i in cells) markCell(cells[i], 'valid-move-' + Core.col());

        updateUI();
    }

    var clickCell= function (move) {
        if ( Core.computing() || Core.finished() ) return;

        if ( Core.colAtCell(move) ) {
            status("Cell is already taken!", 3);
            return;
        }

        var moves= Core.getUniqueValidMoves();
        var ok= 0;
        for ( var movei in moves ) {
            if ( moves[movei] == move ) { ok= 1; break; }
        }
        if ( !ok ) {
            status("Not a valid move!", 2);
            return;
        }

        Core.makeMove(move);
        refreshBoard();
        defaultStatus();
        markCell(move, 'last-move');

        if ( computerCol & Core.col() ) {
            Core.computeMove(UI);
        }
    }

    var clickNewGame= function() {
        if ( Core.computing() || !Core.started() ) return;

        Core.initBoard();
        refreshBoard();
        defaultStatus();

        if ( computerCol & Core.col() ) {
            Core.computeMove(UI);
        }
    }

    var clickUndo= function() {
        if ( computing() ) return;
        if ( !Core.started() ) {
            console.log("CAN'T UNDO");
            return;
        }

        undo(computerCol == 1 || computerCol == 2 ? 2 : 1);
        refreshBoard();
        defaultStatus();
        if ( Core.started() ) {
            var boardLog= Core.boardLog();
            if (boardLog[boardLog.length - 1] != 64) {
                markCell(boardLog[boardLog.length - 1], 'last-move');
            }
            else {
                status(Core.colName(3 - Core.col()) + " passed.", 2);
            }
        }
    }

    var clickPass= function() {
        if ( Core.computing() || Core.finished() ) return;

        Core.pass();
        refreshBoard();
        defaultStatus();

        if (computerCol & Core.col()) {
            Core.computeMove(UI);
        }
    }

    var clickTip= function() {
        if ( Core.computing() || Core.finished() ) return;

        refreshBoard();
        Core.computeMove(UI, 1);
    }

    var clickStop= function() {
        //// if ( !initPosListDone ) return;
        if ( !Core.computing() ) return;

        status("Stopping computation. Please hold on...");
        Core.stopComputing();
    }

    var clickSettings= function() {
        //// if (!initPosListDone) return;

        // document.getElementById('computer_col_0').enabled= computerCol != 3;
        // document.getElementById('computer_col_1').enabled= computerCol != 3;
        // document.getElementById('computer_col_2').enabled= computerCol != 3;
        document.getElementById('computer_col_' + (computerCol == 3 ? oldComputerCol : computerCol)).checked= 1;
        document.getElementById('settings').style.display= 'block';
    }

    var clickCloseSettings= function() {
        document.getElementById('settings').style.display= 'none';
        if ( !Core.computing() && (computerCol & Core.col()) ) {
            Core.computeMove(UI);
        }
    }

    var clickAuto= function() {
        oldComputerCol= computerCol;
        computerCol= 3;

        stopCalculating= 0;

        var score= [0, 0];
        document.getElementById('button_auto').innerHTML= score.join(':');
        // aAuto.html.split(':');

        var wait= function() {
            if ( !Core.computing() ) {
                if ( !Core.computeMove(UI) && !Core.computeMove(UI) ) {
                    computerCol= oldComputerCol;
                    console.log("GAME IS OVER");
                    defaultStatus();

                    score[diff > 0 ? 0 : 1]++;
                    document.getElementById('button_auto').innerHTML= score.join(':');

                    if ( Core.stopping() ) return;

                    initBoard();
                }
            }
            if ( !Core.stopping() ) setTimeout(wait, 500);
        }
        wait();
    }

    var init= function() {
        printBoard();
    }

    return {
        init:           init,
        clickNewGame:   clickNewGame,
        clickUndo:      clickUndo,
        clickPass:      clickPass,
        clickTip:       clickTip,
        clickStop:      clickStop,
        clickSettings:  clickSettings,
        clickDump:      clickDump,
        clickAuto:      clickAuto,
        setComputerCol: setComputerCol,
        clickCloseSettings: clickCloseSettings,
        clickCell:      clickCell,

        // Callbacks:
        status: status,
        defaultStatus: defaultStatus,
        
        refreshBoard: refreshBoard, // Callback from Core
        updateUI: updateUI,  // Callback from Core
        markCell: markCell,  // Callback from Core
    }

})();   // END UI

// EOF
