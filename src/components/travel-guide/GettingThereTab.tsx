import { travelTips } from '../../data/travelGuideData';

export default function GettingThereTab() {
  return (
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
  );
}
