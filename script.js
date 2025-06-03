function getComputerChoice (){
    let roll = Math.random(3);
    if (roll == 1){
        return "Rock";
    }
    if (roll == 2){
        return "Paper";
    }
    if (roll == 3){
        return "Scissors";
    }
}

function getHumanChoice (){
    let msg = "Rock | Paper | Scissors";
    prompt(msg);
}

console.log(getHumanChoice());