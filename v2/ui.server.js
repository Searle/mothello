
// ====================================================================
//  Reversi Shootout
//  MoThello Version 2008-08-20. Inspired by MoGo.
//  (c) 2008 by Dietrich Raisin, info1@raisin.de, www.raisin.de
//
//  Released under the Artistic License 2.0. Here are the terms:
//  http://www.opensource.org/licenses/artistic-license-2.0.php
// ====================================================================

UI.Server= (function() {

    var delayedFn= [];

    var setTimeout= function (fn, ms) {
        delayedFn.push([ fn, ms ]);
    };

    var callDelayedFns= function () {
        while ( delayedFn.length ) {
            print("Calling delayedFn");
            ((delayedFn.shift())[0])();
        }
    };

    var init= function (doneFn) {
        setTimeout(doneFn, 1);
        callDelayedFns();
    };

    var ready= function () {
        print("Ready");
        callDelayedFns();
    };

    var status= function (value) {
        print("Status:" + value);
    };

    var log= function (value) {
        print(value);
    };

    return {
        init:       init,
        ready:      ready,
        status:     status,
        log:        log,
        setTimeout: setTimeout,
    }

})();   // END UI.Server

// EOF
