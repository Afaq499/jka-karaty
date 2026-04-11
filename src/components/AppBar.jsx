const KARATE_STYLES = [
  { id: 'karate-shotokan', label: 'Shotokan' },
  { id: 'karate-goju', label: 'Goju-Ryu' },
  { id: 'karate-wado', label: 'Wado-Ryu' },
  { id: 'karate-shito', label: 'Shito-Ryu' },
  { id: 'karate-kyokushin', label: 'Kyokushin' },
  { id: 'karate-uechi', label: 'Uechi-Ryu' },
];

export default function AppBar() {
  return (
    <header className="app-bar">
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
          <details className="app-bar__dropdown">
            <summary className="app-bar__dropdown-summary">Karate</summary>
            <div className="app-bar__dropdown-panel" role="menu">
              <a className="app-bar__dropdown-link" href="#karate" role="menuitem">
                Karate overview
              </a>
              {KARATE_STYLES.map((s) => (
                <a
                  key={s.id}
                  className="app-bar__dropdown-link"
                  href={`#${s.id}`}
                  role="menuitem"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </details>
        </nav>
      </div>
    </header>
  );
}
