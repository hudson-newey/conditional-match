export type Conditional = IMatchCondition | IDefaultCondition;
export type ConditionalPredicate = (arg) => boolean;

type MatchExpression = (...args) => unknown;
type MatchVariable = unknown;

export interface MatchObject {
    variable: MatchVariable;
    conditions: Conditional[] | Conditional;
}

interface IMatchCondition {
    condition: ConditionalPredicate;
    then: MatchExpression;
    else?: MatchExpression;
}

interface IDefaultCondition {
    default: MatchExpression;
}

export function match(matchCondition: MatchObject) {
    const variable = matchCondition.variable;
    const conditions: Conditional[] =
        matchCondition.conditions instanceof Array ?
        matchCondition.conditions : [ matchCondition.conditions ];

    conditions.forEach(condition => {
        
        if (Object.keys(condition).indexOf("condition") != -1) {

            const matchCondition = condition as IMatchCondition;
            if ((matchCondition).condition(variable)) {
                matchCondition.then();
            } else if(matchCondition?.else) {
                matchCondition.else();
            }

        } else if (Object.keys(condition).indexOf("default") != -1) {

            const defaultCondition = condition as IDefaultCondition;
            defaultCondition.default();

        }
    });
}
