
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1
    return randomChoice
}

console.log(getComputerChoice());


// Generates random number between 1 and 3
// This number will represent rock, paper or scissors
let randomResult = Math.floor(Math.random() * 3) + 1;
