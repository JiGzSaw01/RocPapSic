const arr = ["ROCK", "PAPER", "SCISSOR"];
let computerPlay = () => {
    let randomArr = arr[Math.floor(Math.random() * arr.length)];
    return randomArr;
}
let computer = 0;
let human = 0;

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    let message;
    if (playerSelection == "ROCK" && computerSelection == "SCISSOR") {
        message = "You win Rock Beats Scissor";
        human++;

    } else if (playerSelection == "SCISSOR" && computerSelection == "ROCK") {
        message = " You lose Rock Beats Scissor";
        computer++;
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        message = " You win Paper Beats Rock";
        human++;
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        message = " You lose Scissor Beats Paper";
    } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER") {
        message = " You win Scissor Beats Paper";
        human++;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        message = " You lose Paper Beats Rock";
        computer++;
    } else {
        message = "Draw"
    }
    return message;
}

let playerSelect = window.prompt("What's your pick?");
const playerSelection = playerSelect.toUpperCase();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection))

//console.log(computerSelection);

let game = () => {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
    console.log(human, computer)
    if (human > computer) {
        alert('Yahoo! you Win!')
    } else if (human < computer) {
        alert('You Lose!')
    } else {
        alert('Draw')
    }

}
game()