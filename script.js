// Variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3) + 1; 
    if (roll === 1) return "ROCK";
    if (roll === 2) return "PAPER";
    return "SCISSORS"; // No need for explicit check for 3
}

function getHumanChoice() {
    let msg = "Rock | Paper | Scissors";
    let choice = prompt(msg).toUpperCase(); // Fixed syntax
    return choice;
}

function playGame() {
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        let winMsg = `You Win! Computer chose ${computerChoice}`;
        let lossMsg = `You Lose! Computer chose ${computerChoice}`;

        if (humanChoice === "ROCK" && computerChoice === "SCISSORS") {
            humanScore++;
            return winMsg;
        }
        if (humanChoice === "SCISSORS" && computerChoice === "PAPER") {
            humanScore++;
            return winMsg;
        }
        if (humanChoice === "PAPER" && computerChoice === "ROCK") {
            humanScore++;
            return winMsg;
        }
        if (computerChoice === "ROCK" && humanChoice === "SCISSORS") {
            computerScore++;
            return lossMsg;
        }
        if (computerChoice === "SCISSORS" && humanChoice === "PAPER") {
            computerScore++;
            return lossMsg;
        }
        if (computerChoice === "PAPER" && humanChoice === "ROCK") { 
            computerScore++;
            return lossMsg;
        }
        return "It's a Tie!";
    }

    while (round < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
        round++;
    }
}

playGame();
