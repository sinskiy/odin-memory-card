import { Play } from "lucide-react";
import InputSelectGroupEntry from "./InputSelectGroupEntry";
import "../styles/Start.css";

export default function Start() {
  return (
    <section className="start" aria-label="start">
      <ul className="input-select-group">
        {difficulties.map((difficulty) => (
          <li className="select-entry" key={difficulty.name}>
            <InputSelectGroupEntry name="difficulty" label={difficulty.name} />
          </li>
        ))}
      </ul>
      <button className="styled">
        <Play fill="currentColor" size={16} />
        Start
      </button>
    </section>
  );
}

const difficulties = [
  {
    name: "easy",
  },
  { name: "medium" },
  { name: "hard" },
];
