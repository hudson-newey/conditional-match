"use strict";
exports.__esModule = true;
var index_js_1 = require("../../dist/index.js");
var conditions = [
    {
        condition: function (arg) { return arg === 1; },
        then: function () { return console.log("1"); },
        "else": function () { return console.log("not 1"); }
    },
    {
        condition: function (arg) { return arg === 2; },
        then: function () { return console.log("2"); },
        "else": function () { return console.log("not 2"); }
    },
    {
        condition: function (arg) { return arg < 3; },
        then: function () { return console.log("less than 3"); }
    }
];
var matchCondition = {
    variable: 5,
    conditions: conditions
};
index_js_1.match(matchCondition);
