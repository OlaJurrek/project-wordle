import React from "react";

function Guesses({ guesses }) {
  return (
    <ul className="guess-results">
      {guesses.map(({ id, value }) => (
        <li key={id} className="guess">
          {value}
        </li>
      ))}
    </ul>
  );
}

export default Guesses;
