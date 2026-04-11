import { useEffect, useState } from 'react';

const INTERVAL_MS = 2000;

export default function TopMediaCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const n = slides.length;

  useEffect(() => {
    if (n <= 1) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [n]);

  if (n === 0) {
    return <section className="top-carousel top-carousel--empty" id="top" aria-hidden="true" />;
  }

  const current = slides[index];

  return (
    <section className="top-carousel" id="top" aria-label="Club photos slideshow">
      <div className="top-carousel__inner">
        <div className="top-carousel__frame">
          <img
            key={current.id}
            className="top-carousel__img"
            src={current.src}
            alt={current.alt}
            width={1200}
            height={675}
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
