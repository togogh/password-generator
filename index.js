let slider = document.getElementById("passwordLengthSlider");
let output = document.getElementById("passwordLengthDisplay");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

let numbersCheckbox = document.getElementById("includeNumbers");
let symbolsCheckbox = document.getElementById("includeSymbols");

let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

function generatePassword(characters) {
    password = ""
    for (let i=0; i<slider.value; i++) {
        randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function generatePasswords() {
    let characters = letters
    if (numbersCheckbox.checked) {
        characters = characters.concat(numbers)
    }
    if (symbolsCheckbox.checked) {
        characters = characters.concat(symbols)
    }
    passwordOne.textContent = generatePassword(characters)
    passwordTwo.textContent = generatePassword(characters)
    message.textContent = "Click on password to copy."
}

let message = document.getElementById("message");

function copyToClipboard(num) {
    if (num === '1') {
        passwordText = passwordOne.textContent
    } else {
        passwordText = passwordTwo.textContent
    }
    if (passwordText.length === 0) {
        message.textContent = "No passwords generated yet."
    } else {
        window.prompt("Copy to clipboard: Ctrl+C Enter (or CMD+C Enter on Mac)", passwordText);
        message.textContent = "Copied password #" + num + " to clipboard."
    }
}