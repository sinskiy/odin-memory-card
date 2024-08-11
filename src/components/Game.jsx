import Card from "./Card";
import "../styles/Game.css";
import { DIFFICULTIES } from "../../lib/const";
import { countries } from "../../lib/api";

export default function Game({ selectedDifficultyIndex }) {
  const cards = [];

  const cardsAmount = DIFFICULTIES[selectedDifficultyIndex].atTime;
  for (let i = 0; i < cardsAmount; i++) {
    const [randomCode, randomTitle] =
      countries[Math.floor(Math.random() * countries.length)];
    cards.push(<Card key={i} title={randomTitle} code={randomCode} />);
  }
  return <ul className="cards">{cards}</ul>;
}
