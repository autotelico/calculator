// math functions
function add(...a) {
    return a.reduce((accum, value) => accum + value);
}

function subtract(...a) {
    return a.reduce((accum, value) => accum - value);
}

function multiply(...a) {
    return a.reduce((accum, value) => accum * value);
}

function divide(...a) {
    return a.reduce((accum, value) => accum / value);
}


let test = add(10, 2, 2, 5)
console.log(test);

// operation builder
let firstNumber = 0;
let secondNumber = 0;
let operator = '';


function operate(a, b, operator) {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return divide(a, b);
    }
}

