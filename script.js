let score = 0;

function computerPlay(){
    
    let randomNumber = Math.floor(Math.random()*3) + 1;

    let result = (randomNumber==1) ? 'rock' 
                :(randomNumber==2) ? 'paper'
                : 'scissors';   

    return result;        
}

function playRound(playerSelection, computerSelection){
    
    let result;

    if(playerSelection != null) playerSelection = playerSelection.toLowerCase();
    else playerSelection = '';
    
    
    if(playerSelection == 'rock'){
        if(computerSelection == 'rock')         result = 'Draw ! Rock vs Rock.';
        else if(computerSelection == 'paper')   result = 'You lose ! Paper beats Rock.' ;
        else                                    { result = 'You win ! Rock beats Scissors.'; score++; }

    }else if(playerSelection == 'paper'){
        if(computerSelection == 'rock')         { result = 'You Win ! Paper beats Rock.'; score++; }
        else if(computerSelection == 'paper')   result = 'Draw ! Paper vs Paper.';
        else                                    result = 'You lose ! Scissors beats Paper.';

    }else if(playerSelection == 'scissors'){
        if(computerSelection == 'rock')         result = 'You lose ! Rock beats Scissors.';
        else if(computerSelection == 'paper')   { result = 'You win ! Scissors beat Paper.'; score++; }
        else                                    result = 'Draw ! Scissors vs Scissors.';
    }
    else{
        result = "Don't recognize your selection !";
    }

    return result;

}

function game(){
    for (let i=1; i<=5;i++){

        // const playerSelection = "rock";

        const playerSelection = window.prompt("Your choice (Rock/Paper/Scissors) : ");
        const computerSelection = computerPlay();
        
        console.log("------ Round "+ i + " of 5 ------");
        console.log("Player : " + playerSelection);
        console.log("Computer : " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your current score is "+score);
    }

}

game();