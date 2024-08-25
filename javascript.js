// Generate the computer's choice
let computerChoice;
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return computerChoice = "rock";
    if (randomChoice == 2) return computerChoice = "paper";
    if (randomChoice == 3) return computerChoice = "scissors";
}

// Create the scores
let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector(".results");
const result = document.createElement("p");

// Play a single round
function playRound(humanChoice) {
getComputerChoice();
console.log("Human: " + humanChoice);
console.log("Computer: " + computerChoice);
if (humanChoice === computerChoice) {
    result.textContent = `It's a draw! You both chose ${humanChoice}.`; 
    resultsDiv.appendChild(result);
}
else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`; 
    resultsDiv.appendChild(result);
}
else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`; 
    resultsDiv.appendChild(result);
}
else return console.log("Please type only 1, 2, or 3");
}

// Function to play 5 rounds
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


const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
    playRound("rock",);
    console.log(humanScore);
    console.log(computerScore);

})

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
    playRound("paper");
    console.log(humanScore);
    console.log(computerScore);
})

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
    console.log(humanScore);
    console.log(computerScore);
})


// Show the scores in console
console.log("Your score is: " + humanScore);
console.log("The computer's score is: " + computerScore);

