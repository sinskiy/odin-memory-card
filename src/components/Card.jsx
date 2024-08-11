import { BASE_API_URL } from "../../lib/const";
import "../styles/Card.css";

export default function Card({ handleCountryClick, title, code }) {
  return (
    <li className="card">
      <button onClick={() => handleCountryClick(code)}>
        <figure className="card-side front">
          <img src={`${BASE_API_URL}${code}.svg`} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
        <div className="card-side back">back</div>
      </button>
    </li>
  );
}
