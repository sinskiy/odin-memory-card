export default function HeaderEntry({ title, children = title, ...props }) {
  return (
    <button className="button" aria-live={title} {...props}>
      {children}
    </button>
  );
}
