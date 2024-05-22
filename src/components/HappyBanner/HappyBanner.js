import React from "react";

function HappyBanner({ numOfGuesses }) {
  const suffix = `${numOfGuesses > 1 ? "es" : ""}`;
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {numOfGuesses} guess{suffix}
        </strong>
        .
      </p>
    </div>
  );
}

export default HappyBanner;
