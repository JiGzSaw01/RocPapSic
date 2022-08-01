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
        computer++;
    } else if (playerSelection == "SCISSOR" && computerSelection == "PAPER") {
        message = " You win Scissor Beats Paper";
        human++;
    } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        message = " You lose Paper Beats Rock";
        computer++;
    } else {
        message = "Draw"
    }
    alert(message)
    if (human == 5) {
        alert("You Win!")
    } else if (computer == 5) {
        alert("Computer Win!")
    }
}

const rockBtn = document.querySelector('#rockBtn')

rockBtn.addEventListener('click', (e) => {
    //console.log(e.target.innerHTML)
    const playerSelection = e.target.innerText.toUpperCase()
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    //console.log(human, computer);
    let humanT = document.getElementById('human');
    let bot = document.getElementById('bot');
    humanT.innerText = `${human}`;
    bot.innerText = `${computer}`;
})

const paperBtn = document.querySelector('#paperBtn')

paperBtn.addEventListener('click', (e) => {
    //console.log(e.target.innerHTML)
    const playerSelection = e.target.innerText.toUpperCase()
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    console.log(human, computer);
    let humanT = document.getElementById('human');
    let bot = document.getElementById('bot');
    humanT.innerText = `${human}`;
    bot.innerText = `${computer}`;
})

const scissorBtn = document.querySelector('#scissorBtn')

scissorBtn.addEventListener('click', (e) => {
    //console.log(e.target.innerHTML)
    const playerSelection = e.target.innerText.toUpperCase()
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
    console.log(human, computer);
    let humanT = document.getElementById('human');
    let bot = document.getElementById('bot');
    humanT.innerText = `${human}`;
    bot.innerText = `${computer}`;
})