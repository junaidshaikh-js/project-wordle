import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Guess({ value }) {
  const results = checkGuess(value, answer)

  return (
    <p className="guess">
      {range(5).map(num => (
        <span className={`cell ${results[num]?.status ?? ''}`} key={num}>
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  )
}

export default Guess
