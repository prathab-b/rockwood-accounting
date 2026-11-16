import { Link } from "react-router-dom";

export default function ServiceCard({ title, children }) {
  return (
    <article className="service-card">
      <h3>{title}</h3>
      <p>{children}</p>
      <Link to="/services" className="service-card-link">
        Learn More <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}