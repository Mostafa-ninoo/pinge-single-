const button = document.querySelector('#submit-button');
const input = document.querySelector('#email-input');
const error = document.querySelector('#error');
const form = document.querySelector('form');

form.addEventListener('submit', right)

function right(event) {
    event.preventDefault();

    const inputValue = input.value.trim();
    console.log(inputValue)

    if (inputValue === '' || !isValid(inputValue)) {
        error.style.display = 'block';
        input.style.borderColor = 'hsl(354, 100%, 66%)';
    } else {
        error.style.display = 'none';
        input.style.borderColor = 'hsl(0, 0%, 59%)';
        input.style.borderStyle = 'solid';
    }
}

function isValid(input) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}