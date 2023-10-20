import React from "react";

function Hangman({ hangmanState }) {
  const hangmanParts = [
    "base",
    "pole-upright",
    "top",
    "pole-down",
  ];

  const personParts = [
    "person-head",
    "person-body",
    "person-right-arm",
    "person-left-arm",
    "person-right-leg",
    "person-left-leg",
  ];

  return (
    <div className="drawing">
      {hangmanParts.map((part, index) => (
        <div
          key={index}
          className={`${part} ${index <= hangmanState ? "active" : ""}`}
        ></div>
      ))}
      {personParts.map((part, index) => (
        <div
          key={index}
          className={`${part} ${index === hangmanState - hangmanParts.length ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
}

export default Hangman;