
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

 const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
 }

const getHumanChoice = () => {
    const choice = window.prompt("Please enter either rock, paper, or scissors", "");
    return choice;
}

const playRound = ( humanChoice, computerChoice ) => {
    const removeCasingChoice = humanChoice.toLowerCase();
    if ( removeCasingChoice === computerChoice ) {
        return 'Its a tie';
    } else if ( removeCasingChoice === 'rock' && computerChoice !== 'paper' ) {
        humanScore++;
        return `You win, rock beats ${computerChoice}`;
    } else if ( removeCasingChoice === 'paper' && computerChoice !== 'scissors' ) {
        humanScore++;
        return `You win, paper beats ${computerChoice}`;
    } else if ( removeCasingChoice === 'scissors' && computerChoice !== 'rock' ) {
        humanScore++;
        return `You win, scissors beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose ${computerChoice} beats ${removeCasingChoice}`
    }
}

const playGame = () => {

    let round = 0;
    for(let i = 0; i < 5; i++) {
       const text = playRound( getHumanChoice(), getComputerChoice() )
        alert(text);
        round++;
    }
    if (round === 5 && humanScore !== computerScore) {
        return humanScore > computerScore ? console.log('You win') : console.log('You Lose');
    } else {
        console.log('its a tie!')
    }
}

playGame();
