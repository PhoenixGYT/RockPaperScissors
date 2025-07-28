let humanScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
    const roll = Math.floor(Math.random() * 3) + 1;
    if (roll === 1) return "ROCK";
    if (roll === 2) return "PAPER";
    return "SCISSORS";
}

function getHumanChoice() {
    return new Promise((resolve) => {
        document.getElementById("rock").addEventListener("click", () => resolve("ROCK"), {once: true});
        document.getElementById("paper").addEventListener("click", () => resolve("PAPER"), {once: true});
        document.getElementById("scissors").addEventListener("click", () => resolve("SCISSORS"), {once: true});
    });
}


async function playRound() {
    let user = await getHumanChoice();
    let bot = getComputerChoice();
    const lossString = "Round lost +1 to Computer";
    const winString = "Round won +1 to user";
    const tieString = "Round tied +0"
    //Loss Cons
    if (user === "PAPER" && bot === "SCISSORS") return lossString;
    if (user === "SCISSORS"&& bot === "ROCK") return lossString;
    if (user === "ROCK" && bot === "PAPER") return lossString;
    //Win Cons
    if (user === "ROCK" && bot === "SCISSORS") return winString;
    if (user === "PAPER"&& bot === "ROCK") return winString;
    if (user === "SCISSORS" && bot === "PAPER") return winString;

    //Tie Cons
    if (user === bot) return tieString;
    return (`Result Unclear user - ${user} bot - ${bot}`);
}

async function playGame() {
    while (round < 5){

    const result = await playRound();
    console.log(result);
    
    if (result.includes("tied")){
        null;
    }
    else if (result.includes("lost")) {
        computerScore++;
    } else if (result.includes("won")) {
        humanScore++;
    }

    round++;

    //Alerts
    alert(`Scores → Human: ${humanScore}, Computer: ${computerScore}, Round: ${round}`);
    }
    if (humanScore > computerScore){
        alert ("You won!")
    }
    else if (humanScore < computerScore){
        alert ("You lost :(")
    }
    else {
        alert ("It's tie...")
    }
}


