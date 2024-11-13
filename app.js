// constants ----------
const choices = ['attack', 'defend', 'heal']
const names = ['player', 'computer']
const player = 'playerChoice'
const computer = 'computerChoice'

console.log(choices, names, player, computer)

// ------------- Variables

let playerChoice
let computerChoice
let message

function init() {
  console.log('Game initialized')
  choices = [attack[0], defend[1], heal[2]]
  lose = false
  winner = false
  tie = false

  render()
}

function render() {}

function updateChoices() {
  choices.forEach((buttom) => {})
}

function updateMessage() {
  if (winner) {
    messageEl.textContent = 'Player wins! '
  } else if (tie) {
    messageEl.textContent = "It's a tie!"
  } else if (lose) {
    messageEl.textContent = 'Player lose!'
  }
}

function render() {
  updateChoices()
  updateMessage()
}

//  Cached Element References --------

const resultDisplayElemnt = document.querySelector(result - display)

console.log(resultDisplayElemnt)

// functions ----

const getPlayerChoice = (event) => {
  playerChoice = event.target.id
}

console.log(getPlayerChoice)

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * Choices.length)
  computerChoice = choices[randomIndex]
}

console.log(getComputerChoice)

const compare = () => {
  if (playerChoice === 'defend'[1] && computerChoice === 'defend'[1]) {
    message = 'both get no damage'
  } else if (playerChoice === 'attack'[0] && computerChoice === attack[0]) {
    message = 'both get damage!'
  } else if (playerChoice === 'defend'[1] && computerChoice === 'attack'[0]) {
    message = 'player get no damage!'
  } else if (playerChoice === 'attack'[0] && computerChoice === 'defend'[1]) {
    message = 'computer get no damage!'
  } else if (playerChoice === 'heal'[2] && computerChoice === 'attack'[0]) {
    message = 'player recover and get damage from computer!'
  } else if (playerChoice === 'attack'[0] && computerChoice === 'heal'[2]) {
    message = 'computer recover and get damage from player!'
  } else if (playerChoice === 'attack'[0] && computerChoice === 'heal'[2]) {
    message = 'computer recover and get damage from player!'
  } else if (playerChoice === 'attack'[0] && computerChoice === 'heal'[2]) {
    message = 'computer recover and get damage from player!'
  } else if (playerChoice === 'defend'[1] && computerChoice === 'heal'[2]) {
    message = 'computer recover!'
  } else if (playerChoice === 'heal'[2] && computerChoice === 'defend'[1]) {
    message = 'player recover!'
  }
}
console.log(compare)
