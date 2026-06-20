import { useScrollReveal } from '../../hooks/useScrollReveal';

const destinations = [
  { name: 'Nacpan Beach', tag: 'Beach', image: '/kayak.JPG' },
  { name: 'Bacuit Bay', tag: 'Island Hopping', image: '/soycar-hero.JPG' },
  { name: 'Hidden Lagoons', tag: 'Lagoon', image: '/tours/small-lagoon.jpg' },
  { name: 'El Nido Town', tag: 'Culture', image: '/airport_transfer.jpg' },
  { name: 'Mountain Trails', tag: 'Adventure', image: '/moto.jpg' },
  { name: 'Fishing Grounds', tag: 'Fishing', image: '/fishing.jpg' },
];

export default function DestinationShowcase() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="section destinations" ref={ref}>
      <div className="destinations__header">
        <span className="section-label">Explore Palawan</span>
        <h2 className="section-title">Travel Through Paradise</h2>
        <p className="section-subtitle" style={{ margin: '0 auto' }}>
          From pristine beaches to hidden lagoons — every destination is a story waiting to unfold.
        </p>
      </div>

      <div className={`destinations__scroll ${isRevealed ? 'revealed' : ''}`}>
        {destinations.map((d, i) => (
          <div key={i} className="destination-card">
            <img src={d.image} alt={d.name} className="destination-card__image" loading="lazy" />
            <div className="destination-card__overlay" />
            <div className="destination-card__content">
              <h3 className="destination-card__name">{d.name}</h3>
              <span className="destination-card__tag">{d.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
