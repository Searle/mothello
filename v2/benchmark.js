
var skiptest= {};
var test= {};

var Benchmark= (function() {

    var testList= [];
    var testResults;

    function time(name, fn, runs, a) {
        var ms= new Date();
        for ( var i= runs; i--; ) fn(a);
        ms= new Date() - ms;
        console.log(name + ': ' + ms +' ms');
        var result= fn(a);
        if ( result !== undefined ) console.log(result);
        testResults[name]= ms;
    }

    function showResults() {
        var names= [];
        for ( var name in testResults ) names.push(name);
        names.sort(function (a, b) { return testResults[a] - testResults[b]; });
        var results= [];
        for ( var i in names ) results.push(names[i] + ': ' + testResults[names[i]]);
        console.log("Result: " + results.join(", "));
    }

    function runNextTest() {
        if ( testList.length ) {
            (testList.shift())();
            setTimeout(runNextTest, 1000);
        }
        else {
            console.log("FINISHED!");
        }
    }

    function addTest(runs, data) {
        testList.push(function() {
            console.group("*******************************************************");
            if ( data !== undefined ) console.log(data);
            testResults= [];
        });
        for ( fn in test ) {
            (function (fn, test) {
                testList.push(function() {
                    time(fn, test[fn], runs, data);
                });
            })(fn, test);
        }
        testList.push(function() {
            showResults();
            console.groupEnd();
        });
    }

    function filterTests(list) {
        var test2= {};
        for ( var i= 0; i < arguments.length; i++ ) test2[arguments[i]]= test[arguments[i]];
        test= test2;
    }

    setTimeout(function () {
        if ( testList.length == 0 ) addTest(1);
        runNextTest();
    }, 1000);

    return {
        on: addTest,
        only: filterTests
    };
})();
