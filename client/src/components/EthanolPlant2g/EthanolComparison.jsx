import React from "react";

const EthanolComparison = () => {
  const features = [
    { title: "Feedstock", firstG: "Sugar / Grain", secondG: "Agricultural Waste" },
    { title: "Sustainability", firstG: "Moderate", secondG: "High" },
    { title: "Cost Stability", firstG: "Market Dependent", secondG: "More Stable" },
    { title: "Environmental Impact", firstG: "Medium Impact", secondG: "Low Carbon Footprint" },
  ];

  return (
    <section className="py-28 px-[6%] bg-[#f8f9fa] max-[640px]:py-16 max-[640px]:px-6 text-left" id="comparison">
      <div className="text-center max-w-[680px] mx-auto mb-20">
        <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:hidden">
          Techno-Economic Insights
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
          Comparing 1G &amp; 2G Ethanol Technologies
        </h2>
        <p className="text-[#4a6157] text-[1rem] leading-[1.8] mt-4">
          Understanding the transition from <strong className="font-bold text-[#1a3a2a]">first-generation (1G)</strong> 
          to <strong className="font-bold text-[#1a3a2a]">second-generation (2G) ethanol</strong> is critical for building 
          sustainable and future-ready biorefineries. Below is a comparative overview 
          highlighting key operational, economic, and environmental differences.
        </p>
      </div>

      <div className="grid grid-cols-[1.25fr_1fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        {/* LEFT SIDE - TABLE */}
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <h2 className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">1G vs 2G Ethanol Comparison</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            While <strong className="font-bold text-[#1a3a2a]">1G ethanol</strong> relies on food-based feedstocks like 
            molasses and grains, <strong className="font-bold text-[#1a3a2a]">2G ethanol</strong> utilizes agricultural 
            residues, enabling a <strong className="font-bold text-[#1a3a2a]">circular and low-carbon fuel ecosystem</strong>.
          </p>

          <div className="w-full overflow-x-auto mb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3.5 border-b border-[#e5e7eb] text-left text-[0.85rem] uppercase opacity-70 text-[#1a3a2a]">Feature</th>
                  <th className="p-3.5 border-b border-[#e5e7eb] text-left text-[0.85rem] uppercase opacity-70 text-[#1a3a2a]">1G Ethanol</th>
                  <th className="p-3.5 border-b border-[#e5e7eb] text-left text-[0.85rem] uppercase opacity-70 text-[#1a3a2a]">2G Ethanol</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td className="p-3.5 border-b border-[#e5e7eb] text-left text-[0.9rem] text-[#1a3a2a]"><strong className="font-semibold">{item.title}</strong></td>
                    <td className="p-3.5 border-b border-[#e5e7eb] text-left text-[0.9rem] text-[#4a6157]">{item.firstG}</td>
                    <td className="p-3.5 border-b border-[#e5e7eb] text-left text-[0.9rem] font-semibold text-[#3d8b5a] bg-[#e8f5ed]">{item.secondG}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem] mt-6">
            {["1G Ethanol", "2G Ethanol", "Lignocellulosic Biomass", "Sustainability", "Carbon Reduction", "Biofuel Transition"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">📊</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.5rem] font-semibold mb-4 relative z-10">Key Takeaways</h3>
          <ul className="list-none relative z-10">
            {[
              "2G ethanol uses non-food biomass feedstocks",
              "Lower lifecycle carbon emissions",
              "Reduced dependency on agricultural markets",
              "Supports circular economy & waste utilization",
              "Higher long-term sustainability potential",
              "Aligned with global decarbonization goals"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EthanolComparison;