import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      {/* SECTION HEADER */}
      <div className="svc-header">
        <span className="sec-tag">
          The Four Commissioning Phases
        </span>
        <h2 className="sec-title">
          A Structured Path from Mechanical Completion to Guaranteed Performance
        </h2>
        <p>
          Each commissioning phase builds sequentially on the last. Skipping steps or
          rushing transitions creates defects that compound — turning manageable issues
          into extended start-up delays. Our commissioning management system enforces
          phase-gate discipline so every transition is earned, not assumed.
        </p>
      </div>

      {/* PHASE TIMELINE NAVIGATION */}
      <div className="phase-timeline">
        <div className="pt-step">
          <div className="pt-dot">01</div>
          <h4>Pre-Commissioning</h4>
          <span>MC → Ready-to-commission</span>
        </div>
        <div className="pt-step">
          <div className="pt-dot">02</div>
          <h4>Cold &amp; Hot Commissioning</h4>
          <span>Utilities → Process introduction</span>
        </div>
        <div className="pt-step">
          <div className="pt-dot">03</div>
          <h4>Performance Testing</h4>
          <span>Design proof → Acceptance</span>
        </div>
        <div className="pt-step">
          <div className="pt-dot">04</div>
          <h4>Start-Up &amp; Stabilization</h4>
          <span>First product → Sustained op</span>
        </div>
      </div>

      {/* 01 PRE-COMMISSIONING */}
      <div className="svc-block" id="pre-comm">
        <div className="svc-copy">
          <div className="svc-num">01</div>
          <h2>Pre-Commissioning</h2>
          <p className="bp">
            Pre-commissioning is the systematic verification that every installed system is
            mechanically complete, correctly installed, and ready to be commissioned — before
            a single valve is opened to process fluids. The cost of discovering a mis-installed
            instrument or an unresolved punch-list item after process introduction is
            exponentially higher than catching it during structured pre-commissioning walks.
          </p>
          <p className="bp">
            Our <strong>pre-commissioning management</strong> process covers: systematic
            walk-down against as-built documentation, completion of critical punch-list items,
            <strong> instrument loop checking</strong>, line flushing, and
            <strong> safety system testing</strong> (ESD logic and relief valve certification).
            We use a digital system to track every sign-off, giving the project team real-time
            visibility of turnover status.
          </p>
          <div className="svc-kw">
            <span className="kw">Mechanical Completion</span>
            <span className="kw">Loop Checking</span>
            <span className="kw">Punch-List Management</span>
            <span className="kw">Line Flushing</span>
            <span className="kw">ESD Testing</span>
            <span className="kw">Dry Runs</span>
            <span className="kw">Systems Turnover</span>
          </div>
          <a href="#contact" className="svc-cta">
            Discuss Pre-Commissioning Planning <span>→</span>
          </a>
        </div>
        <div className="svc-panel">
          <div className="panel-icon">🔍</div>
          <h3>Pre-Commissioning Checklist</h3>
          <ul className="panel-points">
            <li>System walk-downs vs. as-built drawings</li>
            <li>Punch-list A/B/C item resolution tracking</li>
            <li>Instrument loop checking (1,800+ loops typical)</li>
            <li>Control valve stroking &amp; calibration</li>
            <li>Relief valve certification &amp; install check</li>
            <li>ESD logic verification &amp; interlock testing</li>
            <li>Line flushing, blowing &amp; chemical cleaning</li>
            <li>Equipment alignment verification records</li>
          </ul>
        </div>
      </div>

      {/* 02 COLD & HOT COMMISSIONING */}
      <div className="svc-block flip" id="cold-hot">
        <div className="svc-copy">
          <div className="svc-num">02</div>
          <h2>Cold &amp; Hot Commissioning</h2>
          <p className="bp">
            Cold commissioning proves process systems first with inert media or water before
            progressive introduction of real process fluids. Hot commissioning then takes
            those systems to operating temperature and pressure. These phases are where
            an experienced team makes the difference between a controlled start-up and
            an extended series of unplanned shutdowns.
          </p>
          <p className="bp">
            Our <strong>cold commissioning</strong> scope covers utility bring-up and
            <strong> control loop tuning</strong> using model-based PID optimisation.
            <strong> Hot commissioning</strong> progresses through controlled heat-up
            and reaction system conditioning, governed by a
            <a href="#"> process safety performance framework</a>. The outcome is a plant
            at stable, controlled operation — ready for performance guarantee testing.
          </p>
          <div className="svc-kw">
            <span className="kw">Cold Commissioning</span>
            <span className="kw">Hot Commissioning</span>
            <span className="kw">Control Loop Tuning</span>
            <span className="kw">Utility Bring-Up</span>
            <span className="kw">Inert Commissioning</span>
            <span className="kw">PID Optimisation</span>
          </div>
          <a href="#contact" className="svc-cta">
            Plan Your Commissioning Sequence <span>→</span>
          </a>
        </div>
        <div className="svc-panel">
          <div className="panel-icon">🌡️</div>
          <h3>Cold &amp; Hot Comm. Scope</h3>
          <ul className="panel-points">
            <li>Utility systems bring-up &amp; verification</li>
            <li>Rotating equipment wet runs &amp; checks</li>
            <li>Control loop tuning &amp; DCS config</li>
            <li>Inert gas &amp; water pressure testing</li>
            <li>Heat-up curve management</li>
            <li>First process fluid introduction</li>
            <li>Reaction system conditioning</li>
            <li>Commissioning deviation management log</li>
          </ul>
        </div>
      </div>

      {/* 03 PERFORMANCE GUARANTEE TESTING (Fixed ID and Flip status) */}
      <div className="svc-block" id="performance">
        <div className="svc-panel" id="pgt-results">
          <div className="panel-icon">📊</div>
          <h3>PGT Performance Scorecard</h3>
          <div className="energy-visual">
            <div className="energy-metric">
              <div className="metric-header">
                <span className="metric-label">Plant Capacity</span>
                <span className="metric-val">102.4%</span>
              </div>
              <div className="metric-bar-wrap">
                <div className="metric-bar" style={{ width: "96%", background: "var(--leaf)" }}></div>
              </div>
              <span className="metric-subtext">Achieved: 870 t/d (Design: 850 t/d)</span>
            </div>

            <div className="energy-metric">
              <div className="metric-header">
                <span className="metric-label">Product Purity</span>
                <span className="metric-val">99.87%</span>
              </div>
              <div className="metric-bar-wrap">
                <div className="metric-bar" style={{ width: "99%", background: "var(--leaf)" }}></div>
              </div>
              <span className="metric-subtext">Spec: ≥99.5% · Verified Lab Result</span>
            </div>

            <div className="energy-metric">
              <div className="metric-header">
                <span className="metric-label">Energy Efficiency</span>
                <span className="metric-val">94.2%</span>
              </div>
              <div className="metric-bar-wrap">
                <div className="metric-bar" style={{ width: "94%", background: "var(--leaf)" }}></div>
              </div>
              <span className="metric-subtext">6% below max consumption guarantee</span>
            </div>
          </div>

          <ul className="panel-points" style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1rem' }}>
            <li>72-hour continuous performance run</li>
            <li>ASME PTC 46 compliant protocol</li>
            <li>Third-party witness verification</li>
          </ul>
        </div>
        <div className="svc-copy">
          <div className="svc-num">03</div>
          <h2>Performance Guarantee Testing</h2>
          <p className="bp">
            Performance guarantee testing is the moment of financial truth for any process plant investment. It is the structured, witnessed, and independently verified proof that your plant delivers exactly what the technology licensor promised, the engineers designed, and the contractor built — at specified feedstock conditions, with specified utilities consumption, producing specified product quality and quantity. Failing a performance test has immediate and serious contractual consequences. Passing it — efficiently, on the first attempt — protects your investment and triggers liquidated damages or bonus clauses in your favour.
          </p>
          <p className="bp">
            Our <strong>performance guarantee testing</strong> scope covers <strong>capacity verification</strong> (run-rate at guaranteed throughput), <strong>yield and quality testing</strong> (product specifications under defined operating windows), and <strong>utility consumption measurement</strong> (steam, power, cooling water, and catalyst consumption against guaranteed values). We manage the entire process: test protocol development, independent witness coordination, data validation, and final acceptance certification. This structured approach minimises disputes and ensures your plant is accepted based on demonstrated performance, not assumptions.
          </p>
          <div className="svc-kw">
            <span className="kw">ASME PTC 46</span>
            <span className="kw">Measurement Uncertainty</span>
            <span className="kw">Plant Capacity</span>
            <span className="kw">Data Acquisition</span>
          </div>
          <a href="#contact" className="svc-cta">Discuss PGT Requirements <span>→</span></a>
        </div>
      </div>

      {/* 04 START-UP & STABILIZATION (Fixed class to className) */}
      <div className="svc-block flip" id="startup">
        <div className="svc-copy">
          <div className="svc-num">04</div>
          <h2>Start-Up &amp; Stabilization</h2>
          <p className="bp">
            Passing a performance test proves design performance under controlled conditions;
            <strong> stabilization</strong> proves it can be sustained across shift changes,
            feedstock variation, and seasonal fluctuations. The transition to a reliably
            producing plant requires operational optimisation, not just procedure execution.
          </p>
          <p className="className">Our <strong>start-up and stabilization</strong> service provides the experienced operational support your plant needs during the critical first weeks and months after performance testing — when the commissioning team would normally demobilise and leave your operations team managing a complex, unfamiliar process for the first time. We stay. Our process engineers and DCS specialists remain embedded with your operations team, providing <strong>on-the-job training, process optimisation support, troubleshooting assistance</strong>, and 24/7 technical backup during the stabilization period. We systematically close any remaining process variables that deviated from design during start-up, tune operating procedures to real plant behaviour, and build the operational knowledge base your team needs to run the plant independently and confidently.</p>
          <p className="className">This phase also covers formal <strong>operator and technician training programmes</strong>, as-built procedure finalisation, the completion of any outstanding commissioning documentation, and preparation for the <a href="https://www.hse.gov.uk/comah/" target="_blank" rel="noopener noreferrer">COMAH / OSHA PSM regulatory inspection</a> that many major hazard sites require before sustained production can commence. Handover to operations is a managed transition, not an event — and we treat it that way.</p>
          <ul className="panel-points" style={{ gridTemplateColumns: '1fr', display: 'grid', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <li><span style={{ color: 'var(--leaf)' }}>✓</span> Process variable optimisation to design targets</li>
            <li><span style={{ color: 'var(--leaf)' }}>✓</span> On-the-job operator and DCS technician training</li>
            <li><span style={{ color: 'var(--leaf)' }}>✓</span> Operating procedure review and finalisation</li>
            <li><span style={{ color: 'var(--leaf)' }}>✓</span> Regulatory inspection preparation (OSHA/PSM)</li>
          </ul>
          <div className="svc-kw">
            <span className="kw">Operational Optimisation</span>
            <span className="kw">Troubleshooting</span>
            <span className="kw">OSHA PSM</span>
            <span className="kw">Shift Management</span>
            <span className="kw">Knowledge Transfer</span>
          </div>
          <a href="#contact" className="svc-cta">
            Plan Your Start-Up Support <span>→</span>
          </a>
        </div>
        <div className="svc-panel" style={{ background: 'var(--pale)', color: 'var(--forest)' }}>
          <div className="panel-header" style={{ marginBottom: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '0.8rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="live-dot" style={{ width: '8px', height: '8px', background: '#4CAF50', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #4CAF50' }}></span>
            Live Plant Parameters — Day 14
          </div>

          <div className="energy-visual" style={{ gap: '1.2rem' }}>
            <div className="energy-metric">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '5px' }}>
                <span>Reactor Temp</span>
                <span style={{ color: '#4CAF50' }}>340°C ✓</span>
              </div>
              <div className="metric-bar-wrap" style={{ background: '#333' }}>
                <div className="metric-bar" style={{ width: '88%', background: '#4CAF50' }}></div>
              </div>
            </div>

            <div className="energy-metric">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '5px' }}>
                <span>Feed Rate</span>
                <span style={{ color: '#4CAF50' }}>98.5%</span>
              </div>
              <div className="metric-bar-wrap" style={{ background: '#333' }}>
                <div className="metric-bar" style={{ width: '95%', background: '#4CAF50' }}></div>
              </div>
            </div>

            <div className="energy-metric">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '5px' }}>
                <span>Product Purity</span>
                <span style={{ color: '#4CAF50' }}>99.82% ✓</span>
              </div>
              <div className="metric-bar-wrap" style={{ background: '#333' }}>
                <div className="metric-bar" style={{ width: '99%', background: '#4CAF50' }}></div>
              </div>
            </div>

            <div className="energy-metric">
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '5px' }}>
                <span>Steam Usage</span>
                <span style={{ color: '#FFC107' }}>↓ Optimising</span>
              </div>
              <div className="metric-bar-wrap" style={{ background: '#333' }}>
                <div className="metric-bar" style={{ width: '78%', background: '#FFC107' }}></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
            * Continuous 97.2% rolling availability achieved post-PGT.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;