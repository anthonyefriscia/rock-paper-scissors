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
    
    const isDrawRock = choiceVar === rock && rps === rock
    const isDrawPaper = choiceVar === paper && rps === paper 
    const isDrawScissors = choiceVar === scissors && rps === scissors

    const youWinRock = choiceVar === scissors && rps === rock
    const youWinPaper = choiceVar === rock && rps === paper
    const youWinScissors = choiceVar === paper && rps === scissors

    const youLoseRock = choiceVar === paper && rps === rock
    const youLosePaper = choiceVar === scissors && rps === paper
    const youLoseScissors = choiceVar === rock && rps === scissors

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