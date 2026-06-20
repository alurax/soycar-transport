import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFloat from '../components/ContactFloat';
import { useScrollRevealGroup } from '../hooks/useScrollReveal';

const values = [
  { icon: '🌴', title: 'Born in El Nido', desc: 'Founded by locals who grew up on these roads and waterways, we know El Nido and Puerto Princesa like the back of our hand.' },
  { icon: '🤝', title: 'Community First', desc: 'We employ local drivers, partner with local hotels, and reinvest in the El Nido community.' },
  { icon: '⭐', title: 'Quality Obsessed', desc: 'Every vehicle is regularly serviced, every driver is trained, and every trip is tracked for quality.' },
  { icon: '🌱', title: 'Eco-Conscious', desc: 'We practice responsible tourism and encourage our guests to help preserve the natural beauty of the region.' },
];

export default function AboutPage() {
  const valuesRef = useScrollRevealGroup<HTMLDivElement>();

  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: 'url(/soycar-hero.JPG)' }} />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <h1 className="page-hero__title">About Soycar</h1>
          <p className="page-hero__subtitle">Your trusted travel partner in El Nido since 2018</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4xl)', alignItems: 'center', marginBottom: 'var(--space-4xl)' }}>
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">From Local Roots to Premium Service</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
                Soycar Transport & Services was born from a simple observation: travelers arriving in El Nido deserved better than unreliable tricycles and unmarked vans. What started as a single vehicle airport transfer service has grown into the region's most trusted transportation brand.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                Today, we operate a fleet of well-maintained vehicles, employ a team of professional drivers, and partner with over 30 hotels and resorts across El Nido. Our mission remains the same — to make every journey safe, comfortable, and memorable.
              </p>
            </div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '400px' }}>
              <img src="/soycar.JPG" alt="Soycar team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>

          <div className="why-choose__grid stagger-children" ref={valuesRef}>
            {values.map((v, i) => (
              <div key={i} className="why-choose__item reveal">
                <div className="why-choose__icon">{v.icon}</div>
                <h3 className="why-choose__item-title">{v.title}</h3>
                <p className="why-choose__item-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ContactFloat />
    </>
  );
}
