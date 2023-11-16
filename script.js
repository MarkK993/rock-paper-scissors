// Create a function getComputerChoice (check it with console.log);
function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    return choice[(Math.floor(Math.random() * choice.length))]
    
};
console.log(getComputerChoice())
// Create a function that plays a single round;Needs to have 2 parameters "playerSelection" and "computerSelection";
function playRound(playerSelection, computerSelection) {
    return "Not even close!!! Try again";
};

const playerSelection = "paper";
const computerSelection = getComputerChoice;
console.log(playRound(playerSelection, computerSelection));

function game() {
    
};

