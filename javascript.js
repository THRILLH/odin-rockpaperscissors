let computerChoice;
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice == 1) return computerChoice = "rock";
    if (randomChoice == 2) return computerChoice = "paper";
    if (randomChoice == 3) return computerChoice = "scissors";
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector(".results");
const result = document.createElement("p");

const scoreDiv = document.querySelector(".score");
const score1 = document.createElement("p");
const score2 = document.createElement("p");

function showResults() {
    resultsDiv.appendChild(result);
    score1.textContent = `Your score: ${humanScore}`;
    scoreDiv.appendChild(score1);
    score2.textContent = `Computer score: ${computerScore}`;
    scoreDiv.appendChild(score2);
}


// Play a single round
function playRound(humanChoice) {
getComputerChoice();
if (humanChoice === computerChoice) {
    result.textContent = `It's a draw! You both chose ${humanChoice}.`; 
    showResults();
}
else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`; 
    showResults();
}
else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
    computerScore++
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`; 
    showResults();
}
else return console.log("Please type only 1, 2, or 3");
}

// Make the 3 buttons play one round
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

