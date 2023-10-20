import React from "react";

const Keyboard = ({ guessedLetters, onLetterClick, gameResult }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return (
    <div className="keyboard" style={{ marginTop: "20px" }}>
      {alphabet.split("").map((letter) => (
        <button
          key={letter}
          className={`keyboard-letter ${
            guessedLetters.includes(letter) ? "inactive" : ""
          } ${gameResult ? "disabled" : ""}`}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter) || gameResult}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;