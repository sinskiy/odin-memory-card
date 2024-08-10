import { Home, Settings } from "lucide-react";

export default function Header({ setRoute, title, settings, children }) {
  settings;
  function handleHomeClick() {
    setRoute("home");
  }

  const homeProps = { "aria-label": "home", onClick: handleHomeClick };
  return (
    <header className="header">
      <button {...homeProps}>
        <h1>{title}</h1>
      </button>
      <nav>
        <button {...homeProps}>
          <Home />
        </button>
        {/* TODO: use settings */}
        <button aria-label="settings">
          <Settings />
        </button>
        {children}
      </nav>
    </header>
  );
}
