import React from 'react'

import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Guess({ value, answer }) {
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
