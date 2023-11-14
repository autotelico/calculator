document.addEventListener("DOMContentLoaded", () => {
// operation builder
let firstNumber;
let secondNumber;
let operator = '';
let output = undefined;

// math functions
function add() {
    return firstNumber + secondNumber;
}

function subtract() {
    return firstNumber - secondNumber;
}

function multiply() {
    return firstNumber * secondNumber;
}

function divide() {
    return  firstNumber / secondNumber;
}


let test = add(10, 2, 2, 5)
console.log(test);


// Will make this into an event listener for when the user hits '='
function operate() {
    if (typeof output === 'undefined') {

        if (operator === '+') {
            return add(firstNumber, secondNumber);
        }
        if (operator === '-') {
            return subtract(firstNumber, secondNumber);
        }
        if (operator === '*') {
            return multiply(firstNumber, secondNumber);
        }
        if (operator === '/') {
            return divide(firstNumber, secondNumber);
        }
    }
    
        if (operator === '+') {
            return output = add(output, firstNumber);
        }
        if (operator === '-') {
            output = subtract(output, firstNumber);
        }
        if (operator === '*') {
            output = multiply(output, firstNumber);
        }
        if (operator === '/') {
            output = divide(output, firstNumber);
        }
}

function clearCalculator() {
     firstNumber = null;
     secondNumber = null;
     operator = null;
     output = null;
     result.textContent = '';
}     

// Event listeners
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    numpad.addEventListener('click', (e) => { // for display only
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
                clearCalculator();
                break;
            case '1':
                result.textContent += 1;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 1;
                } else {
                    secondNumber = 1;
                }
                break;
            case '2':
                result.textContent += 2;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 2;
                } else {
                    secondNumber = 2;
                }
                break;
            case '3':
                result.textContent += 3;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 3;
                } else {
                    secondNumber = 3;
                }
                break;
            case '/':
                result.textContent += '/';
                operator = '/';
                break;
            case '4':
                result.textContent += 4;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 4;
                } else {
                    secondNumber = 4;
                }
                break;
            case '5':
                result.textContent += 5;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 5;
                } else {
                    secondNumber = 5;
                }
                break;
            case '6':
                result.textContent += 6;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 6;
                } else {
                    secondNumber = 6;
                }
                break;
            case 'x':
                result.textContent += 'x';
                operator = '*';
                break;
            case '7':
                result.textContent += 7;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 7;
                } else {
                    secondNumber = 7;
                }
                break;
            case '8':
                result.textContent += 8;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 8;
                } else {
                    secondNumber = 8;
                }
                break;
            case '9':
                result.textContent += 9;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 9;
                } else {
                    secondNumber = 9;
                }
                break;
            case '-':
                result.textContent += '-';
                operator = '-';
                break;
            case '0':
                result.textContent += 0;
                if (typeof firstNumber !== 'number') {
                    firstNumber = 0;
                } else {
                    secondNumber = 0;
                }
                break;
            case '.':
                result.textContent += '.';
                break;
        
            case '+':
                result.textContent += '+';
                operator = '+';
                break;

            case '=':
                output = operate();
                result.textContent = output;
                firstNumber = null;
                secondNumber = null;
                break;
        }
        console.log(`First Number: ${firstNumber}`);
        console.log(`Second Number: ${secondNumber}`);
        console.log(`Operator: ${operator}`);
        console.log(`Output: ${output}`);
    })
})