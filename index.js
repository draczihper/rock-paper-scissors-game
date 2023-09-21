
randomChoice = ['Rock', 'Scissors', 'Paper']

let computerScore = 0;
let playerScore = 0;

function startGame() {
    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * 3);
        let computerChoice;
        if (randomIndex == 0) {
            computerChoice = randomChoice[randomIndex];
        } else if (randomIndex == 1) {
            computerChoice = randomChoice[randomIndex];
        } else {
            computerChoice = randomChoice[randomIndex];
        }
        return computerChoice;
    }
    
    const playerSelection = playerChoice();
    
    function playerChoice() {
        const userChoice = prompt("Write your selection of either Rock, Paper or Scissors: ");
        const choice = userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
        if (choice == 'Rock' || choice == 'Paper' || choice == 'Scissors') {
            return choice;
        } else {
            alert(choice + " is an invalid input! Please choose either Rock, Paper or Scissors");
            return choice;
        }
    }
    
    console.log("You selected " + playerSelection);
    const computerSelection = getComputerChoice();
    console.log("The computer selected " + computerSelection);
    
    
    function playRound(playerSelection, computerSelection) {
        if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
            console.log("You lost this round, Rock beats Scissors!");
            computerScore++;
        } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
            console.log("You won this round, Paper beats Rock!");
            playerScore++;
        } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
            console.log("You lost this round, Scissors beats Paper!");
            computerScore++;
        } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
            console.log("You won this round, Rock beats Scissors!");
            playerScore++;
        } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
            console.log("You lost this round, Paper beats Rock!");
            computerScore++;
        } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
            console.log("You won this round, Scissors beats Rock!");
            playerScore++;
        } else if (computerSelection == playerSelection) {
            console.log("It's a tie!")
        } else {
            return;  
        }  
    }
    playRound(playerSelection, computerSelection);
    
}



let loopTime = 5
function game() {
   // playRound(playerSelection, computerSelection);
   for (i = 1; i <= loopTime; i++) {
    startGame(); 
    if (playerScore == 1 && computerScore == 1) {
        playerScore++;
        computerScore++;
    }
    console.log(`You: ${playerScore} | Computer: ${computerScore}`);
   }
}

game();
