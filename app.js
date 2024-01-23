const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playChoice) {
  const computerChoise = choices[Math.floor(Math.random() * 3)];

  //   console.log(computerChoise);
  let result = "";

  if (playChoice === computerChoise) {
    result = "DRAW";
  } else {
    switch (playChoice) {
      case "rock":
        result = computerChoise === "scissors" ? "YOU WIN" : "YOU LOSE";
        break;
      case "paper":
        result = computerChoise === "rock" ? "YOU WIN" : "YOU LOSE";
        break;
      case "scissors":
        result = computerChoise === "paper" ? "YOU WIN" : "YOU LOSE";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER : ${playChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoise}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
