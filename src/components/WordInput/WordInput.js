import React from 'react'

function WordInput({ updateGuesses }) {
  const [currentGuess, setCurrentGuess] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    updateGuesses(currentGuess)
    setCurrentGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={currentGuess}
        maxLength={5}
        pattern="[A-Z]{5}"
        required={true}
        onChange={e => {
          const value = e.target.value.toUpperCase()
          setCurrentGuess(value)
        }}
      />
    </form>
  )
}

export default WordInput
