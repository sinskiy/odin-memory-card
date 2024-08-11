import { Home } from "lucide-react";
import HeaderEntry from "./HeaderEntry";
import "../styles/Header.css";

export default function Header({ setRoute, title, children }) {
  function handleHomeClick() {
    setRoute("home");
  }

  const homeProps = { title: "home", onClick: handleHomeClick };
  return (
    <header className="header">
      <HeaderEntry {...homeProps}>
        <h1>{title}</h1>
      </HeaderEntry>
      <nav>
        <HeaderEntry {...homeProps}>
          <Home />
        </HeaderEntry>
        {children}
      </nav>
    </header>
  );
}
