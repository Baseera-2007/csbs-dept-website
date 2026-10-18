
import React, { useEffect, useRef } from "react";
import "./Faculty.css";

const hod = {
  name: "Dr. Shunmughavel Vivekanandam",
  image: "/images/hod.png.png",
  bio: "Dr. Shunmughavel Vivekanandam has 33 years of professional experience, including 23 years in teaching and 10 years in industry. He holds an M.E. in Computer Science and a Ph.D. in Information and Communication Engineering from Anna University. His research interests include Information Retrieval, Data Mining, AI, IoT, Blockchain, and Big Data Analytics. He has published 15 research papers, contributed two book chapters, and participated in 16 conferences. His teaching expertise includes Object-Oriented Analysis and Design, Software Engineering, and Python Programming.",
};

const facultyMembers = [
  {
    name: "Dr. G. Rajeswari",
    image: "/images/rajeswari.png.png",
  },
  {
    name: "Mr. V. Rajesh Kumar",
    image: "/images/rajesh.png.png",
  },
  {
    name: "Ms. R. Pandiselvi",
    image: "/images/pandiselvi.png.png",
  },
  {
    name: "Ms. M. Vijayalakshmi",
    image: "/images/vijalakshmi.png.png",
  },
  {
    name: "Mr. R. Arunkumar",
    image: "/images/arunkumar.png.png",
  },
  {
    name: "Mr. J. Jeya Prabhu",
    image: "/images/jeyaprabhu.png.png",
  },
  {
    name: "Dr. M. Sarathkumar",
    image: "/images/sarathkumar.png.png",
  },
  {
    name: "Ms. A. Sivaranjani",
    image: "/images/sivaranjani.png.png",
  },
  {
    name: "Ms. K. Sangeetha",
    image: "/images/sangeetha.png.png",
  },
  {
    name: "Mrs. G. Vijayalakshmi",
    image: "/images/viji.png.png",
  },
];

function useScrollReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll(".faculty-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
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

  return sectionRef;
}

function Faculty() {
  const sectionRef = useScrollReveal();

  return (
    <main className="faculty-page" ref={sectionRef}>
      <section className="faculty-hero">
        <div className="faculty-heading faculty-reveal">
          <span className="faculty-eyebrow">OUR DEPARTMENT</span>
          <h1>Meet Our Faculty</h1>
          <p>
            Meet the educators who guide our students in technology,
            business, learning, and innovation.
          </p>
        </div>
      </section>

      <section className="hod-section">

        <article className="hod-card faculty-reveal">
          <div className="hod-image-wrap">
            <img
              src={hod.image}
              alt={hod.name}
              className="hod-image"
              loading="eager"
            />
          </div>

          <div className="hod-details">
            <span className="hod-label">HEAD OF THE DEPARTMENT</span>
            <h3>{hod.name}</h3>
            <p>{hod.bio}</p>
          </div>
        </article>
      </section>

      <section className="faculty-list-section">
        <div className="faculty-list-heading faculty-reveal">
          <h2 className="faculty-section-title">Our Faculty Members</h2>
          <p>
            Dedicated educators supporting academic growth and
            professional development.
          </p>
        </div>

        <div className="faculty-grid">
          {facultyMembers.map((member, index) => (
            <article
              className={`faculty-card faculty-reveal ${
                index % 2 === 0 ? "reveal-left" : "reveal-right"
              }`}
              key={member.name}
            >
              <div className="faculty-image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="faculty-image"
                  loading="lazy"
                />
              </div>

              <div className="faculty-card-details">
                <h3>{member.name}</h3>
                <p>Faculty Member</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Faculty;
