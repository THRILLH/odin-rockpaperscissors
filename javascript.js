
let computerChoice;
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return computerChoice = "rock";
    if (randomChoice == 2) return computerChoice = "paper";
    if (randomChoice == 3) return computerChoice = "scissors";
}

let humanChoice;
function getHumanChoice() {
    let humanChoicePrompt = prompt("Press 1 for rock, 2 for paper, or 3 for scissors");
    if (humanChoicePrompt === "1") return humanChoice = "rock";
    if (humanChoicePrompt === "2") return humanChoice = "paper";
    if (humanChoicePrompt === "3") return humanChoice = "scissors";
    else return console.log("Please type only 1, 2, or 3");

}

let humanScore = 0;
let computerScore = 0;

getComputerChoice();
getHumanChoice();

console.log("You chose " + humanChoice);
console.log("The computer chose " + computerChoice);
