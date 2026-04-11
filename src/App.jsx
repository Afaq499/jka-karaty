import AppBar from './components/AppBar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

/** Pexels + Unsplash (ixlib) — short Unsplash URLs often 404; these are verified. */
const GALLERY = [
  {
    id: 'pex-7045746',
    src: 'https://images.pexels.com/photos/7045746/pexels-photo-7045746.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Karate practitioner in white gi with black belt',
  },
  {
    id: 'pex-7988241',
    src: 'https://images.pexels.com/photos/7988241/pexels-photo-7988241.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Karate training — punch focus mitts',
  },
  {
    id: 'pex-6111618',
    src: 'https://images.pexels.com/photos/6111618/pexels-photo-6111618.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Group karate class in the dojo',
  },
  {
    id: 'unsplash-kick',
    src: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
    alt: 'Karate kick practice',
  },
];

const HERO_IMAGE =
  'https://images.pexels.com/photos/6298710/pexels-photo-6298710.jpeg?auto=compress&cs=tinysrgb&w=1200';

const PROGRESS_ITEMS = [
  { label: 'Kihon (basics)', percent: 88 },
  { label: 'Kata (forms)', percent: 72 },
  { label: 'Kumite (sparring readiness)', percent: 65 },
  { label: 'Fitness & conditioning', percent: 91 },
];

const KARATE_STYLE_BLURBS = [
  {
    id: 'karate-shotokan',
    title: 'Shotokan',
    text: 'Strong, linear techniques and deep stances—ideal for building power and crisp basics.',
  },
  {
    id: 'karate-goju',
    title: 'Goju-Ryu',
    text: 'Hard–soft blend: close-range blocks, circular movement, and breathing with kata like Sanchin.',
  },
  {
    id: 'karate-wado',
    title: 'Wado-Ryu',
    text: 'Evasive footwork and body shifting; emphasizes timing and efficiency over meeting force head-on.',
  },
  {
    id: 'karate-shito',
    title: 'Shito-Ryu',
    text: 'Broad kata catalog drawing from multiple Okinawan lineages; balanced kihon and application.',
  },
  {
    id: 'karate-kyokushin',
    title: 'Kyokushin',
    text: 'Full-contact knockdown kumite and rugged conditioning; famous for stamina and spirit.',
  },
  {
    id: 'karate-uechi',
    title: 'Uechi-Ryu',
    text: 'Three main kata, toughening drills, and short, decisive strikes inspired by southern Chinese arts.',
  },
];

export default function App() {
  return (
    <div className="app">
      <AppBar />
      <header className="hero" id="top">
        <div className="hero__content">
          <p className="hero__eyebrow">Traditional karate</p>
          <h1 className="hero__title">Train with focus. Progress with purpose.</h1>
          <p className="hero__lead">
            Build discipline, strength, and technique—one class at a time. Welcome to your
            karate journey.
          </p>
        </div>
        <div className="hero__image-wrap">
          <img
            className="hero__image"
            src={HERO_IMAGE}
            alt="Karate training in the dojo"
            width={640}
            height={800}
          />
        </div>
      </header>

      <section className="section section--discipline" id="cardio" aria-labelledby="cardio-heading">
        <div className="section__inner">
          <h2 id="cardio-heading" className="section__title">
            Cardio
          </h2>
          <p className="section__subtitle">
            Build an engine for long rounds: intervals, skipping, rowing, and roadwork that support every
            discipline without burning you out.
          </p>
          <ul className="discipline-points">
            <li>Zone 2 base + short HIIT for repeat power</li>
            <li>Jump rope and footwork drills for rhythm</li>
            <li>Recovery weeks to keep joints and motivation healthy</li>
          </ul>
        </div>
      </section>

      <section
        className="section section--discipline section--alt"
        id="boxing"
        aria-labelledby="boxing-heading"
      >
        <div className="section__inner">
          <h2 id="boxing-heading" className="section__title">
            Boxing
          </h2>
          <p className="section__subtitle">
            Hands, head movement, and ring IQ—whether you compete or use boxing to sharpen reactions for
            stand-up.
          </p>
          <ul className="discipline-points">
            <li>Defense: slips, rolls, and safe exits off the line</li>
            <li>Combinations built from a reliable jab</li>
            <li>Bag and partner drills with clear intent each round</li>
          </ul>
        </div>
      </section>

      <section className="section section--karate" id="karate" aria-labelledby="karate-heading">
        <div className="section__inner">
          <h2 id="karate-heading" className="section__title">
            Karate
          </h2>
          <p className="section__subtitle">
            Traditional karate covers many ryuha (styles). Each has its own kata emphasis and approach to
            kumite—explore the ones we highlight below.
          </p>
          <div className="style-grid">
            {KARATE_STYLE_BLURBS.map((style) => (
              <article key={style.id} className="style-card" id={style.id}>
                <h3 className="style-card__title">{style.title}</h3>
                <p className="style-card__text">{style.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gallery" aria-labelledby="gallery-heading">
        <div className="section__inner">
          <h2 id="gallery-heading" className="section__title">
            Karate in motion
          </h2>
          <p className="section__subtitle">
            Moments from training—form, power, and the spirit of the dojo.
          </p>
          <div className="gallery">
            {GALLERY.map((item) => (
              <figure key={item.id} className="gallery__item">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={450}
                  height={300}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--progress" aria-labelledby="progress-heading">
        <div className="section__inner">
          <h2 id="progress-heading" className="section__title">
            Our progress
          </h2>
          <p className="section__subtitle">
            Snapshot of where the squad is focused this season. Numbers are illustrative—replace
            with your real tracking when you connect a backend.
          </p>
          <ul className="progress-list">
            {PROGRESS_ITEMS.map((item) => (
              <li key={item.label} className="progress-list__row">
                <div className="progress-list__head">
                  <span className="progress-list__label">{item.label}</span>
                  <span className="progress-list__value">{item.percent}%</span>
                </div>
                <div
                  className="progress-list__track"
                  role="progressbar"
                  aria-valuenow={item.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${item.label}: ${item.percent} percent`}
                >
                  <div
                    className="progress-list__fill"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Karate App — Osu!</p>
      </footer>

      <WhatsAppButton phone="+923030949729" />
    </div>
  );
}
