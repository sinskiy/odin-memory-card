import { Play } from "lucide-react";
import "../styles/App.css";
import { useContext, useState } from "react";
import { SettingsContext } from "../../lib/SettingsContext";
import Header from "./Header";
import InputSelectGroup from "./InputSelectGroupEntry";
import Start from "./Start";

// App
// -> provide settings context
// -> show start screen (play button, choose difficulty)
function App() {
  const [settings, setSettings] = useState(useContext(SettingsContext));

  const [route, setRoute] = useState("home");
  return (
    <SettingsContext.Provider value={settings}>
      <Header setRoute={setRoute} title="Memory Card" settings={settings} />
      <main>
        <Start />
      </main>
    </SettingsContext.Provider>
  );
}

export default App;
