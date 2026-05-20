import { useSearchParams } from 'react-router-dom'; 
import { tours } from '../data/tours';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import FilterTabs from '../components/FilterTabs';
import ContactFloat from '../components/ContactFloat';
import InstagramGallery from '../components/InstagramGallery';

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams(); 
  const activeCategory = searchParams.get('category') || 'most-popular';

  const filteredTours = tours.filter(tour => tour.category === activeCategory);
  
  const handleCategoryChange = (category: string) => {
    setSearchParams({ category }); 
  };

  return (
    <>
      <Header />

      {/* Hero Showcase */}
      <section className="video-overview">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/ocean.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>

        <div className="massive-bg-text">
          <span className="bg-text-top">EL NIDO</span>
          <span className="bg-text-bottom">PALAWAN</span>
        </div>

        <div className="app-container overview-content">
          <div className="hero-text-bottom">
            <h1>Soycar Transport & Services</h1>
            <p>Your gateway to the ultimate El Nido, Palawan experience. Premium transportation, thrilling adventures, and seamless island exploration.</p>
            
            <div className="hero-action-row">
              <button 
                className="primary-pill-btn" 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </button>
              <a href="/travel-guide" className="secondary-underline-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selection Tabs */}
      <section id="services" className="tour-filter-section">
        <div className="app-container">
          <FilterTabs activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        </div>
      </section>

      {/* Grid Display Grid */}
      <section className="tour-cards-section">
        <div className="app-container-wide">
          <div className="horizontal-tour-grid">
            {filteredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Conditional Alternate Fleet Inquiry Callout */}
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

      <InstagramGallery />
      <Footer />
      <ContactFloat />
    </>
  );
}