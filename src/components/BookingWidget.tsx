import { useState, useMemo } from 'react';
import { LOCATIONS, TOUR_PACKAGES, getSharedVanTimes } from '../data/bookingData';

interface BookingWidgetProps {
  layout?: 'horizontal' | 'stacked';
  className?: string;
}

export default function BookingWidget({ layout = 'horizontal', className = '' }: BookingWidgetProps) {
  const [serviceType, setServiceType] = useState('Shared Van Transfer');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [tourPackage, setTourPackage] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Derived state for visibility
  const showFromTo = serviceType === 'Shared Van Transfer' || serviceType === 'Private Van Transfer';
  const showTourPackage = serviceType === 'Inland Tour';
  const showTime = serviceType === 'Shared Van Transfer';

  // Available departure times based on From/To for Shared Van
  const availableTimes = useMemo(() => {
    if (showTime && from && to) {
      return getSharedVanTimes(from, to);
    }
    return [];
  }, [showTime, from, to]);

  // Validation
  const validateForm = () => {
    if (!travelDate) return 'Please select a travel date.';
    if (!fullName) return 'Please enter your full name.';
    if (!contactNumber) return 'Please enter your contact number.';
    if (!email) return 'Please enter your email address.';

    if (showFromTo) {
      if (!from) return 'Please select a pickup location.';
      if (!to) return 'Please select a drop-off location.';
      if (from === to) return 'Pickup and drop-off cannot be the same.';
    }

    if (showTime) {
      if (availableTimes.length === 0) return 'No shared vans available for this route.';
      if (!departureTime) return 'Please select a departure time.';
    }

    if (showTourPackage && !tourPackage) return 'Please select a tour package.';

    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);

    // Format WhatsApp message
    let message = `📩 *NEW BOOKING REQUEST*\n\n*Service:* ${serviceType}\n`;

    if (showFromTo) {
      message += `*Route:* ${from} ➡️ ${to}\n`;
    }
    if (showTourPackage) {
      message += `*Package:* ${tourPackage}\n`;
    }

    message += `*Date:* ${travelDate}\n`;
    
    if (showTime) {
      message += `*Time:* ${departureTime}\n`;
    }

    message += `*Passengers:* ${passengers}\n\n`;
    message += `*Name:* ${fullName}\n`;
    message += `*Contact:* ${contactNumber}\n`;
    message += `*Email:* ${email}\n\n`;

    if (specialRequests) {
      message += `*Special Requests:*\n${specialRequests}`;
    }

    // Simulate network delay to show loading state, then submit via WhatsApp
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      const whatsappUrl = `https://wa.me/639613464499?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 1000);
  };

  const today = new Date().toISOString().split('T')[0];

  if (isSuccess) {
    return (
      <div className={`booking-widget booking-widget--success ${className}`}>
        <div className="booking-widget__success-content">
          <div className="booking-widget__icon">✅</div>
          <h3>Your booking request has been sent!</h3>
          <p>We'll contact you via WhatsApp or Email within a few hours to confirm availability and finalize the details.</p>
          <button className="btn btn--outline" onClick={() => setIsSuccess(false)}>
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`booking-widget booking-widget--${layout} ${className}`}>
      <div className="booking-widget__header">
        <h3>Book Your Ride</h3>
        <p>Send a request and we'll confirm shortly.</p>
      </div>

      {error && <div className="booking-widget__error">{error}</div>}

      <form onSubmit={handleSubmit} className="booking-widget__form">
        <div className="form-group form-group--full">
          <label className="form-label">Service Type</label>
          <select className="form-select" value={serviceType} onChange={(e) => {
            setServiceType(e.target.value);
            setError('');
            // Reset fields
            setFrom('');
            setTo('');
            setTourPackage('');
            setDepartureTime('');
            setPassengers(1);
          }}>
            <option value="Shared Van Transfer">Shared Van Transfer</option>
            <option value="Private Van Transfer">Private Van Transfer</option>
            <option value="Inland Tour">Inland Tour</option>
          </select>
        </div>

        {showFromTo && (
          <>
            <div className="form-group">
              <label className="form-label">From</label>
              <select className="form-select" value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="">Select Pickup</option>
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">To</label>
              <select className="form-select" value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="">Select Drop-off</option>
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
          </>
        )}

        {showTourPackage && (
          <div className="form-group form-group--full">
            <label className="form-label">Tour Package</label>
            <select className="form-select" value={tourPackage} onChange={(e) => setTourPackage(e.target.value)}>
              <option value="">Select Package</option>
              {TOUR_PACKAGES.map(pkg => <option key={pkg.id} value={pkg.name}>{pkg.name}</option>)}
            </select>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Travel Date</label>
          <input 
            type="date" 
            className="form-input" 
            min={today}
            value={travelDate} 
            onChange={(e) => setTravelDate(e.target.value)} 
          />
        </div>

        {showTime && (
          <div className="form-group">
            <label className="form-label">Departure Time</label>
            <select className="form-select" value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} disabled={!from || !to}>
              <option value="">Select Time</option>
              {availableTimes.length > 0 
                ? availableTimes.map(time => <option key={time} value={time}>{time}</option>)
                : (from && to ? <option value="" disabled>No shared vans for this route</option> : <option value="" disabled>Select locations first</option>)
              }
            </select>
          </div>
        )}

        <div className="form-group">
          <label className="form-label">Passengers</label>
          <input 
            type="number" 
            className="form-input" 
            min="1" 
            max={showTourPackage ? "10" : "20"}
            value={passengers} 
            onChange={(e) => setPassengers(parseInt(e.target.value) || 1)} 
          />
        </div>

        <div className="form-divider" />

        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-input" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Juan Dela Cruz" />
        </div>

        <div className="form-group">
          <label className="form-label">Contact Number</label>
          <input type="tel" className="form-input" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="+63 900 000 0000" />
        </div>

        <div className="form-group form-group--full">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="juan@example.com" />
        </div>

        <div className="form-group form-group--full">
          <label className="form-label">Special Requests (Optional)</label>
          <textarea className="form-textarea" rows={2} value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Hotel name, flight number, child seats, etc." />
        </div>

        <div className="form-group--submit">
          <button type="submit" className="btn btn--primary btn--lg" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Booking Request'}
          </button>
        </div>
      </form>
    </div>
  );
}
