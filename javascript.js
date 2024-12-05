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
  console.log(randomNumber);
  console.log(computerChoice);
  return computerChoice;
}