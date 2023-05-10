"use strict";
exports.__esModule = true;
exports.match = void 0;
function match(matchCondition) {
    var conditions = matchCondition.conditions;
    var variable = matchCondition.variable;
    conditions.forEach(function (condition) {
        if (!condition.condition(variable)) {
            if (condition["else"] !== undefined) {
                condition["else"]();
            }
            return;
        }
        else {
            condition.then();
        }
    });
}
exports.match = match;
