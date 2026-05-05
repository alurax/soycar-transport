import { useState, useEffect } from 'react';
import { islandTours, inlandDestinations, travelTips } from '../data/travelGuideData';
import ContactFloat from '../components/ContactFloat';
import MobileMenu from '../components/MobileMenu';

type TabType = 'island-tours' | 'inland' | 'tips' | 'getting-there';

export default function TravelGuidePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('island-tours');
  const [expandedTour, setExpandedTour] = useState<string | null>(null);
  const [expandedDestination, setExpandedDestination] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <li><a href="/travel-guide" className="active">Travel Guide</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>
      </nav>

      <MobileMenu isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="travel-guide-hero">
        <div className="hero-overlay"></div>
        <div className="app-container">
          <h1>El Nido Travel Guide</h1>
          <p>Everything you need to know for an unforgettable Palawan adventure</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tour-filter-section">
        <div className="app-container">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeTab === 'island-tours' ? 'active' : ''}`}
              onClick={() => setActiveTab('island-tours')}
            >
              🏝️ Island Tours
            </button>
            <button
              className={`filter-tab ${activeTab === 'inland' ? 'active' : ''}`}
              onClick={() => setActiveTab('inland')}
            >
              🏖️ Inland Destinations
            </button>
            <button
              className={`filter-tab ${activeTab === 'getting-there' ? 'active' : ''}`}
              onClick={() => setActiveTab('getting-there')}
            >
              ✈️ Getting There
            </button>
            <button
              className={`filter-tab ${activeTab === 'tips' ? 'active' : ''}`}
              onClick={() => setActiveTab('tips')}
            >
              💡 Travel Tips
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="travel-guide-content">
        <div className="app-container">
          
          {/* Island Tours Tab */}
          {activeTab === 'island-tours' && (
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
                          style={{ marginTop: '1rem' }}
                        >
                          Book {tour.title}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inland Destinations Tab */}
          {activeTab === 'inland' && (
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
          )}

          {/* Getting There Tab */}
          {activeTab === 'getting-there' && (
            <div className="guide-section">
              <h2>{travelTips.gettingThere.icon} {travelTips.gettingThere.title}</h2>
              
              <div className="getting-there-grid">
                {travelTips.gettingThere.options.map((option, idx) => (
                  <div key={idx} className="getting-there-card">
                    <h3>{option.method}</h3>
                    <p>{option.description}</p>
                    
                    <div className="pros-cons">
                      <div className="pros">
                        <h4>✓ Pros:</h4>
                        <ul>
                          {option.pros.map((pro, pIdx) => (
                            <li key={pIdx}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="cons">
                        <h4>✗ Cons:</h4>
                        <ul>
                          {option.cons.map((con, cIdx) => (
                            <li key={cIdx}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="tips-box">
                      <strong>💡 Tips:</strong> {option.tips}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Travel Tips Tab */}
          {activeTab === 'tips' && (
            <div className="guide-section">
              <h2>Essential Travel Tips</h2>
              
              {/* Best Time */}
              <div className="tip-card">
                <h3>{travelTips.bestTime.icon} {travelTips.bestTime.title}</h3>
                <p>{travelTips.bestTime.content}</p>
                <ul className="tips-list">
                  {travelTips.bestTime.tips.map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>

              {/* What to Pack */}
              <div className="tip-card">
                <h3>{travelTips.whatToPack.icon} {travelTips.whatToPack.title}</h3>
                <div className="packing-grid">
                  {travelTips.whatToPack.essentials.map((category, idx) => (
                    <div key={idx} className="packing-category">
                      <h4>{category.category}</h4>
                      <ul>
                        {category.items.map((item, iIdx) => (
                          <li key={iIdx}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="dont-bring">
                  <h4>❌ Don't Bring:</h4>
                  <p>{travelTips.whatToPack.dontBring.join(', ')}</p>
                </div>
              </div>

              {/* Budget Guide */}
              <div className="tip-card">
                <h3>{travelTips.budget.icon} {travelTips.budget.title}</h3>
                <div className="budget-grid">
                  {travelTips.budget.ranges.map((range, idx) => (
                    <div key={idx} className="budget-card">
                      <h4>{range.type}</h4>
                      <p className="daily-budget">{range.daily}/day</p>
                      <ul className="budget-breakdown">
                        {Object.entries(range.breakdown).map(([key, value]) => (
                          <li key={key}>
                            <span>{key}:</span>
                            <span>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="saving-tips">
                  <h4>💰 Money-Saving Tips:</h4>
                  <ul>
                    {travelTips.budget.savingTips.map((tip, idx) => (
                      <li key={idx}>• {tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
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

      <ContactFloat />
    </>
  );
}
