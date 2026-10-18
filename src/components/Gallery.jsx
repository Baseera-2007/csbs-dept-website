
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

const photos = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  src: `/images/image${index + 1}.png`,
  title: `CSBS Memories ${String(index + 1).padStart(2, "0")}`,
}));

export function GallerySection() {
  return (
    <section className="gallery-preview" id="gallery">
      <span className="gallery-kicker">OUR MOMENTS</span>
      <h2>
        A glimpse into <span>CSBS life.</span>
      </h2>
      <p>
        Celebrating our learning, achievements, events and unforgettable
        department memories.
      </p>
      <Link to="/gallery" className="gallery-explore-btn">
        Explore Gallery <span>↗</span>
      </Link>
    </section>
  );
}

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);

  const closePhoto = () => setActivePhoto(null);

  const changePhoto = (direction) => {
    setActivePhoto((current) => {
      if (!current) return null;

      const nextIndex =
        (current.id - 1 + direction + photos.length) % photos.length;

      return photos[nextIndex];
    });
  };

  useEffect(() => {
    if (!activePhoto) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePhoto();
      if (event.key === "ArrowRight") changePhoto(1);
      if (event.key === "ArrowLeft") changePhoto(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activePhoto]);

  return (
    <main className="gallery-page">
      <header className="gallery-page-header">
        <Link to="/#gallery" className="gallery-back-link">
          ← Back to Home
        </Link>

        <span className="gallery-kicker">LIFE AT CSBS</span>
        <h1>
          Moments that <span>matter.</span>
        </h1>
        <p>
          Every picture tells a story. Explore the memories that make
          our department special.
        </p>

        <div className="gallery-photo-count">
          <span>✦</span> 16 memories to explore
        </div>
      </header>

      <section className="gallery-grid" aria-label="CSBS photo gallery">
        {photos.map((photo, index) => (
          <button
            className={`gallery-tile gallery-tile-${(index % 8) + 1}`}
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            aria-label={`View ${photo.title}`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              loading={index < 4 ? "eager" : "lazy"}
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
            <span className="gallery-tile-caption">
              <span>{photo.title}</span>
              <span className="gallery-zoom">↗</span>
            </span>
          </button>
        ))}
      </section>

      <footer className="gallery-footer">
        <span>MADE OF MEMORIES</span>
        <p>Learn together. Grow together. Shine together.</p>
        <Link to="/#events">Explore Our Events →</Link>
      </footer>

      {activePhoto && (
        <div
          className="gallery-lightbox"
          onClick={closePhoto}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="gallery-lightbox-close"
            onClick={closePhoto}
            aria-label="Close photo"
          >
            ×
          </button>

          <button
            className="gallery-lightbox-arrow gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              changePhoto(-1);
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={activePhoto.src} alt={activePhoto.title} />
            <div className="gallery-lightbox-caption">
              <span>{activePhoto.title}</span>
              <span>{activePhoto.id} / {photos.length}</span>
            </div>
          </div>

          <button
            className="gallery-lightbox-arrow gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              changePhoto(1);
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
