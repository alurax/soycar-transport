import { inlandDestinations } from '../../data/travelGuideData';

export default function InlandAdventuresTab() {
  return (
    <div className="guide-section">
      <h2>Inland Adventures</h2>
      <p className="section-subtitle">Discover beaches, waterfalls, and natural wonders beyond the islands</p>
      
      <div className="inland-grid">
        {inlandDestinations.map((dest) => (
          <div key={dest.id} className="inland-card">
            <div className="inland-card-image" style={{ backgroundImage: `url(${dest.image})` }}>
              <span className="category-badge">{dest.category}</span>
            </div>
            <div className="inland-card-content">
              <h3>{dest.name}</h3>
              <p className="distance">📍 {dest.distance} • ⏱️ {dest.duration}</p>
              <p>{dest.description}</p>
              
              <div className="highlights-box">
                <h4>Highlights:</h4>
                <ul>
                  {dest.highlights.map((highlight, idx) => (
                    <li key={idx}>• {highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="info-box">
                <p><strong>Best Time:</strong> {dest.bestTime}</p>
                <p><strong>Tips:</strong> {dest.tips}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
