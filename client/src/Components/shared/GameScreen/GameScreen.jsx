import React, { useState } from "react";
import "./GameScreen.scss"; // Import the styles for GameScreen

const GameScreen = () => {
  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setGuess(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted guess:", guess);
    setGuess("");
  };

  return (
    <div className=" gameScreenContainer max-w-[420px] w-full  max-h-[420px] h-full  flex flex-col items-center justify-around px-4 py-6 font-sans  bg-[#bd79fc] text-white  rounded-[36px] shadow-lg ">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2">Guess the Number</h1>
        <p className="text-lg">Try to guess the number between 1 and 15</p>
      </div>

      {/* Body */}
      <div className="w-full max-w-[320px]">
        <input
          type="text"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          value={guess}
          onChange={handleChange}
          className="w-full p-3 rounded-md text-black placeholder-white bg-[#cf73ff] focus:outline-none focus:border-[white] focus:ring-white transition border-2 border-[#AD49E1] "
          placeholder="Enter your guess"
        />
      </div>

      {/* Footer */}
      <div>
        <button
          onClick={handleSubmit}
          className="bg-[#bd79fc] border-2 border-[#AD49E1] text-[white] px-6 py-2 rounded-md hover:bg-[#AD49E1] hover:border-[#bd79fc] hover:text-[white] transition  duration-300 focus:outline-none semibold "
        >
          Guess
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
