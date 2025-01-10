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

function playRound (humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
        console.log(`It's a draw! Both you and The Computer chose ${humanSelection}.`);
        return 0;
  } else if (
      (humanSelection === "Rock" && computerSelection === "Scissors") ||
      (humanSelection === "Paper" && computerSelection === "Rock") ||
      (humanSelection === "Scissors" && computerSelection === "Paper")
    ) {
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
        return 1;
  } else if (
      (humanSelection === "Rock" && computerSelection === "Paper") ||
      (humanSelection === "Paper" && computerSelection === "Scissors") ||
      (humanSelection === "Scissors" && computerSelection === "Rock")
    ) {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
        return 2;
  } else {
        console.log("Uh Oh.. Something went wrong.")
        return 0;
  }
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click",() => {
    playRound(getComputerChoice(), button.textContent);
  });
});