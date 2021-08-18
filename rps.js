



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

/*Plays a round~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function round(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        /*tie condition*/
        return("tie");
    } else if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        /*win condition*/
        return("win");
    } else{
        /*otherwise you've lost*/
        return("lose");
    }

}


/*Main game~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function game(){
    /*set scores to 0*/
    let playerScore = 0;
    let computerScore = 0;

    /*loops over 5 round*/
    while(playerScore < 3 && computerScore < 3){
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
        computerSelection = computerPlay();
        result = round(playerSelection, computerSelection);
        switch(true){
            case(result === "tie"):
                console.log("It's a tie!");
                break;
            
            case(result === "win"):
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore += 1;
                break;
            
            case(result === "lose"):
                console.log("You lose :(");
                computerScore += 1;
                break;
        }
        console.log(`Computer score: ${computerScore}\n Your score: ${playerScore}`);
    }
    if(playerScore > computerScore){
        console.log("You've won the tournament! Congratulations!");
    }else{
        console.log("you've lost the tournament, sorry!")
    }
}

