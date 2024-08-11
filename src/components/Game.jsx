import "../styles/Game.css";
import { DIFFICULTIES } from "../../lib/const";
import { countries } from "../../lib/api";
import { useRef, useState } from "react";
import { random, shuffle } from "../../lib/helpers";
import Cards from "./Cards";
import Dialog from "./Dialog";

export default function Game({ selectedDifficultyIndex }) {
  const { total, atTime } = DIFFICULTIES[selectedDifficultyIndex];
  const [countries, setCountries] = useState(() => getBaseCountries(total));
  const visibleCountries = getVisibleCountries();

  const dialogRef = useRef(null);
  const [gameState, setGameState] = useState("playing");

  const [clickedCountries, setClickedCountries] = useState([]);

  function handleCountryClick(code) {
    if (clickedCountries.includes(code)) {
      setGameState("lost");
    } else {
      const newClickedCountries = [...clickedCountries, code];
      setClickedCountries(newClickedCountries);
      if (gameWon(newClickedCountries)) {
        dialogRef.current.showModal();
        setGameState("won");
        return;
      }
      shuffleCountries(newClickedCountries);
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
    <>
      <p
        aria-live="polite"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        {clickedCountries.length}/{total}
      </p>
      <Cards cards={visibleCountries} handleCountryClick={handleCountryClick} />
      <Dialog title={`You ${gameState}`} ref={dialogRef} />
    </>
  );
}

function getBaseCountries(total) {
  const baseCountries = [];
  for (let i = 0; i < total; i++) {
    let randomCountry;
    do {
      randomCountry = getRandomCountry();
    } while (countryAlreadyExists(randomCountry));
    baseCountries.push(getRandomCountry());
  }
  return baseCountries;

  function countryAlreadyExists(newCountry) {
    baseCountries.find((country) => country[0] === newCountry[0]);
  }
}

function getRandomCountry() {
  return countries[random(countries.length)];
}
