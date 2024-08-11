import { Play } from "lucide-react";
import InputSelectGroupEntry from "./InputSelectGroupEntry";
import "../styles/Start.css";
import { DIFFICULTIES } from "../../lib/const";

export default function Start({
  setRoute,
  selectedDifficultyIndex,
  setSelectedDifficultyIndex,
}) {
  return (
    <section className="start" aria-label="start">
      <ul className="input-select-group">
        {DIFFICULTIES.map((difficulty, i) => (
          <li className="select-entry" key={difficulty.name}>
            <InputSelectGroupEntry
              name="difficulty"
              label={difficulty.name}
              description={`(${difficulty.atTime} at time, ${difficulty.total} total)`}
              checked={selectedDifficultyIndex === i}
              onChange={() => setSelectedDifficultyIndex(i)}
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
