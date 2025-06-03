// Variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let roll = Math.random(3);
    if (roll == 1){
        return "ROCK";
    }
    if (roll == 2){
        return "PAPER";
    }
    if (roll == 3){
        return "SCISSORS";
    }
}

function getHumanChoice (){
    let msg = "Rock | Paper | Scissors";
    let choice = prompt(msg);
    choice.toUpperCase;
}

function playRound(){
    let humanChoice = getHumanChoice(); 
    let computerChoice = getComputerChoice();

    if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
        console.log("You Win! Computer choose SCISSORS");
        humanScore ++;
    }
    if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        console.log("You Win! Computer choose PAPER");
        humanScore ++;
    }
    if (humanChoice == "PAPER" && computerChoice == "ROCK"){
        console.log("You Win! Computer choose ROCK");
        humanScore ++;
    }
    if (computerChoice == "ROCK" && humanChoice == "SCISSORS"){
        console.log("You Lose! Computer choose ROCK");
        computerScore ++;
    }
    if (computerChoice == "SCISSORS" && humanChoice == "PAPER"){
        console.log("You Lose! Computer choose SCISSORS");
        computerScore ++;
    }
    if (computerChoice == "PAPER" && computerhumanChoiceChoice == "ROCK"){
        console.log("You Lose! Computer choose PAPER");
        computerScore ++;
    }
    if (computerChoice === humanChoice){
        console.log("It's a Tie!");
    }
}

console.log(getHumanChoice());