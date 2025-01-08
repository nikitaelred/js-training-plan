const startGameBtn = document.getElementById("start-game-btn");

const SELECTION_ROCK = "rock";
const SELECTION_PAPER = "paper";
const SELECTION_SCISSORS = "scissors";
const DEFAULT_USER_CHOICE = SELECTION_ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WON";
const RESULT_COMPUTER_WINS = "COMPUTER WON";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt("rock, paper or scissors?", "").toLowerCase();
  if (
    selection !== SELECTION_ROCK &&
    selection !== SELECTION_PAPER &&
    selection !== SELECTION_SCISSORS
  ) {
    alert("Invalid Choice! We chose Rock for you");
    return;
  }

  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return SELECTION_ROCK;
  } else if (randomValue < 0.67) {
    return SELECTION_PAPER;
  } else {
    return SELECTION_SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === SELECTION_ROCK && pChoice === SELECTION_PAPER) ||
      (cChoice === SELECTION_PAPER && pChoice === SELECTION_SCISSORS) ||
      (cChoice === SELECTION_SCISSORS && pChoice === SELECTION_ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === SELECTION_ROCK && pChoice === SELECTION_PAPER) ||
//     (cChoice === SELECTION_PAPER && pChoice === SELECTION_SCISSORS) ||
//     (cChoice === SELECTION_SCISSORS && pChoice === SELECTION_ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener("click", function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting....");
  const playerSelection = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, You `;
  if (winner === RESULT_DRAW) {
    message += "had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message += "WON";
  } else {
    message += "Lost";
  }

  alert(message);
  gameIsRunning = false;
});
