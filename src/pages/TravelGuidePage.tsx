import { useState } from 'react';
import ContactFloat from '../components/ContactFloat';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import new sub-components
import IslandToursTab from '../components/travel-guide/IslandToursTab';
import InlandAdventuresTab from '../components/travel-guide/InlandAdventuresTab';
import GettingThereTab from '../components/travel-guide/GettingThereTab';
import TravelTipsTab from '../components/travel-guide/TravelTipsTab';

type TabType = 'island-tours' | 'inland' | 'tips' | 'getting-there';

export default function TravelGuidePage() {
  const [activeTab, setActiveTab] = useState<TabType>('island-tours');

  return (
    <>
      <Header />

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
          {activeTab === 'island-tours' && <IslandToursTab />}
          {activeTab === 'inland' && <InlandAdventuresTab />}
          {activeTab === 'getting-there' && <GettingThereTab />}
          {activeTab === 'tips' && <TravelTipsTab />}
        </div>
      </section>
      
      <Footer />
      <ContactFloat />
    </>
  );
}