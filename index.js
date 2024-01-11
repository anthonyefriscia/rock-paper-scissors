const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// This function performs the computer half of the RPS game
function getComputerChoice() {
    const possibleChoices = [rock, paper, scissors]
    let random = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return random
}

function playRound() {
    let rps = prompt().toLowerCase();
    console.log(rps);
    let choiceVar = getComputerChoice();
    console.log(choiceVar);
    
    const isDraw = choiceVar === rock && rps === 'rock' || choiceVar === paper
    && rps === 'paper' || choiceVar === scissors && rps === 'scissors';
    const youWin = choiceVar === scissors && rps === 'rock' || choiceVar === 
    rock && rps === 'paper' || choiceVar === paper && rps === 'scissors';
    const youLose = choiceVar === paper && rps === 'rock' || choiceVar === 
    scissors && rps === 'paper' || choiceVar === rock && rps === 'scissors';

    if (isDraw) {
        console.log('Draw! Try again!')
        return 'Draw! Try again!' }
    if (youLose) {
        console.log('You lose!')
        return 'You lose!' }
    if (youWin) {
        console.log('You win!')
        return 'You win!'}
}