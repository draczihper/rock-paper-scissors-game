const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDiv = document.getElementById('results');
const scoreDiv= document.getElementById('score');
const computerChoiceSpan = document.getElementById('computer-choice');
const playerChoiceSpan = document.getElementById('player-choice');
const computerScoreSpan = document.getElementById('computer-score');
const playerScoreSpan = document.getElementById('player-score');
const winnerDiv = document.getElementById('winner');

let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0;

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
            resultDiv.innerHTML = `<span>You lost this round, Rock beats Scissors.</span>`;
            computerScore++;
        } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
            resultDiv.innerHTML = `<span>You won this round, Paper beats Rock.</span>`;
            playerScore++;
        } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
            resultDiv.innerHTML = `<span>You lost this round, Scissors beats Paper.</span>`;
            computerScore++;
        } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
            resultDiv.innerHTML = `<span>You won this round, Rock beats Scissors.</span>`;
            playerScore++;
        } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
            resultDiv.innerHTML = `<span>You lost this round, Paper beats Rock.</span>`;
            computerScore++;
        } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
            resultDiv.innerHTML = `<span>You won this round, Scissors beats Rock.</span>`;
            playerScore++;
        } else if (computerSelection == playerSelection) {
            resultDiv.innerHTML = `<span>It's a tie.</span>`;
            console.log("It's a tie!")
        } else {
            return;
        }
        roundsPlayed++;
    if (roundsPlayed === 5) {
        endGame();
    }
    }

    function endGame() {
        playerScoreSpan.innerText = `Player: ${playerScore}`;
        computerScoreSpan.innerText = `Computer: ${computerScore} `;
        if (playerScore > computerScore) {
            winnerDiv.innerHTML = `<span> YOU WON!, AI has no match against you :)</span>`;
        } else if (playerScore < computerScore) {
            winnerDiv.innerHTML = `<span>YOU LOST BUT BETTER LUCK NEXT TIME</span>`;
        } else {
            winnerDiv.innerHTML = `<span>IT'S EVEN</span>`;
        }
        
    }



