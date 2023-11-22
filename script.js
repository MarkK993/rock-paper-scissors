// Create a function getComputerChoice (check it with console.log);
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    // Math.random() * choice.length provides a number between 0 and length and than Math.floor rounds it up and makes a choice in array to return!!!!
    return choice[(Math.floor(Math.random() * choice.length))]
};

// Create a function that plays a single round;Needs to have 2 parameters "playerSelection" and "computerSelection";
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You need more practice young padawan";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You won this round"; 
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You won this round"; 
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You need more practice young padawan"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You won this round"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You need more practice young padawan"; 
    } else {
        return "You chose wrong weapon";
    }
}; 


// function to get user input and apply transformations
    function getUserSelection() {
        let selection = prompt("Choose your weapon wisely!\nRock, Paper, or Scissors are available");

        // Check for null and undefined
    if (selection === null || selection === undefined) {
        console.log("Invalid input. Exiting game.");
        return;
    }

        return selection.charAt(0).toUpperCase() + selection.slice(1).toLowerCase();
    };

//Score counting and playing the game 5 times

function game() {
    let playerScore = 0;
    let computerScore = 0;

    const round1PlayerSelection = getUserSelection();
    const round1ComputerSelection = getComputerChoice();
    const round1Result = playRound(round1PlayerSelection, round1ComputerSelection);
    console.log(round1Result);
    if (round1Result.includes("You won")) {
        playerScore++;
    } else if (round1Result.includes("You need")) {
        computerScore++;
    }

    const round2PlayerSelection = getUserSelection();
    const round2ComputerSelection = getComputerChoice();
    const round2Result = playRound(round2PlayerSelection, round2ComputerSelection);
    console.log(round2Result);
    if (round2Result.includes("You won")) {
        playerScore++;
    } else if (round2Result.includes("You need")) {
        computerScore++;
    }
    
    const round3PlayerSelection = getUserSelection();
    const round3ComputerSelection = getComputerChoice();
    const round3Result = playRound(round3PlayerSelection, round3ComputerSelection);
    console.log(round3Result);
    if (round3Result.includes("You won")) {
        playerScore++;
    } else if (round3Result.includes("You need")) {
        computerScore++;
    }

    const round4PlayerSelection = getUserSelection();
    const round4ComputerSelection = getComputerChoice();
    const round4Result = playRound(round4PlayerSelection, round4ComputerSelection);
    console.log(round4Result);
    if (round4Result.includes("You won")) {
        playerScore++;
    } else if (round4Result.includes("You need")) {
        computerScore++;
    }

    const round5PlayerSelection = getUserSelection();
    const round5ComputerSelection = getComputerChoice();
    const round5Result = playRound(round5PlayerSelection, round5ComputerSelection);
    console.log(round4Result);
    if (round5Result.includes("You won")) {
        playerScore++;
    } else if (round5Result.includes("You need")) {
        computerScore++;
    }
    console.log("\nGame Over!");
    console.log("Your score: " + playerScore);
    console.log("Computer's score: " + computerScore);

    if (playerScore > computerScore) {
        console.log("Congratulations young padawan!");
    } else if (playerScore < computerScore) {
        console.log("I win! I am still a Master");
    } else {
        console.log("It seems that we are equal");
    }
};

game();
