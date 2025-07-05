require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PORT } = require("./src/config/config");
const gameRoutes = require("./src/api/routes/gameRoutes");
const connectDB = require('./src/utils/db');

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

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});

connectDB();