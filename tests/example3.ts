import { Conditional, match } from "../conditionalMatch";

const conditions: Conditional = {
    condition: (x: number) => x > 10 && x < 999,
    then: () => "yay!"
};

match({
    variable: 100,
    conditions
});
