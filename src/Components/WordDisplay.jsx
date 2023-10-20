import React from "react";

function WordDisplay({ word, guessedLetters }) {
  if (word === null) {
    return null; //Return nothing or a loading message if the word is null
  }

  //Split the word only if it's not null
  const letters = word.split("");

  return (
    <div className="container-word">
      {letters.map((letter, index) => (
        <span className="word-letter" key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) ? "active" : "inactive"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default WordDisplay;
