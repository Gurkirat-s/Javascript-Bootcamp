let game1 = new Hangman('car parts', 2)

window.addEventListener('keypress', (e) => {
    const guess = e.key
    game1.makeGuess(guess)
    renderPuzzle(game1)
})

renderPuzzle = function (game) {
    const gameBody = document.querySelector('#game')
    gameBody.innerHTML = ''
    const word = document.createElement('p')
    const guesses = document.createElement('p')
    guesses.setAttribute('id', 'puzzle')
    word.innerHTML = ''
    guesses.textContent = game.statusMessage

    const puzzleArray = game1.puzzle.split('')
    puzzleArray.forEach((letter) => {
        const newEl = document.createElement('span')
        newEl.textContent = letter
        gameBody.appendChild(newEl)
    })

    gameBody.appendChild(word)
    gameBody.appendChild(guesses)
}


const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    renderPuzzle(game1)
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()



// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(err)
// })
