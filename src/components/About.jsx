
import { useEffect } from "react";
import "./About.css";

const features = [
  {
    number: "01",
    icon: "⌘",
    title: "Hands-on Learning",
    description:
      "Build practical skills through programming, projects, and real-world applications.",
    color: "blue",
  },
  {
    number: "02",
    icon: "✳",
    title: "Problem Solving",
    description:
      "Develop logical thinking and analytical skills to solve challenging problems.",
    color: "cyan",
  },
  {
    number: "03",
    icon: "↗",
    title: "Technology & Business",
    description:
      "Connect computing knowledge with business concepts and industry needs.",
    color: "violet",
  },
  {
    number: "04",
    icon: "∞",
    title: "Innovation & Teamwork",
    description:
      "Encourage creativity, collaboration, and innovative thinking.",
    color: "teal",
  },
];

function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "#about .about-reveal"
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main id="about" className="csbs-about">
      <section className="about-section about-intro">
        <div className="about-main-card about-reveal">
          <div className="about-photo">
            <img
              src="/images/campus.jpg"
              alt="Sethu Institute of Technology campus"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.classList.add(
                  "photo-fallback"
                );
              }}
            />

            <div className="about-photo-overlay">
              <span>Sethu Institute of Technology</span>
              <h3>Shaping ideas. Building futures.</h3>
            </div>
          </div>

          <div className="about-copy">
            <span className="about-eyebrow">
              ABOUT THE DEPARTMENT
            </span>

            <h1>
              Computer Science
              <br />
              and Business Systems
            </h1>

            <p>
              The Department of Computer Science and Business
              Systems (CSBS) was established in 2020 with an
              intake of 60 students. It offers a four-year
              B.Tech. programme designed to develop
              industry-ready professionals with a strong
              foundation in computing, business systems, and
              industry-oriented practices.
            </p>

            <p>
              The programme, preferred by TCS and approved by
              AICTE, emphasizes technical excellence, ethical
              values, and human values to prepare students for
              the evolving demands of the Business 4.0 era.
            </p>

            <p>
              Students are also introduced to emerging
              technologies and interdisciplinary areas,
              including Analytics, Deep Learning, Machine
              Learning, Cloud Computing, the Internet of
              Things (IoT), and Design Thinking, enhancing
              their knowledge and employability in the IT
              industry.
            </p>

            <div className="about-tags">
              <span>Technology</span>
              <span>Business Systems</span>
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-features">
        <div className="features-heading about-reveal">
          <span className="about-eyebrow">OUR APPROACH</span>
          <h2>What Makes CSBS Special?</h2>
          <p>
            Building skills for tomorrow's technology and
            business world.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article
              className={`feature-card feature-${feature.color} about-reveal feature-from-${index % 2 === 0 ? "left" : "right"}`}
              key={feature.number}
            >
              <div className="feature-top">
                <span className="feature-icon">
                  {feature.icon}
                </span>
                <span className="feature-number">
                  {feature.number}
                </span>
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="feature-bottom-line" />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
