// IMPORT MODULES under test here:
import { add, sub } from '../calculations.js';

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
