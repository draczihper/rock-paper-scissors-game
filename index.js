
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






