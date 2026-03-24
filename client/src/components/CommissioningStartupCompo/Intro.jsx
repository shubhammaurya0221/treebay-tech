import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-inner">
        <div className="intro-text">
          <span className="sec-tag">
            Why Commissioning Excellence Is Non-Negotiable
          </span>
          <h2 className="sec-title">
            Three Years of Engineering. Tested in Three Weeks. There Is No Dress Rehearsal.
          </h2>
          <p className="sec-body">
            Commissioning is the single most compressed, consequential phase of any industrial project. Within a matter of weeks, every system, every instrument, every interlock, and every process loop must be verified, proven, and transitioned to live operation — simultaneously, progressively, and under the scrutiny of owner's engineers, performance guarantee witnesses, and regulatory inspectors. There is no tolerance for ambiguity at this stage. Defects found during commissioning cost ten times more to fix than those found during construction. Defects found during operation cost a hundre  d times more.
          </p>
          <p className="sec-body">
            Our <strong>commissioning and start-up services</strong> provide the structured, experienced, and independently led commissioning capability that protects your investment at its most vulnerable moment. We manage the complete transition from mechanical completion through <a href="#pre-comm">pre-commissioning verification</a>, <a href="#cold-hot">cold and hot commissioning</a>, <a href="#perf-test">performance guarantee testing</a>, to <a href="#startup">plant start-up and stabilization</a> — with our own certified commissioning engineers, vendor interface management, and a fully documented commissioning management system.
            reducing your plant's energy consumption by 30–40%, we bring the
            process rigour, technology independence, and engineering credibility
            to make it happen — on time and on budget.
          </p>
          <p class="bp">Our commissioning teams work in direct continuity with the project's <a href="#">engineering and design</a> and <a href="#">construction and installation</a> functions — eliminating the knowledge gap that typically opens between construction teams handing over and commissioning teams taking over. When our commissioning engineer reviews a loop diagram on site, they're looking at a document our own instrumentation engineers wrote. That continuity is commercially significant, and it shows in our results.</p>
        </div>
        <div className="intro-visual">
          <ul className="pill-list">
            <li>
              <span className="pill-dot"></span>System-agnostic commissioning — we
              integrate with your existing CMS and DCS, regardless of the technology
              vendor or licensor
            </li>
            <li>
              <span className="pill-dot"></span>Seamless turnover management from
              mechanical completion through to first product and sustained commercial
              operation
            </li>
            <li>
              <span className="pill-dot"></span>Risk-based process safety (PSM)
              ensuring every interlock and ESD logic is verified before the first
              drop of process fluid
            </li>
            <li>
              <span className="pill-dot"></span>Performance Guarantee Testing (PGT)
              aligned with ASME PTC 46 and international financial acceptance standards
            </li>
            <li>
              <span className="pill-dot"></span>Utilities bring-up and stabilization,
              including steam, cooling water, and power system integration under
              live load conditions
            </li>
            <li>
              <span className="pill-dot"></span>Regulatory safety compliance —
              OSHA PSM, COMAH, and environmental permit verification during the
              critical first start-up
            </li>
            <li>
              <span className="pill-dot"></span>Phase-gate discipline from initial
              system walk-downs through to final operator training and formal
              operational handover
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;