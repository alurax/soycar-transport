import { useNavigate } from 'react-router-dom';

interface TourCardProps {
  id: string;
  title: string;
  subtitle?: string;
  duration?: string;
  price: number;
  image: string;
}

export default function TourCard({ id, title, subtitle, duration, price, image }: TourCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tour/${id}`);
  };

  return (
    <div className="horizontal-tour-card" onClick={handleClick}>
      <div className="tour-card-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="tour-card-overlay"></div>
        <div className="tour-card-content">
          <h3 className="tour-card-title">
            {title}
            {subtitle && <span className="tour-card-subtitle"><br/>{subtitle}</span>}
          </h3>
          {duration && <p className="tour-card-duration">{duration}</p>}
          <p className="tour-card-price">FROM: ₱{price.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
