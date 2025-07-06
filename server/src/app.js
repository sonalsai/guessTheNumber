require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT } = require("./config/config");
const gameRoutes = require("./api/routes/gameRoutes");
const connectDB = require('./utils/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use("/api", gameRoutes);

// Root path
app.get("/", (req, res) => {
  res.send("Server is running!");
});

connectDB().catch(err => {
  console.error("Failed to connect to the database:", err);
});

// Start server only when not in a Vercel environment
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`✅ Server listening on http://localhost:${process.env.PORT || 3000}`);
  });
}

module.exports = app;
