import React from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoComplete="off"
        disabled={disabled}
        id="guess-input"
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        required
        title="5 letter word"
        type="text"
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
