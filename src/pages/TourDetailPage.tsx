import { useParams, useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFloat from '../components/ContactFloat';

export default function TourDetailPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();

  const tour = tours.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="error-page" style={{ textAlign: 'center', padding: '100px 20px', color: '#ffffff' }}>
        <h1>Tour Not Found</h1>
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleBookNow = () => {
    navigate(`/booking/${tour.id}`);
  };

  // Centralized price unit determination
  const priceUnit = 
    tour.id === 'airport-transfer' || tour.id === 'whole-day-inland-tour' ? 'vehicle' :
    tour.category === 'inland-tour' ? 'vehicle' :
    tour.category === 'rent-a-car' || tour.id === 'rent-a-car-popular' ? 'day' :
    tour.id === 'private-speedboat' || tour.id === 'private-normal-boat' ? 'boat' :
    'person';

  return (
    <>
      <Header />

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
            <span className="tour-detail-price-person">/{priceUnit}</span>
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
                    <span className="booking-price-label">/{priceUnit}</span>
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

      <Footer />
      <ContactFloat />
    </>
  );
}