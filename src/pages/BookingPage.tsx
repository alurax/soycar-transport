import { useParams, useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactFloat from '../components/ContactFloat';

export default function BookingPage() {
  const { tourId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tour = tours.find(t => t.id === tourId);

  if (!tour) {
    return (
      <div className="error-page" style={{ textAlign: 'center', padding: '100px 20px', color: '#ffffff' }}>
        <h1>Tour Not Found</h1>
        <button className="back-btn" onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const totalPrice = tour.price * formData.guests;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formatted structural WhatsApp text notification layout
    const message = `
🎫 *NEW BOOKING REQUEST*

*Tour:* ${tour.title}
*Date:* ${formData.date}
*Guests:* ${formData.guests}
*Total Price:* ₱${totalPrice.toLocaleString()}

*Customer Details:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}

*Special Requests:*
${formData.specialRequests || 'None'}
    `.trim();

    const whatsappUrl = `https://wa.me/639613464499?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitting(false);
    navigate('/');
  };

  return (
    <>
      <Header />

      {/* Booking Form Layout Panel */}
      <section className="booking-page">
        <div className="app-container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          
          <div className="booking-page-header">
            <h1>Complete Your Booking</h1>
            <p>You're one step away from an amazing experience!</p>
          </div>

          <div className="booking-page-grid">
            
            {/* Left Column - Booking Form */}
            <div className="booking-form-container">
              <form onSubmit={handleSubmit} className="booking-form">
                
                <div className="form-section">
                  <h2>Personal Information</h2>
                  
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Juan Dela Cruz"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="juan@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+63 912 345 6789"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h2>Booking Details</h2>
                  
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests *</label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="specialRequests">Special Requests (Optional)</label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Any dietary restrictions, accessibility needs, or special occasions?"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <div className="terms-checkbox">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      I agree to the <a href="#terms">Terms & Conditions</a> and <a href="#privacy">Privacy Policy</a>
                    </label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="submit-booking-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Booking via WhatsApp'}
                </button>

                <p className="form-note">
                  * After clicking, you'll be redirected to WhatsApp to complete your booking with our team.
                </p>
              </form>
            </div>

            {/* Right Column - Booking Summary Card */}
            <div className="booking-summary-container">
              <div className="booking-summary-sticky">
                <div className="booking-summary">
                  <h3>Booking Summary</h3>
                  
                  <div className="summary-tour-info">
                    <img src={tour.image} alt={tour.title} className="summary-tour-image" />
                    <div>
                      <h4>{tour.title}</h4>
                      {tour.subtitle && <p className="summary-subtitle">{tour.subtitle}</p>}
                      {tour.duration && <p className="summary-duration">⏱ {tour.duration}</p>}
                    </div>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-details">
                    <div className="summary-row">
                      <span>Date:</span>
                      <span>{formData.date || 'Not selected'}</span>
                    </div>
                    <div className="summary-row">
                      <span>Guests:</span>
                      <span>{formData.guests}</span>
                    </div>
                    <div className="summary-row">
                      <span>Price per person:</span>
                      <span>₱{tour.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-total">
                    <span>Total Amount:</span>
                    <span className="total-price">₱{totalPrice.toLocaleString()}</span>
                  </div>

                  <div className="summary-note">
                    <p>💡 <strong>Note:</strong> Final price will be confirmed by our team via WhatsApp.</p>
                  </div>
                </div>

                <div className="payment-methods">
                  <h4>We Accept:</h4>
                  <div className="payment-icons">
                    <span>💳 Cash</span>
                    <span>📱 GCash</span>
                    <span>🏦 Bank Transfer</span>
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