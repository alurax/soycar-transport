import { useState } from 'react';
import { islandTours } from '../../data/travelGuideData';

export default function IslandToursTab() {
  const [expandedTour, setExpandedTour] = useState<string | null>(null);
  const [expandedDestination, setExpandedDestination] = useState<string | null>(null);

  return (
    <div className="guide-section">
      <h2>Island Hopping Tours</h2>
      <p className="section-subtitle">Explore the stunning islands and lagoons of Bacuit Bay</p>
      
      <div className="tour-guide-grid">
        {islandTours.map((tour) => (
          <div key={tour.id} className="tour-guide-card">
            <div 
              className="tour-guide-header"
              onClick={() => setExpandedTour(expandedTour === tour.id ? null : tour.id)}
            >
              <div>
                <h3>{tour.title}</h3>
                <p>{tour.subtitle}</p>
              </div>
              <span className="expand-icon">{expandedTour === tour.id ? '−' : '+'}</span>
            </div>
            
            {expandedTour === tour.id && (
              <div className="tour-destinations">
                {tour.destinations.map((dest, idx) => (
                  <div key={idx} className="destination-item">
                    <div 
                      className="destination-header"
                      onClick={() => setExpandedDestination(expandedDestination === dest.name ? null : dest.name)}
                    >
                      <h4>{dest.name}</h4>
                      <span>{expandedDestination === dest.name ? '▼' : '▶'}</span>
                    </div>
                    
                    {expandedDestination === dest.name && (
                      <div className="destination-details">
                        <p>{dest.description}</p>
                        <ul className="highlights-list">
                          {dest.highlights.map((highlight, hIdx) => (
                            <li key={hIdx}>✓ {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
                
                <a 
                  href={`/booking/${tour.id}`}
                  className="primary-pill-btn"
                  style={{ marginTop: '1rem', display: 'inline-block' }}
                >
                  Book {tour.title}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
