import { Conditional, MatchObject, match } from "../conditionalMatch";

const conditions: Conditional[] = [
    {
        condition: (arg) => arg === 1,
        then: () => console.log("1"),
        else: () => console.log("not 1")
    },
    {
        condition: (arg) => arg === 2,
        then: () => console.log("2"),
        else: () => console.log("not 2")
    },
    {
        condition: (arg) => arg < 3,
        then: () => console.log("less than 3"),
    }
];

const matchCondition: MatchObject = {
    variable: 5,
    conditions
};

match(matchCondition);
