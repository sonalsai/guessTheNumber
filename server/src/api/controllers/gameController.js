let attempts = 0;
let secretNumber = generateRandomNumber();

// Function to generate a new random number
function generateRandomNumber() {
  attempts = 0; // Reset attempts when a new number is generated
  return Math.floor(Math.random() * 15) + 1;
}

// Function to check the user's guess
function checkNumber(userGuess) {
  attempts++;
  const isCorrect = userGuess === secretNumber;
  let score = 0;

  if (isCorrect) {
    score = 15 - attempts + 1; // Higher score for fewer attempts
    if (attempts >= 10) {
      score = 0; // Reset score if attempts hit 10 or more
    }
    secretNumber = generateRandomNumber(); // Generate a new number for the next round
    return {
      statusCode: 200,
      success: true,
      data: {
        isGuessCorrect: true,
        randomNumber: userGuess,
        score: score,
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
        score: 0,
      },
      message: "Incorrect guess. Try again!",
    };
  }
}

module.exports = { checkNumber, generateRandomNumber };
