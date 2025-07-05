import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/Components/ui/dialog";
import { useState } from "react";

export const DialogBox = ({ isOpen, handleUsernameChange }) => {
  const [username, setUserName] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const validateUsername = (value) => {
    if (value.trim() === "") {
      return "Oops! Your username can't be empty. Please type something in!";
    }
    if (value.trim().length < 3) {
      return "Too short! Your username needs at least 3 characters.";
    }
    if (value.trim().length > 15) {
      return "Whoa, that's a long one! Keep your username under 15 characters.";
    }
    if (!/^[a-zA-Z_]+$/.test(value.trim())) {
      return "Hold on! Usernames can only have letters and underscores (no numbers or symbols).";
    }
    return "";
  };

  const handleUsernameInputChange = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\s+/g, " ");
    if (sanitizedValue.length <= 15) {
      setUserName(sanitizedValue);
      setUsernameError(validateUsername(sanitizedValue));
    }
  };

  const handleSaveName = (e) => {
    e.preventDefault();
    const error = validateUsername(username);
    if (error) {
      setUsernameError(error);
      return;
    }
    handleUsernameChange(username.trim());
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <form onSubmit={handleSaveName}>
        <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white rounded-lg border-gray-700 p-6 shadow-lg">
          <DialogHeader className="text-center">
            <DialogTitle className="text-white text-center">
              Enter Your Gamer Tag
            </DialogTitle>
          </DialogHeader>

          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameInputChange}
            autoComplete="off"
            autoFocus
            autoCorrect="off"
            spellCheck="false"
            className="w-full bg-gray-700 text-white placeholder-gray-400 border-2 border-transparent focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 rounded-md p-3 transition"
            placeholder="Enter your username"
          />
          {usernameError && (
            <p className="text-red-400 text-sm mt-1 font-semibold animate-pulse text-center">{usernameError}</p>
          )}

          <DialogFooter>
            <Button
              onClick={handleSaveName}
              disabled={!!usernameError || !username.trim()}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 border-2 border-transparent text-white px-4 py-2 rounded-md transition mx-auto"
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
