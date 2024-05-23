import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Keyboard from "../Keyboard";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    return sample(WORDS);
  });
  const [guesses, setGuesses] = React.useState([]);
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");

  console.info({ answer });

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (answer === tentativeGuess) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function restartGame() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("running");
  }
  return (
    <>
      <GuessResults guesses={validatedGuesses} answer={answer} />
      <GuessInput
        disabled={gameStatus !== "running"}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guesses.length} action={restartGame} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} action={restartGame} />
      )}
    </>
  );
}

export default Game;
