import Card from "./Card";
import "../styles/Game.css";
import { DIFFICULTIES } from "../../lib/const";
import { countries } from "../../lib/api";
import { useState } from "react";
import { random, shuffle } from "../../lib/helpers";

export default function Game({ selectedDifficultyIndex }) {
  const { total, atTime } = DIFFICULTIES[selectedDifficultyIndex];
  const [countries, setCountries] = useState(() => getBaseCountries(total));
  const visibleCountries = getVisibleCountries();

  const [clickedCountries, setClickedCountries] = useState([]);

  function handleCountryClick(code) {
    if (clickedCountries.includes(code)) {
      console.log("you lost");
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
    } while (
      getVisibleCountries(shuffledCountries).every(([code]) =>
        newClickedCountries.includes(code)
      )
    );
    setCountries(shuffledCountries);
  }

  function getVisibleCountries(allCountries = countries) {
    return allCountries.slice(0, atTime);
  }
  return (
    <ul className="cards">
      {visibleCountries.map(([code, title]) => (
        <Card
          key={code}
          handleCountryClick={handleCountryClick}
          code={code}
          title={title}
        />
      ))}
    </ul>
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
