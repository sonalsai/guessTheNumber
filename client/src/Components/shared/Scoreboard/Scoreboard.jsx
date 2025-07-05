import React from "react";
import "./Scoreboard.scss";

const Scoreboard = ({ scores }) => {
  return (
    <div className="scoreboardContainer">
      <h2 className="scoreboardTitle">Scoreboard</h2>
      <ul className="scoreList">
        {scores.map((score, index) => (
          <li key={index} className={`scoreItem ${score.correct ? "correct" : "incorrect"}`}>
            <span>Guess: {score.guess}</span>
            <span>{score.correct ? "Correct" : "Incorrect"}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
