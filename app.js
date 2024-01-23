const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

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
      break;
    case "YOU LOSE":
      resultDisplay.classList.add("redText");
      break;
  }
}
