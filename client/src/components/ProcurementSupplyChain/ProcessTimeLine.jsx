import React from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      num: "01",
      title: "Procurement Strategy & Planning",
      desc: <>Focusing on <strong>early strategy</strong>, comprehensive <strong>long-lead identification</strong>, and targeted <strong>AVL scoping</strong> to set a secure foundation for the project.</>
    },
    {
      num: "02",
      title: "Requisition & Enquiry Preparation",
      desc: <>Development of rigorous <strong>technical specs</strong>, detailed <strong>datasheets</strong>, and clear <strong>ITT documents</strong> to ensure absolute clarity for bidding vendors.</>
    },
    {
      num: "03",
      title: "Bidding & Vendor Evaluation",
      desc: <>Systematic management of <strong>clarifications</strong>, comprehensive <strong>TBE (Technical Bid Evaluation)</strong>, strict <strong>commercial alignment</strong>, and final <strong>award</strong>.</>
    },
    {
      num: "04",
      title: "Expediting & Inspection",
      desc: <>Maintaining manufacturing control through <strong>in-plant inspection</strong>, in-person <strong>FAT witnessing</strong>, and proactive <strong>schedule control</strong> to prevent delays.</>
    },
    {
      num: "05",
      title: "Logistics & Site Delivery",
      desc: <>Seamless end-to-end coordination of global <strong>freight</strong>, complex <strong>customs clearance</strong>, precise <strong>last-mile delivery</strong>, and equipment <strong>preservation at site</strong>.</>
    }
  ];

  return (
    <section className="py-28 px-[6%] bg-white text-left" id="process">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center max-w-[640px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto after:content-[''] after:w-6 after:h-[1px] after:bg-[#3d8b5a] before:content-[''] before:w-6 before:h-[1px] before:bg-[#3d8b5a]">How We Work</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
            A Procurement Process Built for Industrial Projects
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