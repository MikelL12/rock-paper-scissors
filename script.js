// Possible choices
const choices = ["rock", "paper", "scissors"];
// Function to get the computer's random choice
const getComputerChoice = () => {
    // TODO: Generate a random index and return the corresponding choice
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

// Function to determine the winner
const getWinner = (player, computer) => {
    // TODO: Compare player and computer choices to determine the winner
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } 
        return "Computer wins!";
    // Return "It's a tie!", "You win!", or "Computer wins!"
};