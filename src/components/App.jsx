import "../styles/App.css";
import { useContext, useState } from "react";
import { SettingsContext } from "../../lib/SettingsContext";
import Header from "./Header";
import Start from "./Start";
import Game from "./Game";

// App
// -> provide settings context
// -> show start screen (play button, choose difficulty)
function App() {
  const [settings, setSettings] = useState(useContext(SettingsContext));

  const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(0);

  const [route, setRoute] = useState("home");
  return (
    <SettingsContext.Provider value={settings}>
      <Header setRoute={setRoute} title="Memory Card" settings={settings} />
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
    </SettingsContext.Provider>
  );
}

export default App;
