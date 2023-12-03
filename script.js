document.addEventListener("DOMContentLoaded", () => {
    const numpad = document.querySelector('#numpad');
    const result = document.querySelector('#result');

    // operation builder
    let otherNumber = 0;
    let operator = '';
    let output = 0;

    let hasCalculated = false;

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
        hasCalculated = true;
    }

    function clearCalculator() {
        otherNumber = 0;
        operator = '';
        output = 0;
        result.textContent = '';
        hasCalculated = false;
    }

    
    numpad.addEventListener('click', (e) => { // for display only
        let pressedKey = e.target.textContent;

        if (e.target === numpad) {
          return e.preventDefault();
        }

            if (operator) {
                if (!Number(pressedKey) && pressedKey !== '=') {
                    output = operate();
                    otherNumber = 0;
                    result.textContent = output;
                    operator = pressedKey;
                } else if (pressedKey === '=') {
                    output = operate();
                    otherNumber = 0;
                    result.textContent = output;
                } else if (otherNumber === 0) {
                    otherNumber = pressedKey;
                } else {
                    otherNumber += pressedKey;
                }
            }

            switch (pressedKey) {
                case '+':
                case '-':
                case 'x':
                case '/':
                    operator = pressedKey;
                    break;
                case '=':
                    output = operate();
                    result.textContent = output;
                    otherNumber = 0;

                    // if (operator && hasCalculated) {

                    // }
                    break;
                case 'AC':
                    clearCalculator();
            }

            if (output === 0 && Number(pressedKey)) {
                output = pressedKey;
            } else if (Number(pressedKey) && otherNumber === 0) {
                output += pressedKey;
            }

            
        

        // switch(pressedKey) {
        //     case '+':
        //     case '-':
        //     case 'x':
        //     case '/':
        //         operator = pressedKey;
        //         break;
            
        //     case '=':
        //         output = operate();
        //         result.textContent = output;
        //         otherNumber = 'n';
        //         operator = '';
        //         break;

        //     case 'AC':
        //         clearCalculator();
        //         break;
        
        //     default:
        //         if (!operator) {
        //             if (output === 0) {
        //                 output = pressedKey;
        //             } else if (pressedKey !== '=') {
        //                     output = output + pressedKey;
        //                 }
        //             }
        //     }

        

        // if (operator) {
        //     if (otherNumber.charAt(0) === 'n' ||
        //     otherNumber.charAt(0) === '+' ||
        //     otherNumber.charAt(0) === '-' ||
        //     otherNumber.charAt(0) === 'x' ||
        //     otherNumber.charAt(0) === '/') {
        //         otherNumber = pressedKey;
        //     } else {
        //         otherNumber += pressedKey;
        //     }
        // }
        if (pressedKey !== '=' && pressedKey !== 'AC') {
            result.textContent += pressedKey;
        }

        console.log(`Other Number: ${otherNumber}`);
        console.log(`Operator: ${operator}`);
        console.log(`Output: ${output}`);
    })
})