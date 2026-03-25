import React from 'react';

const whyData = [
  {
    num: "01",
    title: "Truly Independent Procurement",
    desc: "We receive no vendor commissions, kickbacks, or preferred supplier arrangements. Every recommendation we make is based solely on technical merit, commercial value, and delivery reliability. That independence is contractually guaranteed and operationally non-negotiable."
  },
  {
    num: "02",
    title: "Engineering-Integrated Approach",
    desc: "Our procurement team works alongside your engineering team from FEED onwards — identifying long-lead items early, aligning requisitions with live design, and catching specification conflicts before they generate costly vendor queries or post-order amendments."
  },
  {
    num: "03",
    title: "Global Vendor Network of 1,200+",
    desc: "Our prequalified global vendor database spans Europe, Asia, the Middle East, the Americas, and Australasia — giving every enquiry genuine competition and every project access to best-in-class manufacturers regardless of geography or specialisation."
  },
  {
    num: "04",
    title: "In-Plant Inspection Capability",
    desc: "Our certified inspection engineers operate at vendor and sub-vendor facilities worldwide. We don't rely on vendor self-certification — we witness pressure tests, NDT, dimensional checks, FAT, and final inspection in person, at the source."
  },
  {
    num: "05",
    title: "Supply Chain Risk Intelligence",
    desc: "From raw material shortages and single-source risks to geopolitical freight disruptions and currency volatility, we identify and manage supply chain risks proactively — building contingency plans before they become emergency calls from site."
  },
  {
    num: "06",
    title: "Auditable, Transparent Process",
    desc: "Every procurement decision we make is documented, justified, and traceable. Our TBE reports, bid tabulations, and award recommendations are structured to survive lender due diligence, regulatory audit, and board-level scrutiny without modification."
  }
];

const WhyUs = () => {
  return (
    <section className="py-28 px-[6%] bg-[#e8f5ed] max-[640px]:py-16 max-[640px]:px-6 text-left" id="why-us">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto after:content-[''] after:w-6 after:h-[1px] after:bg-[#3d8b5a] before:content-[''] before:w-6 before:h-[1px] before:bg-[#3d8b5a]">
            Why Project Owners Choose Us
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
            Procurement Excellence That Protects Your Investment
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {whyData.map((item, index) => (
            <div className="bg-white rounded-[12px] p-9 border border-[rgba(61,139,90,0.18)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,58,42,0.1)] hover:border-[#3d8b5a]" key={index}>
              <div className="font-['Cormorant_Garamond',serif] text-[2.8rem] font-bold text-[rgba(61,139,90,0.25)] leading-none mb-4">
                {item.num}
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[1.2rem] font-semibold text-[#1a3a2a] mb-3">
                {item.title}
              </h3>
              <p className="text-[0.85rem] text-[#4a6157] leading-[1.7]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;