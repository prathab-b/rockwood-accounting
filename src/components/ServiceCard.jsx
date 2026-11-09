export default function ServiceCard({ number, title, children }) {
  return (
    <article className="service-card">
      <span className="service-number">{number}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}