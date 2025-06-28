const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/checkNumber", (req, res) => {
  const { number } = req.query;
  if (!number) {
    return res.status(400).json({ error: "Number is required" });
  }

  const randomNumber = Math.floor(Math.random() * 15) + 1; // Random number between 1 and 100
  const isCorrect = parseInt(number, 10) === randomNumber;

  res.json({
    randomNumber,
    isCorrect,
    message: isCorrect
      ? {
          message: "Congratulations! You guessed the correct number.",
          data: { isguessCorrect: isCorrect, randomNumber: randomNumber },
          statusCode: 200,
        }
      : {
          message: "Incorrect guess. Try again!",
          data: {
            isguessCorrect: isCorrect,
            randomNumber: randomNumber,
          },
          statusCode: 200,
        },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
