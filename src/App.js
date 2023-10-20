import React from "react";
import { useEffect, useState } from "react";
import ScoreCard from "./Components/ScoreCard";
import Hangman from "./Components/Hangman";
import WordDisplay from "./Components/WordDisplay";
import Keyboard from "./Components/Keyboard";
import GetRandomWord from "./Utilities/WordGenerator";
import * as HangmanLogic from "./Utilities/HangmanLogic";
import RestartButton from "./Components/RestartButton";

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
    const fetchData = async () => {
      const wordToGuess = await GetRandomWord();
      setState((prevState) => ({
        ...prevState,
        wordToGuess,
        hangmanState: 0, //Reset hangman state when fetching a new word
        gameResult: null, //Reset game result
      }));
    };

    if (state.wordToGuess === null) {
      fetchData();
    }
  }, [state.wordToGuess]);

  const handleLetterGuess = (letter) => {
    const newState = HangmanLogic.handleLetterGuess(state, letter);
    setState(newState);
  };

  const handleRestart = () => {
    const newState = HangmanLogic.restartGame(state);
    setState(newState);
  }

  return (
    <div className="container-fluid">
      <ScoreCard wins={state.wins} losses={state.losses} />
      <Hangman hangmanState={state.hangmanState} />
      <WordDisplay word={state.wordToGuess} guessedLetters={state.guessedLetters} />
      <Keyboard
        guessedLetters={state.guessedLetters}
        onLetterClick={handleLetterGuess}
        gameResult={state.gameResult}
      />
      {state.gameResult && <RestartButton onRestart={handleRestart} />}
    </div>
  );
}

export default App;