const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);
let _db; // Variable to store the connected database instance

async function connectDB() {
  if (_db) {
    console.log("Already connected to MongoDB, returning existing connection.");
    return _db;
  }

  try {
    await client.connect();
    console.log("Connected to MongoDB");
    _db = client.db("guessTheNumber");
    return _db;
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
}

module.exports = connectDB;
