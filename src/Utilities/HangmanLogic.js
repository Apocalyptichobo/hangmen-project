export function hasWon(wordToGuess, guessedLetters) {
    //Check if all letters in the wordToGuess have been guessed
    const letters = wordToGuess.split("");
    return letters.every((letter) => guessedLetters.includes(letter));
}
  
export function hasLost(hangmanState) {
    //Check if the player has lost based on the hangmanState
    return hangmanState >= 6;
}
  
export function handleLetterGuess(state, letter) {
    if (state.wordToGuess.includes(letter)) {
      //Correct guess
      const updatedGuessedLetters = [...state.guessedLetters, letter];
      const gameResult = hasWon(state.wordToGuess, updatedGuessedLetters) ? "win" : null;
  
      return {
        ...state,
        guessedLetters: updatedGuessedLetters,
        gameResult,
      };
    } else {
      //Incorrect guess
      const updatedHangmanState = state.hangmanState + 1;
      const gameResult = hasLost(updatedHangmanState) ? "lose" : null;
  
      return {
        ...state,
        hangmanState: updatedHangmanState,
        gameResult,
      };
    }
  }
  
export function restartGame(currentState) {
    //Reset the game state for a new game
    return {
      wordToGuess: null,
      guessedLetters: [],
      hangmanState: 0,
      gameResult: null,
      wins: currentState.gameResult === "win" ? currentState.wins + 1 : currentState.wins,
      losses: currentState.gameResult === "lose" ? currentState.losses + 1 : currentState.losses,
    };
  }
  