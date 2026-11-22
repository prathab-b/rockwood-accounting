
import careersHeroImage from "../assets/landing-banner-background.jpeg";

export default function Careers() {
  return (
    <>
      <section className="about-hero">
        <img
          src={careersHeroImage}
          alt=""
          className="about-hero-image"
        />
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <h1>Careers</h1>
        </div>
      </section>

      <section className="section careers-section">
        <div className="container">
          <div className="careers-intro">
            <p className="eyebrow">Join Our Team</p>
            <h2>Career Opportunities</h2>
            <p className="lead">
              Explore opportunities to become part of the Rockwood Accounting
              & Tax Services team.
            </p>
          </div>

          <article className="career-listing">
            <div className="career-listing-header">
              <div>
                <p className="eyebrow">Seasonal · Full-Time</p>
                <h3>Seasonal Office Administrator/Bookkeeper</h3>
              </div>
              <span className="career-tag">Tax Season</span>
            </div>

            <p>
              Rockwood Accounting & Tax Services is seeking a
              personable and organized Full-Time, Seasonal Office Administrator/Bookkeeper to
              support our office during this tax season.
            </p>

            <h4>Responsibilities</h4>
            <ul>
              <li>Welcome clients and assist with front-desk inquiries.</li>
              <li>Answer and direct incoming phone calls.</li>
              <li>Assist with bookkeeping and data entry.</li>
              <li>Help organize documents and maintain office records.</li>
              <li>Provide general administrative support to the team.</li>
            </ul>

            <h4>Qualifications</h4>
            <ul>
              <li>Strong communication and interpersonal skills.</li>
              <li>Organized, dependable, and detail-oriented.</li>
              <li>Experience with accounting software such as QuickBooks, Excel, etc.</li>
              <li>1-2 years of office administrative/bookkeeper experience is preferred.</li>
            </ul>

            <div className="career-application">
              <p>
                Please email your resume and a brief introduction to:
              </p>
              <a href="mailto:mandeepbhatti@bhattiaccounting.com?subject=Office%20Administrator%20%2F%20Bookkeeper%20Application">
                mandeepbhatti@bhattiaccounting.com
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}