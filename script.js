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