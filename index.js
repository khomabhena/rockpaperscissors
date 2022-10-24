const getComputerChoice = () => {
    const num = Math.floor(Math.random() * 3) + 1

    switch (num) {
        case 1: 
            return "Rock"
        case 2: 
            return "Paper"
        case 3:
            return "Scissors"
    }

    // console.log(num)
}

const playRound = (playerSelection, computerSelection) => {
    const p = playerSelection.toLowerCase()
    const c = computerSelection.toLowerCase()

    if (p === 'rock' && c === 'rock' || p === 'paper' && c === 'paper' || p === 'scissors' && c === 'scissors')
        return "Its a tie"
    else if (p === 'rock' && c === 'paper')
        return "You lose! Paper beats Rock"
    else if (p === 'rock' && c === 'scissors')
        return "You win! Rock beats Scissors"
    else if (p === 'paper' && c === 'rock')
        return "You win! Paper beats Rock."
    else if (p === 'paper' && c === 'scissors')
        return "You lose! Scissors beats Paper"
    else if (p === 'scissors' && c === 'rock')
        return "You lose! Rock beats Scissors"
    else if (p === 'scissors' && c === 'paper')
        return "You win! Scissors beats Paper"
}

const game = () => {
    var playerScore = 0
    var computerScore = 0
        const player = getComputerChoice()
        const computer = getComputerChoice()

        const res = playRound(player, computer)
   
        if (res.includes("tie")) {

        }
        else if (res.includes('You win'))
            playerScore += 1
        else
            computerScore += 1
}



let playerScore = 0
let computerScore = 0
let count = 0

const playGame = (player) => {
    const computer = getComputerChoice()
    
    const res = playRound(player, computer)
    if (res.includes("tie")) {

    }
    else if (res.includes('You win'))
        playerScore += 1
    else
        computerScore += 1
    
    count++

    const manScore = document.querySelector('#manScore')
    const compScore = document.querySelector('#compScore')
    manScore.textContent = playerScore
    compScore.textContent = computerScore

    // Set scores list
    setScoresList(player, computer, count)
    
    if (count == 6) {
        manScore.textContent = '0'
        compScore.textContent = '0'
        // set scores and reset
        playerScore = 0
        computerScore = 0
        count = 0
    }
}

const setScoresList = (player, computer, count) => {
    const ol = document.querySelector('#olScores')
    const li = document.createElement('li')
    
    li.textContent = `Man played: ${player} ******* Computer played: ${computer}`

    ol.appendChild(li)
    
    if (count === 6) {
        const lists = ol.querySelectorAll('li')
        lists.forEach(li => {
            const child = ol.firstElementChild
            ol.removeChild(child)
        })
    }
}

// Listen for player input
const boxContainer = document.querySelector('.boxContainer')
const buttons = boxContainer.querySelectorAll('button')

// add listener
buttons.forEach(button => {
    button.addEventListener('click', e => {
        playGame(button.id)
    })
})

// game()
// const input = prompt()