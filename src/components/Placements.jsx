
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Placements.css";

const batches = [
  {
    id: "2020-2024",
    title: "2020–2024",
    subtitle: "Placement highlights",
    description:
      "The CSBS batch secured placement opportunities across multiple organisations, including Flextronics, Renault Nissan, Alphagnito, Rinex, TCS and Accenture.",
    photos: [
      "/images/2020-2024-1.png",
      "/images/2020-2024-2.png",
    ],
    points: [
      "91% of final-year students were placed.",
      "34 final-year and third-year students underwent paid internships.",
      "38 placement records were provided for this batch.",
      "Flextronics recorded 5 placements in the provided records.",
      "Renault Nissan, Alphagnito, Rinex and Finsamudra recorded 3 placements each.",
    ],
  },
  {
    id: "2021-2025",
    title: "2021–2025",
    subtitle: "Placement highlights",
    description:
      "The CSBS batch recorded placement opportunities across organisations including Avanse, GenZ Educate Wing, FSS Global HR Solutions, Maiti, Cognizant and others.",
    photos: [
      "/images/2021-2025-1.png",
      "/images/2021-2025-2.png",
    ],
    points: [
      "A total of 22 student placement records were provided.",
      "Avanse recorded 6 placements.",
      "GenZ Educate Wing recorded 3 placements.",
      "FSS Global HR Solutions recorded 3 placements.",
      "Maiti recorded 2 placements; the other listed organisations recorded 1 each.",
    ],
  },
  {
    id: "2022-2026",
    title: "2022–2026",
    subtitle: "Placement highlights",
    description:
      "The CSBS batch received placement opportunities across organisations including DigiSME, Rinex, Edu TANTR, Rebar Design, Cognizant and other companies.",
    photos: [
      "/images/2022-2026-1.png",
      "/images/2022-2026-2.png",
      "/images/2022-2026-3.png",
    ],
    points: [
      "DigiSME recorded 7 placements.",
      "Rinex recorded 5 placements.",
      "Edu TANTR and Rebar Design recorded 2 placements each.",
      "The other listed organisations recorded 1 placement each.",
      "Reported packages among the listed organisations range from 2.4 LPA to 4.5 LPA.",
    ],
  },
];

export default function Placements() {
  const { batchId } = useParams();
  const batch = batches.find((item) => item.id === batchId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [batchId]);

  if (batchId && !batch) {
    return (
      <main className="placements-section placement-detail-page">
        <div className="placements-container">
          <h2>Batch details not found</h2>
          <Link to="/#placements" className="placement-back-button">
            ← Back to Placements
          </Link>
        </div>
      </main>
    );
  }

  if (batch) {
    return <BatchDetails batch={batch} />;
  }

  // Main Placements section: keep the existing batch-card layout.
  return (
    <section className="placements-section" id="placements">
      <div className="placements-container">
        <header className="placements-hero glass-panel">
          <span className="placements-eyebrow">CSBS DEPARTMENT</span>
          <h2>Placements</h2>
          <h3>Building Careers, Shaping Futures</h3>
          <p>
            Discover the placement journeys, career achievements and industry
            opportunities of our CSBS students.
          </p>
        </header>

        <div className="placement-section-heading">
          <h2>Our Placement Journey</h2>
          <p>Explore the achievements of our graduating batches.</p>
        </div>

        <div className="placement-batch-grid">
          {batches.map((item, index) => (
            <Link
              className="placement-batch-card"
              to={`/placements/${item.id}`}
              key={item.id}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="placement-card-content">
                <span className="placement-card-label">
                  CSBS PLACEMENTS
                </span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="placement-card-link">
                  Explore batch <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BatchDetails({ batch }) {
  const navigate = useNavigate();
  const [activePhoto, setActivePhoto] = useState(null);

  useEffect(() => {
    if (!activePhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }

      if (event.key === "ArrowRight") {
        setActivePhoto((current) => {
          const currentIndex = batch.photos.indexOf(current);
          return batch.photos[(currentIndex + 1) % batch.photos.length];
        });
      }

      if (event.key === "ArrowLeft") {
        setActivePhoto((current) => {
          const currentIndex = batch.photos.indexOf(current);
          return batch.photos[
            (currentIndex - 1 + batch.photos.length) % batch.photos.length
          ];
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePhoto, batch.photos]);

  const showNextPhoto = (direction) => {
    const currentIndex = batch.photos.indexOf(activePhoto);
    const nextIndex =
      (currentIndex + direction + batch.photos.length) % batch.photos.length;

    setActivePhoto(batch.photos[nextIndex]);
  };

  return (
    <main className="placements-section placement-detail-page">
      <div className="placements-container placement-detail-container">
        <button
  type="button"
  onClick={() =>
    navigate("/", { state: { scrollToPlacements: true } })
  }
  className="placement-back-button"
>
  ← Back to Placements
</button>

        <header className="placement-detail-heading">
          <span className="placements-eyebrow">CSBS DEPARTMENT</span>
          <h1>Placements {batch.title}</h1>
          <p>{batch.subtitle}</p>
        </header>

        <div className="placement-detail-info-grid">
          <section className="placement-overview-box">
            <span className="placement-box-kicker">BATCH OVERVIEW</span>
            <h2>About this batch</h2>
            <p>{batch.description}</p>
          </section>

          <section className="placement-highlights-box">
            <span className="placement-box-kicker">KEY ACHIEVEMENTS</span>
            <h2>Placement Highlights</h2>

            <ul className="placement-highlights-list">
              {batch.points.map((point, index) => (
                <li
                  key={`${batch.id}-highlight-${index}`}
                  className="placement-highlight-item"
                  style={{ animationDelay: `${index * 160}ms` }}
                >
                  <span
                    className="placement-highlight-check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="placement-gallery-section">
          <div className="placement-gallery-heading">
            <div>
              <span className="placement-box-kicker">MEMORIES</span>
              <h2>Placement Gallery</h2>
            </div>
            <p>Click a photo to view it larger.</p>
          </div>

          <div
            className={`placement-gallery-grid ${
              batch.photos.length === 3 ? "placement-gallery-three" : ""
            }`}
          >
            {batch.photos.map((photo, index) => (
              <button
                type="button"
                className="placement-gallery-photo"
                key={photo}
                onClick={() => setActivePhoto(photo)}
                aria-label={`View placement photo ${index + 1}`}
              >
                <img
                  src={photo}
                  alt={`CSBS ${batch.title} placement event`}
                  loading="lazy"
                />
                <span className="placement-photo-zoom" aria-hidden="true">
                  ⤢
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {activePhoto && (
        <div
          className="placement-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged placement photo"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            className="placement-lightbox-close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo"
          >
            ×
          </button>

          {batch.photos.length > 1 && (
            <button
              type="button"
              className="placement-lightbox-arrow placement-lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto(-1);
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          <img
            src={activePhoto}
            alt={`CSBS ${batch.title} placement photo enlarged`}
            className="placement-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          {batch.photos.length > 1 && (
            <button
              type="button"
              className="placement-lightbox-arrow placement-lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNextPhoto(1);
              }}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </main>
  );
}
