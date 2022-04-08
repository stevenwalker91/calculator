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
            return add(numberOne, numberTwo);
            break;
        case 'subtract':
            return subtract(numberOne, numberTwo);
            break;
        case 'multiply':
            return multiply(numberOne, numberTwo);
            break;
        case 'divide':
            return divide(numberOne, numberTwo);
            break;

    }
}

function updateDisplay(){

    //get the number of the selected key
    const enteredNumber = this.dataset.number;
    
    
   //firstNumberEntered flag is changed to true to indicate an operator has been selected and user is on to second number
    if (!firstNumberEntered) {
        
        //either append the previously entered numbers or store the new number as firstNumber
        (firstNumber == null) ? firstNumber = enteredNumber : firstNumber += enteredNumber;
        displayValue = firstNumber; 

    } else {
        (secondNumber == null) ? secondNumber = enteredNumber : secondNumber += enteredNumber;
        //console.log(secondNumber);
        displayValue = secondNumber;

    }

    //update the UI with the number entered so far
    display.innerHTML = displayValue;   
}

function orchestrateOperator(){

    //first check that a number has been entered, otherwise kill the function
    if (firstNumber == null) {
        return;
    }

    //first add the operator to the sum
    sum.push(this.dataset.operator);
    
    //then get the original number input and convert to int and also add it to the sum  
    sum.push(parseInt(firstNumber));

    //update flag to say first number has been entered
    firstNumberEntered = true;

    //display the sum so far
    secondDisplayValue = displayValue + ' ' + this.innerHTML + ' ';
    sumDisplay.innerHTML = secondDisplayValue;
    display.innerHTML = '';
}

function sumUp(){
    console.log(displayValue);
    //push the second number into the sum
    sum.push(parseInt(secondNumber));

    secondDisplayValue +=  ' ' + secondNumber + ' ='
    sumDisplay.innerHTML = secondDisplayValue;
    //call operate with the sum details
    display.innerHTML = operate(sum[0], sum[1], sum[2]);
}

let firstNumber;
let secondNumber;
let operator;
let sum = [];
let firstNumberEntered = false;
let displayValue;
let secondDisplayValue;




const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const display = document.getElementById('number-display');
const sumDisplay = document.getElementById('sum-display');
const sumkey = document.querySelector('.sum-key')

numberKeys.forEach(key => key.addEventListener('click', updateDisplay));
operatorKeys.forEach(key => key.addEventListener('click', orchestrateOperator));
sumkey.addEventListener('click', sumUp);