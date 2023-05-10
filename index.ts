export type MatchVariable = unknown;
export type MatchConditionType = (arg) => boolean;

type MatchExpression = (...args) => unknown;
type Condition = MatchCondition | DefaultCondition;

interface MatchObject {
    variable: MatchVariable;
    conditions: Condition[] | Condition;
}

export interface MatchCondition {
    condition: MatchConditionType;
    then: MatchExpression;
    else?: MatchExpression;
}

export interface DefaultCondition {
    default: MatchExpression;
}

export function match(matchCondition: MatchObject) {
    const variable = matchCondition.variable;
    const conditions: Condition[] =
        matchCondition.conditions instanceof Array ?
        matchCondition.conditions : [ matchCondition.conditions ];

    conditions.forEach(condition => {
        
        if (Object.keys(condition).indexOf("condition")) {

            const matchCondition = condition as MatchCondition;
            if ((matchCondition).condition(variable)) {
                matchCondition.then();
            } else {
                matchCondition?.else();
            }

        } else if (Object.keys(condition).indexOf("default")) {

            const defaultCondition = condition as DefaultCondition;
            defaultCondition.default();

        }
    });
}
