const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('results');
const computerChoiceSpan = document.getElementById('computer-choice');
const playerChoiceSpan = document.getElementById('player-choice');

let computerScore = 0;
let playerScore = 0;

    function choiceOfComputer() {
        const randomChoice = ['Rock', 'Paper', 'Scissors']
        const randomIndex = Math.floor(Math.random() * 3);
        let computerChoice;
        if (randomIndex == 0) {
            computerChoice = randomChoice[randomIndex];
        } else if (randomIndex == 1) {
            computerChoice = randomChoice[randomIndex];
        } else {
            computerChoice = randomChoice[randomIndex];
        }
        computerChoiceSpan.innerText = `The computer selected: ${computerChoice} \n`;
        return computerChoice;
    }
    
    let selected;
    let playerSelection;
    let computerSelection;

    rockButton.addEventListener('click', () => {
        selected = 'rock';
        const playerSelection = selected[0].toUpperCase() + selected.slice(1);
        playerChoiceSpan.innerText = `You selected: ${playerSelection} \n`;
        computerSelection = choiceOfComputer();
        playRound(playerSelection, computerSelection)
      });

      paperButton.addEventListener('click', () => {
        selected = 'paper';
        const playerSelection = selected[0].toUpperCase() + selected.slice(1);
        playerChoiceSpan.innerText = `You selected: ${playerSelection} \n`;
        computerSelection = choiceOfComputer();
        playRound(playerSelection, computerSelection)
      });
      
      scissorsButton.addEventListener('click', () => {
        selected = 'scissors';
        const playerSelection = selected[0].toUpperCase() + selected.slice(1);
        playerChoiceSpan.innerText = `You selected: ${playerSelection} \n`;
        computerSelection = choiceOfComputer();
        playRound(playerSelection, computerSelection);
    });

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



// let loopTime = 5
// function game() {
//     for (i = 1; i <= loopTime; i++) {
//         startGame();
//         console.log(`You: ${playerScore} | Computer: ${computerScore}`);
//     }
//     if (playerScore > computerScore) {
//         console.log("YOU WON!")
//     } else if (playerScore < computerScore) {
//         console.log("YOU LOST BUT BETTER LUCK NEXT TIME")
//     } else {
//         console.log("IT'S A EVEN")
//     }
// }

// game();


