import React from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      num: "Phase 01",
      title: "Technology Screening & Feasibility",
      desc: "We assess your feedstocks, products, site conditions, and commercial targets to identify the most viable technology routes — with preliminary CAPEX/OPEX modelling and a clear recommendation before any significant capital commitment is made."
    },
    {
      num: "Phase 02",
      title: "Process Design & Technology Development",
      desc: "Detailed process design including mass and energy balances, process simulation, equipment sizing, and utility system design. Where required, we support or manage pilot-scale testing to de-risk technology selection at commercial scale."
    },
    {
      num: "Phase 03",
      title: "Basic Engineering & HAZOP Integration",
      desc: "FEED-level engineering package development, fully integrated with safety review (HAZOP/LOPA) and regulatory compliance mapping — delivered as a single coherent document set ready for detailed design or EPC tender."
    },
    {
      num: "Phase 04",
      title: "Detailed Engineering & Procurement Support",
      desc: "Complete detailed engineering through to construction-ready documentation, with vendor pre-qualification, technical bid evaluation, and procurement support for critical long-lead process equipment."
    },
    {
      num: "Phase 05",
      title: "Commissioning & Performance Optimisation",
      desc: "On-site commissioning support, start-up assistance, and performance testing — followed by ongoing operational optimisation and team training to ensure design performance is achieved and sustained from day one."
    }
  ];

  return (
    <section className="py-28 px-[6%] bg-white text-left" id="process">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto after:content-[''] after:w-6 after:h-[1px] after:bg-[#3d8b5a] before:content-[''] before:w-6 before:h-[1px] before:bg-[#3d8b5a]">How We Deliver</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
            From Concept to Commissioned Plant — A Structured Journey
          </h2>
        </div>
        <div className="relative pl-10 border-l-2 border-[rgba(61,139,90,0.18)] ml-4">
          {steps.map((step, idx) => (
            <div key={idx} className="mb-12 relative last:mb-0 text-left">
              <div className="absolute -left-[3.15rem] w-5 h-5 rounded-full bg-white border-2 border-[#3d8b5a] flex items-center justify-center top-0.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#3d8b5a]"></div>
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[0.75rem] font-bold tracking-[0.12em] text-[#3d8b5a] uppercase mb-1">{step.num}</div>
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
