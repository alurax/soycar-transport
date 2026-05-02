import { useState, useEffect } from 'react';
import { tours } from '../data/tours';
import TourCard from '../components/TourCard';
import FilterTabs from '../components/FilterTabs';
import ContactFloat from '../components/ContactFloat';
import InstagramGallery from '../components/InstagramGallery';
import MobileMenu from '../components/MobileMenu';


export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('most-popular');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTours = tours.filter(tour => tour.category === activeCategory);

  return (
    <>
      {/* Desktop Navigation Header */}
<nav className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
  <div className="header-logo-container">
    <a href="/" className="header-logo">
      <img src="/rectangle_logo.png" alt="Soycar Logo" className="custom-logo" />
    </a>
  </div>
  
  <ul className="header-links">
    <li><a href="/">Home</a></li>
    <li><a href="#services">Tours & Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

{/* Mobile Navigation */}
<MobileMenu isScrolled={isScrolled} />


      {/* Hero Section */}
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
              <button className="primary-pill-btn" onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}>Book Now</button>
              <a href="#services" className="secondary-underline-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Filter Tabs */}
      <section id="services" className="tour-filter-section">
        <div className="app-container">
          <FilterTabs 
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* Tour Cards */}
      <section className="tour-cards-section">
        <div className="app-container-wide">
          <div className="horizontal-tour-grid">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                id={tour.id}
                title={tour.title}
                subtitle={tour.subtitle}
                duration={tour.duration}
                price={tour.price}
                image={tour.image}
              />
            ))}
          </div>

          {/* Special CTA for Rent a Car */}
          {activeCategory === 'rent-a-car' && (
            <div className="special-cta-box">
              <h3>Looking for another type of car?</h3>
              <p>We have more vehicles available! Contact us directly for special requests.</p>
              <a 
                href="https://wa.me/639613464499?text=Hi! I'm looking for a specific car rental." 
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

          {/* Instagram Gallery */}
      <InstagramGallery />
      
      {/* Footer */}
      <div id="contact" className="app-container">
        <footer>
          <div className="footer-content">
            <div className="footer-col">
              <h3>Soycar Transport</h3>
              <p>Your premium gateway to the ultimate Palawan experience.</p>
            </div>
            <div className="footer-col">
              <h3>Contact Us</h3>
              <p>El Nido, Palawan, Philippines</p>
              <p><a href="mailto:soycartransportcarrrentals@gmail.com">soycartransportcarrrentals@gmail.com</a></p>
              <p>+63 927 224 4732</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Soycar Transport and Services. All rights reserved.</p>
            <p>Powered by Raxx</p>
          </div>
        </footer>
      </div>

            {/* Floating Contact Menu */}
      <ContactFloat />
    </>
  );
}