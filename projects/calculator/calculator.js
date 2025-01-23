const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
    history: ''
};

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    calculator.history = '';
}

function updateDisplay() {
    const display = document.querySelector('.calculator-display');
    const history = document.querySelector('.calculator-history');
    display.textContent = calculator.displayValue;
    history.textContent = calculator.history;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});

document.addEventListener('keydown', (event) => {
    const { key } = event;

    // Check if the focus is on any of the wage calculator's input fields
    const activeElement = document.activeElement;
    const isWageCalculatorActive = activeElement.classList.contains('wage-input');

    if (isWageCalculatorActive) {
        return; // Do nothing if the wage calculator is active
    }

    if (key >= 0 && key <= 9) {
        inputDigit(key);
        updateDisplay();
    } else if (key === '.') {
        inputDecimal(key);
        updateDisplay();
    } else if (key === '=' || key === 'Enter') {
        handleOperator('=');
        updateDisplay();
    } else if (key === 'Escape' || key === 'Delete') {
        resetCalculator();
        updateDisplay();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleOperator(key);
        updateDisplay();
    } else {
        console.log('Invalid key');
    }
});