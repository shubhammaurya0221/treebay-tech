import React from 'react';

const whyData = [
  {
    icon: "🔬",
    title: "Scientific Rigour from Lab to Plant",
    desc: "Our team includes PhDs, biochemical engineers, and process chemists who've worked at bench scale and commercial scale — understanding both the science and the engineering compromises that turn theory into operational reality."
  },
  {
    icon: "⚖️",
    title: "Technology-Neutral Recommendations",
    desc: "We're not licenced to sell any particular technology. We evaluate every viable solution on technical and commercial merits — then recommend and implement what's genuinely best for your plant and your sustainability goals."
  },
  {
    icon: "🌍",
    title: "Sustainability as an Engineering Discipline",
    desc: "We treat sustainability metrics — carbon intensity, water footprint, waste generation — with the same rigour as yield and throughput. LCA is part of our design process, not a post-hoc compliance exercise."
  },
  {
    icon: "🔗",
    title: "Circular Economy Integration",
    desc: "We design systems that close loops — where one plant's waste becomes another's feedstock. Our integrated approach across fermentation, biogas, CO₂ recovery, and green chemistry creates genuine circularity, not just compliance."
  },
  {
    icon: "📐",
    title: "Seamless Engineering Handover",
    desc: "Our process technology work flows directly into detailed engineering — PFDs, P&IDs, equipment specs, and plant layout — eliminating the costly errors that occur when technology consultants hand off to separate engineering firms."
  },
  {
    icon: "📈",
    title: "Bankable Techno-Economic Analysis",
    desc: "Every technology recommendation is underpinned by rigorous techno-economic modelling. Our feasibility studies and investment cases are designed to withstand lender scrutiny and board-level due diligence."
  }
];

const WhyUs = () => {
  return (
    <section className="py-28 px-[6%] bg-[#e8f5ed] max-[640px]:py-16 max-[640px]:px-6 text-left" id="why-us">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto after:content-[''] after:w-6 after:h-[1px] after:bg-[#3d8b5a] before:content-[''] before:w-6 before:h-[1px] before:bg-[#3d8b5a]">WHY TECHNOLOGY LEADERS CHOOSE US</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
            Deep Science. Real Engineering. Commercial Results.
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {whyData.map((item, index) => (
            <div className="bg-white rounded-[12px] p-9 border border-[rgba(61,139,90,0.18)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,58,42,0.1)] hover:border-[#3d8b5a]" key={index}>
              <div className="text-[2.2rem] mb-4">{item.icon}</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[1.2rem] font-semibold text-[#1a3a2a] mb-2">{item.title}</h3>
              <p className="text-[0.85rem] text-[#4a6157] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;