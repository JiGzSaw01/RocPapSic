const arr = ["ROCK", "PAPER", "SCISSOR"];
let computerPlay = () => Math.floor(Math.random() * arr.length);

function playRound(playerSelection, computerSelection) {
    let message;
    if (playerSelection == "ROCK" && computerSelection == "SCISSOR") {
        message = "You win Rock Beats Scissor";
    } else if (playerSelection == "SCISSOR" && computerSelection == "ROCK") {
        message = " You lose Rock Beats Scissor";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        message = " You win Paper Beats Rock";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSOR") {
        message = " You lose Scissor Beats Paper";
    } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER") {
        message = " You win Scissor Beats Paper";
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        message = " You lose Paper Beats Rock";
    } else {
        message = "Draw"
    }
    return message;
}

const playerSelection = "ROCK";
const computerSelection = arr[computerPlay()];
console.log(playRound(playerSelection, computerSelection))
console.log(computerSelection);