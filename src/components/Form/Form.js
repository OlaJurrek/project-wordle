import React from "react";

function Form() {
  const [input, setInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: input.toUpperCase() });
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={input}
        pattern="[a-zA-Z]{5}"
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  );
}

export default Form;
