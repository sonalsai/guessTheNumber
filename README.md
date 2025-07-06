
# Guess the Number Game

This is a simple "Guess the Number" game where the player tries to guess a randomly generated number between 1 and 15. The game provides feedback on whether the guess is correct and keeps track of the score.

## Live Demo

You can play the game live at: [https://guess-the-magic-number.vercel.app/](https://guess-the-magic-number.vercel.app/)

## Project Structure

The project is divided into two main parts: a `client` (frontend) and a `server` (backend).

### Client

The client is a React application built with Vite. It provides the user interface for the game.

- **`src/`**: Contains the main source code for the React application.
  - **`api/`**: Contains the API client for making requests to the backend.
  - **`Components/`**: Contains the reusable React components.
  - **`Home/`**: Contains the main `Home` component that renders the game.
  - **`lib/`**: Contains utility functions.
  - **`main.jsx`**: The entry point of the React application.
  - **`style.css`**: The main stylesheet for the application.

### Server

The server is a Node.js application using the Express framework. It handles the game logic and API requests.

- **`src/`**: Contains the main source code for the server.
  - **`api/`**: Contains the API routes and controllers.
    - **`controllers/`**: Contains the game logic.
    - **`routes/`**: Defines the API endpoints.
  - **`config/`**: Contains the configuration for the application.
  - **`utils/`**: Contains utility functions, such as the database connection.
  - **`app.js`**: The main entry point of the server application.

## Getting Started

To run the project locally, you will need to have Node.js and npm installed.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/guess-the-number.git
cd guess-the-number
```

### 2. Install Dependencies

You will need to install the dependencies for both the `client` and the `server`.

**For the client:**

```bash
cd client
npm install
```

**For the server:**

```bash
cd ../server
npm install
```

### 3. Set Up Environment Variables

The project uses environment variables for configuration. You will need to create a `.env` file in both the `client` and `server` directories.

**In the `client` directory, create a `.env` file with the following content:**

```
VITE_API_BASE_URL=http://localhost:3000/api
```

**In the `server` directory, create a `.env` file with the following content:**

```
PORT=3000
MONGODB_URI=<your-mongodb-uri>
```

Replace `<your-mongodb-uri>` with your actual MongoDB connection string.

### 4. Run the Application

You will need to run both the `client` and the `server` in separate terminals.

**To run the client:**

```bash
cd client
npm run dev
```

The client will be available at `http://localhost:5173`.

**To run the server:**

```bash
cd ../server
npm start
```

The server will be running on `http://localhost:3000`.

## How to Play

1.  Enter a number between 1 and 15 in the input field.
2.  Click the "Guess" button.
3.  The game will tell you if your guess is correct.
4.  If your guess is correct, your score will be updated.
5.  The game will then generate a new random number for you to guess.
