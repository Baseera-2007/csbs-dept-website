
import { Link } from "react-router-dom";
import "./Events.css";

const events = [
  {
    id: "digital-marketing",
    title: "INTRODUCTION TO DIGITAL MARKETING",
    image: "/images/digital.png",
    content:
      "The Department of Computer Science and Business Systems, Sethu Institute of Technology, organized an Introduction to Digital Marketing program for second-year students. The session covered social media marketing, SEO, content marketing, online branding, and digital advertising. Organized by students Reuben Isaac P and Sasti Kumar, the program encouraged interactive learning and introduced students to real-world digital marketing applications.",
  },
  {
    id: "faculty-development",
    title: "FACULTY DEVELOPMENT PROGRAM",
    image: "/images/faculty.png",
    content:
      "The Faculty Development Program at Sethu Institute of Technology enhanced faculty members’ knowledge of emerging technologies, industry trends, and the integration of computing with business processes. Through expert sessions, practical workshops, and interactive discussions, the program promoted innovative teaching methods and industry-oriented curriculum development.",
  },
  {
    id: "innogen",
    title: "INNOGEN",
    image: "/images/innogen.png",
    content:
      "As part of the InnoGen Top 50 achievement, students presented their innovative project to the District Collector through a live demonstration. The presentation highlighted its technical feasibility and real-world applications, helping students strengthen their confidence, communication skills, and interest in innovation and entrepreneurship.",
  },
  {
    id: "python-programming",
    title: "VALUE ADDED COURSE ON PYTHON PROGRAMMING",
    image: "/images/python.png",
    content:
      "The Department of Computer Science and Business Systems organized a Value Added Course on Python Programming in association with Xplocode Infotech. Covering core Python concepts, practical coding, and real-world applications, the industry-led sessions strengthened students’ programming skills, logical thinking, and readiness for software development careers.",
  },
  {
    id: "flutter",
    title: "HANDS-ON TRAINING ON FLUTTER",
    image: "/images/flutter.png",
    content:
      "A hands-on Flutter training session was conducted on February 17, 2024, introducing students to Dart programming, Flutter widgets, user interface design, and cross-platform mobile development. Through practical demonstrations and guided exercises, students gained coding experience and learned the fundamentals of developing interactive applications for Android and iOS.",
  },
  {
    id: "azure-cloud",
    title: "AZURE CLOUD COMPUTING",
    image: "/images/cloud.png",
    content:
      "The Department of Computer Science and Business Systems organized a webinar on Azure Cloud Computing on February 21, 2024. The session introduced cloud computing fundamentals, Microsoft Azure services, cloud infrastructure, and application deployment, helping students understand scalable cloud solutions and emerging opportunities in cloud technology.",
  },
  {
    id: "techbiz-24",
    title: "NATIONAL LEVEL SYMPOSIUM – TECHBIZ ’24",
    image: "/images/Techbiz24.png",
    content:
      "The Department of Computer Science and Business Systems organized TECHBIZ ’24, an intercollegiate technical symposium, on February 24, 2024. The event featured technical and non-technical competitions, providing students with opportunities to showcase their skills and creativity. Cash prizes worth ₹7,500 were awarded to the winners.",
  },
  {
    id: "techbiz-25",
    title: "INTERCOLLEGIATE SYMPOSIUM – TECHBIZ ’25",
    image: "/images/Techbiz25.png",
    content:
      "TECHBIZ ’25, organized by the Department of Computer Science and Business Systems at Sethu Institute of Technology in association with BIZTEK, featured technical and non-technical competitions. Events such as Presentation Showcase, Code Beat, Fun and Flash, and Carnival encouraged students to demonstrate their creativity, teamwork, and technical skills.",
  },
  {
    id: "techbiz-26",
    title: "INTERCOLLEGIATE SYMPOSIUM – TECHBIZ ’26",
    image: "/images/Techbiz26.png",
    content:
      "TECHBIZ ’26 was organized by the Department of Computer Science and Business Systems at Sethu Institute of Technology in association with BIZTEK on March 11, 2026. The symposium featured six events, including Presentation Showcase, Brand Storm, Syntale, Think Trix, Task Tussle, and Carnival, with a ₹7,500 cash prize pool for technical events.",
  },
];

export function EventsSection() {
  return (
    <section className="events-home-section" id="events">
      <div className="events-home-inner">
        <span className="events-eyebrow">CSBS DEPARTMENT</span>
        <h2>Events &amp; Activities</h2>
        <p>
          Discover the workshops, technical symposiums, training programmes,
          and collaborative activities that enrich our students’ learning
          experience.
        </p>
        <Link to="/events" className="events-explore-button">
          Explore Events <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <main className="events-page">
      <header className="events-page-header">
        <Link to="/#events" className="events-back-link">
          ← Back to Home
        </Link>
        <span className="events-eyebrow">CSBS DEPARTMENT</span>
        <h1>Events &amp; Activities</h1>
        <p>
          Celebrating learning, innovation, technical excellence, and
          collaboration at Sethu Institute of Technology.
        </p>
      </header>

      <div className="events-list">
        {events.map((event, index) => (
          <article
            className={`event-detail-card ${
              index % 2 === 1 ? "event-reverse" : ""
            }`}
            key={event.id}
          >
            <div className="event-image-wrap">
              <img
                src={event.image}
                alt={event.title}
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
            <div className="event-content">
              <span className="event-number">
                EVENT {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{event.title}</h2>
              <p>{event.content}</p>
            </div>
          </article>
        ))}
      </div>

      <footer className="events-page-footer">
        <Link to="/#events" className="events-explore-button">
          ← Back to Events Section
        </Link>
      </footer>
    </main>
  );
}
