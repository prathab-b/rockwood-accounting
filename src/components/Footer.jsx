import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">Rockwood Accounting & Tax Services</div>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/careers">Careers</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{new Date().getFullYear()} Rockwood Accounting & Tax Services</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
