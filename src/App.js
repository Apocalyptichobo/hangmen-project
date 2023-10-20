import React, {Component} from "react";
import { useEffect, useState } from "react";
import ScoreCard from "./Components/ScoreCard";
import Hangman from "./Components/Hangman";
import WordDisplay from "./Components/WordDisplay";
import Keyboard from "./Components/Keyboard";
import GetRandomWord from "./Utilities/WordGenerator";

function App() {
  const [state, setState] = useState({
    wordToGuess: null, //Grab from API later
    guessedLetters: [],
    hangmanState: 0,
    wins: 0,
    losses: 0,
    gameResult: null,
  });

  useEffect(() => {
    GetRandomWord().then((wordToGuess) => {
      setState((prevState) => ({
        ...prevState,
        wordToGuess,
      }));
    });
  }, []);

  const handleLetterGuess = (letter) => {
    const { wordToGuess, guessedLetters, hangmanState } = state;

    //Check if the letter hasn't been guessed already
    if (!guessedLetters.includes(letter)) {
      const newGuessedLetters = [...guessedLetters, letter];

      //Check if the letter is in the word
      if (!wordToGuess.includes(letter)) {
        setState((prevState) => ({
          ...prevState,
          guessedLetters: newGuessedLetters,
          hangmanState: hangmanState + 1,
        }));
      }

      //Check if the game is won or lost
      const isWordGuessed = wordToGuess.split("").every((char) =>
        newGuessedLetters.includes(char)
      );

      if (isWordGuessed) {
        setState((prevState) => ({
          ...prevState,
          gameResult: "win",
          wins: prevState.wins + 1,
        }));
      } else if (hangmanState === 6) {
        setState((prevState) => ({
          ...prevState,
          gameResult: "lose",
          losses: prevState.losses + 1,
        }));
      }
    }
  };

    const {
      wordToGuess,
      guessedLetters,
      hangmanState,
      wins,
      losses,
      gameResult,
    } = state;

    return (
      <div className="container-fluid">
        <div className="row">
          <ScoreCard wins={wins} losses={losses} />
          <div className="col-4">
            <h1 className="title">Word Guess</h1>
          </div>
          <div className="col-4"></div>
        </div>
        <Hangman hangmanState={hangmanState} />
        <WordDisplay word={wordToGuess} guessedLetters={guessedLetters} />
        <Keyboard
          guessedLetters={guessedLetters}
          onLetterClick={handleLetterGuess}
          gameResult={gameResult}
        />
      </div>
    );
  }

export default App;