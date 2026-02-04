export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='600'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f5d5c8'/%3E%3Cstop offset='100%25' style='stop-color:%23e8c4b3'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23bg)' width='1600' height='600'/%3E%3C/svg%3E"
          alt="Background"
        />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">HOT RIGHT NOW</h1>
          <p className="hero-text">
            Summer whites and bright tropical prints
            <br />
            capture a breezy, island vibe.
          </p>
          <button className="hero-btn">Shop now</button>
        </div>
      </div>
      <div className="hero-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};
