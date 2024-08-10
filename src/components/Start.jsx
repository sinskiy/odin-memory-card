import { Play } from "lucide-react";
import InputSelectGroupEntry from "./InputSelectGroupEntry";
import "../styles/Start.css";

export default function Start({ setRoute }) {
  return (
    <section className="start" aria-label="start">
      <ul className="input-select-group">
        {difficulties.map((difficulty, i) => (
          <li className="select-entry" key={difficulty.name}>
            <InputSelectGroupEntry
              name="difficulty"
              label={difficulty.name}
              defaultChecked={i === 0}
            />
          </li>
        ))}
      </ul>
      <button onClick={() => setRoute("game")} className="styled">
        <Play fill="currentColor" size={16} />
        Start
      </button>
    </section>
  );
}

const difficulties = [
  {
    name: "easy",
    atTime: 3,
    total: 5,
  },
  { name: "medium", atTime: 4, total: 7 },
  { name: "hard", atTime: 5, total: 10 },
];
