import { useState } from "react"

const useWordle = (solution) => {

    const [turn, setTurn] = useState(0) 
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)

// format a guess into an array of letter objects 
// e.g. [{key: 'a', color: 'yellow'}]
const formatGuess = () => {
    
}

// add a new guess to the guesses state
// update the isCorrect state if the guess is correct
// add one to the turn state
const addNewGuess = () => {

}

// handle keyup event & track current guess
// if user presses enter, add the new guess
const handleKeyup = ({key}) => {
    
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

}

return {turn, currentGuess, guesses, isCorrect, handleKeyup}

}


export default useWordle