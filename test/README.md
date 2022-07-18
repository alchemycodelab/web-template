# Testing Pure Functions with TDD

## QUnit built-ins

Our `test/tests.js` file has access to a new built-in, `QUnit` and we will be using
the `QUnit.test` method which will be assigned to a `test` variable:

```js
const test = QUnit.test;
```

We will also be using the `expect` built-in that will be passed to our testing function

## The test

The structure of a test is very similar to the use of `addEventListener`!

```js
// Each test case
test('test name', (expect) => {

});
```

Part | Purpose
---|---
`test` | Built-in QUnit testing method
`'test name'` | Descriptive test name
`(expect) => {...}` | Function (arrow function) that will be called _by qUnit_ to run the test

## Test setup

```js
test('demo: calculate area of a triangle', (expect) => {
    //Arrange
    // Set up your arguments and expectations (inputs and outputs)
    const base = 3;
    const height = 4;
    const expected = 6;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = areaOfTriangle(base, height);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
```

Part | Purpose
---|---
`// Arrange` | What are the inputs and outputs?
`// Act` | Run the function being tested!
`// Assert` | Validate by asserting something is true

## Functions

Write your tests and corresponding functions _one feature at a time_. Don't stub out all the functions and imports!

### Exporting a function

Add the `export` keyword in front of your declared function definition:

```js
export function areaOfTriangle(base, height) {
    
}
```

### Importing function(s)

Use the following syntax to import the functions from the other files:

```js
import { areaOfTriangle } from '../geometry.js';
```

## Process

For each function feature:

1. Ask questions if requirements are not understood!
1. Identify function inputs and output
1. Identify number of test cases required
1. Start with first test
1. Decide on name for test and for function
1. Add empty test in `test/tests.js`
1. Create and `export` empty function from aptly-named module file (`something.js`) and import into `test/tests.js`
1. Write test:
    - Translate inputs and outputs into "Arrange" variables, 
    - write the "Act" function call
    - modify "Assert" if needed
1. Add parameters to function, write code to make pass
1. Implement additional tests if required (using same function)