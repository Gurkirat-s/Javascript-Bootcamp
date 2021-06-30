class Hangman {

    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    
    setStatus() {
        let wordGuessed = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

        if (this.remainingGuesses > 0 && wordGuessed) {
            this.status = 'finished'
        } else if (this.remainingGuesses === 0) {
            this.status = 'failed'
        }
    }

    get puzzle() {
        let wordOut = []
        this.word.forEach((element) => {
            if (this.guessedLetters.includes(element) || element === ' ') {
                wordOut.push(element)
            } else {
                wordOut.push('*') 
            }
        })
        return wordOut.join('')
    }

    makeGuess(guess) {
        if (this.status !== 'playing') {
            return
        }
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
            
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.setStatus()
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else if (this.status === 'finished') {
            return 'Great work! You guessed the word.'
        }
    }
}
