let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let gussedNumber = parseInt(userInput.value);

    if (gussedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c ";
    } else if (gussedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c ";
    }
    else if (gussedNumber === randomNumber) {
        gameResult.textContent = "Congratulations! You Got It Right.";
        gameResult.style.backgroundColor = "green ";
    }
    else  {
        gameResult.textContent = "Please provide a valid input!";
        gameResult.style.backgroundColor = "red ";
    }
}