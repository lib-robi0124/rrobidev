const words = ["javascript", "hangman", "coding", "vanilla", "programming"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let displayedWord = Array(chosenWord.length).fill("_");
let lives = 8;

const wordDiv = document.getElementById("word");
const alphabetDiv = document.getElementById("alphabet");
const messageDiv = document.getElementById("message");
const hangmanParts = document.querySelectorAll(".hangman .part");

function updateWordDisplay() {
  wordDiv.textContent = displayedWord.join(" ");
}

function createAlphabetButtons() {
  alphabetDiv.innerHTML = "";
  for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.textContent = String.fromCharCode(i);
    button.onclick = () => handleGuess(button.textContent);
    alphabetDiv.appendChild(button);
  }
}

function handleGuess(letter) {
  if (chosenWord.includes(letter)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        displayedWord[i] = letter;
      }
    }
    updateWordDisplay();
    if (!displayedWord.includes("_")) {
      messageDiv.textContent = "Congratulations! You won!";
      alphabetDiv.innerHTML = "";
    }
  } else {
    lives--;
    hangmanParts[8 - lives - 1].style.display = "block";
    if (lives === 0) {
      messageDiv.textContent = `Game Over! The word was: ${chosenWord}`;
      alphabetDiv.innerHTML = "";
    }
  }
}

function resetGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  displayedWord = Array(chosenWord.length).fill("_");
  lives = 8;
  messageDiv.textContent = "";
  hangmanParts.forEach((part) => (part.style.display = "none"));
  updateWordDisplay();
  createAlphabetButtons();
}

// Initialize game
updateWordDisplay();
createAlphabetButtons();
