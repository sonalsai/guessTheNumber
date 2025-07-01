# Guess The Number Game

This is a simple web-based "Guess The Number" game where users try to guess a secret number within a specified range.

## Features

- User-friendly interface.
- Interactive gameplay with immediate feedback.
- Asks for a username to personalize the experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a lightning-fast development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Radix UI**: A collection of unstyled, accessible UI components for React.
- **Sass**: A CSS pre-processor for writing more maintainable and scalable stylesheets.

## Local Setup

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (which includes npm)

### Installation

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone <repository-url>
    cd guessTheNumber/client
    ```

2.  **Install dependencies:**

    Navigate to the `client` directory and install the required npm packages:

    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command in the `client` directory:

```bash
npm run dev
```

This will typically start the application on `http://localhost:5173` (or another available port). You can then open this URL in your web browser.

## Project Structure

- `public/`: Static assets.
- `src/`: Contains the main application source code.
  - `src/api/`: API related functions.
  - `src/Components/`: Reusable UI components.
    - `src/Components/shared/`: Shared components like `DialogBox` and `GameScreen`.
    - `src/Components/ui/`: UI primitives from Radix UI/Tailwind.
  - `src/Home/`: The main home page component.
  - `src/lib/`: Utility functions.
  - `src/main.jsx`: The entry point of the React application.
  - `src/style.css`: Global styles.
