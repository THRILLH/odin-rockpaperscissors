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

const roundDiv = document.querySelector(".round");
const roundText = document.createElement("p");

const ngDiv = document.querySelector(".new-game");
const ngBtn = document.createElement("button");
ngBtn.textContent = "New Game";
ngBtn.addEventListener("click", () => {
    resetGame();
})

function showResults() {
    resultsDiv.appendChild(result);
    score1.textContent = `Your score: ${humanScore}`;
    scoreDiv.appendChild(score1);
    score2.textContent = `Computer score: ${computerScore}`;
    scoreDiv.appendChild(score2);
}

let roundCounter = 0;

function playRound(humanChoice) {
getComputerChoice();
roundCounter++
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
}

function endGame() {
    if (roundCounter < 5) {
    roundText.textContent = `Round: ${roundCounter + 1}`;
    roundDiv.appendChild(roundText);
    }
    else {
        if (humanScore == computerScore) roundText.textContent = "Game over! It's a tie.";
        if (humanScore > computerScore) roundText.textContent = "Game over! You win.";
        if (computerScore > humanScore) roundText.textContent = "Game over! You lose";
        rockBtn.setAttribute("disabled", "true");
        paperBtn.setAttribute("disabled", "true");
        scissorsBtn.setAttribute("disabled", "true");
        ngDiv.appendChild(ngBtn);
    }

}

endGame();

const rockBtn = document.querySelector("#rock-btn");
rockBtn.addEventListener("click", () => {
    playRound("rock",);
    endGame();

})

const paperBtn = document.querySelector("#paper-btn");
paperBtn.addEventListener("click", () => {
    playRound("paper");
    endGame();
})

const scissorsBtn = document.querySelector("#scissors-btn");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
    endGame();
})

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    document.getElementById("rock-btn").disabled = false;
    document.getElementById("paper-btn").disabled = false;
    document.getElementById("scissors-btn").disabled = false;
    resultsDiv.removeChild(result);
    scoreDiv.removeChild(score1);
    scoreDiv.removeChild(score2);
    ngDiv.removeChild(ngBtn);
    endGame();
}
