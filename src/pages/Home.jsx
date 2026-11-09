import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { useEffect, useState } from "react";
import landingBannerBackground from "../assets/landing-banner-background.jpeg";
import landingBannerClarity from "../assets/landing-banner-clarity.jpeg";
import landingBannerHeights from "../assets/landing-banner-heights.jpeg";

const reviews = [
  {
    text: `Mandeep is one of the best accountants that I have worked with. He is very knowledgeable and easy to work with. He is highly recommendable.`,
    author: "Ann Kannangara",
  },
  {
    text: `Mandeep Bhatti, Owner of Rockwood Accounting & Tax, helped me with tax returns for my late daughter's estate. I am really happy with the work he did for me. He is knowledgeable not only with individual income tax but with trusts and estates taxes as well. I highly recommend this Accounting firm.`,
    author: "Marie Henault",
  },
  {
    text: `Mandeep handles the accounts of our church with great care and with the full backing of his professional experience. We are lucky to have him on board.
In addition, he handles members of our family’s personal and corporate taxes with the same care and professionalism.
Mandeep is calm, very knowledgable and easy to work with.
Highly recommended!`,
    author: "Rector St.John's",
  },
  {
    text: `I contacted Mandeep for my personal taxes and he was exceptional to work with. He is very friendly, professional and great at what he does. I am incredibly grateful for Mandeep as 'taxes' are something I usually dread. He made the experience pleasant and put me at ease throughout the process. I would highly recommend Mandeep if you are looking for a true professional - you won't regret it.`,
    author: "Tori Sereg",
  },
  {
    text: `Mandeep is very straightforward and honest, and very professional, while being hands-on and approachable. Covers a wide spectrum of accounting related topics. Would highly recommend to any small/medium business and individual alike.`,
    author: "Jeffrey Breen",
  },
  {
    text: `We had 3 years of taxes - Mandeep took all our info and we actually got money back. He did a great job and was very reasonable.`,
    author: "John Vingoe",
  },
  {
    text: `Mandeep is very pleasant and helpful, and very interested in finding ways to help. He prepared our tax returns proficiently, and gave good advice about our businesses. So happy to work with someone so competent right here in Rockwood!`,
    author: "Laura Robertson",
  },
  {
    text: `We have been using Rockwood Accounting for 2 years with total satisfaction. Mandeep completed multiple years of tax returns for us, and his numbers matched up with Rev Can perfectly. He is extremely knowledgeable. We find Mandeep a very personable gentleman to work with. Our son is now a client of Rockwood Accounting and is extremely pleased too.`,
    author: "Jacquie Quinn",
  },
  {
    text: `Had great experience working with Mandeep ! He helped me save taxes and the service given by him was very professional ! Great guy with good knowledge..`,
    author: "Mayank Walia",
  },
  {
    text: `Wonderful and stress free service from Mandeep who helped to sort out our taxes ! Highly recommend the friendly and caring service received !`,
    author: "Helen Byloo",
  },
  {
    text: `Highly recommend! Mandeep is extremely knowledgeable and very helpful. He takes his time to ensure you understand every detail.
We are extremely happy with his services.`,
    author: "Crystal Mercer",
  },
  {
    text: `Mandeep got me out of a mess created by my former accountant. Extremely professional and reliable. I give him my highest recommendation.`,
    author: "Pierre Desrochers",
  },
  {
    text: `We're thrilled to have found a trusted local accounting professional that we plan to work with for many years to come. Mandeep operates with the utmost integrity and professionalism. His expertise and attention to your unique situation makes you feel like you are in great hands. Can't recommend Mandeep and his team highly enough!`,
    author: "Alicia Devine",
  },
  {
    text: `Choosing Rockwood Accounting & Tax Services to handle financial matters related to my small business has been one of the best decisions. In the short time we've worked together, I've developed a strong sense of trust and partnership. Mandeep's personalized approach and desire to develop a deep understanding of your unique business and financial needs sets him apart. Looking forward to continuing to work with Mandeep and his team in the future!`,
    author: "Brendan Devine",
  },
  {
    text: `I have had a great experience with bookkeeping services, such a personal and professional approach. I highly recommend their services.`,
    author: "Lilia Olvera",
  },
  {
    text: `Rockwood Accounting has been an absolute game-changer for our business. Their bookkeeping services are fast, accurate, and incredibly thorough. We were up and running in no time with a clear picture of our finances—something we’d struggled with before. The team is responsive, detail-oriented, and genuinely cares about helping you stay on track. Highly recommend Rockwood to anyone looking for professional and efficient accounting support!`,
    author: "Kevin M",
  },
  {
    text: `This is the second time I’ve worked with this accountant, and once again, I am very happy with the service.

Mandeep is professional, patient, and takes the time to explain everything clearly. He makes sure everything is done properly and goes the extra mile to ensure you understand what’s being filed.

It’s not easy finding someone you can trust with your taxes, but he has been reliable and consistent both times I’ve used his services.

Highly recommended.`,
    author: "Margherita Tabone",
  },
  {
    text: `Mandeep and his team are amazing.`,
    author: "Moiz Mahmood",
  },
];

