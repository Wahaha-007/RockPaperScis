let myScore = 0;
let comScore = 0;

function computerPlay() {

    let randomNumber = Math.floor(Math.random() * 3) + 1;

    let result = (randomNumber == 1) ? 'rock'
        : (randomNumber == 2) ? 'paper'
            : 'scissors';

    return result;
}

function newPlayRound(e) {

    //console.log(e.target.getAttribute('choice'));

    let result;

    const playerSelection = e.target.getAttribute('choice');
    const computerSelection = computerPlay();

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') { result = 'Draw ! Rock vs Rock.'; }
        else if (computerSelection == 'paper') { result = 'You lose ! Paper beats Rock.'; comScore++; }
        else { result = 'You win ! Rock beats Scissors.'; myScore++; }

    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') { result = 'You win ! Paper beats Rock.'; myScore++; }
        else if (computerSelection == 'paper') { result = 'Draw ! Paper vs Paper.'; }
        else { result = 'You lose ! Scissors beats Paper.'; comScore++; }

    } else { // if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') { result = 'You lose ! Rock beats Scissors.'; comScore++; }
        else if (computerSelection == 'paper') { result = 'You win ! Scissors beat Paper.'; myScore++; }
        else { result = 'Draw ! Scissors vs Scissors.'; }
    }

    const dcomSelect = document.querySelector(".comSelect");
    dcomSelect.textContent = `Computer select : ${computerSelection}`;

    const dResult = document.querySelector(".result");
    dResult.textContent = result;

    if (result.search("win") != -1) {
        dResult.style.cssText = "color:green";
    } else if (result.search("lose") != -1) {
        dResult.style.cssText = "color:red";
    }else{
        dResult.style.cssText = "color:gray";
    }

    const dScore = document.querySelector(".cScore");
    dScore.textContent = `${myScore}:${comScore}`;

    if (myScore >= 5) {
        dResult.textContent = "Today is really your day !";
        dResult.style.cssText = "color:green; font-size:50px";
        myScore = comScore = 0;

    } else if (comScore >= 5) {
        dResult.textContent = "It's the End. Your life is up.";
        dResult.style.cssText = "color:red; font-size:50px";
        myScore = comScore = 0;
    }
}

const butts = Array.from(document.querySelectorAll('.mbutton'));
butts.forEach(key => key.addEventListener('click', newPlayRound));