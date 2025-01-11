// Possible choices
const choices = ["rock", "paper", "scissors"];
// Function to get the computer's random choice
const getComputerChoice = () => {
    // TODO: Generate a random index and return the corresponding choice

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to determine the winner
const getWinner = (player, computer) => {
    // TODO: Compare player and computer choices to determine the winner
    console.log("player chooses", player);
    console.log("computer chooses", computer);
if (player === computer) {
    return "It's a tie!";
} else if 
    (
           (player === 'rock' && computer === 'scissors') ||
           (player === 'paper' && computer === 'rock') ||
           (player === 'scissors' && computer === 'paper')
    ) {
    return "You win!";
} else {
    return "Computer wins!";
}
};
// Event listeners for buttons
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
// Main game logic
const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice(); // Get the computer's choice
    const result = getWinner(playerChoice, computerChoice); // Determine the winner
    console.log(result);
    document.getElementById("result").innerHTML = `
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <h2>${result}</h2>
    `;
    updateScores(result);
    // TODO: Update the #result element with the player choice, computer choice, and result
};

let playerScore = 0;
let computerScore = 0;
const updateScores = (result) => {
 if (result === "You win!") {
 //update playerScore
 playerScore = playerScore + 1;
 document.getElementById("player-score").textContent = playerScore;
 //update the textContent of tag element id# "player-score"
 } else if (result === "Computer wins!") {
 //update computerScore
 computerScore = computerScore + 1;
 document.getElementById("computer-score").textContent = computerScore;
 //update the textContent of tag element id# "computer-score"
 }
 document.getElementById("reset").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
   });
};
//Call updateScores(result); in the playGame function


