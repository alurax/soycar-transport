export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__media">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero__video"
          poster="/soycar-hero.JPG"
        >
          <source src="/ocean.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__label">Soycar Transport & Services</span>
        <h1 className="hero__title" style={{ fontSize: 'var(--text-4xl)' }}>
          Reliable Transportation<br />
          From <em>El Nido</em> to <em>Puerto Princesa</em>
        </h1>
        <p className="hero__description">
          Airport transfers, city transfers, and inland tours designed for a seamless travel experience.
        </p>
        <div className="hero__actions">
          <a href="/contact" className="btn btn--primary btn--lg">Book Now</a>
          <a href="/services" className="btn btn--outline">Explore Services</a>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
