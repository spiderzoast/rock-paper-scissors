// Computer randomly chooses an option
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

// User chooses one of the 3 possible options
function getHumanChoice() {
  let humanChoice = fixCaseSensitive(prompt("Choose your option between Rock, Paper or Scissors:"));
  if (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
    do {
      humanChoice = fixCaseSensitive(prompt("*Invalid choice* Please choose a valid option between Rock, Paper or Scissors:"));
    } while (humanChoice !== "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors");
  }
  console.log(`You choose: ${humanChoice}`);
  return humanChoice;
}

// This makes it so the user can write variations such as roCK, PAPER or sciSSors and it always returns in the same format,
// basically eliminating case-senstivity, though they're still required to write the word properly.
function fixCaseSensitive (stringToFix) {
  return String(stringToFix.charAt(0).toUpperCase()) + String(stringToFix.slice(1).toLowerCase());
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

// Play five rounds where the user has to input one of 3 options and outputs the result of each round and the final winner
function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let gameResult;

  for (let roundCounter = 1; roundCounter < 6; roundCounter++){
    console.log(`Round ${roundCounter}!`);
    gameResult = playRound(getHumanChoice(), getComputerChoice());
    if (gameResult === 1){
      humanScore++;
    } else if (gameResult === 2) {
        computerScore++;        
    }
    console.log(`Current Score: You (${humanScore}), The Computer (${computerScore})`)
  }

  if (humanScore > computerScore) {
    console.log("And the final winner is...You!");
  } else if (humanScore < computerScore) {
    console.log("And the final winner is...The Computer!");
    console.log("Better luck next time...")
  } else {
    console.log("And the final winner is... no one! You and The Computer had the same score!");
  }
  return;
}

// Play one game, perhaps will implement a replay in the future, meanwhile refreshing the page is necessary.
playGame();