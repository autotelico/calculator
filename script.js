document.addEventListener("DOMContentLoaded", () => {
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    // operation builder
    let otherNumber = 'n';
    let operator = '';
    let output = null;

    // math functions
    function add(a, b) {
        return parseFloat(a) + parseFloat(b);
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
        let pressedKey = e.target.textContent;

        if (e.target === numpad) {
          return e.preventDefault();
        }

        switch(pressedKey) {
            case '+':
            case '-':
            case 'x':
            case '/':
                operator = pressedKey;
                break;
            
            case '=':
                output = operate();
                result.textContent = output;
                otherNumber = 'n';
                operator = '';
                break;

            case 'AC':
                clearCalculator();
                break;
        
            default:
                if (!operator) {
                    if (output === null) {
                        output = pressedKey;
                    } else if (pressedKey !== '=') {
                            output = output + pressedKey;
                        }
                    }
            }

        

        if (operator) {
            if (otherNumber.charAt(0) === 'n' ||
            otherNumber.charAt(0) === '+' ||
            otherNumber.charAt(0) === '-' ||
            otherNumber.charAt(0) === 'x' ||
            otherNumber.charAt(0) === '/') {
                otherNumber = pressedKey;
            } else {
                otherNumber += pressedKey;
            }
        }
        if (pressedKey !== '=' && pressedKey !== 'AC') {
            result.textContent += pressedKey;
        }

        console.log(`First Number: ${otherNumber}`);
        console.log(`Operator: ${operator}`);
        console.log(`Output: ${output}`);
    })
})