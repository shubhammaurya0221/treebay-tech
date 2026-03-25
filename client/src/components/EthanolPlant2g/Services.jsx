import React from 'react';

const Services = () => {
  return (
    <section className="py-28 px-[6%] bg-[#f8f9fa] max-[640px]:py-16 max-[640px]:px-6 text-left" id="services">
      <div className="text-center max-w-[680px] mx-auto mb-20 text-left">
        <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:hidden">
          2G Ethanol Technology &amp; Process Capabilities
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
          From Waste Biomass to High-Value Biofuel.
        </h2>
        <p className="text-[#4a6157] text-[1rem] leading-[1.8] mt-4">
          Our 2G Ethanol suite provides the specialized engineering required to convert 
          lignocellulosic feedstocks into sustainable fuel. We offer standalone 
          process modules or full-scale EPC support for the next generation of biorefineries.
        </p>
      </div>

      {/* 01 FEEDSTOCK PRE-TREATMENT & HYDROLYSIS */}
      <div className="grid grid-cols-[1.25fr_1fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">01</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Biomass Pre-treatment &amp; Hydrolysis</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            The bottleneck of any 2G plant is the efficient breakdown of lignin. Our 
            <strong className="font-bold text-[#1a3a2a]"> advanced pre-treatment systems</strong> utilize steam explosion 
            and dilute acid/alkali technologies to disrupt biomass structure, 
            maximizing the accessibility of cellulose and hemicellulose.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We specialize in <strong className="font-bold text-[#1a3a2a]">Enzymatic Hydrolysis (Saccharification)</strong>, 
            optimizing enzyme loading and residence times to convert complex polymers 
            into fermentable C5 and C6 sugars. Our designs focus on high solids loading 
            to reduce water consumption and downstream evaporation costs.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem] mt-6">
            {["Steam Explosion", "C5/C6 Sugar Recovery", "Lignin Separation", "Enzymatic Saccharification", "Biomass Milling", "Inhibitor Removal"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Optimize Your Pre-treatment <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🌾</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.5rem] font-semibold mb-4 relative z-10">Process Deliverables</h3>
          <ul className="list-none relative z-10">
            {[
              "Biomass handling & size reduction",
              "Continuous steam explosion reactor design",
              "Sugar yield optimization & mass balance",
              "Enzyme dosing & management systems",
              "Detoxification of hydrolysate",
              "Lignin cake recovery & washing"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 02 C5/C6 CO-FERMENTATION & DISTILLATION */}
      <div className="grid grid-cols-[1fr_1.25fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[1024px]:order-last max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">⚗️</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.5rem] font-semibold mb-4 relative z-10">Fermentation Scope</h3>
          <ul className="list-none relative z-10">
            {[
              "Proprietary C5/C6 yeast integration",
              "Continuous & Fed-batch fermentation",
              "Degassing & aldehyde removal",
              "Extractive & Azeotropic distillation",
              "Anhydrous ethanol dehydration",
              "Fusel oil recovery systems"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">02</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Advanced Co-Fermentation &amp; Distillation</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            2G ethanol requires specialized yeast strains capable of fermenting both 
            glucose (C6) and xylose (C5). We design <strong className="font-bold text-[#1a3a2a]">Co-Fermentation systems</strong> 
            that manage the unique kinetics of cellulosic sugars while maintaining 
            high ethanol titers and minimizing byproduct formation.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Our <strong className="font-bold text-[#1a3a2a]">Multi-Pressure Distillation</strong> units are engineered 
            to handle the lower beer concentrations typical of 2G processes. By 
            integrating <strong className="font-bold text-[#1a3a2a]">Molecular Sieve Dehydration (MSDH)</strong>, we produce 
            99.9% pure fuel-grade ethanol that meets international fuel standards while 
            recovering heat for the hydrolysis stage.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem] mt-6 text-left">
            {["C5/C6 Co-Fermentation", "Multi-Pressure Distillation", "Molecular Sieve", "Yeast Propagation", "Fuel Ethanol (99.9%)", "Effluent Reduction"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Explore 2G Distillation <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* 03 WASTEWATER TREATMENT & ZLD */}
      <div className="grid grid-cols-[1.25fr_1fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1" id="zld-service">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">03</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Wastewater Treatment &amp; Zero Liquid Discharge</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Sustainability in 2G ethanol is defined by water management. We design 
            comprehensive <strong className="font-bold text-[#1a3a2a]">Zero Liquid Discharge (ZLD)</strong> systems that 
            recycle over 90% of process water back into the plant, significantly 
            reducing the environmental footprint and regulatory burden.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Our process integrates <strong className="font-bold text-[#1a3a2a]">Multi-Effect Evaporators (MEE)</strong> and 
            <strong className="font-bold text-[#1a3a2a]">Agitated Thin Film Dryers (ATFD)</strong> to concentrate spent 
            wash into a solid cake or high-value syrup. This not only meets strict 
            discharge norms but also creates a closed-loop system for the biorefinery.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem] mt-6">
            {["ZLD Systems", "MEE Evaporation", "Reverse Osmosis", "Condensate Polishing", "Spent Wash Treatment", "ATFD Technology"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Achieve Zero Liquid Discharge <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">💧</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.5rem] font-semibold mb-4 relative z-10">Water Management</h3>
          <ul className="list-none relative z-10">
            {[
              "High-COD spent wash treatment",
              "Condensate Polishing Unit (CPU)",
              "Biological Anaerobic/Aerobic treatment",
              "Mechanical Vapor Recompression (MVR)",
              "Byproduct (Vinasse) concentration",
              "Process water recycling loops"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 04 LIGNIN VALORIZATION & BIOMASS POWER */}
      <div className="grid grid-cols-[1fr_1.25fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1" id="lignin-service">
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[1024px]:order-last max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🔥</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.5rem] font-semibold mb-4 relative z-10">Energy Scope</h3>
          <ul className="list-none relative z-10">
            {[
              "Lignin separation & dewatering",
              "Biomass boiler steam cycles",
              "Back-pressure & Extraction turbines",
              "Power distribution & grid sync",
              "Carbon intensity (CI) modeling",
              "Flue gas treatment & Heat recovery"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">04</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Lignin Valorization &amp; Co-Gen Power</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Lignin is the primary byproduct of 2G ethanol production. Instead of 
            treating it as waste, we engineer <strong className="font-bold text-[#1a3a2a]">Lignin Recovery systems</strong> 
            to utilize it as a high-calorific fuel for high-pressure boilers, 
            making the 2G plant energy self-sufficient.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We design <strong className="font-bold text-[#1a3a2a]">Co-generation (CHP) plants</strong> specifically for 
            biorefineries, converting surplus lignin and biomass pith into steam 
            and electricity. This integration ensures that the carbon intensity (CI) 
            score of the produced ethanol remains among the lowest in the industry.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem] mt-6">
            {["Lignin Recovery", "High-Pressure Boilers", "Captive Power Plant", "Biomass Co-firing", "Ash Handling", "CI Score Optimization"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Power Your Biorefinery <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* 05 THERMAL INTEGRATION & PINCH ANALYSIS */}
      <div className="grid grid-cols-[1.25fr_1fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1" id="energy-service">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">05</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Thermal Integration &amp; Optimization</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            2G ethanol plants are thermally intensive due to high evaporation 
            and distillation loads. We apply <strong className="font-bold text-[#1a3a2a]">Pinch Analysis</strong> to 
            link the heat from the distillation columns to the hydrolysis heaters, 
            reducing total steam consumption by up to 30%.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Our digital twin simulations allow us to model the entire energy 
            balance of the 2G process, identifying <strong className="font-bold text-[#1a3a2a]">Heat Exchanger Network (HEN)</strong> 
            improvements that traditional engineering overlooks. This results in 
            significant OPEX savings and a faster ROI for the facility.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem] mt-6">
            {["Thermal Pinch", "Heat Integration", "Steam Economy", "Process Simulation", "Exergy Analysis", "OPEX Reduction"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Audit Your Energy Balance <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">⚡</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.5rem] font-semibold mb-4 relative z-10">Efficiency Metrics</h3>
          <ul className="list-none relative z-10 mb-8">
            {[
              "Steam economy — up to 4.5kg ethanol per kg steam",
              "Thermal integration — 30% reduction in cooling load",
              "ZLD parasitic load — 20% lower via MVR integration",
              "Power Export — potential for 15% surplus generation"
            ].map(point => (
                <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                  {point}
                </li>
              ))}
          </ul>

          <div className="bg-[#f8f9fa] rounded-[14px] p-8 border border-[rgba(61,139,90,0.18)] relative z-10 max-[640px]:p-6 mt-6">
            <h3 className="font-['Cormorant_Garamond',serif] text-[1.2rem] font-semibold text-[#1a3a2a] mb-6">2G Plant Efficiency Gains</h3>

            {[
              { label: "Steam Savings", val: "30%", width: "85%" },
              { label: "Water Recovery", val: "90%", width: "95%" },
              { label: "Sugar Yield", val: "25%↑", width: "75%" }
            ].map(metric => (
              <div key={metric.label} className="flex items-center justify-between py-3 border-b border-[rgba(61,139,90,0.1)] last:border-b-0 max-[640px]:flex-wrap max-[640px]:gap-2">
                <span className="text-[0.83rem] text-[#4a6157] w-[120px] shrink-0 max-[640px]:w-full">{metric.label}</span>
                <div className="flex-1 mx-4 max-[640px]:mx-0 max-[640px]:mr-3">
                  <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#3d8b5a,#6aaa7d)]" style={{ width: metric.width }}></div>
                </div>
                <span className="text-[0.85rem] font-semibold text-[#3d8b5a] whitespace-nowrap">{metric.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;