import Card from "./Card";

export default function Cards({ cards, handleCountryClick }) {
  return (
    <ul className="cards">
      {cards.map(([code, title]) => (
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
