import React from "react";

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div className="container-word">
      {word.split("").map((letter, index) => (
        <span className="word-letter" key={index}>
          <span className={guessedLetters.includes(letter) ? "active" : "inactive"}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default WordDisplay;
