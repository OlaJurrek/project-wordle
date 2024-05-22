import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [win, setWin] = React.useState(false);
  const [lose, setLose] = React.useState(false);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    if (answer === tentativeGuess) {
      setWin(true);
    } else if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setLose(true);
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disabled={win || lose}
        handleSubmitGuess={handleSubmitGuess}
      />
      {win && <HappyBanner numOfGuesses={guesses.length} />}
      {lose && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
