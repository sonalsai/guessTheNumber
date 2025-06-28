import { DialogBox } from "@/Components/shared/DialogBox/DialogBox";
import { useEffect, useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleUsernameChange = (value) => {
    console.log(value);
    setUsername(value);
    setOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {open && (
        <DialogBox isOpen={open} handleUsernameChange={handleUsernameChange} />
      )}

      {username && (
        <div className="text-2xl font-bold mt-4">Welcome, {username}!</div>
      )}

    </div>
  );
};

export default App;
