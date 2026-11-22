
import contactHeroImage from "../assets/landing-banner-background.jpeg";

export default function Contact() {
  return (
    <>
      <section className="about-hero">
        <img
          src={contactHeroImage}
          alt=""
          className="about-hero-image"
        />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <p className="eyebrow">Get in touch</p>
            <h2>Tell us how we can help.</h2>
            <p className="lead">
              Have a question or need accounting and tax support?
              Send us a message and we'll be happy to discuss how
              we can help.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:mandeepbhatti@bhattiaccounting.com">
                  mandeepbhatti@bhattiaccounting.com
                </a>
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+15198564952">
                  (519) 856-4952
                </a>
              </div>
            </div>
          </div>

          <form
            className="contact-card"
            // action="https://formspree.io/f/your-form-id"
            // method="POST"
          >
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="_replyto"
              type="email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
            />

            <button
              className="button button-orange full-width"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}