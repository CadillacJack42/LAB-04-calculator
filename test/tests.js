// IMPORT MODULES under test here:
import { add, sub, multiply, divide } from '../calculations.js';

const test = QUnit.test;


test('add two numbers 5 and 3', (expect) => {
    
    const x = 5;
    const y = 3;
    const expected = 8;
    
    const actual = add(x, y);
    expect.equal(actual, expected);
});

test('subtract two numbers 10 and 5', (expect) => {
    const x = 10;
    const y = 5;
    const expected = 5;
    
    const actual = sub(x, y);

    expect.equal(actual, expected);
});

test('multiply two numbers 10 and 42', (expect) => {
    
    const x = 10;
    const y = 42;
    const expected = 420;

    const actual = multiply(x, y);

    expect.equal(actual, expected);
});

test('divide two numbers 100 and 10', (expect) => {
    
    const x = 100;
    const y = 10;
    const expected = 10;
   
    const actual = divide(x, y);

    expect.equal(actual, expected);
});
