import { Link } from "react-router-dom";
import aboutBackground from "../assets/about-background.png";
import photo from "../assets/photo.jpeg";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <img
          src={aboutBackground}
          alt=""
          className="about-hero-image"
        />

        <div className="about-hero-overlay" />

        <div className="container about-hero-content">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="section coming-soon-intro">
        <div className="container coming-soon-intro-inner">
          <div className="coming-soon-intro-image">
            <img src={photo} alt="Mandeep S. Bhatti, CPA" />
          </div>

          <div className="coming-soon-intro-text">
            <p className="eyebrow">Meet your accountant</p>
            <h2>Mandeep S. Bhatti, CPA, CA</h2>

            <p>
              With over 15 years of experience in public accounting, Mandeep provides accounting and tax services to sole proprietors and small to mid-sized businesses. He holds a Bachelor of Arts with a major in Mathematics and Statistics, followed by an accounting program at Wilfrid Laurier University. In 2013, he earned his CPA, CA designation. His experience with established national accounting firms, including one of the Big Four, has provided him with a strong technical foundation and broad exposure to a diverse range of clients and industries.
            </p>

            <p>
              Throughout his career, Mandeep has worked on a wide range of accounting and tax matters, including CRA audits, giving him valuable insight into the financial challenges and opportunities faced by business owners. He brings this experience to every client relationship, with a focus on providing personalized attention, thorough and reliable service, and clear communication. His goal is to help clients navigate their financial responsibilities with confidence while building lasting professional relationships based on trust.
            </p>

            <p>
              Outside of his professional life, Mandeep lives in Rockwood with his family. He feels fortunate to be part of such a beautiful and supportive community and enjoys the welcoming atmosphere and quality of life that Rockwood has to offer.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <p className="eyebrow">Our firm</p>
            <h2>Established in 2022, built on experience.</h2>
          </div>

          <div className="prose">
            <p>
              Rockwood Accounting &amp; Tax Services was established in 2022
              with the goal of providing individuals and businesses with
              dependable accounting and tax services backed by personal
              attention.
            </p>

            <p>
              The firm brings together years of professional experience and a
              commitment to understanding each client's circumstances.
              Whether it is ongoing accounting support for a business or
              assistance with personal tax matters, we believe clients deserve
              service that is thoughtful, thorough, and relevant to their
              needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="two-column">
            <div>
              <p className="eyebrow">Working with Us</p>
              <h2>Professional experience with a personal approach.</h2>
            </div>

            <div className="prose">
              <p>
                Working with an accountant should feel straightforward. You
                should have someone who understands your situation, takes the
                time to address your questions, and approaches your financial
                matters with care.
              </p>

              <p>
                At Rockwood Accounting & Tax Services, the focus is on building lasting client
                relationships through consistent service and an understanding
                of what matters to each individual or business. We aim to make
                accounting and tax responsibilities easier to manage while
                helping clients stay informed about their financial position.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section center">
        <div className="container narrow">
          <p className="eyebrow">Get in touch</p>
          <h2>Let's discuss how we can support you.</h2>
          <Link className="button button-orange" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}