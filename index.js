const passwordInput = document.getElementById(`password`);
const passwordSpan = document.getElementById(`passwordValueSpan`)
const passwordSlider = document.getElementById(`passwordLength`)
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const lowerCase = `abcdefghijklmnopqrstuvwxyz`;
const number = `0123456789`;
const symbol = `@#$^&&*()_+~|}{[]></-=`;

const allChars = upperCase + lowerCase + number + symbol;

function process() {
    const length = passwordSlider.value; // Obtém o comprimento selecionado pelo slider
    let password = ``;

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }


    passwordInput.value = password;
}

function sliderfn() {
    passwordSlider.addEventListener(`input`, () => {
        passwordSpan.textContent = passwordSlider.value
    })
}

function copy() {
    passwordInput.select();
    document.execCommand(`copy`);

    window.getSelection().removeAllRanges()

    if (passwordInput.value === ``) {
        alert(`Please, generate a password first`)
    } else {
        alert(`Copied`)
    }
}

sliderfn()
