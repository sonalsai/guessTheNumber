const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Keep current random number in memory
let currentRandomNumber = Math.floor(Math.random() * 15) + 1;

// Routes
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/checkNumber", (req, res) => {
  const number = parseInt(req.query.number, 10);

  if (isNaN(number)) {
    return res.status(400).json({
      error: "Number is required and must be an integer",
      statusCode: 400,
    });
  }

  const isCorrect = number === currentRandomNumber;
  console.log(currentRandomNumber, number, isCorrect);

  if (isCorrect) {
    // Generate a new number only if guessed correctly
    currentRandomNumber = Math.floor(Math.random() * 15) + 1;
  }

  res.json({
    statusCode: 200,
    success: true,
    data: {
      isGuessCorrect: isCorrect,
      randomNumber: isCorrect ? number : null, // Reveal only if correct
    },
    message: isCorrect
      ? "Congratulations! You guessed the correct number."
      : "Incorrect guess. Try again!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
