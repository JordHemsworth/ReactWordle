import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1> You Win! </h1>
                <p className='solution'>{solution.toUpperCase()}</p>
                <p> You found the correct answer in {turn} guesses! </p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1> You Lose! </h1>
                <p className='solution'>The correct answer was - {solution.toUpperCase()}()</p>
                <p> Better luck next time. </p>
            </div>
        )}
    </div>
  )
}
