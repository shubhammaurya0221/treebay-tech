import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-header">
          <span className="sec-tag">Why Technology Leaders Choose Us</span>
          <h2 className="sec-title">
            Deep Science. Real Engineering. Commercial Results.
          </h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🔬</div>
            <h3>Scientific Rigour from Lab to Plant</h3>
            <p>
              Our team includes PhDs, biochemical engineers, and process
              chemists who've worked at bench scale and commercial scale —
              understanding both the science and the engineering compromises
              that turn theory into operational reality.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">⚖️</div>
            <h3>Technology-Neutral Recommendations</h3>
            <p>
              We're not licenced to sell any particular technology. We evaluate
              every viable solution on technical and commercial merits — then
              recommend and implement what's genuinely best for your plant and
              your sustainability goals.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🌍</div>
            <h3>Sustainability as an Engineering Discipline</h3>
            <p>
              We treat sustainability metrics — carbon intensity, water
              footprint, waste generation — with the same rigour as yield and
              throughput. LCA is part of our design process, not a post-hoc
              compliance exercise.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🔗</div>
            <h3>Circular Economy Integration</h3>
            <p>
              We design systems that close loops — where one plant's waste
              becomes another's feedstock. Our integrated approach across
              fermentation, biogas, CO₂ recovery, and green chemistry creates
              genuine circularity, not just compliance.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">📐</div>
            <h3>Seamless Engineering Handover</h3>
            <p>
              Our process technology work flows directly into detailed
              engineering — PFDs, P&amp;IDs, equipment specs, and plant layout —
              eliminating the costly errors that occur when technology
              consultants hand off to separate engineering firms.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">📈</div>
            <h3>Bankable Techno-Economic Analysis</h3>
            <p>
              Every technology recommendation is underpinned by rigorous
              techno-economic modelling. Our feasibility studies and investment
              cases are designed to withstand lender scrutiny and board-level
              due diligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
