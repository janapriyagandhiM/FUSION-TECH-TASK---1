function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value.length > 0) {
        display.value += ' ' + operator + ' ';
    }
}

function appendDot() {
    const display = document.getElementById('display');
    const current = display.value;
    if (current.length > 0 && !current.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}