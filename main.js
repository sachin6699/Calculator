// 1. object of stored data
const calculator = {
    displayValue: '0',
    firstOperand: null, // store first operand data
    waitingForSecondOperand: false, // check if both first and second operator have been inputted
    operator: null, // store operator for an experssion
}


// 2. input numbers into the textbox

const inputDigit = (digit) => {
  const { displayValue } = calculator;
  //now overwrite the displayValue
  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit; // ternary operator used to check if the current value displayed on the calc is zero, if so the calc.displayValue overwrites with what digit was clicked
}

// 3. function to update display
const updateDisplay = () => {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}
updateDisplay()

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {

  const { target } = event; // same as const target = event.target;
  

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {  //if classlist contains operator, log the operator and the value
    console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
  }

  if (target.classList.contains('all-clear')) {
    console.log('clear', target.value);
    return;
  }

  inputDigit(target.value);
  updateDisplay();
});







