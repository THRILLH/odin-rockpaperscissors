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
    else return humanChoice = null;

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
    return console.log(`You win! ${humanChoice + " beats " + computerChoice}`);
}
else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++
    return console.log(`You lose. ${computerChoice + " beats " + humanChoice}`);
}
else return console.log("Please type only 1, 2, or 3");
}

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore) return console.log("You won the game!");
    else if (computerScore > humanScore) return console.log("You lost the game!");
    else if (computerScore === humanScore) return console.log("The game was a tie");
}

playGame();

// Show the scores in console
console.log("Your score is: " + humanScore);
console.log("The computer's score is: " + computerScore);