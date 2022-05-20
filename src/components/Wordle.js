import React from 'react'
import { useState, useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keyboard from './Keyboard'
import Modal from './Modal'



export default function Wordle ({ solution }) {

    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
  
    useEffect(() => {
        window.addEventListener('keyup', handleKeyup)

        if (isCorrect) {
          
          setTimeout(() => setShowModal(true), 2000)                /* Delay modal showing until tile animation complete */
          window.removeEventListener('keyup', handleKeyup)          /* Remove eventlistener so no more letters can be added if game is won */
        }

        if (turn > 5) {
          setTimeout(() => setShowModal(true), 2000)
          window.removeEventListener('keyup', handleKeyup)          /* Remove eventlistener so no more letters can be added if game is won */
        }

        return () => window.removeEventListener('keyup', handleKeyup)           /* Detach event listener to prevent having many listeners with each event */
    }, [handleKeyup, isCorrect, turn])

    
  return (
    <div>
        <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        <Keyboard usedKeys={usedKeys}/>
        {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        
    </div>  
    
  )
}
