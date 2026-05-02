import { useParams, useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';
import { useState, useEffect } from 'react';

export default function TourDetailPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const tour = tours.find(t => t.id === tourId);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!tour) {
    return (
      <div className="error-page">
        <h1>Tour Not Found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate(`/booking/${tour.id}`);
  };

  return (
    <>
      {/* Navigation Header */}
      <nav className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-logo-container">
          <a href="/" className="header-logo">
            <img src="/rectangle_logo.png" alt="Soycar Logo" className="custom-logo" />
          </a>
        </div>
        
        <ul className="header-links">
          <li><a href="/">Home</a></li>
          <li><a href="/#services">Tours & Services</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Tour Hero Section */}
      <section className="tour-detail-hero" style={{ backgroundImage: `url(${tour.image})` }}>
        <div className="tour-detail-overlay"></div>
        <div className="app-container tour-detail-hero-content">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1 className="tour-detail-title">{tour.title}</h1>
          {tour.subtitle && <p className="tour-detail-subtitle">{tour.subtitle}</p>}
          {tour.duration && <p className="tour-detail-duration">⏱ {tour.duration}</p>}
          <div className="tour-detail-price-box">
            <span className="tour-detail-price-label">Starting from</span>
            <span className="tour-detail-price">₱{tour.price.toLocaleString()}</span>
            <span className="tour-detail-price-person">/person</span>
          </div>
        </div>
      </section>

      {/* Tour Details Content */}
      <section className="tour-detail-content">
        <div className="app-container">
          <div className="tour-detail-grid">
            
            {/* Left Column - Main Info */}
            <div className="tour-detail-main">
              <div className="detail-section">
                <h2>About This Tour</h2>
                <p className="tour-description">{tour.description}</p>
              </div>

              {/* What's Included */}
              {tour.includes && (
                <div className="detail-section">
                  <h2>What's Included</h2>
                  <ul className="includes-list">
                    {tour.includes.map((item, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Itinerary */}
              {tour.itinerary && (
                <div className="detail-section">
                  <h2>Itinerary</h2>
                  <div className="itinerary-list">
                    {tour.itinerary.map((item, index) => (
                      <div key={index} className="itinerary-item">
                        <div className="itinerary-time">{item.time}</div>
                        <div className="itinerary-activity">{item.activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Car Details (for rent-a-car) */}
              {tour.carDetails && (
                <div className="detail-section">
                  <h2>Vehicle Specifications</h2>
                  <div className="car-specs-grid">
                    <div className="car-spec">
                      <span className="spec-label">Model</span>
                      <span className="spec-value">{tour.carDetails.model}</span>
                    </div>
                    <div className="car-spec">
                      <span className="spec-label">Year</span>
                      <span className="spec-value">{tour.carDetails.year}</span>
                    </div>
                    <div className="car-spec">
                      <span className="spec-label">Color</span>
                      <span className="spec-value">{tour.carDetails.color}</span>
                    </div>
                    <div className="car-spec">
                      <span className="spec-label">Transmission</span>
                      <span className="spec-value">{tour.carDetails.transmission}</span>
                    </div>
                    <div className="car-spec">
                      <span className="spec-label">Seats</span>
                      <span className="spec-value">{tour.carDetails.seats} passengers</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Important Notes */}
              <div className="detail-section">
                <h2>Important Information</h2>
                <ul className="info-list">
                  <li>Please arrive 15 minutes before departure time</li>
                  <li>Bring valid ID for verification</li>
                  <li>Cancellation policy: Full refund if cancelled 24 hours before</li>
                  <li>Weather-dependent - we'll contact you if conditions are unsafe</li>
                  <li>Minimum age requirement may apply</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="tour-detail-sidebar">
              <div className="booking-card-sticky">
                <div className="booking-card">
                  <div className="booking-card-price">
                    <span className="booking-price">₱{tour.price.toLocaleString()}</span>
                    <span className="booking-price-label">/person</span>
                  </div>
                  
                  {tour.duration && (
                    <div className="booking-duration">
                      <span className="duration-icon">⏱</span>
                      <span>{tour.duration}</span>
                    </div>
                  )}

                  <button className="booking-btn-primary" onClick={handleBookNow}>
                    Book Now
                  </button>

                  <a 
                    href="https://wa.me/639613464499?text=Hi! I'm interested in this tour." 
                    className="booking-btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📞 Contact Us
                  </a>

                  <div className="booking-features">
                    <div className="booking-feature">
                      <span className="feature-icon">✓</span>
                      <span>Instant Confirmation</span>
                    </div>
                    <div className="booking-feature">
                      <span className="feature-icon">✓</span>
                      <span>Free Cancellation</span>
                    </div>
                    <div className="booking-feature">
                      <span className="feature-icon">✓</span>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="trust-badges">
                  <div className="trust-badge">
                    <span className="badge-icon">🏆</span>
                    <span className="badge-text">Top Rated</span>
                  </div>
                  <div className="trust-badge">
                    <span className="badge-icon">⭐</span>
                    <span className="badge-text">500+ Reviews</span>
                  </div>
                  <div className="trust-badge">
                    <span className="badge-icon">🛡️</span>
                    <span className="badge-text">Insured</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/639613464499" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.05 32h-.05c-2.65-.01-5.26-.74-7.56-2.1L0 32l2.18-8.23C.68 21.46-.02 18.77 0 16 0 7.17 7.18 0 16 0c4.27 0 8.28 1.66 11.3 4.69C30.33 7.7 32 11.72 32 16c0 8.83-7.18 16-16 16-.02 0-.03 0-.05 0zm-7.66-4.51l.46.27C10.9 28.98 13.43 29.6 16 29.6c7.5 0 13.6-6.1 13.6-13.6 0-3.64-1.42-7.06-3.99-9.63C23.05 3.8 19.64 2.38 16 2.38c-7.5 0-13.6 6.1-13.6 13.6 0 2.76.76 5.4 2.18 7.64l.3.47-1.3 4.92 5.06-1.32h-.05z"/>
          <path d="M23.63 20.21c-.42-.21-2.46-1.21-2.84-1.35-.38-.14-.66-.21-.94.21-.28.42-1.08 1.35-1.32 1.62-.24.28-.48.31-.9.1-2.11-1.03-3.79-2.02-5.25-4.54-.15-.26.02-.38.22-.59.18-.19.41-.49.61-.74.2-.24.27-.41.4-.69.14-.28.07-.53-.03-.74-.1-.21-.94-2.27-1.29-3.11-.34-.82-.68-.71-.94-.72l-.8-.01c-.28 0-.74.1-1.13.53-.38.42-1.47 1.44-1.47 3.51 0 2.07 1.51 4.07 1.72 4.35.21.28 2.96 4.52 7.17 6.34 1 .43 1.78.69 2.39.88.99.31 1.9.27 2.62.16.8-.13 2.46-1.01 2.8-1.98.34-.98.34-1.81.24-1.98-.1-.18-.38-.28-.8-.49z"/>
        </svg>
      </a>
    </>
  );
}
