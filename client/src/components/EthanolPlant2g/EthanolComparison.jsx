import React from "react";

const EthanolComparison = () => {
  const features = [
    { title: "Feedstock", firstG: "Sugar / Grain", secondG: "Agricultural Waste" },
    { title: "Sustainability", firstG: "Moderate", secondG: "High" },
    { title: "Cost Stability", firstG: "Market Dependent", secondG: "More Stable" },
    { title: "Environmental Impact", firstG: "Medium Impact", secondG: "Low Carbon Footprint" },
  ];

  return (
    <section className="services" id="comparison">
      <div className="svc-header">
        <span className="sec-tag">
          Techno-Economic Insights
        </span>
        <h2 className="sec-title">
          Comparing 1G &amp; 2G Ethanol Technologies
        </h2>
        <p>
          Understanding the transition from <strong>first-generation (1G)</strong> 
          to <strong>second-generation (2G) ethanol</strong> is critical for building 
          sustainable and future-ready biorefineries. Below is a comparative overview 
          highlighting key operational, economic, and environmental differences.
        </p>
      </div>

      <div className="svc-block">
        {/* LEFT SIDE - TABLE */}
        <div className="svc-copy">
          <h2>1G vs 2G Ethanol Comparison</h2>
          <p>
            While <strong>1G ethanol</strong> relies on food-based feedstocks like 
            molasses and grains, <strong>2G ethanol</strong> utilizes agricultural 
            residues, enabling a <strong>circular and low-carbon fuel ecosystem</strong>.
          </p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>1G Ethanol</th>
                  <th>2G Ethanol</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td><strong>{item.title}</strong></td>
                    <td>{item.firstG}</td>
                    <td className="highlight">{item.secondG}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="svc-kw">
            <span className="kw">1G Ethanol</span>
            <span className="kw">2G Ethanol</span>
            <span className="kw">Lignocellulosic Biomass</span>
            <span className="kw">Sustainability</span>
            <span className="kw">Carbon Reduction</span>
            <span className="kw">Biofuel Transition</span>
          </div>
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="svc-panel">
          <div className="panel-icon">📊</div>
          <h3>Key Takeaways</h3>
          <ul className="panel-points">
            <li>2G ethanol uses non-food biomass feedstocks</li>
            <li>Lower lifecycle carbon emissions</li>
            <li>Reduced dependency on agricultural markets</li>
            <li>Supports circular economy &amp; waste utilization</li>
            <li>Higher long-term sustainability potential</li>
            <li>Aligned with global decarbonization goals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EthanolComparison;