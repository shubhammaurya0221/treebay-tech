import React from 'react';

const Energy = () => {
  const metrics = [
    { label: "Distillation Systems", val: "Up to 40%", width: "82%" },
    { label: "Fermentation Utilities", val: "Up to 35%", width: "70%" },
    { label: "Biogas Plant Parasitic Load", val: "Up to 28%", width: "60%" },
    { label: "CO₂ Capture Energy Penalty", val: "Up to 25%", width: "55%" },
    { label: "Steam & Heat Recovery", val: "Up to 45%", width: "88%" }
  ];

  return (
    <section className="py-28 px-[6%] bg-white text-left" id="energy">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 gap-24 items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
        <div className="bg-[#f8f9fa] rounded-[14px] p-12 border border-[rgba(61,139,90,0.18)] relative text-left max-[640px]:p-6">
          <h3 className="font-['Cormorant_Garamond',serif] text-[1.3rem] font-semibold text-[#1a3a2a] mb-6">Typical Energy Savings We Deliver</h3>
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center justify-between py-3.5 border-b border-[rgba(61,139,90,0.1)] last:border-b-0 max-[640px]:flex-wrap max-[640px]:gap-2">
              <span className="text-[0.83rem] text-[#4a6157] w-[185px] shrink-0 max-[640px]:w-full">{metric.label}</span>
              <div className="flex-1 mx-4 max-[640px]:mx-0 max-[640px]:mr-3">
                <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#3d8b5a,#6aaa7d)]" style={{ width: metric.width }}></div>
              </div>
              <span className="text-[0.85rem] font-semibold text-[#3d8b5a] whitespace-nowrap">{metric.val}</span>
            </div>
          ))}
        </div>
        <div className="text-left">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">Energy Optimization Solutions</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight mb-6 font-semibold">
            Cut Energy Costs. Cut Emissions. Strengthen Margins.
          </h2>
          <p className="text-[1.05rem] text-[#4a6157] leading-[1.8] mb-4">
            Energy is typically the single largest operating cost in process
            industries — and the greatest lever available for both margin
            improvement and decarbonisation. Our{" "}
            <strong className="font-bold text-[#1a3a2a]">energy optimisation solutions</strong> apply rigorous
            process integration methodology to identify, quantify, and implement
            energy savings that fundamentally transform plant economics.
          </p>
          <p className="text-[1.05rem] text-[#4a6157] leading-[1.8] mb-4">
            Using advanced <strong className="font-bold text-[#1a3a2a]">
              pinch analysis, heat exchanger network optimisation, steam system
              redesign
            </strong>, and process simulation, we identify precisely where energy is
            being wasted and how it can be recovered. We then engineer the
            modifications — new heat exchange configurations, heat pump
            integration, combined heat and power (CHP) systems, or process
            scheduling changes — and support implementation through to
            commissioning.
          </p>
          <p className="text-[1.05rem] text-[#4a6157] leading-[1.8] mb-4">
            Our energy optimisation work follows{" "}
            <a
              href="https://www.iso.org/iso-50001-energy-management.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] font-semibold hover:underline"
            >
              ISO 50001 Energy Management System
            </a>{" "}
            principles and is compatible with{" "}
            <a
              href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] font-semibold hover:underline"
            >
              EU Energy Efficiency Directive
            </a>{" "}
            compliance reporting. It integrates naturally with our{" "}
            <a href="#co2" className="text-[#3d8b5a] font-semibold hover:underline">CO₂ recovery engineering</a> — because the least
            expensive carbon to capture is the carbon you never generate.
          </p>
          <a href="#contact" className="inline-block bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] mt-6">
            Get Your Energy Audit Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Energy;
