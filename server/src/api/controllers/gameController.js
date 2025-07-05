const MAX_NUMBER = 15;
const MAX_ATTEMPTS_FOR_SCORE = 10;

let gameState = {
  attempts: 0,
  secretNumber: 0,
};
gameState.secretNumber = generateRandomNumber();

// Function to generate a new random number
function generateRandomNumber() {
  gameState.attempts = 0; // Reset attempts when a new number is generated
  return Math.floor(Math.random() * MAX_NUMBER) + 1;
}

// Function to check the user's guess
function checkNumber(userGuess) {
  console.log(gameState.secretNumber)
  gameState.attempts++;
  const isCorrect = userGuess === gameState.secretNumber;
  let score = 0;

  if (isCorrect) {
    score = MAX_NUMBER - gameState.attempts + 1; // Higher score for fewer attempts
    if (gameState.attempts >= MAX_ATTEMPTS_FOR_SCORE) {
      score = 0; // Reset score if attempts hit MAX_ATTEMPTS_FOR_SCORE or more
    }
    gameState.secretNumber = generateRandomNumber(); // Generate a new number for the next round
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
