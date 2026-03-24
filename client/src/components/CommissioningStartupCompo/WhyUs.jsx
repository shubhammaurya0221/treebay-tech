import './WhyUs.css';

const WhyUs = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-header">
          <span className="sec-tag">Why Project Owners Choose Our Commissioning Team</span>
          <h2 className="sec-title">
            Commissioning Experience That Can't Be Improvised
          </h2>
        </div>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🔬</div>
            <h3>Engineering Continuity, Not Handover Gap</h3>
            <p>
              Our commissioning engineers work from the same documents as our design team — because in most cases, they're from the same organisation. No translation errors, no assumption gaps, no "the drawing says X but we built Y" surprises. The knowledge that designed your plant is present when it's commissioned.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">⚖️</div>
            <h3>Commissioning Procedure Library</h3>
            <p>
             Over 300 commissioned plants have built a library of tested, proven commissioning procedures for the most common process technologies. We don't write your commissioning procedures from scratch — we adapt and customise proven templates, eliminating the procedural errors that afflict first-time commissioning efforts.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🌍</div>
            <h3>98% PGT First-Attempt Pass Rate</h3>
            <p>
             We don't schedule performance guarantee tests when a plant is "almost ready." Our pre-test discipline — verifying every parameter, every instrument, every operating condition before witnesses arrive — means our plants pass their performance tests on the first attempt, 98% of the time. That record has direct commercial value for our clients.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">🔗</div>
            <h3>Vendor Interface Management</h3>
            <p>
             Major equipment commissioning — compressors, turbines, DCS systems, proprietary process packages — requires coordinating manufacturer's specialists alongside your own team. We manage that interface, ensuring vendor commissioning activities are sequenced correctly, completed on schedule, and properly documented before specialist departure.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">📐</div>
            <h3>Digital Commissioning Management</h3>
            <p>
              Our cloud-based commissioning management system tracks every loop check, every punch-list item, every procedure status, and every sign-off in real time — accessible to the project team and owner's engineers from anywhere. You always know exactly where commissioning stands, without needing a weekly status meeting to find out.
            </p>
          </div>
          <div className="why-card">
            <div className="why-icon">📈</div>
            <h3>We Stay Through Stabilization</h3>
            <p>
              Most commissioning contractors demobilise after the performance test. We stay through the stabilization period — because that's when your operations team needs technical support most. Our post-start-up presence means operational issues are resolved quickly, before they become production losses or safety incidents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
