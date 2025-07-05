import React, { useState } from "react";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./GameScreen.scss";
import { checkNumber } from "../../../api";

const GameScreen = ({ username }) => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [scores, setScores] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setGuess(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!guess) return;

    setAttempts(prevAttempts => prevAttempts + 1);

    try {
      const data = await checkNumber(username, guess);
      console.log(data)
      if (data.data.isGuessCorrect) {
        setMessage(`GG, ${username}! You crushed it!`);
        setIsCorrect(true);
        setScores([...scores, { guess, correct: true }]);
        setAttempts(0); // Reset attempts for a new game
      } else {
        const funnyMessages = [
          `Not quite, ${username}! Try again!`,
          `Oof, ${username}, that ain't it!`,
          `So close, ${username}! Give it another go!`,
          `A valiant effort, ${username}, but no dice!`,
        ];
        setMessage(
          funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
        );
        setIsCorrect(false);
        setScores([...scores, { guess, correct: false }]);
      }
      setGuess("");
    } catch (error) {
      console.log("Hited")
      console.error("Error checking number:", error);
      setMessage("Oops! Something went wrong on the server.");
      setIsCorrect(false);
    }
  };

  return (
    <div className="gameContainer">
      <div className="gameScreen">
        {/* Header */}
        <div className="header">
          <h1 className="title">Guess the Magic Number</h1>
          <p className="subtitle">I'm thinking of a number from 1 to 15...</p>
        </div>

        {/* Body */}
        <div className="body">
          <input
            type="text"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            value={guess}
            onChange={handleChange}
            className="input"
            placeholder="What's your guess?"
          />
          {message && (
            <p className={`message ${isCorrect ? "correct" : "incorrect"}`}>
              {message}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="footer">
          <button onClick={handleSubmit} className="guess-button">
            Guess
          </button>
        </div>
      </div>
      <Scoreboard scores={scores} />
    </div>
  );
};

export default GameScreen;

