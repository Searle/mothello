
// ====================================================================
//  Reversi Shootout
//  MoThello Version 2008-08-20. Inspired by MoGo.
//  (c) 2008 by Dietrich Raisin, info1@raisin.de, www.raisin.de
//
//  Released under the Artistic License 2.0. Here are the terms:
//  http://www.opensource.org/licenses/artistic-license-2.0.php
// ====================================================================

UI.Browser= (function() {

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
        UI.log(status);
        document.getElementById('status').innerHTML= status;
    }

    var status= function(html, secs, noConsole) {
        if (!noConsole) UI.log('STATUS: ' + html);
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
                html += '<td id="cell' + i + '"><div class="cell"></div></td>';
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
            UI.log(s);
            return;
        }
        if (posXName == 'validMoves') {
            UI.log(getValidMoves());
            return
        }
        var posX;
        if (posXName == 'posH') posX= posH;
        if (posXName == 'posV') posX= posV;
        if (posXName == 'posDiag1') posX= posDiag1;
        if (posXName == 'posDiag2') posX= posDiag2;
        UI.log('============= ' + posXName + ' =============');
        for (var i= 0; i < posX.length; i++) {
            UI.log(pldump(posX[i] ^ colMask));
        }
    }

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

    var col1Engine;
    var col2Engine;

    var computerCol= 0;
    var oldComputerCol= 0;


    // ====================================================================
    //  Private API
    // ====================================================================

    var setComputerCol= function(newCol) {
        if (computerCol == 3) {
            oldComputerCol= newCol;
            return;
        }
        computerCol= newCol;
    }

    var updateUI= function() {
        var started= Core.started();
        var finished= Core.finished();
        var computing= Core.computing();

        var up= function(button, on) {
            document.getElementById('do-' + button).className= on ? 'button' : 'button off';
        };

        up("new_game",  !computing && started);
        up("undo",      !computing && started);
        up("pass",      !computing && !finished);
        up("tip",       !computing && !finished);
        up("stop",      computing);
        up("open_settings",  true);
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

    var computeMove= function(engine, tip, doneFn) {
        Core.computeMove(engine, document.getElementById('time').value, function(move, comment) {

            if ( move < 0 ) {
                // Cooperative Multi-Tasking Break
            }
            else if ( move == 64 ) {
                status('Pass. I can\'t make a move :-(', 3);
                if ( !tip ) Core.pass();
                refreshBoard();
            }
            else {
                if ( !tip ) {
                    Core.makeMove(move);
                    refreshBoard();
                    markCell(move, 'last-move');
                }
                else {
                    updateUI();
                    markCell(move, 'tip-move');
                }

                status('Done.'
                    // + ' My move is (' + move + ') ' + ((move & 7) + 1) + ',' + ((move >> 3) + 1) + '.'
                    + ' My move is ' + ((move & 7) + 1) + '-' + ((move >> 3) + 1) + '.'
                    + (comment ? ' ' + comment : '')
                , 3);
            }
            
            doneFn(move);
        });

// FIXME : ueberfluessig
        
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
            computeMove();
        }
    }

    var clickNewGame= function() {
        if ( Core.computing() || !Core.started() ) return;

        Core.initBoard();
        refreshBoard();
        defaultStatus();

        if ( computerCol & Core.col() ) {
            computeMove();
        }
    }

    var clickUndo= function() {
        if ( computing() ) return;
        if ( !Core.started() ) {
            UI.log("CAN'T UNDO");
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
            computeMove();
        }
    }

    var clickTip= function() {
        if ( Core.computing() || Core.finished() ) return;

        refreshBoard();
        computeMove(true);
    }

    var clickStop= function() {
        //// if ( !initPosListDone ) return;
        if ( !Core.computing() ) return;

        status("Stopping computation. Please hold on...");
        Core.stopComputing();
    }

    var clickCloseSettings= function() {
        document.getElementById('settings').style.display= 'none';
        if ( !Core.computing() && (computerCol & Core.col()) ) {
            computeMove();
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
            
                // FIXME: computeMove wartet nicht!
                
                if ( !computeMove() && !computeMove() ) {
                    computerCol= oldComputerCol;
                    UI.log("GAME IS OVER");
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

    // ====================================================================
    //  Event Loop
    // ====================================================================

    var do_command;
    var do_param;

    var do_commands= {};

    do_commands.open_settings= {
        exec: function () {

            var fillOptions= function (id, engine) {
                var selectBox= document.getElementById(id);
                var options= selectBox.options;
                if ( options.length == 0 ) {
                
                    var engines= Reversi.getEngines();
                    for ( var i= 0; i < engines.length; i++ ) {
                        var engine= engines[i];
                        var title= engine.title;
                        options[options.length]= new Option(title, engine.name);
                    }
                }
                for ( var i= options.length; engine && i--; ) {
                    if ( options[i].value == engine.name ) {
                        selectBox.selectedIndex= i;
                        break;
                    }
                }

    console.log(engine);

            }

            //// if (!initPosListDone) return;

            // document.getElementById('computer_col_0').enabled= computerCol != 3;
            // document.getElementById('computer_col_1').enabled= computerCol != 3;
            // document.getElementById('computer_col_2').enabled= computerCol != 3;

//            document.getElementById('computer_col_' + (computerCol == 3 ? oldComputerCol : computerCol)).checked= 1;

            document.getElementById('settings').style.display= 'block';

            fillOptions('col1-engine', col1Engine);
            fillOptions('col2-engine', col2Engine);
        }
    };

    do_commands.close_settings= {
        exec: function (value) {
            document.getElementById('settings').style.display= 'none';

            if ( value == 'ok' ) {
                col1Engine= Reversi.getEngine(document.getElementById('col1-engine').value);
                col2Engine= Reversi.getEngine(document.getElementById('col2-engine').value);
            }

//            if ( !Core.computing() && (computerCol & Core.col()) ) {
//                computeMove();
//            }
        }
    };

    var doCommandExec= function() {

        if ( !do_command ) return;

        console.error(do_command, do_param);

        if ( do_commands[do_command] ) {
            if ( !do_commands[do_command].valid || (do_commands[do_command].valid)() ) {
                (do_commands[do_command].exec)(do_param);
            }
        }

        do_command= null;
    };

    var loop= function() {

        var col= Core.col();
        var engine= col == 1 ? col1Engine : col2Engine;

/*
        var wait= function() {
            if ( !Core.computing() ) {
            
                // FIXME: computeMove wartet nicht!
                
                if ( !computeMove() && !computeMove() ) {
                    computerCol= oldComputerCol;
                    UI.log("GAME IS OVER");
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
*/

console.log("LOOP", Math.random());

        doCommandExec();

        if ( !Core.finished() && !Core.computing() ) {

            console.log('TURN:', engine.title);

            computeMove(engine, false, function (move) {


            });
        }

        setTimeout(loop, 200);
    };

    var clickEvent= function (event, a, b) {
        var node= event.target;
        while ( node && typeof node.id === "string" ) {
            var match= node.id.match(/^do-([a-z_]+)(-(.*))?$/);
            if ( match ) {
                do_command= match[1];
                do_param= match[3];
                return true;
            }
            var match= node.id.match(/^(cell)(\d+)$/);
            if ( match ) {
                do_command= match[1];
                do_param= match[2];
                return true;
            }
            node= node.parentNode;
        }
    };

    // ====================================================================
    //  Public API
    // ====================================================================

    var init= function(doneFn) {
        printBoard();
        doneFn();
    };

    var ready= function() {
        refreshBoard();
        defaultStatus();

        // TODO: Test values
        col1Engine= (Reversi.getEngines())[1];
        col2Engine= (Reversi.getEngines())[2];

        var el= document.getElementById('body');
        if ( el.addEventListener ) {  
            el.addEventListener('click', clickEvent, false);   
        }
        else if ( el.attachEvent ) {  
            el.attachEvent('onclick', clickEvent);  
        }  

        loop();
    };

    var log;

    if ( typeof console == 'undefined' ) {
        log= function() {
            var value= Array.prototype.slice.call(arguments).join(" ");
            var lines= document.getElementById('console').innerHTML.split('<br>');
            lines.push(value);
            while (lines.length > 15) lines.shift();
            document.getElementById('console').innerHTML= lines.join('<br>');
        }
    }
    else {
        log= console.log;
    }

    Reversi.addEngine({
        name:       "human",
        author:     "D.Raisin",
        email:      "info1@raisin.de",
        version:    "2010030100",
        title:      "Human",
        description: "Human player",
        implementation:  {

            run: function (startTime, endTime, initialMoves, doneFn) {
                humanDoneFn= doneFn;
                // doneFn(initialMoves[Math.floor(Math.random() * initialMoves.length)]);
            }
        }
    });

    return {
        init:       init,
        ready:      ready,
        status:     status,
        log:        log,
        setTimeout: function (fn, ms) { return setTimeout(fn, ms); },
    }

})();   // END UI

// EOF
