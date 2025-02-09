const words = ["CRANE", "PLANT", "SHARK", "TIGER", "LEMON"]; // Add more 5-letter words
const board = document.getElementById("board");
const message = document.getElementById("message");
const keys = document.querySelectorAll("#keyboard button");

let solution = words[Math.floor(Math.random() * words.length)];
let currentRow = 0;
let currentTile = 0;
let gameOver = false;

// Create the game board
for (let i = 0; i < 30; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  board.appendChild(tile);
}

function handleKeyPress(key) {
  if (gameOver) return;

  if (/^[a-z]$/.test(key)) {
    if (currentTile < 5) {
      const tiles = Array.from(board.children);
      tiles[currentRow * 5 + currentTile].textContent = key.toUpperCase();
      currentTile++;
    }
  } else if (key === "backspace") {
    if (currentTile > 0) {
      const tiles = Array.from(board.children);
      currentTile--;
      tiles[currentRow * 5 + currentTile].textContent = "";
    }
  } else if (key === "enter") {
    if (currentTile === 5) {
      checkRow();
    }
  }
}

function checkRow() {
  const tiles = Array.from(board.children);
  const rowTiles = tiles.slice(currentRow * 5, (currentRow + 1) * 5);
  const guess = rowTiles.map((tile) => tile.textContent).join("");

  if (!words.includes(guess)) {
    showMessage("Not in word list");
    return;
  }

  const solutionChars = solution.split("");
  const correct = Array(5).fill(false);

  // First pass: Check for correct letters in the correct position
  rowTiles.forEach((tile, index) => {
    if (guess[index] === solutionChars[index]) {
      tile.classList.add("correct-position");
      solutionChars[index] = null;
      correct[index] = true;
    }
  });

  // Second pass: Check for correct letters in the wrong position
  rowTiles.forEach((tile, index) => {
    if (!correct[index] && solutionChars.includes(guess[index])) {
      tile.classList.add("correct-letter");
      solutionChars[solutionChars.indexOf(guess[index])] = null;
    } else if (!correct[index]) {
      tile.classList.add("incorrect");
    }
  });

  updateKeyboard(guess, correct);

  if (guess === solution) {
    showMessage("Congratulations!");
    gameOver = true;
  } else {
    currentRow++;
    currentTile = 0;
    if (currentRow === 6) {
      showMessage(`Game Over! The word was: ${solution}`);
      gameOver = true;
    }
  }
}

function updateKeyboard(guess, correct) {
  guess.split("").forEach((letter, index) => {
    const keyButton = document.querySelector(`[data-key="${letter.toLowerCase()}"]`);
    if (correct[index]) {
      keyButton.classList.add("used-correct");
    } else if (solution.includes(letter)) {
      keyButton.classList.add("used-present");
    } else {
      keyButton.classList.add("used-absent");
    }
  });
}

function showMessage(msg) {
  message.textContent = msg;
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "enter" || key === "backspace" || /^[a-z]$/.test(key)) {
    handleKeyPress(key);
  }
});

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.getAttribute("data-key");
    handleKeyPress(keyValue);
  });
});
