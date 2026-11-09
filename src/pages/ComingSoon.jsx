
import { Link } from "react-router-dom";
import landingBannerBackground from "../assets/landing-banner-background.jpeg";
import photo from "../assets/photo.png";

export default function ComingSoon({ pageName }) {
  return (
    <div className="coming-soon-page">
      <section
        className="coming-soon-hero"
        style={{ backgroundImage: `url(${landingBannerBackground})` }}
      >
        <div className="coming-soon-overlay" />

        <div className="container coming-soon-hero-content">
          <p className="eyebrow light">{pageName}</p>

          <h1>
            Something is on its way.
          </h1>

          <p className="coming-soon-subtitle">
            We're preparing something worthwhile. Check back soon.
          </p>
        </div>
      </section>

      <section className="section coming-soon-intro">
        <div className="container coming-soon-intro-inner">
          <div className="coming-soon-intro-image">
            <img
              src={photo}
                alt="Rockwood Accounting office"
            />
          </div>

          <div className="coming-soon-intro-text">
            <p className="eyebrow">{pageName}</p>
              <h2>We're working on something for you.</h2>
              <p>
                We're currently preparing this section of our website.
                We're looking forward to sharing more information with you
                soon. In the meantime, please feel free to explore the rest
                of our website.
              </p>
          </div>
        </div>
      </section>

      <section className="coming-soon-content">
        <div className="container coming-soon-card">
          <span className="coming-soon-mark">COMING SOON</span>

          <h2>We're working on this page.</h2>

          <p>
            Our {pageName.toLowerCase()} page is currently under development.
            In the meantime, we'd be happy to hear from you directly.
          </p>

          <div className="coming-soon-actions">
            <Link className="button button-orange" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}