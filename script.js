document.addEventListener("DOMContentLoaded", () => {

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


// Will make this into an event listener for when the user hits '='
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

// Event listeners
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    numpad.addEventListener('click', (e) => {
        let pressedKey = e.target;

        switch(pressedKey.textContent) {

            case '(':
                result.textContent += '(';
                break;
            case ')':
                result.textContent += ')';
                break;
            case '%':
                result.textContent += '%';
                break;
            case 'AC':
                result.textContent = '';
                break;
            case '1':
                result.textContent += 1;
                break;
            case '2':
                result.textContent += 2;
                break;
            case '3':
                result.textContent += 3;
                break;
            case '/':
                result.textContent += '/';
                break;
            case '4':
                result.textContent += 4;
                break;
            case '5':
                result.textContent += 5;
                break;
            case '6':
                result.textContent += 6;
                break;
            case 'x':
                result.textContent += 'x';
                break;
            case '7':
                result.textContent += 7;
                break;
            case '8':
                result.textContent += 8;
                break;
            case '9':
                result.textContent += 9;
                break;
            case '-':
                result.textContent += '-';
                break;
            case '0':
                result.textContent += 0;
                break;
            case '.':
                result.textContent += '.';
                break;
            case '=':
                // result.textContent = ... 
                break;
            case '+':
                result.textContent += '+';
                break;

        }
    })
})