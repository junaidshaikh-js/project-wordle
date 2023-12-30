import React from 'react';

import WordInput from '../WordInput'
import GuessResults from '../GuessResults'

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const updateGuesses = currentGuess => {
    setGuesses(prev => [...prev, currentGuess])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <WordInput updateGuesses={updateGuesses} />
    </>
  )
}

export default Game;
