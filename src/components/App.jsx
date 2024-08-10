import "../styles/App.css";
import { useContext, useState } from "react";
import { SettingsContext } from "../../lib/SettingsContext";
import Header from "./Header";
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
      <main>{route === "home" && <Start setRoute={setRoute} />}</main>
    </SettingsContext.Provider>
  );
}

export default App;
