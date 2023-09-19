
randomChoice = ['Rock', 'Scissors', 'Paper']


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
        console.log(choice + " is an invalid input! Please choose either Rock, Paper or Scissors");
        userChoice;
        return;
    }
}




console.log("You selected " + playerSelection);
const computerSelection = getComputerChoice();
console.log("The computer selected " + computerSelection);


function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Rock' && playerSelection == 'Scissors') {
        console.log("You loose, Rock beats Scissors!");
    } else if (computerSelection == 'Rock' && playerSelection == 'Paper') {
        console.log("You win, Paper beats Rock!");
    } else if (computerSelection == 'Scissors' && playerSelection == 'Paper') {
        console.log("You loose, Scissors beats Paper!");
    } else if (computerSelection == 'Scissors' && playerSelection == 'Rock') {
        console.log("You win, Rock beats Scissors!");
    } else if (computerSelection == 'Paper' && playerSelection == 'Rock') {
        console.log("You loose, Paper beats Rock!");
    } else if (computerSelection == 'Paper' && playerSelection == 'Scissors') {
        console.log("You win, Scissors beats Rock!");
    } else {
        console.log("It's a draw!")
    }
}


playRound(playerSelection, computerSelection);

