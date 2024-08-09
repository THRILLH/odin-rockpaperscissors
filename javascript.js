
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return "rock";
    if (randomChoice == 2) return "paper";
    if (randomChoice == 3) return "scissors";
}

let humanChoice;
function getHumanChoice() {
    let humanChoicePrompt = prompt("Press 1 for rock, 2 for paper, or 3 for scissors");
    if (humanChoicePrompt === "1") return humanChoice = "rock";
    if (humanChoicePrompt === "2") return humanChoice = "paper";
    if (humanChoicePrompt === "3") return humanChoice = "scissors";
    else return console.log("Please type only 1, 2, or 3");

}

getHumanChoice();

console.log("You chose " + humanChoice);
console.log("The computer chose " + getComputerChoice());
