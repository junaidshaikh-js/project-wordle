import React from 'react'

function WordInput() {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log({ guess })
    setGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={5}
        pattern="[A-Z]{5}"
        required={true}
        onChange={e => {
          const value = e.target.value.toUpperCase()
          setGuess(value)
        }}
      />
    </form>
  )
}

export default WordInput
