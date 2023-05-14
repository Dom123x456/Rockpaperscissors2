let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function playRound(playerSelection) {
    if (playerScore === winningScore || computerScore === winningScore) {
        return; // Game already won, ignore further clicks
    }

    const computerSelection = computerPlay();
    const result = getResult(playerSelection, computerSelection);
    updateScore(result);
    displayResult(playerSelection, computerSelection, result);
}

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && (computerSelection === 'scissors' || computerSelection === 'lizard')) ||
        (playerSelection === 'paper' && (computerSelection === 'rock' || computerSelection === 'spock')) ||
        (playerSelection === 'scissors' && (computerSelection === 'paper' || computerSelection === 'lizard')) ||
        (playerSelection === 'lizard' && (computerSelection === 'paper' || computerSelection === 'spock')) ||
        (playerSelection === 'spock' && (computerSelection === 'rock' || computerSelection === 'scissors'))
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

function updateScore(result) {
    if (result === 'You win!') {
        playerScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }

    if (playerScore === winningScore) {
        announceResult('Player wins the game!');
        disableButtons();
    } else if (computerScore === winningScore) {
        announceResult('Computer wins the game!');
        disableButtons();
    }
}

function displayResult(playerSelection, computerSelection, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You chose ${playerSelection}. The computer chose ${computerSelection}. ${result}`;

    const playerScoreDiv = document.getElementById('player-score');
    playerScoreDiv.textContent = `Player: ${playerScore}`;

    const computerScoreDiv = document.getElementById('computer-score');
    computerScoreDiv.textContent = `Computer: ${computerScore}`;
}

function announceResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
}
