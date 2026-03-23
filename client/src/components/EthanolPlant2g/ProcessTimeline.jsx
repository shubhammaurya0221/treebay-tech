const ProcessTimeline = () => {
  return (
    <section className="process-section">
      <div className="process-inner">
        <div className="process-header">
          <span className="sec-tag">Process Flow</span>
          <h2 className="sec-title">
            How 2G Ethanol Plants Work
          </h2>
        </div>

        <div className="timeline">

          {/* STEP 01 */}
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">01</div>
            <h4>Biomass Pretreatment</h4>
            <p>
              <strong>Mechanical, chemical, or steam explosion processes</strong>{" "}
              are used to break down the complex{" "}
              <strong>lignin structure</strong>, exposing cellulose for
              downstream conversion. The system is optimized for{" "}
              <strong>rice straw, bagasse, and agricultural residues</strong>{" "}
              to ensure maximum accessibility and process efficiency.
            </p>
          </div>

          {/* STEP 02 */}
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">02</div>
            <h4>Enzymatic Hydrolysis</h4>
            <p>
              <strong>Cellulase enzymes</strong> convert pretreated biomass into{" "}
              <strong>fermentable sugars</strong> with high recovery rates. The
              process is designed to achieve{" "}
              <strong>maximum sugar yield</strong> while minimizing inhibitors
              through <strong>controlled reaction conditions</strong>.
            </p>
          </div>

          {/* STEP 03 */}
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">03</div>
            <h4>Fermentation</h4>
            <p>
              <strong>C5 and C6 sugars</strong> are converted into ethanol using{" "}
              <strong>engineered microbial strains</strong>. The system supports{" "}
              <strong>batch, fed-batch, and continuous fermentation</strong>{" "}
              for higher productivity and optimized ethanol yield.
            </p>
          </div>

          {/* STEP 04 */}
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">04</div>
            <h4>Distillation &amp; Dehydration</h4>
            <p>
              <strong>Multi-pressure distillation systems</strong> are used to
              separate ethanol, followed by{" "}
              <strong>molecular sieve dehydration</strong> to achieve{" "}
              <strong>fuel-grade ethanol purity</strong>. Energy-integrated
              column design ensures <strong>lower steam consumption</strong> and
              high operational efficiency.
            </p>
          </div>

          {/* STEP 05 */}
          <div className="t-step">
            <div className="t-dot"></div>
            <div className="t-num">05</div>
            <h4>Co-product Recovery &amp; Integration</h4>
            <p>
              <strong>Lignin recovery systems</strong> enable steam and power
              generation, while <strong>CO₂ capture units</strong> allow
              industrial reuse or monetization. The entire plant integrates with{" "}
              <strong>ZLD and waste management systems</strong> for a{" "}
              <strong>fully circular and sustainable operation</strong>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;