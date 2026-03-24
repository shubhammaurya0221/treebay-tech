import React from 'react';
import './HomeStats.css';

const HomeStats = () => {
  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-val">96%+</span>
        <span className="stat-lbl">Methane Purity for High-Quality Fuel Output</span>
      </div>

      <div className="stat">
        <span className="stat-val">Multi-Feedstock</span>
        <span className="stat-lbl">Agri, Industrial & Municipal Waste Processing</span>
      </div>

      <div className="stat">
        <span className="stat-val">End-to-End</span>
        <span className="stat-lbl">Complete Design to Commissioning Solutions</span>
      </div>

      <div className="stat">
        <span className="stat-val">Green Energy</span>
        <span className="stat-lbl">Waste-to-Fuel Energy Conversion Systems</span>
      </div>
    </div>
  );
};

export default HomeStats;