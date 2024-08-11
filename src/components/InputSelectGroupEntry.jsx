import "../styles/InputSelectGroup.css";

export default function InputSelectGroupEntry({
  name,
  label,
  defaultChecked,
  type = "radio",
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={label}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={label} className="interactive">
        {label}
      </label>
    </div>
  );
}
