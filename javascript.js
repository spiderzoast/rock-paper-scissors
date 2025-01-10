let userScore = 0;
let computerScore = 0;
let roundCounter = 0;

const gameContainer = document.querySelector("#game-container");

const gameOptions = document.querySelector("#game-options");

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(event.target.textContent, getComputerChoice());
  });
});

function getComputerChoice() {
  let computerChoice = "";
  let randomNumber = Math.random();
  if (randomNumber > 0 && randomNumber <= 0.33) {
    computerChoice = "Rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  console.log(`The Computer chooses: ${computerChoice}`);
  return computerChoice;
}

function playRound(humanSelection, computerSelection) {
  roundCounter += 1;
  if (humanSelection === computerSelection) {
      roundTie(humanSelection);
  } else if (
      (humanSelection === "Rock" && computerSelection === "Scissors") ||
      (humanSelection === "Paper" && computerSelection === "Rock") ||
      (humanSelection === "Scissors" && computerSelection === "Paper")
  ) {
      userWins(humanSelection, computerSelection);
  } else if (
      (humanSelection === "Rock" && computerSelection === "Paper") ||
      (humanSelection === "Paper" && computerSelection === "Scissors") ||
      (humanSelection === "Scissors" && computerSelection === "Rock")
  ) {
      computerWins(humanSelection, computerSelection);
  }
  if (userScore === 5 || computerScore === 5) {
    announceWinner();
  }
  return;
}

function roundTie(humanSelection) {
  const thisRound = document.createElement("p");
  thisRound.textContent = `Round ${roundCounter}: It's a tie! Both you and the computer chose ${humanSelection}.`;
  gameContainer.appendChild(thisRound);
  return;
}

function userWins(humanSelection, computerSelection) {
  userScore += 1;
  const thisRound = document.createElement("p");
  thisRound.textContent = `Round ${roundCounter}: You win! ${humanSelection} beats ${computerSelection}. — You: ${userScore} The Computer: ${computerScore}`;
  gameContainer.appendChild(thisRound);
  return;
}

function computerWins(humanSelection, computerSelection) {
  computerScore += 1;
  const thisRound = document.createElement("p");
  thisRound.textContent = `Round ${roundCounter}: You lose! ${computerSelection} beats ${humanSelection}. — You: ${userScore} The Computer: ${computerScore}`;
  gameContainer.appendChild(thisRound);
  return;
}

function announceWinner() {
  gameOptions.remove();
  console.log(userScore);
  console.log(computerScore);
  if (userScore === 5) {
    const gameWinner = document.createElement("h4");
    gameWinner.textContent = "You win the game! You reached 5 wins first. — (Reload the page to play again.)";
    gameContainer.appendChild(gameWinner);
  } else {
    const gameWinner = document.createElement("h4");
    gameWinner.textContent = "You lose the game! The computer reached 5 wins first... good luck next time! — (Reload the page to play again.)";
    gameContainer.appendChild(gameWinner);
  }
  return;
}