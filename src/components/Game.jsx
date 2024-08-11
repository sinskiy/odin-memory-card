import "../styles/Game.css";
import { DIFFICULTIES } from "../../lib/const";
import { useRef, useState } from "react";
import { random, shuffle } from "../../lib/helpers";
import Cards from "./Cards";
import Dialog from "./Dialog";

export default function Game({
  allCountries,
  setKey,
  selectedDifficultyIndex,
}) {
  const { total, atTime } = DIFFICULTIES[selectedDifficultyIndex];
  const [countries, setCountries] = useState(() =>
    getBaseCountries(allCountries, total)
  );
  const visibleCountries = getVisibleCountries();

  const dialogRef = useRef(null);
  const [gameState, setGameState] = useState("playing");

  const [clickedCountries, setClickedCountries] = useState([]);

  const [rotating, setRotating] = useState(false);
  function handleCountryClick(code) {
    if (clickedCountries.includes(code)) {
      dialogRef.current.showModal();
      setGameState("lost");
    } else {
      const newClickedCountries = [...clickedCountries, code];
      setClickedCountries(newClickedCountries);
      if (gameWon(newClickedCountries)) {
        dialogRef.current.showModal();
        setGameState("won");
        return;
      }
      setRotating(true);
      setTimeout(() => shuffleCountries(newClickedCountries), 300);
      setTimeout(() => setRotating(false), 600);
    }
  }
  function shuffleCountries(newClickedCountries) {
    let shuffledCountries;
    do {
      shuffledCountries = shuffle(countries);
    } while (cardsUnwinnable(shuffledCountries, newClickedCountries));
    setCountries(shuffledCountries);
  }
  function cardsUnwinnable(countries, clickedCountries) {
    return getVisibleCountries(countries).every(([code]) =>
      clickedCountries.includes(code)
    );
  }
  function gameWon(clickedCountries) {
    return clickedCountries.length === total;
  }
  function getVisibleCountries(allCountries = countries) {
    return allCountries.slice(0, atTime);
  }
  return (
    <section className={rotating ? "rotating" : undefined}>
      <p
        aria-live="polite"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        {clickedCountries.length}/{total}
      </p>
      <Cards cards={visibleCountries} handleCountryClick={handleCountryClick} />
      <Dialog setKey={setKey} title={`You ${gameState}`} ref={dialogRef} />
    </section>
  );
}

function getBaseCountries(countries, total) {
  const baseCountries = [];
  for (let i = 0; i < total; i++) {
    let randomCountry;
    do {
      randomCountry = getRandomCountry(countries);
    } while (countryAlreadyExists(randomCountry));
    baseCountries.push(randomCountry);
  }
  return baseCountries;

  function countryAlreadyExists(newCountry) {
    const country = baseCountries.find(
      (country) => country[0] === newCountry[0]
    );
    const exists = country !== undefined;
    return exists;
  }
}

function getRandomCountry(allCountries) {
  return allCountries[random(allCountries.length)];
}
