import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        
        <div className="why-header">
          <span className="sec-tag">Why Choose Treebay Technology</span>
          <h2 className="sec-title">
            Engineering Excellence for <em>CBG & Sustainable Energy</em>
          </h2>
        </div>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">⚙️</div>
            <h3>Advanced CSTR Technology</h3>
            <p>
              We implement high-performance <strong>CSTR-based biodigesters</strong> 
              designed for stable anaerobic digestion, higher gas yield, and 
              efficient processing of complex organic waste streams.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🧪</div>
            <h3>High Methane Recovery</h3>
            <p>
              Our advanced <strong>biogas upgradation systems</strong> achieve 
              <strong> 96%+ methane purity</strong> using technologies like 
              biochemical scrubbing, PSA/VPSA, and membrane separation.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🏭</div>
            <h3>Complete Turnkey Solutions</h3>
            <p>
              From <strong>plant design and engineering</strong> to 
              <strong> manufacturing, installation, and commissioning</strong>, 
              we deliver fully integrated CBG plant solutions under one roof.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🔗</div>
            <h3>Multi-Feedstock Flexibility</h3>
            <p>
              Our systems are engineered to handle diverse feedstocks including 
              <strong> press mud, distillery waste, agri-residues, cattle dung</strong>, 
              and <strong>municipal organic waste</strong>.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🌍</div>
            <h3>Government-Compliant Designs</h3>
            <p>
              All our CBG plants are aligned with <strong>SATAT</strong> and 
              <strong> GOBARdhan initiatives</strong>, ensuring compliance, 
              incentives, and long-term sustainability benefits.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">📈</div>
            <h3>Sustainable & Profitable</h3>
            <p>
              We design plants that convert <strong>waste into energy</strong>, 
              reduce carbon emissions, and create additional revenue streams 
              through circular economy integration.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;