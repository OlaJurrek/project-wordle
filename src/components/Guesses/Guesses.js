import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED).map((num) => ({
    index: crypto.randomUUID(),
    value: guesses[num],
  }));
  return (
    <div className="guess-results">
      {rows.map(({ index, value }) => (
        <Guess key={index} value={value} />
      ))}
    </div>
  );
}

export default Guesses;
