const express = require("express");
const { checkNumber } = require("../controllers/gameController");
const connectDB = require("../../utils/db");

const router = express.Router();

// Route to check the user's guess
router.get("/check", (req, res) => {
  const userGuess = parseInt(req.query.number, 10);

  if (isNaN(userGuess)) {
    return res.status(400).json({
      error: "Invalid number provided.",
      statusCode: 400,
    });
  }

  const result = checkNumber(userGuess);
  res.json(result);
});

// Route to get all scores
router.get("/scores", async (req, res) => {
  try {
    const db = await connectDB();
    const scores = await db.collection("scores").find().sort({ score: -1 }).toArray();
    res.json(scores);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch scores." });
  }
});

// Route to add a new score
router.post("/scores", async (req, res) => {
  const { username, score } = req.body;

  if (!username || !score) {
    return res.status(400).json({ error: "Username and score are required." });
  }

  try {
    const db = await connectDB();
    await db.collection("scores").insertOne({ username, score });
    res.status(201).json({ message: "Score saved successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save score." });
  }
});

module.exports = router;
