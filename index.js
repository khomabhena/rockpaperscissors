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
    for (let i = 1; i <= 5; i++) {
        // const player = prompt("Enter your choice. Rock Paper or Scissors")
        const player = getComputerChoice()
        const computer = getComputerChoice()

        const res = playRound(player, computer)
        console.log(res)

        if (res.includes("tie")) {

        }
        else if (res.includes('You win'))
            playerScore += 1
        else
            computerScore += 1

        console.log(`Current Score: Player: ${playerScore} Computer: ${computerScore}`)
        console.log('')
    }

    console.log('******************')
    if (playerScore > computerScore)
        console.log(`The Player WON!! ${playerScore} > ${computerScore}`)
    else
        console.log(`The Computer WON!! ${computerScore} > ${playerScore}`)
}

game()
// const input = prompt()