import React from 'react';

const Industries = () => {
  const industries = [
    { icon: '⚗️', title: 'Green Hydrogen & Energy', desc: 'Hydrogen production, hydrogen energy storage, green hydrogen plant construction.' },
    { icon: '🥬', title: 'Food Processing Industry', desc: 'Complete food processing unit setup including processing, packaging, and cold chain.' },
    { icon: '⚙️', title: 'Machine Manufacturing', desc: 'Industrial machine manufacturers delivering cutting machines and custom automation.' },
    { icon: '🧪', title: 'Chemicals & Pharma', desc: 'Process plants for hydrogen peroxide and specialty chemical manufacturing.' },
    { icon: '⚡', title: 'Power & Renewable Energy', desc: 'Solar, wind, and hybrid power plant engineering integrated with H₂ systems.' },
    { icon: '🛢️', title: 'Oil, Gas & Refining', desc: 'Upstream, midstream, and refining plant engineering including fabrication works.' },
    { icon: '💧', title: 'Water & Wastewater', desc: 'Water treatment plant engineering, ETP/STP design, and recycling systems.' },
    { icon: '🏗️', title: 'Infrastructure & Civil', desc: 'Civil and structural engineering, fabrication works, and industrial infrastructure.' }
  ];

  return (
    <section className="section-industries" id="industries">
      <div className="section-tag">Sectors We Serve</div>
      <h2>Industries Powered by <em>Treebay Technology</em></h2>
      <p className="section-lead">
        Our engineering expertise spans across high-growth sectors — from hydrogen energy 
        to heavy manufacturing and process chemicals.
      </p>

      <div className="ind-grid">
        {industries.map((ind, idx) => (
          <a href={`/industries/${ind.title.toLowerCase().replace(/ /g, '-')}`} className="ind-card" key={idx}>
            <span className="ind-icon">{ind.icon}</span>
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Industries;
