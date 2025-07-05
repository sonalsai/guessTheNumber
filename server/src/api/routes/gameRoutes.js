const express = require("express");
const { checkNumber } = require("../controllers/gameController");
const connectDB = require("../../utils/db");

const router = express.Router();

// Route to check the user's guess
router.post("/check", async (req, res) => {
  const userGuess = parseInt(req.body.number, 10);
  const username = req.body.username; // Assuming username is passed in the request body

  if (isNaN(userGuess)) {
    return res.status(400).json({
      error: "Invalid number provided. Please provide a valid integer.",
      statusCode: 400,
    });
  }

  const result = checkNumber(userGuess);

  if (result.data.isGuessCorrect) {
    if (!username || username.trim() === '') {
      return res.status(400).json({
        error: "Username is required to save score and cannot be empty.",
        statusCode: 400,
      });
    }
    try {
      const db = await connectDB();
      await db.collection("scores").insertOne({ username, score: result.data.score });
      result.data.username = username; // Add username to the response data
      result.message += " Score saved!";
    } catch (err) {
      console.error("Failed to save score:", err);
      // Do not expose internal error details to the client
      result.message += " (Failed to save score due to internal error)";
    }
  }
  res.json(result);
});

// Route to get all scores
router.get("/scores", async (req, res) => {
  try {
    const db = await connectDB();
    const scores = await db.collection("scores").find().sort({ score: -1 }).toArray();
    res.json({
      success: true,
      statusCode: 200,
      data: {
        scores: scores,
      },
      message: "Scores fetched successfully.",
    });
  } catch (err) {
    console.error("Failed to fetch scores:", err);
    res.status(500).json({
      success: false,
      statusCode: 500,
      error: "Failed to fetch scores due to internal error.",
    });
  }
});

module.exports = router;
