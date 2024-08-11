import "../styles/App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import Start from "./Start";
import Game from "./Game";
import { BASE_API_URL } from "../../lib/const";

function App() {
  const [selectedDifficultyIndex, setSelectedDifficultyIndex] = useState(0);

  const [route, setRoute] = useState("home");
  const [key, setKey] = useState(0);
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(BASE_API_URL + "en/codes.json");
      const countries = Object.entries(await response.json());
      setAllCountries(countries);
    }

    fetchCountries();
  }, []);

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
          <Game
            key={key}
            allCountries={allCountries}
            setKey={setKey}
            selectedDifficultyIndex={selectedDifficultyIndex}
          />
        )}
      </main>
    </>
  );
}

export default App;
