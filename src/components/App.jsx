import "../styles/App.css";
import { useState } from "react";
import Header from "./Header";
import Start from "./Start";
import Game from "./Game";

function App() {
  const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(0);

  const [route, setRoute] = useState("home");
  return (
    <>
      <Header setRoute={setRoute} title="Memory Card" />
      <main>
        {route === "home" ? (
          <Start
            setRoute={setRoute}
            selectedDifficultyIndex={selectedDifficultyIndex}
            setSelectedDifficultyIndex={setSelectedDifficultyIndex}
          />
        ) : (
          <Game selectedDifficultyIndex={selectedDifficultyIndex} />
        )}
      </main>
    </>
  );
}

export default App;
