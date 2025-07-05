import React, { useEffect, useState } from "react";
import "./Scoreboard.scss";
import { fetchScores } from "../../../api";

const Scoreboard = ({ scores }) => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const getScores = async () => {
      try {
        const data = await fetchScores();
        setHighScores(data.data.scores);
      } catch (error) {
        console.error("Error fetching high scores:", error);
      }
    };
    getScores();
  }, []);

  return (
    <div className="scoreboardContainer">
      <h2 className="scoreboardTitle">Scoreboard</h2>
      <h3 className="sectionTitle">Current Game</h3>
      <ul className="scoreList">
        {scores.map((score, index) => (
          <li key={index} className={`scoreItem ${score.correct ? "correct" : "incorrect"}`}>
            <span>Guess: {score.guess}</span>
            <span>{score.correct ? "Correct" : "Incorrect"}</span>
          </li>
        ))}
      </ul>
      <h3 className="sectionTitle">High Scores</h3>
      <ul className="scoreList">
        {highScores?.map((score, index) => (
          <li key={index} className="scoreItem highscore">
            <span>{score.username}</span>
            <span>{score.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;

