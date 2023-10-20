import React from "react";

const Hangman = ({ hangmanState }) => {
  const hangmanStates = [
    // Add your hangman figure states as CSS classes
  ];

  return (
    <div className="col-12">
      {/* Display the appropriate hangman state based on hangmanState */}
      <div className={`drawing ${hangmanStates[hangmanState]}`} />
    </div>
  );
};

export default Hangman;
