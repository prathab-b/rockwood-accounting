
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/careers", label: "Careers" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img className="brand-logo" src={logo} alt="Rockwood logo" />
          <span className="brand-name">
            <span>Rockwood Accounting</span>
            <span className="brand-line-two">&amp; Tax Services</span>
          </span>
        </Link>

        <button
          className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
          id="main-navigation-links"
        >
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={closeMenu}
              className={({ isActive }) => isActive ? "active" : ""}
            >
              {label}
            </NavLink>
          ))}

          <a
            className="nav-cta"
            // href="https://google.ca"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Book A Meeting
          </a>
        </div>
      </nav>
    </header>
  );
}
