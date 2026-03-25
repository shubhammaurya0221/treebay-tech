import React from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      num: "01",
      title: "Biomass Pretreatment",
      desc: <><strong>Mechanical, chemical, or steam explosion processes</strong> are used to break down the complex <strong>lignin structure</strong>, exposing cellulose for downstream conversion. The system is optimized for <strong>rice straw, bagasse, and agricultural residues</strong> to ensure maximum accessibility and process efficiency.</>
    },
    {
      num: "02",
      title: "Enzymatic Hydrolysis",
      desc: <><strong>Cellulase enzymes</strong> convert pretreated biomass into <strong>fermentable sugars</strong> with high recovery rates. The process is designed to achieve <strong>maximum sugar yield</strong> while minimizing inhibitors through <strong>controlled reaction conditions</strong>.</>
    },
    {
      num: "03",
      title: "Fermentation",
      desc: <><strong>C5 and C6 sugars</strong> are converted into ethanol using <strong>engineered microbial strains</strong>. The system supports <strong>batch, fed-batch, and continuous fermentation</strong> for higher productivity and optimized ethanol yield.</>
    },
    {
      num: "04",
      title: "Distillation & Dehydration",
      desc: <><strong>Multi-pressure distillation systems</strong> are used to separate ethanol, followed by <strong>molecular sieve dehydration</strong> to achieve <strong>fuel-grade ethanol purity</strong>. Energy-integrated column design ensures <strong>lower steam consumption</strong> and high operational efficiency.</>
    },
    {
      num: "05",
      title: "Co-product Recovery & Integration",
      desc: <><strong>Lignin recovery systems</strong> enable steam and power generation, while <strong>CO₂ capture units</strong> allow industrial reuse or monetization. The entire plant integrates with <strong>ZLD and waste management systems</strong> for a <strong>fully circular and sustainable operation</strong>.</>
    }
  ];

  return (
    <section className="py-28 px-[6%] bg-white text-left" id="process">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto after:content-[''] after:w-6 after:h-[1px] after:bg-[#3d8b5a] before:content-[''] before:w-6 before:h-[1px] before:bg-[#3d8b5a]">Process Flow</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
            How 2G Ethanol Plants Work
          </h2>
        </div>
        <div className="relative pl-10 border-l-2 border-[rgba(61,139,90,0.18)] ml-4">
          {steps.map((step, idx) => (
            <div key={idx} className="mb-12 relative last:mb-0 text-left">
              <div className="absolute -left-[3.15rem] w-5 h-5 rounded-full bg-white border-2 border-[#3d8b5a] flex items-center justify-center top-0.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#3d8b5a]"></div>
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[1.5rem] font-bold tracking-[0.12em] text-[#3d8b5a] uppercase mb-1">{step.num}</div>
              <h4 className="font-['Cormorant_Garamond',serif] text-[1.4rem] font-semibold text-[#1a3a2a] mb-2">{step.title}</h4>
              <p className="text-[0.95rem] text-[#4a6157] leading-[1.75]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;