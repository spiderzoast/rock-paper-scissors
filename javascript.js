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
  let humanChoice = fixCaseSensitive(prompt("Choose your option between Rock, Paper or Scissors:"));
  if (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors") {
    do {
      humanChoice = fixCaseSensitive(prompt("Invalid choice, please choose a valid option between Rock, Paper or Scissors:"));
    } while (humanChoice != "Rock" && humanChoice != "Paper" && humanChoice != "Scissors");
  }
  console.log(`You chose: ${humanChoice}`);
  return humanChoice;
}

function fixCaseSensitive (stringToFix) {
  return String(stringToFix.charAt(0).toUpperCase()) + String(stringToFix.slice(1).toLowerCase());
}

getHumanChoice();