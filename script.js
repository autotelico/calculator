document.addEventListener("DOMContentLoaded", () => {
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    // operation builder
    let firstNumber = 'n';
    let operator = '';
    let output = null;

    // math functions
    function add(a, b) {
        return parseInt(a) + parseInt(b);
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
        firstNumber = 'n';
        operator = '';
        output = 0;
        result.textContent = '';
    }


    numpad.addEventListener('click', (e) => { // for display only
        let pressedKey = e.target;

        if (pressedKey.textContent === '+' ||
            pressedKey.textContent === '-' ||
            pressedKey.textContent === 'x' ||
            pressedKey.textContent === '/') {
            
                operator = pressedKey.textContent;
        }

        if (pressedKey.textContent === '=') {
            output = operate();
            result.textContent = output;
            firstNumber = 'n';
            operator = '';
        }

        if (!operator) {
            if (output === null) {
                output = pressedKey.textContent;
            } else if (pressedKey.textContent !== '=') {
                    output = output + pressedKey.textContent;
                }
            }

       


        if (operator) {
            if (firstNumber.charAt(0) === 'n' ||
            firstNumber.charAt(0) === '+' ||
            firstNumber.charAt(0) === '-' ||
            firstNumber.charAt(0) === 'x' ||
            firstNumber.charAt(0) === '/') {
                firstNumber = pressedKey.textContent;
            } else {
                firstNumber += pressedKey.textContent;
            }
        }
        

        
        if (pressedKey.textContent === 'AC') {
            clearCalculator();
        }
        if (pressedKey.textContent !== '=' && pressedKey.textContent !== 'AC') {
            result.textContent += pressedKey.textContent;
        }

        console.log(`First Number: ${firstNumber}`);
        console.log(`Operator: ${operator}`);
        console.log(`Output: ${output}`);
    })
})