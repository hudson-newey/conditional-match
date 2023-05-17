import { Conditional, match } from "../conditionalMatch";

const conditions: Conditional = {
    default: () => console.log("foo")
};

match({
    variable: 100,
    conditions
});
