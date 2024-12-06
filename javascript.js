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
  console.log(`The computer choses: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = fixCaseSensitive(prompt("Choose your option between Rock, Paper or Scissors:"));
  if (humanChoice != "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors") {
    do {
      humanChoice = fixCaseSensitive(prompt("*Invalid choice* Please choose a valid option between Rock, Paper or Scissors:"));
    } while (humanChoice != "Rock" && humanChoice !== "Paper" && humanChoice !== "Scissors");
  }
  console.log(`You chose: ${humanChoice}`);
  return humanChoice;
}

function fixCaseSensitive (stringToFix) {
  return String(stringToFix.charAt(0).toUpperCase()) + String(stringToFix.slice(1).toLowerCase());
}

function playRound (humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
        console.log(`It's a draw! Both you and the computer chose ${humanSelection}.`);
        return 0;
  } else if (
      (humanSelection === "Rock" && computerSelection === "Scissors") ||
      (humanSelection === "Paper" && computerSelection === "Rock") ||
      (humanSelection = "Scissors" && computerSelection == "Paper")
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

function playGame () {
  let humanScore = 0;
  let computerScore = 0;
  let gameResult;

  for (let roundCounter = 1; roundCounter < 6; roundCounter++){
    console.log(`Round ${i}!`);
    gameResult = pĺayRound();
    if (gameResult === 1){
      humanScore++;
    } else if (gameResult === 2) {
        computerScore++;        
    }
  }

  if (humanScore > computerScore) {
    console.log("And the final winner is...You!");
  } else if (humanScore < computerScore) {
    console.log("And the final winner is...The computer!");
    console.log("Better luck next time...")
  } else {
    console.log("And the winner is... no one! You and the computer had the same score!");
  }
  return;
}

playGame();