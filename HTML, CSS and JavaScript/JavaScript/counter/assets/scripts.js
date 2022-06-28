var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');

if (incrementButton) {
    incrementButton.addEventListener("click", increment);
}

if (decrementButton) {
    decrementButton.addEventListener("click", decrement);
}

function increment() {
    currentNumber += 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'green';
    }
}

function decrement() {
    currentNumber -= 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}