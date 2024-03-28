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

function playGame() {
    let winsCount = 0;
    let lossesCount = 0;
    let playerChoice;
    const POSSIBLE_CHOICES = ['rock', 'paper', 'scissors'];
    
    for (let i = 0; i < 5; i++) {
        while(true) {
            playerChoice = prompt("JanKenPon! ('rock', 'paper' or 'scissors')");
            if (POSSIBLE_CHOICES.includes(playerChoice.toLowerCase())) {
                break;
            }
            alert("Type a valid choice!");
        }
        
        result = playRound(playerChoice.toLowerCase(), getComputerChoice());
        console.log(result);

        if (result.includes('Win')) {
            winsCount++;
        } else if (result.includes('Lose')) {
            lossesCount++;
        }
    }

    if (winsCount > lossesCount) {
        console.log("You won!!!");
    } else if (lossesCount > winsCount) {
        console.log("You lost!!!");
    } else {
        console.log("It's a draw!");
    }
}

playGame()