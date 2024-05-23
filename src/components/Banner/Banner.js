import React from "react";

function Banner({ status, children, action, actionText }) {
  return (
    <div className={`banner ${status}`}>
      {children}
      {action && (
        <button className="restart" onClick={action}>
          {actionText}
        </button>
      )}
    </div>
  );
}

export default Banner;
