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

function gameButtonResponse(event) {
  const playerChoice = event.target.textContent;
  const computerChoice = getComputerChoice();

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (playerChoice === computerChoice) {
    console.log("It's a tie.");
    return;
  }

  console.log(`${playerChoice} vs ${computerChoice}`);
  winningCombos[playerChoice] === computerChoice
    ? ++playerScore : ++computerScore;

  updateScore();
}


function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  document.removeEventListener("click", resetGame);
}

function updateScore() {
  const currScore = document.querySelector("#score");
  const playAgainMessage = " Press Anywhere with the mouse to play again.";

  if (playerScore == 5) {
    currScore.textContent = `You win. Nice job.${playAgainMessage}`;
    waitForReset();
  }
  else if (computerScore == 5) {
    currScore.textContent = `Computer Wins. Better Luck Next Time${playAgainMessage}`;
    waitForReset();
    
  }
  else {
    currScore.textContent = `Player: ${playerScore} - Computer ${computerScore}`;
  }
}

function waitForReset(){
  setTimeout(() => {
    document.addEventListener("click", resetGame, { once: true });
  }, 10);
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", gameButtonResponse);
}




// function playGame() {
//   var playerWins = 0;
//   var compWins = 0;
//   while (playerWins < 3 && compWins < 3) {
//     var computerChoice = getComputerChoice();
//     var playerChoice = getPlayerChoice();
//     var result = playerChoice.length - computerChoice.length;
//     if (result == -4 || result == 1 || result == 3) {
//       console.log(`You won the round - ${playerChoice} beats ${computerChoice}.`)
//       playerWins++;
//     }
//     else if (result == 0){
//         console.log("You Tied.")
//         continue;
//     }
//     else {
//         console.log(`You lost the round - ${computerChoice} beats ${playerChoice}.`)
//         compWins++;
//     }
//   }
//   if (playerWins > compWins) {
//     console.log("Congratulations you Win!");
//   }
//   else {
//     console.log("Better luck next time...");
//   }

// }