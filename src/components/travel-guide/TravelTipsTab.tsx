import { travelTips } from '../../data/travelGuideData';

export default function TravelTipsTab() {
  return (
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
  );
}
