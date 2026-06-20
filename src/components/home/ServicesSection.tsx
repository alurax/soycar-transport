import { useScrollRevealGroup } from '../../hooks/useScrollReveal';

const services = [
  {
    number: '01',
    title: 'Airport Transfer',
    desc: 'Seamless pickups and drop-offs between El Nido Airport and your hotel. Meet & greet included.',
    image: '/airport_transfer.jpg',
    link: '/services',
  },
  {
    number: '02',
    title: 'City Transfer',
    desc: 'Comfortable point-to-point transfers across El Nido town, Puerto Princesa, and beyond.',
    image: '/soycar.JPG',
    link: '/services',
  },
  {
    number: '03',
    title: 'Inland Tours',
    desc: 'Curated day trips to waterfalls, hidden beaches, and viewpoints with expert local guides.',
    image: '/privatetours.jpg',
    link: '/services',
  },
];

export default function ServicesSection() {
  const gridRef = useScrollRevealGroup<HTMLDivElement>();

  return (
    <section className="section services-showcase">
      <div className="container container--wide">
        <div className="services-showcase__header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Move Through Paradise</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Three core services designed to cover every moment of your Palawan journey.
          </p>
        </div>

        <div className="services-showcase__grid stagger-children" ref={gridRef}>
          {services.map((s) => (
            <a key={s.number} href={s.link} className="service-feature reveal-scale">
              <div className="service-feature__image" style={{ backgroundImage: `url(${s.image})` }} />
              <div className="service-feature__overlay" />
              <span className="service-feature__number">{s.number}</span>
              <div className="service-feature__content">
                <h3 className="service-feature__title">{s.title}</h3>
                <p className="service-feature__desc">{s.desc}</p>
                <span className="service-feature__link">
                  Learn More <span>→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
