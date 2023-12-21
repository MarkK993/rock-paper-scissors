let playerScore = 0;
let computerScore = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        return "You won this round";
    } else {
        return "You need more practice, young padawan";
    }
}

// Function to get user input
function getUserSelection() {
    let selection = prompt("Choose your weapon wisely!\nRock, Paper, or Scissors are available");

    if (selection === null) {
        console.log("Player canceled. Exiting game.");
        return null;
    }

    const normalizedSelection = selection.trim().toLowerCase();

    if (!["rock", "paper", "scissors"].includes(normalizedSelection)) {
        console.log("Invalid input. Exiting game.");
        return null;
    }

    return normalizedSelection.charAt(0).toUpperCase() + normalizedSelection.slice(1);
}

// Function to update the result and score
function updateResultAndScore(result) {
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.textContent = result;

    const scoreDiv = document.getElementById('scoreDiv');
    scoreDiv.textContent = `Your Score: ${playerScore} | Computer's Score: ${computerScore}`;

    if (playerScore === 5) {
        resultDiv.textContent = "Congratulations young padawan! You are the winner!";
    } else if (computerScore === 5) {
        resultDiv.textContent = "I win! I am still a Master.";
    }
}

// Function to play the game
// Function to play the game
function game() {
    while (true) {
        playerScore = 0;
        computerScore = 0;

        while (playerScore < 5 && computerScore < 5) {
            const playerSelection = getUserSelection();

            if (playerSelection === null) {
                return;
            }

            const computerSelection = getComputerChoice();
            const roundResult = playRound(playerSelection, computerSelection);

            if (roundResult.includes("You won")) {
                playerScore++;
            } else if (roundResult.includes("You need")) {
                computerScore++;
            }

            updateResultAndScore(roundResult);

            if (playerScore === 5 || computerScore === 5) {
                break;
            }
        }

        console.log("\nGame Over!");

        if (playerScore > computerScore) {
            console.log("Congratulations young padawan! You are the winner!");
        } else {
            console.log("I win! I am still a Master");
        }

        const playAgain = confirm("Do you want to play again?");
        if (!playAgain) {
            return;
        }
    }
}

// Event listeners for buttons
document.getElementById('rockBtn').addEventListener('click', function () {
    const playerSelection = 'Rock';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("You won")) {
        playerScore++;
    } else if (roundResult.includes("You need")) {
        computerScore++;
    }

    updateResultAndScore(roundResult);

    if (playerScore === 5 || computerScore === 5) {
        game();
    }
});

document.getElementById('paperBtn').addEventListener('click', function () {
    const playerSelection = 'Paper';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("You won")) {
        playerScore++;
    } else if (roundResult.includes("You need")) {
        computerScore++;
    }

    updateResultAndScore(roundResult);

    if (playerScore === 5 || computerScore === 5) {
        game();
    }
});

document.getElementById('scissorsBtn').addEventListener('click', function () {
    const playerSelection = 'Scissors';
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes("You won")) {
        playerScore++;
    } else if (roundResult.includes("You need")) {
        computerScore++;
    }

    updateResultAndScore(roundResult);

    if (playerScore === 5 || computerScore === 5) {
        game();
    }
});


game();
