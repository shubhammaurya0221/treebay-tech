import './ProcessTimeline.css';

const ProcessTimeline = () => {
  return (
    <section className="process-section">
      <div className="process-inner">
        <div className="process-header">
          <span className="sec-tag">How We Deliver</span>
          <h2 className="sec-title">
            From Concept to Commissioned Plant — A Structured Journey
          </h2>
        </div>
        <div className="timeline">
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">Phase 01</div>
            <h4>Technology Screening &amp; Feasibility</h4>
            <p>
              We assess your feedstocks, products, site conditions, and
              commercial targets to identify the most viable technology routes —
              with preliminary CAPEX/OPEX modelling and a clear recommendation
              before any significant capital commitment is made.
            </p>
          </div>
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">Phase 02</div>
            <h4>Process Design &amp; Technology Development</h4>
            <p>
              Detailed process design including mass and energy balances,
              process simulation, equipment sizing, and utility system design.
              Where required, we support or manage pilot-scale testing to
              de-risk technology selection at commercial scale.
            </p>
          </div>
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">Phase 03</div>
            <h4>Basic Engineering &amp; HAZOP Integration</h4>
            <p>
              FEED-level engineering package development, fully integrated with
              safety review (HAZOP/LOPA) and regulatory compliance mapping —
              delivered as a single coherent document set ready for detailed
              design or EPC tender.
            </p>
          </div>
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">Phase 04</div>
            <h4>Detailed Engineering &amp; Procurement Support</h4>
            <p>
              Complete detailed engineering through to construction-ready
              documentation, with vendor pre-qualification, technical bid
              evaluation, and procurement support for critical long-lead process
              equipment.
            </p>
          </div>
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">Phase 05</div>
            <h4>Commissioning &amp; Performance Optimisation</h4>
            <p>
              On-site commissioning support, start-up assistance, and
              performance testing — followed by ongoing operational optimisation
              and team training to ensure design performance is achieved and
              sustained from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
