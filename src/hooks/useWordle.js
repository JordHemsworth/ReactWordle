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
    let solutionArray = [...solution]                           /* ... Spread syntax takes string and splits into array of letters  */
    let formattedGuess = [...currentGuess].map((l) => {         /* Map array into new array, Map fires function for each letter of array on each letter object (l) */
        return {key: l, color: 'grey'}
    })

    // Find any green letters
    formattedGuess.forEach((l, i) => {                  /* Cycle through formatted guess array and perform function for each item. */
        if (solutionArray[i] === l.key) {                       /* Does letter in the position match same letter in index of solution array. */
            formattedGuess[i].color = 'green'
            solutionArray[i] = null                     /* Turn element in letter array to Null as can't be used again & is correct */
        }
    })

    // Find yellow letters

    formattedGuess.forEach((l, i) => {
        if (solutionArray.includes(l.key) && l.color !== 'green') {
            formattedGuess[i].color = 'yellow'
            solutionArray[solutionArray.indexOf(l.key)] = null
        }
    })

    return formattedGuess

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

        const formatted = formatGuess()       /* Call function only if all conditions are valid */
        console.log(formatted)
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