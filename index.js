const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
const isDraw = choiceVar === rock && rps === 'rock' || choiceVar === paper
&& rps === 'paper' || choiceVar === scissors && rps === 'scissors';
const youWin = choiceVar === scissors && rps === 'rock' || choiceVar === 
rock && rps === 'paper' || choiceVar === paper && rps === 'scissors';
const youLose = choiceVar === paper && rps === 'rock' || choiceVar === 
scissors && rps === 'paper' || choiceVar === rock && rps === 'scissors';

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

    if (rps = isDraw || youLose || youWin) {
        noAnswer = false}
        else {noAnswer = true }
    if (isDraw) {
        console.log('Draw! Try again!')
        return 'Draw! Try again!'; }
    if (youLose) {
        console.log('You lose!')
        return 'You lose!' }
    if (youWin) {
        console.log('You win!')
        return 'You win!'}   
    if (noAnswer) {
        console.log('Not an answer!')
        return 'Not an answer!'
 }
}


function game() {
    let playerScore = 0
    let computerScore = 0
    

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

}