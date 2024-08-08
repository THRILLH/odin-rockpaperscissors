
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return "Rock";
    if (randomChoice == 2) return "Paper";
    if (randomChoice == 3) return "Scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Press 1 for rock, 2 for paper, or 3 for scissors");
    if (humanChoice === "1") return console.log("You chose rock");
    if (humanChoice === "2") return console.log("You chose paper");
    if (humanChoice === "3") return console.log("You chose scissors");
    else return console.log("Please type only 1, 2, or 3");

}

getHumanChoice();

console.log(getComputerChoice());
