const playerHPBar = document.getElementById('player-hp-bar')
const enemyHPBar = document.getElementById('enemy-hp-bar')
const messageBox = document.getElementById('message-box')

let playerMaxHP = 200
let playerCurrentHP = 200
let enemyMaxHP = 200
let enemyCurrentHP = 200

let isDefending = false

function checkGameStatus() {
  if (enemyCurrentHP <= 0) {
    messageBox.textContent = 'Victory! Enemy defeated!'
    messageBox.style.display = 'block'
  } else if (playerCurrentHP <= 0) {
    messageBox.textContent = 'You Dead! Game Over!'
    messageBox.style.display = 'block'
  }
}

function attack() {
  const damage = 20
  enemyCurrentHP -= damage
  if (enemyCurrentHP < 0) enemyCurrentHP = 0
  enemyAction()
  updateHPBars()
}

function defend() {
  isDefending = true
  const damage = 20
  const reducedDamage = damage / 5
  playerCurrentHP -= reducedDamage
  if (playerCurrentHP < 0) playerCurrentHP = 0
  enemyAction()
  updateHPBars()
}

function heal() {
  const healAmount = 20
  playerCurrentHP += healAmount
  if (playerCurrentHP > playerMaxHP) playerCurrentHP = playerMaxHP
  enemyAction()
  updateHPBars()
}

function enemyAttack() {
  const damage = 20
  if (isDefending) {
    const reducedDamage = Math.max(damage - 5, 0)
    playerCurrentHP -= reducedDamage
  } else {
    playerCurrentHP -= damage
  }
  if (playerCurrentHP < 0) playerCurrentHP = 0
  updateHPBars()
}

function enemyDefend() {
  updateHPBars()
}

function enemyHeal() {
  const healAmount = 20
  enemyCurrentHP += healAmount
  if (enemyCurrentHP > enemyMaxHP) enemyCurrentHP = enemyMaxHP
  updateHPBars()
}

function enemyAction() {
  const actions = ['attack', 'defend', 'heal']
  const randomAction = actions[Math.floor(Math.random() * actions.length)]

  switch (randomAction) {
    case 'attack':
      console.log('Enemy attacked!')
      enemyAttack()
      break
    case 'defend':
      console.log('Enemy defended!')
      enemyDefend()
      break
    case 'heal':
      console.log('Enemy healed!')
      enemyHeal()
      break
  }
}

function updateHPBars() {
  const playerHPPercentage = playerCurrentHP / playerMaxHP
  playerHPBar.style.width = `${playerHPPercentage * 100}%`

  const enemyHPPercentage = enemyCurrentHP / enemyMaxHP
  enemyHPBar.style.width = `${enemyHPPercentage * 100}%`

  checkGameStatus()
}

document.getElementById('attack-btn').addEventListener('click', attack)
document.getElementById('defend-btn').addEventListener('click', defend)
document.getElementById('heal-btn').addEventListener('click', heal)

updateHPBars()
