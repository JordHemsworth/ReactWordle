import React, { useEffect, useState } from 'react'

export default function Keyboard ( {usedKeys}) {
  const [letters, setLetters] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then(res => res.json()) /* Fetch letters, parse json response. */
      .then(json => {
        setLetters(json)
      })
  }, [])

  return (
    <div className='keypad'>
      {letters && letters.map(l => {
          const color = usedKeys[l.key]

          return <div key={l.key} className={color}>{l.key.toUpperCase()}</div>             /* Return letter from json key, make uppercase */
        })}
    </div>
  )
}
