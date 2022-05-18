import React from 'react'
import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

export default function Wordle ({ solution }) {

    const {currentGuess, handleKeyup, guesses, isCorrect, turn} = useWordle(solution)
  
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)           /* Detach event listener to prevent having many listeners with each event */
    }, [handleKeyup])

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
      }, [guesses, turn, isCorrect])              /* Update when any of these dependancies are changed */
    
  return (
    <div>
        <div> solution - { solution} </div>
        <div> Current Guess - {currentGuess} </div>
    </div>  
    
  )
}
