import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFloat from '../components/ContactFloat';
import { useScrollRevealGroup } from '../hooks/useScrollReveal';
import BookingWidget from '../components/BookingWidget';

const services = [
  {
    id: 'airport',
    title: 'Airport Transfer',
    desc: 'Reliable and comfortable airport pickup and drop-off service. Our professional drivers will meet you at arrivals with a name sign and assist with your luggage. Available for El Nido Airport (ENI) and Puerto Princesa Airport (PPS).',
    image: '/airport_transfer.jpg',
    features: ['Meet & greet at arrivals', 'Air-conditioned vehicles', 'Door-to-door service', 'Flight tracking', 'Luggage assistance'],
    price: 'From ₱1,199',
    tourId: 'airport-transfer',
  },
  {
    id: 'city',
    title: 'City Transfer',
    desc: 'Point-to-point transfers across El Nido, Puerto Princesa, and surrounding areas. Whether you need a ride to dinner, a hotel change, or a trip between cities — we have you covered with comfortable, air-conditioned vehicles.',
    image: '/soycar.JPG',
    features: ['Flexible scheduling', 'Multiple vehicle sizes', 'Inter-city routes available', 'Group-friendly', 'Affordable rates'],
    price: 'From ₱800',
    tourId: 'airport-transfer',
  },
  {
    id: 'tours',
    title: 'Inland Tours',
    desc: "Discover El Nido's hidden gems on land — waterfalls, viewpoints, pristine beaches, and local culture. Our curated inland tours range from half-day explorations to full-day adventures with expert local guides.",
    image: '/privatetours.jpg',
    features: ['Expert local guides', 'Entrance fees included', 'Lunch provided (full day)', 'Customizable itineraries', 'Hotel pickup & drop-off'],
    price: 'From ₱4,500',
    tourId: 'whole-day-inland-tour',
  },
];

export default function ServicesPage() {
  const gridRef = useScrollRevealGroup<HTMLDivElement>();

  return (
    <>
      <Header />

      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: 'url(/kayak.JPG)' }} />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <h1 className="page-hero__title">Our Services</h1>
          <p className="page-hero__subtitle">Premium transportation solutions in El Nido & Puerto Princesa</p>
        </div>
      </section>

      <section className="section">
        <div className="container" ref={gridRef}>
          {services.map((s, i) => (
            <div
              key={s.id}
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                gap: 'var(--space-3xl)',
                alignItems: 'center',
                marginBottom: 'var(--space-4xl)',
              }}
            >
              {i % 2 === 1 && (
                <div>
                  <span className="section-label">{`0${i + 1}`}</span>
                  <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>{s.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-xl)' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                    {s.features.map((f, fi) => (
                      <li key={fi} style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                        <span style={{ color: 'var(--success)', marginRight: '8px' }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                    <Link to={`/booking/${s.tourId}`} className="btn btn--primary">Book Now</Link>
                    <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700 }}>{s.price}</span>
                  </div>
                </div>
              )}

              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '420px' }}>
                <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>

              {i % 2 === 0 && (
                <div>
                  <span className="section-label">{`0${i + 1}`}</span>
                  <h2 className="section-title" style={{ fontSize: 'var(--text-3xl)' }}>{s.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-xl)' }}>{s.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                    {s.features.map((f, fi) => (
                      <li key={fi} style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                        <span style={{ color: 'var(--success)', marginRight: '8px' }}>✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                    <Link to={`/booking/${s.tourId}`} className="btn btn--primary">Book Now</Link>
                    <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700 }}>{s.price}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <BookingWidget layout="horizontal" />
        </div>
      </section>

      <Footer />
      <ContactFloat />
    </>
  );
}
