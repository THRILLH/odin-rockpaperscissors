// Generate the computer's choice
let computerChoice;
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return computerChoice = "rock";
    if (randomChoice == 2) return computerChoice = "paper";
    if (randomChoice == 3) return computerChoice = "scissors";
}

// Generate a prompt to get the human's choice
let humanChoice;
function getHumanChoice() {
    let humanChoicePrompt = prompt("Press 1 for rock, 2 for paper, or 3 for scissors");
    if (humanChoicePrompt === "1") return humanChoice = "rock";
    if (humanChoicePrompt === "2") return humanChoice = "paper";
    if (humanChoicePrompt === "3") return humanChoice = "scissors";
    else return console.log("Please type only 1, 2, or 3");

}

// Create the scores
let humanScore = 0;
let computerScore = 0;

// Play a single round
function playRound(human, computer) {
getComputerChoice();
getHumanChoice();
if (humanChoice === computerChoice) {
    return console.log(`Draw. You both chose ${humanChoice}.`);
}
else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++
    return console.log(`You win!`);
}
else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++
    return console.log(`You lose.`);
}
else return console.log("Something went wrong");
}
playRound();

// Show the choices in console
console.log("You chose " + humanChoice);
console.log("The computer chose " + computerChoice);
console.log("Your score is: " + humanScore);
console.log("The computer's score is: " + computerScore);