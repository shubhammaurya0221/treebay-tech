import './Energy.css';

const Energy = () => {
  return (
    <section className="energy-section" id="energy">
      <div className="energy-inner">
        <div className="energy-visual">
          <h3>Typical Energy Savings We Deliver</h3>
          <div className="energy-metric">
            <span className="metric-label">Distillation Systems</span>
            <div className="metric-bar-wrap">
              <div className="metric-bar" style={{ width: "82%" }}></div>
            </div>
            <span className="metric-val">Up to 40%</span>
          </div>
          <div className="energy-metric">
            <span className="metric-label">Fermentation Utilities</span>
            <div className="metric-bar-wrap">
              <div className="metric-bar" style={{ width: "70%" }}></div>
            </div>
            <span className="metric-val">Up to 35%</span>
          </div>
          <div className="energy-metric">
            <span className="metric-label">Biogas Plant Parasitic Load</span>
            <div className="metric-bar-wrap">
              <div className="metric-bar" style={{ width: "60%" }}></div>
            </div>
            <span className="metric-val">Up to 28%</span>
          </div>
          <div className="energy-metric">
            <span className="metric-label">CO₂ Capture Energy Penalty</span>
            <div className="metric-bar-wrap">
              <div className="metric-bar" style={{ width: "55%" }}></div>
            </div>
            <span className="metric-val">Up to 25%</span>
          </div>
          <div className="energy-metric">
            <span className="metric-label">Steam &amp; Heat Recovery</span>
            <div className="metric-bar-wrap">
              <div className="metric-bar" style={{ width: "88%" }}></div>
            </div>
            <span className="metric-val">Up to 45%</span>
          </div>
        </div>
        <div className="energy-copy">
          <span className="sec-tag">Energy Optimization Solutions</span>
          <h2 className="sec-title">
            Cut Energy Costs. Cut Emissions. Strengthen Margins.
          </h2>
          <p className="sec-body">
            Energy is typically the single largest operating cost in process
            industries — and the greatest lever available for both margin
            improvement and decarbonisation. Our{" "}
            <strong>energy optimisation solutions</strong> apply rigorous
            process integration methodology to identify, quantify, and implement
            energy savings that fundamentally transform plant economics.
          </p>
          <p className="sec-body">
            Using advanced{" "}
            <strong>
              pinch analysis, heat exchanger network optimisation, steam system
              redesign
            </strong>
            , and process simulation, we identify precisely where energy is
            being wasted and how it can be recovered. We then engineer the
            modifications — new heat exchange configurations, heat pump
            integration, combined heat and power (CHP) systems, or process
            scheduling changes — and support implementation through to
            commissioning.
          </p>
          <p className="sec-body">
            Our energy optimisation work follows{" "}
            <a
              href="https://www.iso.org/iso-50001-energy-management.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              ISO 50001 Energy Management System
            </a>{" "}
            principles and is compatible with{" "}
            <a
              href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              EU Energy Efficiency Directive
            </a>{" "}
            compliance reporting. It integrates naturally with our{" "}
            <a href="#co2">CO₂ recovery engineering</a> — because the least
            expensive carbon to capture is the carbon you never generate.
          </p>
          <a href="#contact" className="btn-green">
            Get Your Energy Audit Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Energy;
