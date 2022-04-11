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
        case '+':
            return add(numberOne, numberTwo);
            break;
        case '-':
            return subtract(numberOne, numberTwo);
            break;
        case '*':
            return multiply(numberOne, numberTwo);
            break;
        case '/':
            return divide(numberOne, numberTwo);
            break;

    }
}


function getUserNumberInput(){
    //get the number of the selected key
    const enteredNumber = this.dataset.number;
    
    //firstNumberEntered flag is changed to true to indicate an operator has been selected and user is on to second number
    if (!firstNumberEntered) {
        firstNumber += enteredNumber;
        updateDisplay('mainDisplay');

    } else {
        secondNumber += enteredNumber;
        //console.log(secondNumber);
        updateDisplay('mainDisplay');

    }  
}

function updateDisplay(displayToUpdate){

    if (displayToUpdate == 'secondaryDisplay') {
        if (secondNumber != '') {
            //display the whole string
            sumDisplay.innerHTML = firstNumber + ' ' + operator + ' ' + secondNumber  + ' = ';
        } else {
            //display up to the operator
            sumDisplay.innerHTML = firstNumber + ' ' + operator + ' ';
        }
    }

    if (displayToUpdate == 'mainDisplay') {
        if (!firstNumberEntered) {
            display.innerHTML = firstNumber;
        } else {
            display.innerHTML = secondNumber;
        }
        
    }
    

}

function orchestrateOperator(){

    //first check that a number has been entered, otherwise kill the function
    if (firstNumber == '') {
        return;
    }

    //if operator is already populated, it looks like the user is trying to chain together a sum 
    if (operator != '' && firstNumber != '') {
     sumUp();   
    }
    
    operator = this.innerHTML;

    //update flag to say first number has been entered
    firstNumberEntered = true;

    updateDisplay('secondaryDisplay');
}

function sumUp(){

    //kill if second number is empty to pretend user repeatedly pressing when there is nothing to calculate
    if (secondNumber == '') {
        return;
    }

   updateDisplay('secondaryDisplay')

   
   //call operate with the sum details
    const result = operate(operator, parseInt(firstNumber), parseInt(secondNumber));
    
    //display result and clear down variables
    display.innerHTML = result;

    firstNumber = result;
    secondNumber = '';

}


let firstNumber = '';
let secondNumber = '';
let operator = '';
let firstNumberEntered = false;


const numberKeys = document.querySelectorAll('.number-key');
const operatorKeys = document.querySelectorAll('.operator-key');
const display = document.getElementById('number-display');
const sumDisplay = document.getElementById('sum-display');
const sumkey = document.querySelector('.sum-key')

numberKeys.forEach(key => key.addEventListener('click', getUserNumberInput));
operatorKeys.forEach(key => key.addEventListener('click', orchestrateOperator));
sumkey.addEventListener('click', sumUp);