import { useCallback, useState } from 'react';

export default function VideoSection({ videos }) {
  const n = videos.length;
  const [index, setIndex] = useState(0);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, [n]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, [n]);

  if (n === 0) return null;

  const current = videos[index];

  return (
    <section className="section section--video" id="club-videos" aria-labelledby="club-videos-heading">
      <div className="section__inner section__inner--video">
        <h2 id="club-videos-heading" className="section__title">
          Club videos
        </h2>
        <p className="section__subtitle section__subtitle--video">
          Watch training moments from Japan Karate Association Pakistan. Use the arrows to switch clips.
        </p>

        <div className="video-section__row">
          <button
            type="button"
            className="video-section__arrow"
            onClick={goPrev}
            aria-label="Previous video"
          >
            <span aria-hidden="true">←</span>
          </button>

          <div className="video-section__frame">
            <video
              key={current.id}
              className="video-section__video"
              src={current.src}
              controls
              playsInline
              preload="metadata"
            >
              Your browser does not support embedded video.
            </video>
          </div>

          <button
            type="button"
            className="video-section__arrow"
            onClick={goNext}
            aria-label="Next video"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <p className="video-section__counter">
          Video {index + 1} of {n}
        </p>
      </div>
    </section>
  );
}
