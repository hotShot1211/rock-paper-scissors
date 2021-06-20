let wins = 0;
let loses = 0;

function computerPlay(){
    let optionArr = ["Rock", "Paper", "Scissors"];
    let idx = Math.floor(Math.random() * 3);
    return optionArr[idx];
}

function winnerMessage(user, computer){
    wins++;
    return `"You Win! ${user} beats ${computer}"`
}

function looserMessage(user, computer){
    loses++;
    return `"You Lose! ${computer} beats ${user}"`

}

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    player = playerSelection.toUpperCase();
    //check invalid input===================

    //======================================
    //use array to create this function======
    if(player == "ROCK" ){
        if(computerSelection == "Paper"){
            return looserMessage("Rock", computerSelection);
        }
        else if(computerSelection == "Scissors"){
            return winnerMessage("Rock", computerSelection);
        }
        else{
            return "It's a tie";
        }
    }
    else if(playerSelection == "PAPER"){
        if(computerSelection == "Rock"){
            return winnerMessage("Paper", computerSelection);
        }
        else if(computerSelection == "Scissors"){
            return looserMessage("Paper", computerSelection)   
        }
        else{
            return "It's a tie";
        }
    }
    else{
        if(computerSelection == "Paper"){
            return winnerMessage("Scissors", computerSelection);
        }
        else if(computerSelection == "Rock"){
            return looserMessage("Scissors", computerSelection)
            
        }
        else{
            return "It's a tie";
        }
    }
    
}



function game(){

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What do you choose?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
    if(wins > loses){
        console.log(`You win ${wins} to ${loses}!`);
    }
    else{
        console.log(`You loose ${wins} to ${loses}!`)
    }
}

game();