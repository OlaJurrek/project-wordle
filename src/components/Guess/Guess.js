import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ answer, value }) {
  const word = checkGuess(value, answer);

  function getClassName(index) {
    let result = "cell";
    if (word && word[index].status !== "incorrect") {
      result += ` ${word[index].status}`;
    }
    return result;
  }

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={getClassName(num)}>
          {word ? word[num].letter : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
