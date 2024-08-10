import Card from "./Card";
import "../styles/Game.css";

export default function Game() {
  const cards = [];

  // TODO: provide info from difficulties
  const CARDS_AMOUNT = 3;
  for (let i = 0; i < CARDS_AMOUNT; i++) {
    cards.push(<Card key={i} title={i} />);
  }
  return <ul className="cards">{cards}</ul>;
}
