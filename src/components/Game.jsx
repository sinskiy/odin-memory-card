import Card from "./Card";
import "../styles/Game.css";
import { DIFFICULTIES } from "../../lib/const";

export default function Game({ selectedDifficultyIndex }) {
  const cards = [];

  const cardsAmount = DIFFICULTIES[selectedDifficultyIndex].atTime;
  console.log(cardsAmount);
  for (let i = 0; i < cardsAmount; i++) {
    cards.push(<Card key={i} title={i} />);
  }
  return <ul className="cards">{cards}</ul>;
}
