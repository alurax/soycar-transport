import { useScrollRevealGroup } from '../../hooks/useScrollReveal';

const values = [
  { icon: '🛡️', title: 'Reliable Drivers', desc: 'Licensed, trained, and background-checked professionals who know every route between El Nido and Puerto Princesa.' },
  { icon: '🚐', title: 'Comfortable Vehicles', desc: 'Well-maintained, air-conditioned fleet ranging from sedans to spacious vans.' },
  { icon: '🏨', title: 'Hotel Pickup', desc: 'Door-to-door service — we pick you up directly from your hotel or resort.' },
  { icon: '🗺️', title: 'Local Expertise', desc: 'Our team knows the hidden gems, best routes, and insider tips of El Nido.' },
  { icon: '✈️', title: 'Safe Travel', desc: 'Fully insured vehicles, 24/7 roadside support, and real-time trip tracking.' },
  { icon: '📱', title: 'Easy Booking', desc: 'Book in minutes via WhatsApp, Messenger, or our website — instant confirmation.' },
];

export default function WhyChooseSection() {
  const gridRef = useScrollRevealGroup<HTMLDivElement>();

  return (
    <section className="section why-choose">
      <div className="container">
        <div className="why-choose__header">
          <span className="section-label">Why Travelers Choose Us</span>
          <h2 className="section-title">Built for Travelers,<br />By Locals Who Care</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Every journey with Soycar is backed by years of local expertise and a commitment to making your trip effortless.
          </p>
        </div>

        <div className="why-choose__grid stagger-children" ref={gridRef}>
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
  );
}
