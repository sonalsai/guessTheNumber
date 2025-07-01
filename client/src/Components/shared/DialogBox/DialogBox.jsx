import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

export const DialogBox = ({ isOpen, handleUsernameChange }) => {
  const [username, setUserName] = useState("");
  const handleSaveName = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Username cannot be empty");
      return;
    }
    handleUsernameChange(username);
  };
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUsernameChange(username);
        }}
      >
        <DialogContent className="sm:max-w-[425px] bg-transparent text-white rounded-[24px] border-none p-6 shadow-lg flex flex-col gap-6">
          <div className="absolute inset-0 -z-10 bg-black/60 backdrop-blur-xl rounded-[24px] border border-white/10"></div>
          <DialogHeader className="text-center">
            <DialogTitle className="text-white text-center">
              Please enter your username to continue
            </DialogTitle>
          </DialogHeader>

          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => {
              const value = e.target.value.replace(/\s+/g, " ");
              if (value.length <= 15) {
                setUserName(value);
              }
            }}
            autoComplete="off"
            autoFocus
            autoCorrect="off"
            spellCheck="false"
            className="w-full max-w-[320px] mx-auto bg-white/10 text-white placeholder-white/70 border-2 border-transparent focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 rounded-md p-3 transition"
            placeholder="Enter your username"
          />

          <DialogFooter>
            <Button
              onClick={handleSaveName}
              disabled={!username.trim()}
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 border-2 border-transparent text-white px-4 py-2 rounded-md transition mx-auto"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};