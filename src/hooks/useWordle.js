import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState(['hello']) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

// format a guess into an array of letter objects 
// e.g. [{key: 'a', color: 'yellow'}]
const formatGuess = () => {
    console.log('Formatting the guess -', currentGuess)
}

// add a new guess to the guesses state
// update the isCorrect state if the guess is correct
// add one to the turn state
const addNewGuess = () => {

}

// handle keyup event & track current guess
// if user presses enter, add the new guess
const handleKeyup = ({key}) => {
    
    if (key === 'Enter') {
        // Only add if guess turn < 5
        if (turn > 5) {
            console.log('Used all guesses')
            return
        }

        // Do not allow duplicate words.

        if (history.includes(currentGuess)) {

            console.log('Already tried that word')
            return
        }
        // Check word is 5 chars long

        if (currentGuess.length !== 5) {
            console.log('Word must be 5 chars long')
            return
        } 
        formatGuess()       /* Call function only if all conditions are valid */
    }

    if (key === 'Backspace') {
        setCurrentGuess((prev) => {             /* Pass function to get previous state value, then remove last character using slice */
            return prev.slice(0, -1)
        })
        return
    }

    if (/^[A-Za-z]$/.test(key)) {               /* Test if Key pressed is between a-Z using regular expression inbetween / / */
        if(currentGuess.length < 5) {           /* Only update CurrentGuess state if is less than 5, take current value then add key pressed, updated from previous state. */
            setCurrentGuess((prev) => {
                return prev + key
            })
        }
    }

    /* If currentGuess.length == 5, then setGuess, only add if turn < 5, if Guess matches solution, then isCorrect returns true, else setHistory for invalid guess */

}

return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}


export default useWordle