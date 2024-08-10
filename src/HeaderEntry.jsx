export default function HeaderEntry({ title, children = title, ...props }) {
  return (
    <button aria-live={title} {...props}>
      {children}
    </button>
  );
}
