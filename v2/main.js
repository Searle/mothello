
// ====================================================================
//  Reversi Shootout
//  MoThello Version 2008-08-20. Inspired by MoGo.
//  (c) 2008 by Dietrich Raisin, info1@raisin.de, www.raisin.de
//
//  Released under the Artistic License 2.0. Here are the terms:
//  http://www.opensource.org/licenses/artistic-license-2.0.php
//
//  To make a copy, this file is the only one you need. No images were
//  used, the stones are unicode characters.
//
//  Lessons learned:
//  - Hashes are slow
//  - Function calls are slow
//  - Generating new arrays is slow
//  - JITs may be slower (MoThello is slower on Tamarin and V8)
// ====================================================================

(function () {

    var NOP= function() {};

    UI= {
        status:     NOP,
        init:       NOP,
        ready:      NOP,
        log:        NOP,
        setTimeout: NOP,
    };

    // Hard-wire UI
    function setUI(ui) {
        UI.status=      UI[ui].status   || NOP;
        UI.init=        UI[ui].init     || NOP;
        UI.ready=       UI[ui].ready    || NOP;
        UI.log=         UI[ui].log      || NOP;
        UI.setTimeout=  UI[ui].setTimeout || NOP;
    };

    var init= function (ui) {

        setUI(ui);

        UI.status("Initializing, please hold on a second...");
        UI.init(function() {

UI.log("UI.init callback");

            Core.init(function () {

                var move= Core.makeMove;

                // seltsamer move von weiss
                // move(26); move(34); move(41); move(18); move(42); move(25); move(20); move(33); move(44); move(53); move(32); move(40); move(11); move(10); move(2); move(17); move(16); move(24); move(48);
                // move(8); move(0); move(51); move(19); move(49); move(50); move(12); move(21); move(9); move(5); move(4); move(60); move(58); move(29); move(13); move(6); move(7); move(3); move(1); move(59); move(57); move(43); move(45); move(37); move(52); move(61); move(38); move(31); move(39); move(56); move(22); move(47);
                // move(62); move(63); move(30); move(46);
                // move(54); move(55); move(64); move(14); move(23); move(15); move(64);

                // move(44); move(45); move(19); move(43); move(37); move(29); move(30); move(22); move(38); move(46); move(21); move(12); move(5); move(3); move(13); move(4); move(2); move(26); move(42); move(41); move(20); move(11); move(10); move(18); move(34); move(17); move(6);

                // move(44); move(45); move(19); move(43); move(37); move(29); move(30); move(22); move(38); move(46); move(21); move(12); move(5); move(3); move(13); move(4); move(2); move(26); move(42); move(41); move(20); move(11); move(10); move(18); move(34); move(17); move(6); move(9); move(23); move(31); move(25); move(24); move(47); move(33); move(40); move(53); move(61); move(50); move(58); move(55);
                // move(51); move(60); move(59); move(15); move(62); move(48); move(0); move(32); move(63); move(52); move(1); move(57); move(16); move(8); move(56); move(54); move(39); move(14); move(7); move(64); move(49); move(64);
                // move(44); move(43); move(42); move(45); move(29); move(51); move(34); move(37); move(19); move(26); move(38); move(20); move(46); move(52); move(58); move(53); move(61); move(12); move(4); move(21); move(13); move(60); move(10); move(62); move(25);
                // move(19); move(18); move(44); move(29); move(21); move(45); move(37); move(13); move(26); move(25); move(20); move(42); move(34); move(12); move(11); move(51); move(4);
                // move(19); move(18); move(44); move(29); move(21); move(45); move(37); move(13); move(26); move(25); move(20); move(42); move(34); move(12); move(11); move(51); move(4); move(3); move(2); move(41); move(5); move(43); move(22);
                // move(19); move(18); move(44); move(29); move(21); move(45); move(37); move(13); move(26); move(25); move(20); move(42); move(34); move(12); move(11); move(51); move(4); move(3); move(2); move(41); move(5); move(43); move(22); move(14); move(52); move(61); move(7); move(53); move(46); move(39); move(59); move(38); move(30); move(10); move(24); move(16); move(8); move(23); move(31); move(17); move(15); move(47); move(55); move(58); move(57); move(6); move(32); move(50); move(40); move(60); move(62); move(33); move(49);

    ////            move(19); move(18); move(44); move(29); move(21); move(45); move(37); move(13); move(26); move(25); move(20); move(42); move(34); move(12); move(11); move(51); move(4); move(3); move(2); move(41); move(5); move(43); move(22); move(10); move(59); move(52); move(50); move(17); move(16);

                // move(19); move(18); move(44); move(29); move(21); move(45); move(37); move(13); move(26); move(25); move(20); move(42); move(34); move(12); move(11); move(51); move(4); move(3); move(2); move(41); move(5); move(43); move(22); move(14); move(52); move(61); move(7); move(53); move(46); move(39); move(59); move(38); move(30); move(10); move(24); move(16); move(8); move(23); move(31); move(17); move(15); move(47); move(55); move(58); move(57); move(6); move(32); move(50); move(40); move(60); move(62); move(33); move(49); move(56); move(9);

UI.log("Core.init callback");

                UI.ready();
            });
        });
    }

    var addEngine= function () {
        // ENOTIMPL
    };

    // Expose API
    Reversi= {
        init:       init,
        addEngine:  addEngine,
    };

})();

// EOF
