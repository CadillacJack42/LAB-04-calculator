// IMPORT MODULES under test here:
import { add, sub, multiply, divide } from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('add two numbers 5 and 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const x = 5;
    const y = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract two numbers 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const x = 10;
    const y = 5;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = sub(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply two numbers 10 and 42', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const x = 10;
    const y = 42;
    const expected = 420;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide two numbers 100 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    
    const x = 100;
    const y = 10;
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
