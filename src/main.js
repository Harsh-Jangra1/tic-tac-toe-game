let currentPlayerIsO = true;
let gameOver = false;

let newGame = document.querySelector('.btn--new');
let reGame = document.querySelector('.btn--restart');
let boxes = document.querySelectorAll('.box');

let winnerPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (const pattern of winnerPattern) {
    const [a, b, c] = pattern;

    const val1 = boxes[a].textContent.trim();
    const val2 = boxes[b].textContent.trim();
    const val3 = boxes[c].textContent.trim();

    if (val1 && val1 === val2 && val2 === val3) {
      gameOver = true;
      alert(`player ${val1} is Win`);
      return;
    }
  }
}

boxes.forEach((box) => {
  box.addEventListener('click', (evt) => {
    if (gameOver) return;
    if (evt.target.textContent.trim() !== '') return;

    const playerTurn = currentPlayerIsO ? '⭕' : '❌';
    evt.target.textContent = playerTurn;
    checkWinner();

    currentPlayerIsO = !currentPlayerIsO;

    if (checkWinner == true) {
      setInterval(resetGame, 1000);
    }
  })
})

function resetGame() {
  boxes.forEach(box => box.textContent = '');
  currentPlayerIsO = true;
  gameOver = false;
}

newGame.addEventListener('click', resetGame);
reGame.addEventListener('click', resetGame);