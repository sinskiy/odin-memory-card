import { Home, Play, Settings } from "lucide-react";
import "./App.css";
import { useContext, useState } from "react";
import { SettingsContext } from "../lib/SettingsContext";
import Header from "./Header";

// App
// -> provide settings context
// -> show start screen (play button, choose difficulty)
function App() {
  const [settings, setSettings] = useState(useContext(SettingsContext));

  const [route, setRoute] = useState("home");
  return (
    <SettingsContext.Provider value={settings}>
      <Header
        setRoute={setRoute}
        title="Memory Card"
        settings={settings}
      ></Header>
      <main>
        <button className="styled">
          <Play fill="currentColor" size={16} />
          Start
        </button>
      </main>
    </SettingsContext.Provider>
  );
}

export default App;
