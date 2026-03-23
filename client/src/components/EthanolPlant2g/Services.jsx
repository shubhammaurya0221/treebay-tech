const Services = () => {
  return (
    <section className="services" id="services">
      <div className="svc-header">
        <span className="sec-tag">
          2G Ethanol Technology &amp; Process Capabilities
        </span>
        <h2 className="sec-title">
          From Waste Biomass to High-Value Biofuel.
        </h2>
        <p>
          Our 2G Ethanol suite provides the specialized engineering required to convert 
          lignocellulosic feedstocks into sustainable fuel. We offer standalone 
          process modules or full-scale EPC support for the next generation of biorefineries.
        </p>
      </div>

      {/* 01 FEEDSTOCK PRE-TREATMENT & HYDROLYSIS */}
      <div className="svc-block">
        <div className="svc-copy">
          <div className="svc-num">01</div>
          <h2>Biomass Pre-treatment &amp; Hydrolysis</h2>
          <p>
            The bottleneck of any 2G plant is the efficient breakdown of lignin. Our 
            <strong> advanced pre-treatment systems</strong> utilize steam explosion 
            and dilute acid/alkali technologies to disrupt biomass structure, 
            maximizing the accessibility of cellulose and hemicellulose.
          </p>
          <p>
            We specialize in <strong>Enzymatic Hydrolysis (Saccharification)</strong>, 
            optimizing enzyme loading and residence times to convert complex polymers 
            into fermentable C5 and C6 sugars. Our designs focus on high solids loading 
            to reduce water consumption and downstream evaporation costs.
          </p>
          <div className="svc-kw">
            <span className="kw">Steam Explosion</span>
            <span className="kw">C5/C6 Sugar Recovery</span>
            <span className="kw">Lignin Separation</span>
            <span className="kw">Enzymatic Saccharification</span>
            <span className="kw">Biomass Milling</span>
            <span className="kw">Inhibitor Removal</span>
          </div>
          <a href="#contact" className="svc-cta">
            Optimize Your Pre-treatment <span>→</span>
          </a>
        </div>
        <div className="svc-panel">
          <div className="panel-icon">🌾</div>
          <h3>Process Deliverables</h3>
          <ul className="panel-points">
            <li>Biomass handling &amp; size reduction</li>
            <li>Continuous steam explosion reactor design</li>
            <li>Sugar yield optimization &amp; mass balance</li>
            <li>Enzyme dosing &amp; management systems</li>
            <li>Detoxification of hydrolysate</li>
            <li>Lignin cake recovery &amp; washing</li>
          </ul>
        </div>
      </div>

      {/* 02 C5/C6 CO-FERMENTATION & DISTILLATION */}
      <div className="svc-block flip">
        <div className="svc-copy">
          <div className="svc-num">02</div>
          <h2>Advanced Co-Fermentation &amp; Distillation</h2>
          <p>
            2G ethanol requires specialized yeast strains capable of fermenting both 
            glucose (C6) and xylose (C5). We design <strong>Co-Fermentation systems</strong> 
            that manage the unique kinetics of cellulosic sugars while maintaining 
            high ethanol titers and minimizing byproduct formation.
          </p>
          <p>
            Our <strong>Multi-Pressure Distillation</strong> units are engineered 
            to handle the lower beer concentrations typical of 2G processes. By 
            integrating <strong>Molecular Sieve Dehydration (MSDH)</strong>, we produce 
            99.9% pure fuel-grade ethanol that meets international fuel standards while 
            recovering heat for the hydrolysis stage.
          </p>
          <div className="svc-kw">
            <span className="kw">C5/C6 Co-Fermentation</span>
            <span className="kw">Multi-Pressure Distillation</span>
            <span className="kw">Molecular Sieve</span>
            <span className="kw">Yeast Propagation</span>
            <span className="kw">Fuel Ethanol (99.9%)</span>
            <span className="kw">Effluent Reduction</span>
          </div>
          <a href="#contact" className="svc-cta">
            Explore 2G Distillation <span>→</span>
          </a>
        </div>
        <div className="svc-panel">
          <div className="panel-icon">⚗️</div>
          <h3>Fermentation Scope</h3>
          <ul className="panel-points">
            <li>Proprietary C5/C6 yeast integration</li>
            <li>Continuous &amp; Fed-batch fermentation</li>
            <li>Degassing &amp; aldehyde removal</li>
            <li>Extractive &amp; Azeotropic distillation</li>
            <li>Anhydrous ethanol dehydration</li>
            <li>Fusel oil recovery systems</li>
          </ul>
        </div>
      </div>

      {/* 03 WASTEWATER TREATMENT & ZLD */}
      <div className="svc-block" id="zld-service">
        <div className="svc-copy">
          <div className="svc-num">03</div>
          <h2>Wastewater Treatment &amp; Zero Liquid Discharge</h2>
          <p>
            Sustainability in 2G ethanol is defined by water management. We design 
            comprehensive <strong>Zero Liquid Discharge (ZLD)</strong> systems that 
            recycle over 90% of process water back into the plant, significantly 
            reducing the environmental footprint and regulatory burden.
          </p>
          <p>
            Our process integrates <strong>Multi-Effect Evaporators (MEE)</strong> and 
            <strong>Agitated Thin Film Dryers (ATFD)</strong> to concentrate spent 
            wash into a solid cake or high-value syrup. This not only meets strict 
            discharge norms but also creates a closed-loop system for the biorefinery.
          </p>
          <div className="svc-kw">
            <span className="kw">ZLD Systems</span>
            <span className="kw">MEE Evaporation</span>
            <span className="kw">Reverse Osmosis</span>
            <span className="kw">Condensate Polishing</span>
            <span className="kw">Spent Wash Treatment</span>
            <span className="kw">ATFD Technology</span>
          </div>
          <a href="#contact" className="svc-cta">
            Achieve Zero Liquid Discharge <span>→</span>
          </a>
        </div>
        <div className="svc-panel">
          <div className="panel-icon">💧</div>
          <h3>Water Management</h3>
          <ul className="panel-points">
            <li>High-COD spent wash treatment</li>
            <li>Condensate Polishing Unit (CPU)</li>
            <li>Biological Anaerobic/Aerobic treatment</li>
            <li>Mechanical Vapor Recompression (MVR)</li>
            <li>Byproduct (Vinasse) concentration</li>
            <li>Process water recycling loops</li>
          </ul>
        </div>
      </div>

      {/* 04 LIGNIN VALORIZATION & BIOMASS POWER */}
      <div className="svc-block flip" id="lignin-service">
        <div className="svc-copy">
          <div className="svc-num">04</div>
          <h2>Lignin Valorization &amp; Co-Gen Power</h2>
          <p>
            Lignin is the primary byproduct of 2G ethanol production. Instead of 
            treating it as waste, we engineer <strong>Lignin Recovery systems</strong> 
            to utilize it as a high-calorific fuel for high-pressure boilers, 
            making the 2G plant energy self-sufficient.
          </p>
          <p>
            We design <strong>Co-generation (CHP) plants</strong> specifically for 
            biorefineries, converting surplus lignin and biomass pith into steam 
            and electricity. This integration ensures that the carbon intensity (CI) 
            score of the produced ethanol remains among the lowest in the industry.
          </p>
          <div className="svc-kw">
            <span className="kw">Lignin Recovery</span>
            <span className="kw">High-Pressure Boilers</span>
            <span className="kw">Captive Power Plant</span>
            <span className="kw">Biomass Co-firing</span>
            <span className="kw">Ash Handling</span>
            <span className="kw">CI Score Optimization</span>
          </div>
          <a href="#contact" className="svc-cta">
            Power Your Biorefinery <span>→</span>
          </a>
        </div>
        <div className="svc-panel" style={{ background: "var(--pale)" }}>
          <div className="panel-icon">🔥</div>
          <h3>Energy Scope</h3>
          <ul className="panel-points">
            <li>Lignin separation &amp; dewatering</li>
            <li>Biomass boiler steam cycles</li>
            <li>Back-pressure &amp; Extraction turbines</li>
            <li>Power distribution &amp; grid sync</li>
            <li>Carbon intensity (CI) modeling</li>
            <li>Flue gas treatment &amp; Heat recovery</li>
          </ul>
        </div>
      </div>

      {/* 05 THERMAL INTEGRATION & PINCH ANALYSIS */}
      <div className="svc-block" id="energy-service">
        <div className="svc-copy">
          <div className="svc-num">05</div>
          <h2>Thermal Integration &amp; Optimization</h2>
          <p>
            2G ethanol plants are thermally intensive due to high evaporation 
            and distillation loads. We apply <strong>Pinch Analysis</strong> to 
            link the heat from the distillation columns to the hydrolysis heaters, 
            reducing total steam consumption by up to 30%.
          </p>
          <p>
            Our digital twin simulations allow us to model the entire energy 
            balance of the 2G process, identifying <strong>Heat Exchanger Network (HEN)</strong> 
            improvements that traditional engineering overlooks. This results in 
            significant OPEX savings and a faster ROI for the facility.
          </p>
          <div className="svc-kw">
            <span className="kw">Thermal Pinch</span>
            <span className="kw">Heat Integration</span>
            <span className="kw">Steam Economy</span>
            <span className="kw">Process Simulation</span>
            <span className="kw">Exergy Analysis</span>
            <span className="kw">OPEX Reduction</span>
          </div>
          <a href="#contact" className="svc-cta">
            Audit Your Energy Balance <span>→</span>
          </a>
        </div>
        <div className="svc-panel">
          <div className="panel-icon">⚡</div>
          <h3>Efficiency Metrics</h3>
          <ul className="panel-points" style={{ marginBottom: "1.4rem" }}>
            <li>Steam economy — up to 4.5kg ethanol per kg steam</li>
            <li>Thermal integration — 30% reduction in cooling load</li>
            <li>ZLD parasitic load — 20% lower via MVR integration</li>
            <li>Power Export — potential for 15% surplus generation</li>
          </ul>

          <div className="energy-visual">
            <h3>2G Plant Efficiency Gains</h3>
            <div className="energy-metric">
              <span className="metric-label">Steam Savings</span>
              <div className="metric-bar-wrap">
                <div className="metric-bar" style={{ width: "85%" }}></div>
              </div>
              <span className="metric-val">30%</span>
            </div>
            <div className="energy-metric">
              <span className="metric-label">Water Recovery</span>
              <div className="metric-bar-wrap">
                <div className="metric-bar" style={{ width: "95%" }}></div>
              </div>
              <span className="metric-val">90%</span>
            </div>
            <div className="energy-metric">
              <span className="metric-label">Sugar Yield</span>
              <div className="metric-bar-wrap">
                <div className="metric-bar" style={{ width: "75%" }}></div>
              </div>
              <span className="metric-val">25%↑</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;