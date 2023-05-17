# Conditional Match

"Lazily evaluated switch statements"  
  
This is me just testing NPM and is probably not good for use in production.

## Examples

```ts
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

// Output:
// not 1
// not 2
```

## Default Statements

```ts
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

// Output:
// incorrect input
// bar
```

## Singular Match Statement

```ts
const conditions: Conditional = {
    condition: (x: number) => x > 10 && x < 999,
    then: () => "yay!"
};

match({
    variable: 100,
    conditions
});

// Output:
// yay!
```

## Only a Default Match Statement

```ts
const conditions: Conditional = {
    default: () => console.log("foo")
};

match({
    variable: 100,
    conditions
});

// output:
// Foo
```
