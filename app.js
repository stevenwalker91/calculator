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


function getUserNumberInput(){
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

    updateDisplay();
}
function updateDisplay(){

    //update the UI with the number entered so far
    display.innerHTML = displayValue;
    
    if (secondDisplayValue !== undefined) {
        sumDisplay.innerHTML = secondDisplayValue;  
    } 
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
    secondDisplayValue = firstNumber + ' ' + this.innerHTML + ' ';
    displayValue = '';
    updateDisplay();
}

function sumUp(){

    //kill if second number is null to pretend user repeatedly pressing when there is nothing to calculate
    if (secondNumber == null) {
        return;
    }

    //push the second number into the sum
    sum.push(parseInt(secondNumber));

    secondDisplayValue +=  ' ' + secondNumber + ' ='
    sumDisplay.innerHTML = secondDisplayValue;
   
    //call operate with the sum details
    const result = operate(sum[0], sum[1], sum[2]);
    
    //display result and clear down variables
    display.innerHTML = result;

    firstNumber = result;
    enteredNumber = result;
    sum = [];
    secondNumber = null;

}

let firstNumber;
let secondNumber;
let operator;
let sum = []; //check later if this is needed given we should already have all this in other variables
let firstNumberEntered = false;
let displayValue;
let secondDisplayValue;



const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const display = document.getElementById('number-display');
const sumDisplay = document.getElementById('sum-display');
const sumkey = document.querySelector('.sum-key')

numberKeys.forEach(key => key.addEventListener('click', getUserNumberInput));
operatorKeys.forEach(key => key.addEventListener('click', orchestrateOperator));
sumkey.addEventListener('click', sumUp);