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
// All losing scenarios
    if (getComputerChoice() == scissors && rps == paper) {
        console.log('You lose! Scissors beat paper!') }
    if (getComputerChoice() == rock && rps == scissors) {
        console.log('You Lose! Rock beats scissors!') }
    if (getComputerChoice() == paper && rps == rock) {
        console.log('You Lose! Paper beats rock!') }
// All draw scenarios
    if (getComputerChoice() == paper && rps == paper) {
        console.log('Draw!') }
    if (getComputerChoice() == scissors && rps == scissors) {
        console.log('Draw!') }
    if (getComputerChoice() == rock && rps == rock) {
        console.log('Draw!') }
// All winning scenatios
    if (getComputerChoice() == scissors && rps == rock) {
        console.log('You Win! Rock beats scissors!') }
    if (getComputerChoice() == rock && rps == paper) {
        console.log('You Win! Paper beats rock!') }
    if (getComputerChoice() == paper && rps == scissors) {
        console.log('You Win! Scissors beat paper!') }
}