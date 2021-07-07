let wins = 0;
let loses = 0;
let finalWins = 0;
let finalLoses = 0;

let playerSelection;
let computerSelection;

function computerPlay() {
    let optionArr = ["Rock", "Paper", "Scissors"];
    let idx = Math.floor(Math.random() * 3);
    return optionArr[idx];
}

function winnerMessage(user, computer) {
    wins++;
    return `"You Win! ${user} beats ${computer}"`
}

function looserMessage(user, computer) {
    loses++;
    return `"You Lose! ${computer} beats ${user}"`

}

function playRound(playerSelection, computerSelection) {
    if(wins + loses == 5){
        wins = 0;
        loses = 0;
        return null;
    }
    console.log(playerSelection);
    console.log(computerSelection);
    player = playerSelection.toUpperCase();
    //check invalid input===================

    //======================================
    //use array to create this function======
    if (player == "ROCK") {
        if (computerSelection == "Paper") {
            return looserMessage("Rock", computerSelection);
        }
        else if (computerSelection == "Scissors") {
            return winnerMessage("Rock", computerSelection);
        }
        else {
            return "It's a tie";
        }
    }
    else if (player == "PAPER") {
        if (computerSelection == "Rock") {
            return winnerMessage("Paper", computerSelection);
        }
        else if (computerSelection == "Scissors") {
            return looserMessage("Paper", computerSelection)
        }
        else {
            return "It's a tie";
        }
    }
    else {
        if (computerSelection == "Paper") {
            return winnerMessage("Scissors", computerSelection);
        }
        else if (computerSelection == "Rock") {
            return looserMessage("Scissors", computerSelection)

        }
        else {
            return "It's a tie";
        }
    }

}


// let userSelectBtn = document.querySelectorAll('.btn-container>button');
// userSelectBtn.forEach((button) => {
//     button.addEventListener('click', () =>{
//         let userSelectDisplay = document.querySelector(".select-show");
//         userSelectDisplay.textContent = button.innerText;
//         playerSelection = button.innerText;
//         console.log(playerSelection);

//     });
// });

let gameStart = document.querySelector('.game');
gameStart.addEventListener('click', () => {
    let winner = document.querySelector(".winner");
    winner.innerText = "";
    let scoreDiv = document.querySelector(".score");
    scoreDiv.innerText = "";
    let userSelectDisplay = document.querySelector(".user-select > .select-show");
    userSelectDisplay.innerText = "";
    let compSelectDiv = document.querySelector(".comp-select > .select-show");
    compSelectDiv.innerText = "";
    let userSelectBtn = document.querySelectorAll('.btn-container>button');
    userSelectBtn.forEach((button) => {
      
        button.addEventListener('click', () => {
            
            userSelectDisplay.textContent = button.innerText;
            playerSelection = button.innerText;

            computerSelection = computerPlay();
            compSelectDiv.textContent = computerSelection;
            console.log(playerSelection);
            console.log(computerSelection);

            let message = playRound(playerSelection, computerSelection);
            if(message != null){
                scoreDiv.innerText = message;
                 winner.innerText = `${wins} - ${loses}`;
                 finalWins = wins;
                 finalLoses = loses;
            }
            else{
                scoreDiv.innerText = "Match ends";
                if(wins >= loses){
                    winner.innerText = (`You win ${finalWins} to ${finalLoses}!`);
                }
                else{
                    winner.innerText = (`You loose ${finalWins} to ${finalLoses}!`)
                }
                finalLoses = 0;
                finalWins = 0;
                
            }
            
             
        });
    });

});

// if(wins + loses == 5){
//     gameStart.click()
// }