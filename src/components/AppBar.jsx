import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const KARATE_STYLES = [
  { id: 'karate-shotokan', label: 'Shotokan' },
  { id: 'karate-goju', label: 'Goju-Ryu' },
  { id: 'karate-wado', label: 'Wado-Ryu' },
  { id: 'karate-shito', label: 'Shito-Ryu' },
  { id: 'karate-kyokushin', label: 'Kyokushin' },
  { id: 'karate-uechi', label: 'Uechi-Ryu' },
];

const MENU_MAX_W = 280;
const VIEW_MARGIN = 12;
const NARROW_BP = 640;

function useKarateMenuPosition(open, barRef, buttonRef) {
  const [style, setStyle] = useState(null);

  const measure = useCallback(() => {
    const bar = barRef.current;
    const btn = buttonRef.current;
    if (!open || !bar || !btn) return;

    const barRect = bar.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const vw = window.innerWidth;
    const narrow = vw < NARROW_BP;

    if (narrow) {
      setStyle({
        position: 'fixed',
        top: barRect.bottom + 6,
        left: VIEW_MARGIN,
        right: VIEW_MARGIN,
        width: 'auto',
        maxHeight: 'min(70vh, 22rem)',
      });
      return;
    }

    const width = Math.min(MENU_MAX_W, vw - 2 * VIEW_MARGIN);
    let left = btnRect.right - width;
    left = Math.max(VIEW_MARGIN, Math.min(left, vw - width - VIEW_MARGIN));

    setStyle({
      position: 'fixed',
      top: btnRect.bottom + 6,
      left,
      width,
      maxHeight: 'min(70vh, 22rem)',
    });
  }, [open, barRef, buttonRef]);

  useLayoutEffect(() => {
    if (!open) {
      setStyle(null);
      return;
    }
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
    };
  }, [open, measure]);

  return style;
}

export default function AppBar() {
  const [karateOpen, setKarateOpen] = useState(false);
  const barRef = useRef(null);
  const dropdownRef = useRef(null);
  const karateBtnRef = useRef(null);
  const panelStyle = useKarateMenuPosition(karateOpen, barRef, karateBtnRef);

  useEffect(() => {
    if (!karateOpen) return;

    function onPointerDown(event) {
      const root = dropdownRef.current;
      if (root && !root.contains(event.target)) {
        setKarateOpen(false);
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') setKarateOpen(false);
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [karateOpen]);

  const closeMenu = () => setKarateOpen(false);

  return (
    <header className="app-bar" ref={barRef}>
      <div className="app-bar__inner">
        <a href="#top" className="app-bar__brand">
          Karate App
        </a>
        <nav className="app-bar__nav" aria-label="Main sections">
          <a className="app-bar__link" href="#cardio">
            Cardio
          </a>
          <a className="app-bar__link" href="#boxing">
            Boxing
          </a>
          <div className="app-bar__dropdown" ref={dropdownRef}>
            <button
              type="button"
              ref={karateBtnRef}
              className="app-bar__karate-btn"
              aria-expanded={karateOpen}
              aria-haspopup="menu"
              aria-controls="karate-menu"
              id="karate-menu-button"
              onClick={() => setKarateOpen((v) => !v)}
            >
              Karate
            </button>
            {karateOpen && panelStyle && (
              <div
                id="karate-menu"
                className="app-bar__dropdown-panel"
                style={panelStyle}
                role="menu"
                aria-labelledby="karate-menu-button"
              >
                <a
                  className="app-bar__dropdown-link"
                  href="#karate"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  Karate overview
                </a>
                {KARATE_STYLES.map((s) => (
                  <a
                    key={s.id}
                    className="app-bar__dropdown-link"
                    href={`#${s.id}`}
                    role="menuitem"
                    onClick={closeMenu}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
