document.addEventListener("DOMContentLoaded", () => {
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    // operation builder
    let otherNumber = 'n';
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
            return add(output, otherNumber);
        }
        if (operator === '-') {
            return subtract(output, otherNumber);
        }
        if (operator === 'x') {
            return multiply(output, otherNumber);
        }
        if (operator === '/') {
            return divide(output, otherNumber);
        }
    }

    function clearCalculator() {
        otherNumber = 'n';
        operator = '';
        output = 0;
        result.textContent = '';
    }

    
    numpad.addEventListener('click', (e) => { // for display only
        let pressedKey = e.target;

        if (pressedKey === numpad) {
          return e.preventDefault();
        }

        if (pressedKey.textContent === '+' ||
            pressedKey.textContent === '-' ||
            pressedKey.textContent === 'x' ||
            pressedKey.textContent === '/') {
            
                operator = pressedKey.textContent;
        }

        if (pressedKey.textContent === '=') {
            output = operate();
            result.textContent = output;
            otherNumber = 'n';
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
            if (otherNumber.charAt(0) === 'n' ||
            otherNumber.charAt(0) === '+' ||
            otherNumber.charAt(0) === '-' ||
            otherNumber.charAt(0) === 'x' ||
            otherNumber.charAt(0) === '/') {
                otherNumber = pressedKey.textContent;
            } else {
                otherNumber += pressedKey.textContent;
            }
        }
        
        if (pressedKey.textContent === 'AC') {
            clearCalculator();
        }
        if (pressedKey.textContent !== '=' && pressedKey.textContent !== 'AC') {
            result.textContent += pressedKey.textContent;
        }

        console.log(`First Number: ${otherNumber}`);
        console.log(`Operator: ${operator}`);
        console.log(`Output: ${output}`);
    })
})