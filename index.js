const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"


// Grab and store random computer answer for playRound()
function getComputerChoice() {
    const possibleChoices = [rock, paper, scissors]
    let random = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return random
}

function playRound() {
    let rps = prompt().toLowerCase();
    let choiceVar = getComputerChoice();
    let checkRps = rps
    
    const isDraw = choiceVar === rock && rps === 'rock' || choiceVar === paper
    && rps === 'paper' || choiceVar === scissors && rps === 'scissors';

    const youWin = choiceVar === scissors && rps === 'rock' || choiceVar === 
    rock && rps === 'paper' || choiceVar === paper && rps === 'scissors';

    const youLose = choiceVar === paper && rps === 'rock' || choiceVar === 
    scissors && rps === 'paper' || choiceVar === rock && rps === 'scissors';

    if (checkRps = isDraw || youLose || youWin) {
        noAnswer = false}
        else {noAnswer = true }
    if (isDraw) {
        console.log(choiceVar + ', ' + rps)
        return 'Draw! Try again!'; }
    if (youLose) {
        console.log(choiceVar + ', ' + rps)
        return 'You lose!' }
    if (youWin) {
        console.log(choiceVar + ', ' + rps)
        return 'You win!'}   
    if (noAnswer) {
        console.log(choiceVar + ', ' + rps)
        return 'Not an answer!'
 }
}

let gameLose = false
let gameWin = false
let playerScore = 0
let computerScore = 0

function scoreCheck(computerScore, playerScore) {
    if (computerScore == 5) {
        gameLose = true
    } else if (playerScore == 5) {
        gameWin = true}

    if (gameWin == true) {
        return gameWin
    } else if (gameLose == true) {
        return gameLose
    }
}

function game() {

    if (scoreCheck(computerScore, playerScore) == gameLose ) {
        console.log('YOU LOSE! - ' +  'You: '+  playerScore + ' Computer: ' + computerScore);
    }
} 


