const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"


// Grab and store random computer answer
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
    
    if (computerScore == 3) {
        computerWins = true
    }   else {computerWins = false}

    if (playerScore == 3) {
        playerWins = true
    }   else {playerWins = false}

    if (playerWins) {return 'Game Over! PLAYER WINS!'} 
    if (computerWins) {return 'Game Over! COMPUTER WINS!'} 
        else{
            console.log('BEGIN!')
            let round = playRound();
            if (round == 'You lose!') {
                computerScore =+1
                console.log('Your Score: ' + playerScore )
                console.log('Computer Score: ' + computerScore )
            }
            if (round == 'You win!') {
                playerScore =+1
                console.log('Your Score: ' + playerScore )
                console.log('Computer Score: ' + computerScore )
            }
            if (round == 'Draw! Try again!' || 'Not an answer!') {
                console.log('Your Score: ' + playerScore )
                console.log('Computer Score: ' + computerScore )
                playRound();
            }
            console.log('Your Score: ' + playerScore )
            console.log('Computer Score: ' + computerScore )

    }
}