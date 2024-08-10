export default function Card({ title }) {
  return (
    <li className="card">
      <figure>
        <figcaption>{title}</figcaption>
      </figure>
    </li>
  );
}
