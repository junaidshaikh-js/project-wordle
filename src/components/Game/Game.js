import React from 'react';

import { sample } from '../../utils'
import { WORDS } from '../../data'
import WordInput from '../WordInput'
import GuessResults from '../GuessResults'
import { RUNNING, WON, LOST, NUM_OF_GUESSES_ALLOWED } from '../../constants'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

const HappyBanner = ({ numGuesses }) => (
  <div className="happy banner">
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>
        {' '}
        {numGuesses} {numGuesses > 1 ? 'guesses' : 'guess'}
      </strong>
      .
    </p>
  </div>
)

const SadBanner = ({ answer }) => (
  <div className="sad banner">
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  </div>
)

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState(RUNNING)

  const updateGuesses = currentGuess => {
    const nextGuesses = [...guesses, currentGuess]

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus(LOST)
    } else if (currentGuess.toUpperCase() === answer.toUpperCase()) {
      setGameStatus(WON)
    }

    setGuesses(nextGuesses)
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <WordInput updateGuesses={updateGuesses} gameStatus={gameStatus} />
      {gameStatus === WON && <HappyBanner numGuesses={guesses.length} />}
      {gameStatus === LOST && <SadBanner answer={answer} />}
    </>
  )
}

export default Game;
