import { Conditional, match } from "../conditionalMatch";

const conditions: Conditional[] = [
    {
        condition: (x: number) => x > 1,
        then: () => console.log("hello world"),
    },
    {
        condition: (x: any) => typeof x === "string",
        then: () => console.log("incorrect input"),
    },
    {
        default: () => console.log("bar")
    }
];

match({ variable: "foo", conditions });
