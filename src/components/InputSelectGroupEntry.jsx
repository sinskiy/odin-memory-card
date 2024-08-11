import "../styles/InputSelectGroup.css";

export default function InputSelectGroupEntry({
  name,
  label,
  description,
  type = "radio",
  ...props
}) {
  const descriptionId = `${label}-description`;
  return (
    <div>
      <input
        type={type}
        name={name}
        id={label}
        aria-describedby={descriptionId}
        {...props}
      />
      <label htmlFor={label}>{label}</label>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}
