let wins = 0;
let loses = 0;

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
    let scoreDiv = document.querySelector(".score");
    scoreDiv.innerText = "";
    let userSelectBtn = document.querySelectorAll('.btn-container>button');
    userSelectBtn.forEach((button) => {
      
        button.addEventListener('click', () => {
            
            let userSelectDisplay = document.querySelector(".user-select > .select-show");
            userSelectDisplay.textContent = button.innerText;
            playerSelection = button.innerText;

            computerSelection = computerPlay();
            let compSelectDiv = document.querySelector(".comp-select > .select-show");
            compSelectDiv.textContent = computerSelection;
            console.log(playerSelection);
            console.log(computerSelection);

            let message = playRound(playerSelection, computerSelection);
            scoreDiv.innerText = message;
             let winner = document.querySelector(".winner");
             winner.innerText = `${wins} - ${loses}`;
             
        });
    });

})