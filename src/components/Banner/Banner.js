import React from "react";
import RestartButton from "../RestartButton";

function Banner({ status, children, restartGame }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      <RestartButton restartGame={restartGame} />
    </div>
  );
}

export default Banner;
