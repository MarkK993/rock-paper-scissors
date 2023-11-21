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
// Need null and undefined cases!!


// Arguments that are gonna be used for game
let playerSelection = prompt("Choose your weapon wisely!" + '\n' + "Rock, Paper or Scissors are available");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

/* how to track result in this game function,
how to make game just 5 rounds to declare winner
*/
function game() {
    
};

