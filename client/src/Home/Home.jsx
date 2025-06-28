import { DialogBox } from "@/Components/shared/DialogBox/DialogBox";
import GameScreen from "@/Components/shared/GameScreen/GameScreen";
import { useEffect, useState } from "react";
import "./Home.scss";

const App = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!username) {
      setOpen(true);
    }
  }, []);

  const handleUsernameChange = (value) => {
    console.log(value);
    setUsername(value);
    setOpen(false);
  };

  return (
    <div className="mainContainer">
      {open && (
        <DialogBox
          isOpen={open}
          handleUsernameChange={handleUsernameChange}
          setUsername={setUsername}
          username={username}
        />
      )}

      {username && <GameScreen />}
    </div>
  );
};

export default App;
