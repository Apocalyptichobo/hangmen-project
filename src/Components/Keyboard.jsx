import React from "react";

const Keyboard = ({ guessedLetters, onLetterClick, gameResult }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="keyboard">
      {alphabet.split("").map((letter, index) => (
        <button
          key={index}
          className={`keyboard-letter ${gameResult ? "inactive" :
            guessedLetters.includes(letter) ? "active" : "inactive"}`}
          onClick={() => onLetterClick(letter)}
          disabled={gameResult}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;