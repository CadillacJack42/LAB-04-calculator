// import functions
import { add, sub, multiply, divide } from './calculations.js';

// Addition elements
const addition1 = document.getElementById('addition1');
const addition2 = document.getElementById('addition2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
    let result = add(+addition1.value, +addition2.value);
    addResult.textContent = result;
});

// Subtraction elements
const subtraction1 = document.getElementById('subtraction1');
const subtraction2 = document.getElementById('subtraction2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

subButton.addEventListener('click', () => {
    let result = sub(+subtraction1.value, +subtraction2.value);
    subResult.textContent = result;
});


// Multiplication elements
const multiplication1 = document.getElementById('multiplication1');
const multiplication2 = document.getElementById('multiplication2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

multButton.addEventListener('click', () => {
    let result = multiply(+multiplication1.value, +multiplication2.value);
    multResult.textContent = result;
});


// Division Elements
const division1 = document.getElementById('division1');
const division2 = document.getElementById('division2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
    let result = divide(+division1.value, +division2.value);
    divResult.textContent = result;
});



