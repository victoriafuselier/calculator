const clearBtn = document.querySelector('#clear-btn');
const equalBtn = document.querySelector('#equal-btn');
const input = document.querySelector('input');
const display = document.querySelector('#display');
const numberBtns = document.getElementsByClassName('number-btn');
const operatorBtns = document.getElementsByClassName('operator-btn');

for (let i=0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', function() {
        appendToDisplay(this.textContent);
    });
}

for (let i=0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', function() {
        appendToDisplay(this.textContent);
    });
}

function appendToDisplay(buttonText) {
    display.value += buttonText;
}

function clearDisplay() {
    input.value = '';
}

function calculate() {
    try {
        const result = eval(input.value);
        if (isNaN(result)) {
            display.value = 'Error';
        } else {
            display.value = result;
        }
    } catch (error) {
        input.value = 'Error';
    }
}

clearBtn.addEventListener('click', ()=> {
    clearDisplay();
});

equalBtn.addEventListener('click', ()=> {
    calculate();
});

