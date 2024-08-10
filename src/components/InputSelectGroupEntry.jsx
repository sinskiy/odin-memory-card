import "../styles/InputSelectGroup.css";

export default function InputSelectGroupEntry({ name, label, type = "radio" }) {
  return (
    <div>
      <input type={type} name={name} id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
