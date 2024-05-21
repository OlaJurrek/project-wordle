import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {value &&
        value.split("").map((letter, index) => (
          <span key={index} className="cell">
            {letter}
          </span>
        ))}

      {!value &&
        range(5).map((num) => <span key={num} className="cell"></span>)}
    </p>
  );
}

export default Guess;
