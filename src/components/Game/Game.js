import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(guess) {
    // const newItem = { value: guess, id: crypto.randomUUID() };
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }
  return (
    <>
      <Guesses guesses={guesses} />
      <Form handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
