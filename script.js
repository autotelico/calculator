document.addEventListener("DOMContentLoaded", () => {
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    // operation builder
    let firstNumber = 0;
    let operator = '';
    let output = 0;

    // math functions
    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }


    function operate() {
        if (operator === '+') {
            return add(output, firstNumber);
        }
        if (operator === '-') {
            return subtract(output, firstNumber);
        }
        if (operator === 'x') {
            return multiply(output, firstNumber);
        }
        if (operator === '/') {
            return divide(output, firstNumber);
        }
    }

    function clearCalculator() {
        firstNumber = null;
        operator = null;
        output = null;
        result.textContent = '';
    }

    numpad.addEventListener('click', (e) => { // for display only
        let pressedKey = e.target;

        if (operator) {
            if (pressedKey.textContent === '+' ||
                pressedKey.textContent === '-' ||
                pressedKey.textContent === 'x' ||
                pressedKey.textContent === '/' ||
                pressedKey.textContent === '=') {
                firstNumber = firstNumber.slice(1);
                output = parseInt(output);
                firstNumber = parseInt(firstNumber);

                output = operate();
                firstNumber = null;
                operator = null
                result.textContent = output;
                return console.log('Result: ' + output);
            } else if (typeof parseInt(firstNumber) === 'number') {
                firstNumber = firstNumber.toString();
                firstNumber = firstNumber.concat(pressedKey.textContent);
            } else {
                console.log('error');
            }
        }

        if (pressedKey.textContent === '+' ||
            pressedKey.textContent === '-' ||
            pressedKey.textContent === 'x' ||
            pressedKey.textContent === '/') {
            operator = pressedKey.textContent;
        }


        if (!operator) {
            if (pressedKey.textContent !== '+' ||
                pressedKey.textContent !== '-' ||
                pressedKey.textContent !== 'x' ||
                pressedKey.textContent !== '/') {
                if (output) {
                    console.log(`Output is ${output}`);
                    if (typeof output !== 'number') {
                        console.error('Error: output is ' + typeof firstNumber);
                    }
                    output = output.concat(pressedKey.textContent);
                } else {
                    output = pressedKey.textContent;
                }
                result.textContent += pressedKey.textContent;
            }
        } else {

            if (!firstNumber) {
                if (pressedKey.textContent !== '+' ||
                    pressedKey.textContent !== '-' ||
                    pressedKey.textContent !== 'x' ||
                    pressedKey.textContent !== '/') {
                    firstNumber = pressedKey.textContent;
                }
            } else {
                if (pressedKey.textContent !== '+' ||
                    pressedKey.textContent !== '-' ||
                    pressedKey.textContent !== 'x' ||
                    pressedKey.textContent !== '/') {
                    if (typeof firstNumber === 'number') {
                        firstNumber = firstNumber.concat(pressedKey.textContent);
                    }
                }
            }
            result.textContent += pressedKey.textContent;
        }


        if (pressedKey.textContent === 'AC') {
            clearCalculator();
        }

        // if (typeof output === 'number' && typeof firstNumber === 'number') {
        //     output = operate();
        //     firstNumber = null;
        // }


        // switch(pressedKey.textContent) {

        //     case '(':
        //         result.textContent += '(';
        //         break;
        //     case ')':
        //         result.textContent += ')';
        //         break;
        //     case '%':
        //         result.textContent += '%';
        //         break;
        //     case 'AC':
        //         clearCalculator();
        //         break;
        //     case '1':
        //         result.textContent += 1;
        //         if (typeof output !== 'number') {
        //             output = 1;
        //         } else {
        //             firstNumber = 1;
        //         }
        //         break;
        //     case '2':
        //         result.textContent += 2;
        //         if (typeof output !== 'number') {
        //             output = 2;
        //         } else {
        //             firstNumber = 2;
        //         }
        //         break;
        //     case '3':
        //         result.textContent += 3;
        //         if (typeof output !== 'number') {
        //             output = 3;
        //         } else {
        //             firstNumber = 3;
        //         }
        //         break;
        //     case '/':
        //         result.textContent += '/';
        //         operator = '/';
        //         break;
        //     case '4':
        //         result.textContent += 4;
        //         if (typeof output !== 'number') {
        //             output = 4;
        //         } else {
        //             firstNumber = 4;
        //         }
        //         break;
        //     case '5':
        //         result.textContent += 5;
        //         if (typeof output !== 'number') {
        //             output = 5;
        //         } else {
        //             firstNumber = 5;
        //         }
        //         break;
        //     case '6':
        //         result.textContent += 6;
        //         if (typeof output !== 'number') {
        //             output = 6;
        //         } else {
        //             firstNumber = 6;
        //         }
        //         break;
        //     case 'x':
        //         result.textContent += 'x';
        //         operator = '*';
        //         break;
        //     case '7':
        //         result.textContent += 7;
        //         if (typeof output !== 'number') {
        //             output = 7;
        //         } else {
        //             firstNumber = 7;
        //         }
        //         break;
        //     case '8':
        //         result.textContent += 8;
        //         if (typeof output !== 'number') {
        //             output = 8;
        //         } else {
        //             firstNumber = 8;
        //         }
        //         break;
        //     case '9':
        //         result.textContent += 9;
        //         if (typeof output !== 'number') {
        //             output = 9;
        //         } else {
        //             firstNumber = 9;
        //         }
        //         break;
        //     case '-':
        //         result.textContent += '-';
        //         operator = '-';
        //         break;
        //     case '0':
        //         result.textContent += 0;
        //         if (typeof output !== 'number') {
        //             output = 0;
        //         } else {
        //             firstNumber = 0;
        //         }
        //         break;
        //     case '.':
        //         result.textContent += '.';
        //         break;

        //     case '+':
        //         result.textContent += '+';
        //         operator = '+';
        //         break;

        //     case '=':
        //         result.textContent = output;

        //         firstNumber = null;
        //         break;
        // }



        console.log(`First Number: ${firstNumber}`);
        console.log(`Operator: ${operator}`);
        console.log(`Output: ${output}`);
    })
})