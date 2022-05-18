import React from 'react'

export default function Row( {guess}) {

    if (guess) {
        return (
            <div className='row past'>
                {guess.map((l, i) => (                                  /* If the guess has a value, return a row with letters in each square */
                    <div key={i} className={l.color}> {l.key} </div>
                ))}
            </div>
        )
    }

  return (
    <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
