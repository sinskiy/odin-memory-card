import { Home, Settings } from "lucide-react";
import "./App.css";
import { useState } from "react";

// App
// -> provide settings context
// -> show start screen (play button, choose difficulty)
function App() {
  const [route, setRoute] = useState("home");

  function handleHomeClick() {
    setRoute("home");
  }
  return (
    <>
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
    </>
  );
}

export default App;
