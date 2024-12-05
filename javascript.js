let humanScore = 0;
let computerScore = 0;

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
  console.log(`The computer chose: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose your option between Rock, Paper or Scissors:");
  if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
    do {
      humanChoice = prompt("Invalid choice, please choose a valid option between Rock, Paper or Scissors:");
    } while (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors");
  }
  console.log(`You chose: ${humanChoice}`);
  return humanChoice;
}