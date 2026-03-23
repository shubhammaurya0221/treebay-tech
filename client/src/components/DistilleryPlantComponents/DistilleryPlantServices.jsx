import React from 'react';

const DistilleryPlantServices = () => {
  const features = [
  {
    icon: '⚗️',
    title: 'Technical Features',
    highlights: [
      'Advanced agitator design ensures uniform mixing and improved fermentation efficiency',
      'High-conversion fermenter architecture optimized for sugar-to-ethanol conversion',
      'Integrated liquefaction compatibility for grain-based processing',
      'Automated CIP system for improved hygiene and reduced downtime',
      'CO₂ recovery system for additional revenue generation',
      'Spent wash recycle integration to reduce water consumption'
    ]
  },
  {
    icon: '🔥',
    title: 'Key Performance Benefits',
    highlights: [
      'Higher alcohol yield through optimized fermentation',
      'Multi-feedstock flexibility (molasses, grain, cane syrup)',
      'Reduced water consumption and environmental load',
      'Lower contamination risk with automated systems',
      'Additional revenue through CO₂ recovery',
      'High operational reliability with minimal manual intervention'
    ]
  },
  {
    icon: '🏭',
    title: 'Distillery Process Integration',
    highlights: [
      'Seamless integration with fermentation, distillation, and evaporation systems',
      'Compatibility with multi-pressure distillation for energy efficiency',
      'Integration with Zero Liquid Discharge (ZLD) systems',
      'Efficient spent wash concentration and treatment solutions',
      'Steam and energy optimization across plant operations',
      'Designed for compliance with environmental and pollution control norms'
    ]
  }
];

  return (
    <section className="services" id="services">
      <div className="svc-header">
        <div className="section-tag">
          Ethanol & Distillation Technology
        </div>

        <h2>
          Advanced <em>Ethanol & Distillation Solutions</em> for Maximum Efficiency
        </h2>

        <p>
          <strong>Treebay Technology</strong> delivers next-generation distillery systems focused on 
          <strong> high alcohol yield</strong>, <strong> energy efficiency</strong>, and 
          <strong> sustainable operations</strong>. Designed for 
          <strong> molasses</strong>, <strong> cane syrup</strong>, and 
          <strong> grain-based distilleries</strong>.
        </p>
      </div>

      <div className="services-grid-home">
        {features.map((item, idx) => (
          <div className="srv-card" key={idx}>
            <div className="srv-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <div className="srv-highlights">
              {item.highlights.map((point, i) => (
                <div className="highlight-item"  key={i}>
                  ✓ {point}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistilleryPlantServices;