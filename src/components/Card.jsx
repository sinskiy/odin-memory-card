import { BASE_API_URL } from "../../lib/const";
import "../styles/Card.css";

export default function Card({ handleCountryClick, title, code }) {
  return (
    <li className="card">
      <button onClick={() => handleCountryClick(code)}>
        <figure>
          <img src={`${BASE_API_URL}${code}.svg`} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </button>
    </li>
  );
}
