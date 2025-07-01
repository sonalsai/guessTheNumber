const express = require("express");
const { checkNumber } = require("./game");

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

module.exports = router;
