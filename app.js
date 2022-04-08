

function add(numberOne, numberTwo) {
    console.log(numberOne + numberTwo);
    return numberOne + numberTwo; 
}

function subtract(numberOne, numberTwo) {
    console.log(numberOne - numberTwo);
    return numberOne - numberTwo;
}

function multiply(numberOne, numberTwo) {
    console.log(numberOne * numberTwo);
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo) {
    console.log(numberOne / numberTwo);
    return numberOne / numberTwo;
}

function operate(operator, numberOne, numberTwo){
    switch(operator) {
        case 'add':
            add(numberOne, numberTwo);
            break;
        case 'subtract':
            subtract(numberOne, numberTwo);
            break;
        case 'multiply':
            multiply(numberOne, numberTwo);
            break;
        case 'divide':
            divide(numberOne, numberTwo);
            break;

    }
}

operate('multiply', 5, 4);