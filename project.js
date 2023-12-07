let wins = 0;
let losses = 0;
let ties = 0;

function playGame(userChoice) {
    const options = ["rock", "paper", "scissors"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice){
        ties++;
        alert("you tie!");
    } else if (
        (userChoice === "paper" && computerChoice === "rock")
        (userChoice === "rock" && computerChoice === "scissors")
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
        alert("you win!"); 
    } else {
        losses++;
        alert("you lose!");
    }

    (`wins: ${wins}, losses: ${losses}, ties: ${ties}`);
}

document.addEventListener("DOMContentLoaded", function() {
    const title = document.createElement("h1"); 
    title.textContent = "Rock, Paper, Scissors";
    document.body.appendChild(title);

    const score = document.createElement("div");
    score.innerHTML = "<p>Wins: <span id='wins'>0</span></p><p>Ties: <span id='ties'>0</span></p><p>Losses: <span id='losses'>0</span></p>"
    document.body.appendChild(score);

    const rockButton = document.createElement("button");
    rockButton.textContent = "rock";
    rockButton.addEventListener("click", function() {
        playGame ("rock")
        updateScore();
    });
    document.body.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.textContent = "paper";
    paperButton.addEventListener("click", function() {
        playGame ("paper");
        updateScore();
    });
    document.body.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.textContent = "scissors";
    scissorsButton.addEventListener("click", function() {
        playGame("scissors");
        updateScore();
    });
    document.body.appendChild(scissorsButton);

    function updateScore() {
        document.getElementById("ties").textContent = ties;
        document.getElementById("wins").textContent = wins;
        document.getElementById("losses").textContent = losses;
    }
})
