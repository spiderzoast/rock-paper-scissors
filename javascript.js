
function getComputerChoice() {
  let computerChoice = "";
  let randomNumber = Math.floor((Math.random() * 100));
  if (randomNumber > 0 && randomNumber <= 33) {
    computerChoice = "Rock";
  } else if (randomNumber > 33 && randomNumber <= 66) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

console.log(getComputerChoice());