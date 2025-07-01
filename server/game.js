let secretNumber = generateRandomNumber();

// Function to generate a new random number
function generateRandomNumber() {
  return Math.floor(Math.random() * 15) + 1;
}

// Function to check the user's guess
function checkNumber(userGuess) {
  const isCorrect = userGuess === secretNumber;

  if (isCorrect) {
    secretNumber = generateRandomNumber(); // Generate a new number for the next round
    return {
      statusCode: 200,
      success: true,
      data: {
        isGuessCorrect: true,
        randomNumber: userGuess,
      },
      message: "Congratulations! You guessed the correct number.",
    };
  } else {
    return {
      statusCode: 200,
      success: true,
      data: {
        isGuessCorrect: false,
        randomNumber: null,
      },
      message: "Incorrect guess. Try again!",
    };
  }
}

module.exports = { checkNumber, generateRandomNumber };
