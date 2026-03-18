const CO2Section = () => {
  return (
    <section className="co2-section" id="co2">
      <svg className="co2-rings" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="80" strokeWidth="1" />
        <circle cx="300" cy="300" r="150" strokeWidth="1" />
        <circle cx="300" cy="300" r="220" strokeWidth="0.5" />
        <circle cx="300" cy="300" r="280" strokeWidth="0.5" />
      </svg>
      <div className="co2-inner">
        <div className="co2-copy">
          <span className="sec-tag">CO₂ Recovery &amp; Utilization</span>
          <h2 className="sec-title light">
            Turn Your Carbon Emissions Into a Commercial Asset
          </h2>
          <p className="sec-body">
            Carbon dioxide is no longer simply a liability — it's an emerging
            industrial feedstock. Our{" "}
            <strong>CO₂ recovery and utilisation</strong> solutions help plants
            capture, purify, and productively deploy their carbon dioxide
            streams, generating real revenue from what was previously vented to
            atmosphere.
          </p>
          <p className="sec-body">
            We engineer <strong>post-combustion CO₂ capture systems</strong>,
            amine scrubbing and pressure swing adsorption units, cryogenic CO₂
            purification, and CO₂ liquefaction for food-grade or industrial
            applications. Our utilisation pathway design covers{" "}
            <strong>CO₂-to-methanol</strong>, CO₂-enhanced cultivation, mineral
            carbonation, and supply to industrial offtakers. This work aligns
            with{" "}
            <a
              href="https://iea.org/reports/carbon-capture-utilisation-and-storage-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              IEA CCUS frameworks
            </a>{" "}
            and supports <a href="#">net-zero decarbonisation roadmaps</a>.
          </p>
          <p className="sec-body">
            Every CO₂ recovery system we design integrates with our{" "}
            <a href="#energy">energy optimisation methodology</a>, ensuring the
            capture process is as energy-lean as possible — a critical factor in
            whole-system GHG accounting and carbon credit qualification.
          </p>
          <a href="#contact" className="btn-green">
            Explore CO₂ Recovery Solutions
          </a>
        </div>
        <div className="co2-cards">
          <div className="co2-card">
            <div className="co2-icon">🏭</div>
            <div className="co2-text">
              <h4>Post-Combustion CO₂ Capture</h4>
              <p>
                Amine scrubbing, PSA, and membrane-based CO₂ capture systems for
                process industries, cement, steel, and power generation.
              </p>
            </div>
          </div>
          <div className="co2-card">
            <div className="co2-icon">❄️</div>
            <div className="co2-text">
              <h4>CO₂ Purification &amp; Liquefaction</h4>
              <p>
                Food-grade and industrial CO₂ purification, liquefaction, and
                storage — enabling direct revenue streams from captured carbon.
              </p>
            </div>
          </div>
          <div className="co2-card">
            <div className="co2-icon">⚗️</div>
            <div className="co2-text">
              <h4>CO₂ Utilization Pathways</h4>
              <p>
                Engineering for CO₂-to-methanol, synthetic fuels, enhanced oil
                recovery, greenhouse agriculture, and mineralisation
                applications.
              </p>
            </div>
          </div>
          <div className="co2-card">
            <div className="co2-icon">📊</div>
            <div className="co2-text">
              <h4>Carbon Credit Strategy</h4>
              <p>
                Techno-economic modelling for EU ETS compliance, voluntary
                carbon market participation, and carbon credit revenue
                optimisation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CO2Section;
