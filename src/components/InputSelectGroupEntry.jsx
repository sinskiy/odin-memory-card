import "../styles/InputSelectGroup.css";

export default function InputSelectGroupEntry({
  name,
  label,
  type = "radio",
  ...props
}) {
  return (
    <div>
      <input type={type} name={name} id={label} {...props} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
