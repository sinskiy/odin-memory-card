import "../styles/Game.css";
import { DIFFICULTIES } from "../../lib/const";
import { countries } from "../../lib/api";
import { useState } from "react";
import { random, shuffle } from "../../lib/helpers";
import Cards from "./Cards";

export default function Game({ selectedDifficultyIndex }) {
  const { total, atTime } = DIFFICULTIES[selectedDifficultyIndex];
  const [countries, setCountries] = useState(() => getBaseCountries(total));
  const visibleCountries = getVisibleCountries();

  const [clickedCountries, setClickedCountries] = useState([]);

  function handleCountryClick(code) {
    if (clickedCountries.includes(code)) {
      console.log("lost");
    } else {
      const newClickedCountries = [...clickedCountries, code];
      setClickedCountries(newClickedCountries);
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
    return getVisibleCountries(countries).some(
      ([code]) => !clickedCountries.includes(code)
    );
  }
  function getVisibleCountries(allCountries = countries) {
    return allCountries.slice(0, atTime);
  }
  return (
    <Cards cards={visibleCountries} handleCountryClick={handleCountryClick} />
  );
}

function getBaseCountries(total) {
  const baseCountries = [];
  for (let i = 0; i < total; i++) {
    baseCountries.push(getRandomCountry());
  }
  return baseCountries;
}

function getRandomCountry() {
  return countries[random(countries.length)];
}
