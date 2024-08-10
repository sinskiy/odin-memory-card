import { Home, Settings } from "lucide-react";
import "./App.css";
import { useContext, useState } from "react";
import { SettingsContext } from "./SettingsContext";

// App
// -> provide settings context
// -> show start screen (play button, choose difficulty)
function App() {
  const [settings, setSettings] = useState(useContext(SettingsContext));

  const [route, setRoute] = useState("home");
  function handleHomeClick() {
    setRoute("home");
  }
  return (
    <SettingsContext.Provider value={settings}>
      <header className="header">
        <button aria-label="home" onClick={handleHomeClick}>
          <h1>memory card</h1>
        </button>
        <nav>
          <button aria-label="home" onClick={handleHomeClick}>
            <Home />
          </button>
          <button aria-label="settings">
            <Settings />
          </button>
        </nav>
      </header>
      <main></main>
    </SettingsContext.Provider>
  );
}

export default App;
