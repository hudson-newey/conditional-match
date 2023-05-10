export type MatchVariable = unknown;
export type MatchCondition = (arg) => boolean;
type MatchExpression = (...args) => unknown;

export interface IMatchObject {
    variable: MatchVariable;
    conditions: IMatchCondition[];
}

export interface IMatchCondition {
    condition: MatchCondition;
    then: MatchExpression;
    else?: MatchExpression;
}

export function match(matchCondition: IMatchObject) {
    const conditions = matchCondition.conditions;
    const variable = matchCondition.variable;

    conditions.forEach(condition => {
        if (!condition.condition(variable)) {
            if (condition.else !== undefined) {
                condition.else();
            }
            return;
        } else {
            condition.then();
        }
    });
}
