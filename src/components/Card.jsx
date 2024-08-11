import { BASE_API_URL } from "../../lib/const";

export default function Card({ title, code }) {
  return (
    <li className="card">
      <figure>
        <img src={`${BASE_API_URL}${code}.svg`} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </li>
  );
}
