import { Link } from "react-router-dom";

const icons = {
  home: <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />,
  about: <><circle cx="12" cy="8" r="3.25" /><path d="M5.5 21a6.5 6.5 0 0 1 13 0" /></>,
  gallery: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9" r="1.25" /><path d="m4 17 5-5 3.25 3.2 2.25-2.2L20 18" /></>,
  contact: <path d="M21 15.8v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.65-3.08 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.08 3 2 2 0 0 1 3.07.8h3A2 2 0 0 1 8.05 2.5c.12.92.35 1.82.7 2.68a2 2 0 0 1-.45 2.1L7.03 8.55a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.1-.45c.86.35 1.76.58 2.68.7A2 2 0 0 1 21 15.8Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></>,
};

function Icon({ name }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[name]}</svg>;
}

function Home() {
  const navItems = [
    ["Home", "/", "home"],
    ["About", "/about", "about"],
    ["Gallery", "/gallery", "gallery"],
    ["Contact", "/contact", "contact"],
  ];

  return (
    <main className="home-page">
      <section className="hero-panel" aria-labelledby="home-heading">
        <div className="brand-mark" aria-label="Solai Saw Mills">
          <span className="brand-mark__trees">▲ ▲ ▲</span>
          <strong>SS</strong>
          <span>SOLAI SAW MILLS</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">SOLAI SAW MILLS</p>
          <h1 id="home-heading">Premium Timber Solutions<br />Crafted with Precision</h1>
          <p className="intro">Quality timber, expert cutting, and dependable service for every project.</p>
        </div>

        <nav className="hero-nav" aria-label="Main navigation">
          {navItems.map(([label, to, icon]) => (
            <Link key={label} to={to} className={label === "Home" ? "active" : ""}>
              <Icon name={icon} />
              <span>{label}</span>
            </Link>
          ))}
          <a href="https://www.instagram.com/solaisawmills/" target="_blank" rel="noreferrer">
            <Icon name="instagram" />
            <span>Instagram</span>
          </a>
        </nav>
      </section>
    </main>
  );
}

export default Home;
