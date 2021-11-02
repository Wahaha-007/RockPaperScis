let myScore = 0;
let comScore = 0;

function computerPlay() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let result = (randomNumber == 1) ? 'rock'
        : (randomNumber == 2) ? 'paper'
            : 'scissors';

    return result;
}

function playRound(playerSelection, computerSelection) {

    let result;

    if (playerSelection != null) playerSelection = playerSelection.toLowerCase();
    else playerSelection = '';


    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') { result = 'Draw ! Rock vs Rock.'; }
        else if (computerSelection == 'paper') { result = 'You lose ! Paper beats Rock.'; comScore++; }
        else { result = 'You win ! Rock beats Scissors.'; myScore++; }

    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') { result = 'You Win ! Paper beats Rock.'; myScore++; }
        else if (computerSelection == 'paper') { result = 'Draw ! Paper vs Paper.'; }
        else { result = 'You lose ! Scissors beats Paper.'; comScore++; }

    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') { result = 'You lose ! Rock beats Scissors.'; comScore++; }
        else if (computerSelection == 'paper') { result = 'You win ! Scissors beat Paper.'; myScore++; }
        else { result = 'Draw ! Scissors vs Scissors.'; }
    }
    else {
        result = "Don't recognize your selection !";
    }

    return result;

}

function game() {

    let gResult;

    do{
        const playerSelection = window.prompt("Your choice (Rock/Paper/Scissors) : ");
        const computerSelection = computerPlay();

        console.log("Player : " + playerSelection);
        console.log("Computer : " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("You vs Computer is " + myScore + ":" + comScore);
    } while ((myScore < 5)&&(comScore<5));

    gResult = (myScore > comScore) ? 'You Win !' : 'You Lose';
    console.log(gResult);
}

game();