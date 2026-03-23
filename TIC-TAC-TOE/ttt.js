let cells = document.querySelectorAll(".cell");
let statusText = document.querySelector("#status");
let resetBtn = document.querySelector("#reset");

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

let winningCombinations = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function checkWinner() {
  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameActive = false;
      statusText.textContent = `Player ${board[a]} wins!`;
      combination.forEach(i => cells[i].classList.add("winner"));
      return true;
    }
  }

  if (!board.includes('')) {
    gameActive = false;
    statusText.textContent = "It's a draw!";
    return true;
  }

  return false;
}

function handleClick() {
  let cell = this;
  let index = Number(cell.id);

  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add("taken");

  if (!checkWinner()) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Reset game
resetBtn.addEventListener('click', () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  statusText.textContent = "Player X's Turn";
  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("taken", "winner");
  });
});

// Add click events
cells.forEach(cell => cell.addEventListener("click", handleClick));
