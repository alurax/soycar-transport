import { useScrollRevealGroup } from '../../hooks/useScrollReveal';

const stats = [
  { number: '8+', label: 'Years of Experience' },
  { number: '5,000+', label: 'Completed Trips' },
  { number: '30+', label: 'Partner Hotels' },
];

const testimonials = [
  {
    text: 'Soycar made our entire Palawan trip stress-free. The driver was punctual, the vehicle was spotless, and they even suggested a hidden beach we would have never found on our own.',
    name: 'Sarah Mitchell',
    origin: 'Sydney, Australia',
    initials: 'SM',
  },
  {
    text: 'We booked the whole-day inland tour and it exceeded all expectations. Our guide was incredibly knowledgeable and the itinerary was perfectly paced. Highly recommend!',
    name: 'James Tanaka',
    origin: 'Tokyo, Japan',
    initials: 'JT',
  },
  {
    text: 'As a solo traveler, safety was my top concern. Soycar\'s professional service gave me total peace of mind. The airport transfer was seamless and the driver was very helpful.',
    name: 'Maria Santos',
    origin: 'Manila, Philippines',
    initials: 'MS',
  },
];

export default function SocialProofSection() {
  const statsRef = useScrollRevealGroup<HTMLDivElement>();
  const reviewsRef = useScrollRevealGroup<HTMLDivElement>();

  return (
    <section className="section social-proof">
      <div className="container">
        <div className="social-proof__header">
          <span className="section-label">Trusted by Travelers</span>
          <h2 className="section-title">Real Experiences,<br />Real Stories</h2>
        </div>

        <div className="social-proof__stats stagger-children" ref={statsRef}>
          {stats.map((s, i) => (
            <div key={i} className="stat-item reveal">
              <span className="stat-item__number">{s.number}</span>
              <span className="stat-item__label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="testimonials stagger-children" ref={reviewsRef}>
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card reveal">
              <span className="testimonial-card__quote">"</span>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__origin">{t.origin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
