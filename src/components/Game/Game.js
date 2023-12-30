import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput'
import GuessResults from '../GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

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
