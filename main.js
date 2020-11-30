// 1. object of stored data
const calculator = {
    displayValue = '0',
    firstOperand: null, // store first operand data
    waitingForSecondOperand: false, // check if both first and second operator have been inputted
    operator: null, // store operator for an experssion
}

// 2. function to update display
const updateDisplay = () => {
    const display = document.querySelector('.textview');
    display.value = calculator.displayValue;
}
updateDisplay()

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event; // same as const target = event.target;
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
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

  console.log('digit', target.value);
});