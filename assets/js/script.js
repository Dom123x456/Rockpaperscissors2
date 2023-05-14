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
