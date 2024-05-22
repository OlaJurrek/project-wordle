import React from "react";

function Form({ handleAddGuess }) {
  const [input, setInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: input });
        handleAddGuess(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={input}
        title="5 letter word"
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => setInput(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default Form;
