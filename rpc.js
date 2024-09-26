function getComputerChoice() {
  choice = Math.random();
  if (choice < 1 / 3) {
    return "rock";
  } else if (choice < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getPlayerChoice() {
  do {
    var choice = prompt("Enter Choice (must be rock, paper, or scissors)");
    var cleanedChoice = choice.toLowerCase();
  } while (
    cleanedChoice != "rock" &&
    cleanedChoice != "paper" &&
    cleanedChoice != "scissors"
  );
  return cleanedChoice;
}

function playGame() {
  var playerWins = 0;
  var compWins = 0;
  while (playerWins < 3 && compWins < 3) {
    var computerChoice = getComputerChoice();
    var playerChoice = getPlayerChoice();
    var result = playerChoice.length - computerChoice.length;
    if (result == -4 || result == 1 || result == 3) {
      console.log(`You won the round - ${playerChoice} beats ${computerChoice}.`)
      playerWins++;
    }
    else if (result == 0){
        console.log("You Tied.")
        continue;
    }
    else {
        console.log(`You lost the round - ${computerChoice} beats ${playerChoice}.`)
        compWins++;
    }
  }
  if (playerWins > compWins) {
    console.log("Congratulations you Win!");
  }
  else {
    console.log("Better luck next time...");
  }

}

console.log("Hello World");
playGame();
