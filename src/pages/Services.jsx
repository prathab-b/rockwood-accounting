import { Link } from "react-router-dom";
import servicesHeroImage from "../assets/landing-banner-background.jpeg";
import servicesIntroImage from "../assets/landing-banner-clarity.jpeg";

const services = [
  {
    number: "01",
    title: "Accounting Services",
    description:
      "Accurate financial information is essential to understanding your business. We provide accounting support to keep your records organized and give you a clear picture of your financial performance.",
    offerings: [
      "Preparation of financial statements",
      "Year-end accounting and reporting",
      "Financial statement review and analysis",
      "General accounting support",
      "Accounting records and reconciliations",
    ],
  },
  {
    number: "02",
    title: "Business Advisory Services",
    description:
      "Make informed business decisions with a better understanding of your financial position. We provide practical insight to help you plan, manage cash flow, and evaluate business performance.",
    offerings: [
      "Financial performance analysis",
      "Budgeting and financial forecasting",
      "Cash flow planning and management",
      "Business planning",
      "Financial guidance and support",
    ],
  },
  {
    number: "03",
    title: "Estate & Trust",
    description:
      "Estate and trust matters come with important accounting and tax responsibilities. We provide support to help executors, trustees, and beneficiaries manage these financial requirements.",
    offerings: [
      "Estate and trust accounting",
      "Estate and trust tax return preparation",
      "Financial records and reporting",
      "Tax support during estate administration",
      "Accounting support for executors and trustees",
      "Assist with CRA audits",
    ],
  },
  {
    number: "04",
    title: "Taxation Services",
    description:
      "Stay on top of your tax responsibilities with accurate preparation and practical guidance. We support individuals and businesses with their tax filing and compliance needs.",
    offerings: [
      "Personal income tax returns",
      "Corporate income tax returns",
      "Tax planning and guidance",
      "Estate and trust tax returns",
      "Tax compliance support",
    ],
  },
  {
    number: "05",
    title: "Bookkeeping Support",
    description:
      "Well-maintained financial records make it easier to understand and manage your business. We provide bookkeeping support to keep your day-to-day financial information organized.",
    offerings: [
      "Recording financial transactions",
      "Bank and credit card reconciliations",
      "Accounts payable and receivable",
      "Maintaining organized financial records",
      "General bookkeeping assistance",
    ],
  },
];

export default function Services() {
  return (
    <>
      <section className="services-hero">
        <img
          src={servicesHeroImage}
          alt=""
          className="services-hero-image"
        />

        <div className="services-hero-overlay" />

        <div className="container services-hero-content">
          <h1>Our Services</h1>
        </div>
      </section>

      <section className="section services-details">
        <div className="container">
          <div className="services-section-heading">
            <span className="services-eyebrow">What We Offer</span>
            <h2>Our Services</h2>
          </div>

          <div className="services-detail-list">
            {services.map((service) => (
              <article className="services-detail" key={service.title}>
                <div className="services-detail-heading">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <div className="services-detail-content">
                  <h4>What We Do</h4>
                  <ul>
                    {service.offerings.map((offering) => (
                      <li key={offering}>{offering}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-contact">
        <div className="container services-contact-content">
          <span className="services-eyebrow">Let's Get Started</span>
          <h2>Let's discuss how we can support you.</h2>
          <p>
            Connect with Rockwood Accounting & Tax Services to discuss your
            accounting and tax needs.
          </p>
          <Link to="/contact" className="button button-light">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}