const rock = "Rock"
const paper = "Paper"
const scissors = "Scissors"

// This function performs the computer half of the RPS game
function getComputerChoice() {
    const possibleChoices = [rock, paper, scissors]
    let random = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return random
}

function playRound(rps) {
    let choiceVar = getComputerChoice();
    console.log(choiceVar);
    if (choiceVar == rock && rps == rock || choiceVar == paper
    && rps == paper || choiceVar == scissors && rps == scissors) {
        console.log('Draw!') }
    if (choiceVar == rock && rps == scissors || choiceVar == paper
    && rps == rock || choiceVar == scissors && rps == paper) {
        console.log('You lose!') }
    if (choiceVar == rock && rps == paper || choiceVar == paper
    && rps == scissors || choiceVar == scissors && rps == rock) {
        console.log('You win!')}
}