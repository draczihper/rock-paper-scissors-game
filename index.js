
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




