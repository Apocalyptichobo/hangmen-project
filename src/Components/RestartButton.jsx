import React from "react";

function RestartButton({ onRestart }) {
  return (
    <div className="text-center">
      <button className="btn btn-primary" onClick={onRestart}>
        Restart Game
      </button>
    </div>
  );
}

export default RestartButton;