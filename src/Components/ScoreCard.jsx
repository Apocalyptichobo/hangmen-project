import React from "react";

const ScoreCard = ({ wins, losses }) => (
  <div className="col-4 score-card">
    Total Wins: {wins}
    <br />
    Total Losses: {losses}
  </div>
);

export default ScoreCard;
