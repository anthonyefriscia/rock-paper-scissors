const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"
let playerScore = 0
let computerScore = 0


// This function performs the computer half of the RPS game
function getComputerChoice() {
    const possibleChoices = [rock, paper, scissors]
    let random = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return random
}

function playRound() {
    let rps = prompt().toLowerCase();
    let choiceVar = getComputerChoice();
    
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
        return 'Draw! Try again!'; }
    if (youLose) {
        return 'You lose!' }
    if (youWin) {
        return 'You win!'}   
    if (noAnswer) {
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
    if (playRound() == 'You lose!') {
        let computerScore = computerScore +1
        console.log(playerScore, computerScore)
    }
    if (playRound() == 'You win!') {
        let playerScore = playerScore +1
        console.log(playerScore, computerScore)
    }
    if (playRound() == 'Draw! Try again!' || 'Not an answer!') {
        playRound();
    }
    console.log('Your Score: ' + playerScore )
    console.log('Computer Score: ' + computerScore )
}