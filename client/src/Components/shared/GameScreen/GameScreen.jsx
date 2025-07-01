import React, { useState } from "react";
import "./GameScreen.scss";
import { checkNumber } from "../../../api";

const GameScreen = ({ username }) => {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setGuess(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!guess) return;

    try {
      const data = await checkNumber(guess);
      if (data.message.includes("Congratulations")) {
        setMessage(`🎉 Wow, ${username}! You guessed it! 🎉`);
        setIsCorrect(true);
      } else {
        const funnyMessages = [
          `Not quite, ${username}! Keep trying!`,
          `Oops, ${username}, that's not the one!`,
          `So close, ${username}! Give it another shot!`,
          `A valiant effort, ${username}, but no!`,
        ];
        setMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
        setIsCorrect(false);
      }
      setGuess("");
    } catch (error) {
      console.error("Error checking number:", error);
      setMessage("Oops! Something went wrong on the server.");
      setIsCorrect(false);
    }
  };

  return (
    <div className="gameScreenContainer">
      {/* Header */}
      <div className="header">
        <h1 className="title">🔮 Guess the Magic Number 🔮</h1>
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
  );
};

export default GameScreen;
