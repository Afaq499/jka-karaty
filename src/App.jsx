import AppBar from './components/AppBar.jsx';
import TopMediaCarousel from './components/TopMediaCarousel.jsx';
import VideoSection from './components/VideoSection.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import { CLUB_SLIDES } from './clubMedia.js';
import { CLUB_VIDEOS } from './clubVideos.js';
import {
  ADDRESS_LINES,
  CHAIRMAN,
  ORG_DISPLAY_NAME,
  WHATSAPP_PHONE_E164,
} from './siteConfig.js';

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

const KARATE_ACHIEVEMENTS = [
  {
    id: 'ach-shodan',
    title: 'Shodan (1st dan)',
    text: 'Earned after years of consistent kihon, kata, and kumite—formal recognition of technical foundation and dojo character.',
  },
  {
    id: 'ach-kata',
    title: 'Kata excellence',
    text: 'Placed in regional kata with a classical form—judges noted clarity of line, timing, and breathing.',
  },
  {
    id: 'ach-kumite',
    title: 'Kumite podium',
    text: 'Medal in sanctioned point kumite; built on footwork drills and calm decision-making under pressure.',
  },
  {
    id: 'ach-dojo',
    title: 'Dojo service',
    text: 'Led warm-ups and mentored beginners—helping new students learn etiquette, safety, and first kata.',
  },
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
      <TopMediaCarousel slides={CLUB_SLIDES} />
      <header className="hero">
        <div className="hero__content hero__content--solo">
          <p className="hero__eyebrow">{ORG_DISPLAY_NAME}</p>
          <h1 className="hero__title">Train with focus. Progress with purpose.</h1>
          <p className="hero__lead">
            Build discipline, strength, and technique—one class at a time. Welcome to your
            karate journey.
          </p>
        </div>
      </header>

      <VideoSection videos={CLUB_VIDEOS} />

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

      <section
        className="section section--achievements"
        id="achievements"
        aria-labelledby="achievements-heading"
      >
        <div className="section__inner">
          <h2 id="achievements-heading" className="section__title">
            Achievements in karate
          </h2>
          <p className="section__subtitle">
            Milestones from the path—belts, competition, and contributions to the dojo. Swap in
            your own story as your journey grows.
          </p>
          <div className="style-grid">
            {KARATE_ACHIEVEMENTS.map((item) => (
              <article key={item.id} className="style-card" id={item.id}>
                <h3 className="style-card__title">{item.title}</h3>
                <p className="style-card__text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer__inner">
          <p className="footer__org">{ORG_DISPLAY_NAME}</p>
          <p className="footer__chair">
            <strong>{CHAIRMAN.name}</strong>
            <br />
            {CHAIRMAN.title}
          </p>
          <address className="footer__address">
            {ADDRESS_LINES.map((line) => (
              <span key={line} className="footer__address-line">
                {line}
              </span>
            ))}
          </address>
          <p className="footer__copy">
            © {new Date().getFullYear()} {ORG_DISPLAY_NAME} — Osu!
          </p>
        </div>
      </footer>

      <WhatsAppButton phone={WHATSAPP_PHONE_E164} />
    </div>
  );
}
