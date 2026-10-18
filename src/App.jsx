
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Faculty from "./components/Faculty";
import Placements from "./components/Placements";
import EventsPage, { EventsSection } from "./components/Events";
import GalleryPage, { GallerySection } from "./components/Gallery";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (
      !location.state?.scrollToPlacements &&
      !location.state?.scrollToEvents
    ) {
      return;
    }

    const targetId = location.state.scrollToEvents
      ? "events"
      : "placements";

    const timer = setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [location.state]);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="website">
      <nav className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">C</span>
          <span className="brand-text">
            <strong>CSBS</strong>
            <small>SETHU INSTITUTE OF TECHNOLOGY</small>
          </span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#faculty">Faculty</a>
          <a href="#placements">Placements</a>
          <a href="#events">Events</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          type="button"
          className="login-btn"
          onClick={() =>
            alert("Login functionality will be added later.")
          }
        >
          Login <span>↗</span>
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-dots"></div>
          <div className="hero-glow"></div>

          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              TECHNOLOGY MEETS BUSINESS
            </div>

            <h1>
              Think Beyond.
              <br />
              <span>Build the Future.</span>
            </h1>

            <p className="hero-description">
              Welcome to Computer Science and Business Systems —
              where technology, innovation and business intelligence
              come together to shape tomorrow.
            </p>

            <div className="hero-actions">
              <a href="#about" className="primary-btn">
                Explore Our Department <span>↗</span>
              </a>

              <a href="#events" className="secondary-btn">
                Discover Campus <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line"></span>
              LEARN · INNOVATE · LEAD
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-aura"></div>

            <div className="orbit orbit-one">
              <span className="orbit-dot dot-one"></span>
            </div>

            <div className="orbit orbit-two">
              <span className="orbit-dot dot-two"></span>
            </div>

            <div className="orbit orbit-three">
              <span className="orbit-dot dot-three"></span>
            </div>

            <div className="glass-sphere">
              <div className="sphere-highlight"></div>

              <div className="sphere-inner">
                <div className="sphere-logo">CS</div>
                <div className="sphere-divider"></div>
                <span className="sphere-caption">FUTURE READY</span>
                <span className="sphere-subtitle">
                  COMPUTER SCIENCE
                  <br />
                  &amp; BUSINESS SYSTEMS
                </span>
              </div>
            </div>

            <div className="floating-label label-ai">
              <span className="label-icon icon-purple">✧</span>
              <span>
                <strong>Artificial Intelligence</strong>
                <small>Think smarter</small>
              </span>
            </div>

            <div className="floating-label label-data">
              <span className="label-icon icon-blue">⌘</span>
              <span>
                <strong>Data Analytics</strong>
                <small>Discover insights</small>
              </span>
            </div>

            <div className="floating-label label-business">
              <span className="label-icon icon-green">↗</span>
              <span>
                <strong>Business + Tech</strong>
                <small>Create possibilities</small>
              </span>
            </div>

            <div className="floating-label label-cloud">
              <span className="label-icon icon-blue">☁</span>
              <span>
                <strong>Cloud Computing</strong>
                <small>Connect the future</small>
              </span>
            </div>

            <span className="particle particle-one">✦</span>
            <span className="particle particle-two">✧</span>
            <span className="particle particle-three">·</span>
            <span className="particle particle-four">✳</span>
          </div>

          <div className="hero-bottom">
            <span>COMPUTER SCIENCE &amp; BUSINESS SYSTEMS</span>
            <a href="#about" className="scroll-indicator">
              SCROLL TO EXPLORE ↓
            </a>
          </div>
        </section>

        <div id="about" className="page-section-anchor">
          <About />
        </div>

        <div id="faculty" className="page-section-anchor">
          <Faculty />
        </div>

        <div id="placements" className="page-section-anchor">
          <Placements />
        </div>

        {/* Events homepage section */}
        <EventsSection />

        {/* Gallery homepage preview */}
        <GallerySection />

        
<section className="contact-section" id="contact">
  <div className="contact-container">
    <div className="contact-heading">
      <span className="section-kicker">CONTACT</span>
      <h2>Connect with <span>CSBS.</span></h2>
      <p>
        Computer Science and Business Systems
        <br />
        Sethu Institute of Technology
      </p>
    </div>

    <div className="contact-cards">
      {/* College Location */}
      <article className="contact-card">
        <div className="contact-icon">📍</div>
        <span className="contact-label">FIND OUR CAMPUS</span>
        <h3>College Location</h3>
        <p>
          Sethu Institute of Technology,
          Pulloor, Kariapatti – 626 115,
          Virudhunagar District,
          Tamil Nadu, India.
        </p>
        <a
          className="contact-link"
          href="https://www.google.com/maps/search/?api=1&query=Sethu+Institute+of+Technology+Pulloor+Kariapatti"
          target="_blank"
          rel="noreferrer"
        >
          View on Google Maps ↗
        </a>
      </article>

      {/* Department Contact */}
      <article className="contact-card">
        <div className="contact-icon">🏛️</div>
        <span className="contact-label">GET IN TOUCH</span>
        <h3>Department Contact</h3>
        <p>
          Computer Science and
          Business Systems (CSBS)
          <br />
          Sethu Institute of Technology
        </p>
        <a
          className="contact-link"
          href="https://sethu.ac.in/dept/CSBS/"
          target="_blank"
          rel="noreferrer"
        >
          Visit Official Department ↗
        </a>
      </article>

      {/* Head of the Department */}
      <article className="contact-card hod-card">
        <div className="contact-icon">✉️</div>
        <span className="contact-label">DEPARTMENT LEADERSHIP</span>
        <h3>Head of the Department</h3>
        <h4>Dr. V. Shunmughavel</h4>
        <p className="hod-designation">
          M.E., Ph.D.
        </p>
        <a
          className="contact-email"
          href="mailto:hodcsbs@sethu.ac.in"
        >
          hodcsbs@sethu.ac.in
        </a>
      </article>
    </div>

    <div className="contact-bottom">
      <span>CSBS · Sethu Institute of Technology</span>
      <a href="#home">Back to Top ↑</a>
    </div>
  </div>
</section>

      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon">C</span>

          <span className="brand-text">
            <strong>CSBS</strong>
            <small>SETHU INSTITUTE OF TECHNOLOGY</small>
          </span>
        </a>

        <p>Think Beyond. Build the Future.</p>

        <span>
          © {new Date().getFullYear()} CSBS Department
        </span>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/placements/:batchId"
        element={<Placements />}
      />

      <Route path="/events" element={<EventsPage />} />

      <Route path="/gallery" element={<GalleryPage />} />

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
