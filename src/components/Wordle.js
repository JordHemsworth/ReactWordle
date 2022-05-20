import React from 'react'
import { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'



export default function Wordle ({ solution }) {

    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
  
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
          console.log('Congrats, you won!')
          window.removeEventListener('keyup', handleKeyup)          /* Remove eventlistener so no more letters can be added if game is won */
        }

        if (turn > 5) {
          console.log('Out of guesses!')
          window.removeEventListener('keyup', handleKeyup)          /* Remove eventlistener so no more letters can be added if game is won */
        }

        return () => window.removeEventListener('keyup', handleKeyup)           /* Detach event listener to prevent having many listeners with each event */
    }, [handleKeyup, isCorrect, turn])

    
  return (
    <div>
        <div> solution - { solution} </div>     
        <div> Current Guess - {currentGuess} </div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keyboard usedKeys={usedKeys}/>
        
    </div>  
    
  )
}
