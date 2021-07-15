let wins;
let loses;
let userSelectDiv = document.querySelector('.user-select > .select-show')
let compSelectDiv = document.querySelector('.comp-select > .select-show');

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
    return `"You Loose! ${computer} beats ${user}"`

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
    else if(player == "PAPER"){
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

let startGame = document.querySelector('.game');
let winner = document.querySelector('.winner');
let score = document.querySelector('.score');

startGame.addEventListener('click', () => {
    console.log("hello");
    score.innerText = "";
    wins = 0;
    loses = 0;
    winner.innerText = "";
    userSelectDiv.innerText = "";
    compSelectDiv.innerText = ""; 
});

let buttons = document.querySelectorAll(".btn-container > button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        let playerSelection = button.id;
        let computerSelection = computerPlay();

        let win = playRound(playerSelection, computerSelection);
        console.log(wins);
        if(wins + loses < 5){
            userSelectDiv.innerText = playerSelection.toUpperCase();
            compSelectDiv.innerText = computerSelection.toUpperCase();
            winner.innerText = win;
            score.innerText = `${wins} - ${loses}`

        }
        else if(wins + loses == 5){
            score.innerText = `${wins} - ${loses}`;
            if(wins > loses){
                winner.innerText = "YOU WIN!";
            }
            else{
                winner.innerText = "YOU LOOSE!";
            }
        }
        else{
            score.innerText = "Please reset by clicking";
            winner.innerText = "on Play Game button"
        }
    });
});