export default function Home() {
  const slides = [
    {
      image: landingBannerBackground,
      heading: "A fresh perspective on your next big goal.",
      description:
        "Good conversations, clear numbers, and a stronger path forward.",
    },
    {
      image: landingBannerClarity,
      heading: "Clarity in every number. Confidence in every decision.",
      description:
        "Understand where you stand and make your next move with confidence.",
    },
    {
      image: landingBannerHeights,
      heading: "Helping your business reach new heights.",
      description:
        "Build on solid financial foundations and keep moving toward what’s next.",
      position: "center 20%",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const [reviewOrder] = useState(() => {
    const order = reviews.map((_, index) => index);

    // Fisher-Yates shuffle
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }

    return order;
  });

  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((current) => (current + 1) % reviewOrder.length);
    }, 15000);

    return () => clearInterval(interval);
  }, [reviewOrder.length]);

  const previousReview = () => {
    setActiveReview(
      (current) => (current - 1 + reviews.length) % reviews.length
    );
  };

  const nextReview = () => {
    setActiveReview((current) => (current + 1) % reviews.length);
  };

  return (
    <>
      <section className="landing-banner">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`landing-background ${
              activeSlide === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: slide.position || "center",
            }}
            aria-hidden="true"
          />
        ))}
        <button
          className="slide-arrow slide-arrow-left"
          onClick={() =>
            setActiveSlide((current) =>
              (current - 1 + slides.length) % slides.length
            )
          }
          aria-label="Previous slide"
        >
          &#8249;
        </button>

        <button
          className="slide-arrow slide-arrow-right"
          onClick={() =>
            setActiveSlide((current) =>
              (current + 1) % slides.length
            )
          }
          aria-label="Next slide"
        >
          &#8250;
        </button>

        <div className="container landing-content">
          <div
            key={activeSlide}
            className="landing-text-transition"
          >
            {slides[activeSlide].showFirm && (
              <div className="firm-lockup">
                <p className="firm-name">Mandeep S. Bhatti, CPA</p>
                <p className="firm-subtitle">Professional Corporation</p>
              </div>
            )}

            <h1>{slides[activeSlide].heading}</h1>
            <p className="landing-copy">
              {slides[activeSlide].description}
            </p>

            <div className="landing-actions">
              <a
                className="button button-orange"
                // href="https://google.ca"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book A Meeting
              </a>
              <Link className="button button-outline" to="/services">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="slide-indicators" aria-label="Hero slides">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              className={activeSlide === index ? "active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container center">
          <div className="intro-firm-lockup">
            <h2 className="firm-name">Mandeep S. Bhatti, CPA</h2>
            <p className="firm-subtitle">Professional Corporation</p>
          </div>

          <div className="intro-divider"></div>

          <div className="reviews-section">
            {/* <p className="eyebrow">CLIENT REVIEWS</p> */}
            {/* <h2>What our clients say.</h2> */}

            <div className="review-carousel-wrapper">
              <button
                type="button"
                className="review-arrow review-arrow-left"
                onClick={previousReview}
                aria-label="Previous review"
              >
                &#8249;
              </button>

              <div className="review-carousel">
                <div className="review-quote-mark">“</div>

                <blockquote className="review-quote" key={activeReview}>
                  {reviews[reviewOrder[activeReview]].text}
                </blockquote>

                <p className="review-author">
                  — {reviews[reviewOrder[activeReview]].author}
                </p>
              </div>

              <button
                type="button"
                className="review-arrow review-arrow-right"
                onClick={nextReview}
                aria-label="Next review"
              >
                &#8250;
              </button>
            </div>

            <div className="review-dots">
              {reviewOrder.map((reviewIndex, position) => (
                <button
                  key={reviewIndex}
                  type="button"
                  className={activeReview === position ? "active" : ""}
                  onClick={() => setActiveReview(position)}
                  aria-label={`Show review ${position + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Services built around your business.</h2>
            </div>
            <Link className="text-link" to="/services">
              View all services →
            </Link>
          </div>
          <div className="service-grid">
            <ServiceCard number="01" title="Accounting Services">
              Practical accounting support to help keep your financial information organized.
            </ServiceCard>
            <ServiceCard number="02" title="Business Advisory Services">
              Clear financial perspective to support better day-to-day business decisions.
            </ServiceCard>
            <ServiceCard number="03" title="Estate & Trust">
              Thoughtful accounting support for estate and trust-related financial needs.
            </ServiceCard>
            <ServiceCard number="04" title="Taxation Services">
              Tax support focused on clarity, accuracy, and keeping your obligations organized.
            </ServiceCard>
            <ServiceCard number="05" title="Bookkeeping Support">
              Reliable recordkeeping support so you can spend more time running your business.
            </ServiceCard>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow light">Let's talk</p>
            <h2>Ready to get your finances working for you?</h2>
          </div>
          <a
            className="button button-light"
            // href="https://google.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book A Meeting
          </a>
        </div>
      </section>
    </>
  );
}
