import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, value }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={`cell ${result ? result[num].status : undefined}`}
        >
          {result ? result[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
