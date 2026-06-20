import { useSearchParams } from 'react-router-dom';
import { tours } from '../../data/tours';
import TourCard from '../TourCard';
import FilterTabs from '../FilterTabs';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AllServicesGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'most-popular';

  const filteredTours = tours.filter(tour => tour.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setSearchParams({ category });
  };

  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section className="section" ref={ref} id="services">
      <div className="container container--wide">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <span className="section-label">Browse All Offerings</span>
          <h2 className="section-title">Tours, Rentals & Adventures</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            From island hopping to fishing adventures — explore everything we offer.
          </p>
        </div>

        <div className="tour-filter-section" style={{ padding: '0 0 var(--space-xl)' }}>
          <FilterTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        </div>

        <div className={`horizontal-tour-grid ${isRevealed ? 'revealed' : ''}`}>
          {filteredTours.map(tour => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>

        {/* Conditional Fleet Inquiry for rent-a-car */}
        {activeCategory === 'rent-a-car' && (
          <div className="special-cta-box">
            <h3>Looking for another type of car?</h3>
            <p>We have more vehicles available! Contact us directly for special requests.</p>
            <a
              href="https://wa.me/639613464499?text=Hi!%20I'm%20looking%20for%20a%20specific%20car%20rental."
              className="whatsapp-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📞 Call Us on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
