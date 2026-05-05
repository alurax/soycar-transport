import { useNavigate } from 'react-router-dom';

interface TourCardProps {
  tour: {
    id: string;
    title: string;
    subtitle?: string;
    duration?: string;
    price: number;
    image: string;
    category: string;
    isRedirect?: boolean;
    redirectTo?: string;
  };
}

export default function TourCard({ tour }: TourCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (tour.isRedirect && tour.redirectTo) {
      // Redirect to specific URL (e.g., filter page)
      navigate(tour.redirectTo);
    } else {
      // Normal navigation to detail page
      navigate(`/tour/${tour.id}`);
    }
  };

  const priceUnit = 
    tour.id === 'airport-transfer' || tour.id === 'whole-day-inland-tour' ? 'vehicle' :
    tour.category === 'inland-tour' ? 'vehicle' :
    tour.category === 'rent-a-car' || tour.id === 'rent-a-car-popular' ? 'day' :
    tour.id === 'private-speedboat' || tour.id === 'private-normal-boat' ? 'boat' :
    'person';

  return (
    <div className="service-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="card-image" style={{ backgroundImage: `url(${tour.image})` }}></div>
      <div className="card-content">
        <h3>{tour.title}</h3>
        {tour.subtitle && <p className="card-subtitle">{tour.subtitle}</p>}
        {tour.duration && <p className="card-duration">{tour.duration}</p>}
        <div className="card-price">
          <span className="price-amount">₱{tour.price.toLocaleString()}</span>
          <span className="price-unit">/{priceUnit}</span>
        </div>
      </div>
    </div>
  );
}
