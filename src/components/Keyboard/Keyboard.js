import React from "react";
import { checkGuess } from "../../game-helpers";

function Keyboard({ answer, guesses }) {
  const keys = [
    { letter: "Q", status: undefined },
    { letter: "W", status: undefined },
    { letter: "E", status: undefined },
    { letter: "R", status: undefined },
    { letter: "T", status: undefined },
    { letter: "Y", status: undefined },
    { letter: "U", status: undefined },
    { letter: "I", status: undefined },
    { letter: "O", status: undefined },
    { letter: "P", status: undefined },
    { letter: "A", status: undefined },
    { letter: "S", status: undefined },
    { letter: "D", status: undefined },
    { letter: "F", status: undefined },
    { letter: "G", status: undefined },
    { letter: "H", status: undefined },
    { letter: "J", status: undefined },
    { letter: "K", status: undefined },
    { letter: "L", status: undefined },
    { letter: "Z", status: undefined },
    { letter: "X", status: undefined },
    { letter: "C", status: undefined },
    { letter: "V", status: undefined },
    { letter: "B", status: undefined },
    { letter: "N", status: undefined },
    { letter: "M", status: undefined },
  ];

  for (let quess of guesses) {
    const result = checkGuess(quess, answer);
    for (let item of result) {
      for (let key of keys) {
        if (key.letter === item.letter) {
          key.status = item.status;
        }
      }
    }
  }

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <strong
          className={`key ${key.status ? key.status : ""}`}
          key={key.letter}
        >
          {key.letter}
        </strong>
      ))}
    </div>
  );
}

export default Keyboard;
