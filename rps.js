let playerScore = 0;
let computerScore = 0;


/*Generates the computer's selection~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function computerPlay(){
    let result = Math.floor(Math.random()*3);
    /*Generates a random number between 0 and 2*/
    switch(true){
        case(result === 0):
            return("rock");
            break;
            case(result === 1):
            return("paper");
            break;        
            case(result === 2):
            return("scissors");
            break;
    }
}


const textbox = document.querySelector(`.score`);
const robotbox = document.querySelector(".robot-score");
const humanbox = document.querySelector(".human-score");
const cards = document.querySelectorAll(`.card[data-player="human"]`);
const startButton = document.querySelector(".startGame");
const robotCards = document.querySelectorAll(`.card[data-player="robot"]`);
startButton.addEventListener("click", startGame);



function startGame(){
    startButton.innerText = "Replay game";
    textbox.innerText = "Rock, paper, or scissors?";
    cards.forEach(card => card.addEventListener("click", getHumanSelection));
    cards.forEach(card => card.classList.add("hoverable"));
    playerScore = 0;
    computerScore = 0;
    robotbox.innerText = `Robot Score: ${computerScore}`;
    humanbox.innerText = `Your Score: ${playerScore}`;
    robotCards.forEach(card => card.classList.remove("selected"));
}

function getHumanSelection(e){
    round(e.currentTarget.dataset.choice, computerPlay);
}

/*Plays a round~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function round(playerSelection, computerSelection){
    computerSelection = computerPlay();
    robotCards.forEach(card => card.classList.remove("selected"));
    const robotCard = document.querySelector(`.card[data-player="robot"][data-choice=${computerSelection}]`);
    robotCard.classList.add("selected");



    if(playerSelection === computerSelection){
        /*tie condition*/
        textbox.innerText = "It's a tie!";
    } else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        /*win condition*/
        playerScore += 1;
        textbox.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    } else{
        /*otherwise you've lost*/
        computerScore += 1;
        textbox.innerText = "You lose :(";
    }
    robotbox.innerText = `Robot Score: ${computerScore}`;
    humanbox.innerText = `Your Score: ${playerScore}`;


    if(playerScore == 3 || computerScore == 3){
        console.log("WON GAME");
        if(playerScore > computerScore){
            textbox.innerText = "You've won the tournament! Congratulations!";
        }else{
            textbox.innerText = "you've lost the tournament, sorry!"
        }
        cards.forEach(card => card.removeEventListener("click", getHumanSelection));
        cards.forEach(card => card.classList.remove("hoverable"));
    }



}


