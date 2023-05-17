"use strict";
exports.__esModule = true;
exports.match = void 0;
function match(matchCondition) {
    var variable = matchCondition.variable;
    var conditions = matchCondition.conditions instanceof Array ?
        matchCondition.conditions : [matchCondition.conditions];
    conditions.forEach(function (condition) {
        if (Object.keys(condition).indexOf("condition") != -1) {
            var matchCondition_1 = condition;
            if ((matchCondition_1).condition(variable)) {
                matchCondition_1.then();
            }
            else if (matchCondition_1 === null || matchCondition_1 === void 0 ? void 0 : matchCondition_1["else"]) {
                matchCondition_1["else"]();
            }
        }
        else if (Object.keys(condition).indexOf("default") != -1) {
            var defaultCondition = condition;
            defaultCondition["default"]();
        }
    });
}
exports.match = match;
