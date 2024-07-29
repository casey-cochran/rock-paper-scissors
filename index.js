
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

    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');
    let playerScoreNum = Number(document.querySelector('.player-score').textContent);
    let computerScoreNum = Number(document.querySelector('.computer-score').textContent);

    const removeCasingChoice = humanChoice.toLowerCase();

    if ( removeCasingChoice === computerChoice ) {
        return {
            text: `It's a tie!`,
            value: null
        };
    } else if ( removeCasingChoice === 'rock' && computerChoice !== 'paper' ) {
        playerScore.textContent = ++playerScoreNum;
        return {
            text: `You win, paper beats ${computerChoice}`,
            score: playerScoreNum,
            player: 'human'
        }
    } else if ( removeCasingChoice === 'paper' && computerChoice !== 'scissors' ) {
        playerScore.textContent = ++playerScoreNum;
        return {
            text: `You win, paper beats ${computerChoice}`,
            score: playerScoreNum,
            player: 'human'
        }
    } else if ( removeCasingChoice === 'scissors' && computerChoice !== 'rock' ) {
        playerScore.textContent = ++playerScoreNum;
            return {
            text: `You win, paper beats ${computerChoice}`,
            score: playerScoreNum,
            player: 'human'
        }
    } else {
        computerScore.textContent = ++computerScoreNum;
        return {
            text: `You lose ${computerChoice} beats ${removeCasingChoice}`,
            score: computerScoreNum,
            player: 'computer'
        }
    }
}


// Event listeners for choices. Displays who won the round.
const buttons = document.querySelectorAll('button');
 buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const playerChoice = e.target.value;
        const roundWinnerObj = playRound(playerChoice, getComputerChoice());

        let resultsDiv = document.querySelector('.results');
        resultsDiv.textContent = roundWinnerObj.text;

        if(roundWinnerObj.score === 5) {
            const winnerDiv = document.querySelector('.winner');
            winnerDiv.textContent = `${roundWinnerObj.player} wins!`;
        }
    })
})



const playGame = () => {

    //remove logic that plays 5 rounods?
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

// playGame();
