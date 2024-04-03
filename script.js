function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    let result;
    const CHOICE_LOSES_TO = {
        "rock": "paper",
        "paper": "scissors",
        "scissors": "rock"
    }
    if (playerSelection === computerSelection) {
        result = 'Would you look at that?! A Draw!'
    } else {
        const computerSelectionCapitalized = computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1);
        const playerSelectionCapitalized = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
        if (CHOICE_LOSES_TO[playerSelection] === computerSelection) {
            result = `You Lose! ${computerSelectionCapitalized} beats ${playerSelectionCapitalized}`
        } else {
            result = `You Win! ${playerSelectionCapitalized} beats ${computerSelectionCapitalized}`
        }
    }
    return result;
}

function resetScores() {
    scorePlayerDiv.textContent = 0;
    scoreComputerDiv.textContent = 0;
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");
const scorePlayerDiv = document.querySelector("#scorePlayer");
const scoreComputerDiv = document.querySelector("#scoreComputer");
const finalResult = document.querySelector("#finalResult");

[rockButton, paperButton, scissorsButton].forEach((button) => {
    button.addEventListener('click', () => {
        if (finalResult.textContent) {
            finalResult.textContent = '';
        }

        result = playRound(button.id, getComputerChoice());
        resultDiv.textContent = result;
        
        if (result.includes('Win')) {
            scorePlayerDiv.textContent = +(scorePlayerDiv.textContent) + 1;
        } else if (result.includes('Lose')) {
            scoreComputerDiv.textContent = +(scoreComputerDiv.textContent) + 1;
        }

        if (scorePlayerDiv.textContent === '5') {
            finalResult.textContent = 'You won!!!'
            resetScores();
        }
        if (scoreComputerDiv.textContent === '5') {
            finalResult.textContent = 'You lost... :('
            resetScores();
        }
    })
})