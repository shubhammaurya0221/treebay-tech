import React from 'react';

const regionsData = [
  {
    icon: "🌍",
    title: "Europe & Middle East",
    desc: "Germany, Italy, UK, Netherlands, UAE, Saudi Arabia — premium engineering manufacturers and specialist process equipment."
  },
  {
    icon: "🌏",
    title: "Asia-Pacific",
    desc: "South Korea, Japan, India, China — cost-competitive fabrication with full quality management oversight and resident inspection."
  },
  {
    icon: "🌎",
    title: "Americas",
    desc: "USA, Canada, Brazil — specialised rotating equipment, high-alloy fabrication, and proprietary process package manufacturers."
  },
  {
    icon: "📦",
    title: "Project Cargo & Logistics",
    desc: "Oversized, heavy-lift, and temperature-sensitive cargo managed with specialist freight partners on all major trade lanes."
  }
];

const GlobalReach = () => {
  return (
    <section className="py-28 px-[6%] bg-[#1a3a2a] relative overflow-hidden" id="global-reach">
      
      {/* ── Background Decorative Elements ── */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full border-[1px] border-[rgba(168,213,181,0.05)] pointer-events-none"></div>
      <div className="absolute top-[5%] right-[2%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] rounded-full border-[1px] border-[rgba(168,213,181,0.08)] pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle_at_center,rgba(61,139,90,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center relative z-10">
        
        {/* ── Left Column: Copy & CTA ── */}
        <div className="text-left">
          <span className="inline-flex items-center gap-3 text-[0.75rem] font-bold tracking-[0.2em] uppercase text-[#a8d5b5] mb-5 before:content-[''] before:block before:w-[24px] before:h-[2px] before:bg-[#a8d5b5]">
            Global Procurement Reach
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,4.5vw,3.5rem)] text-white mb-6 font-bold leading-[1.15]">
            Sourcing Advantage Across Every Major Industrial Supply Region
          </h2>
          
          <p className="text-[1rem] leading-[1.8] text-[rgba(255,255,255,0.75)] mb-5">
            The best equipment at the best price isn't always in the nearest market. Our <strong className="text-[#a8d5b5] font-semibold">global procurement network</strong> spans manufacturing hubs across Europe (Germany, Italy, Czech Republic), Asia-Pacific (South Korea, Japan, China, India), North America, and the Middle East — giving your project access to genuine price competition and the world's most capable process equipment manufacturers.
          </p>
          
          <p className="text-[1rem] leading-[1.8] text-[rgba(255,255,255,0.75)] mb-10">
            We manage <strong className="text-[#a8d5b5] font-semibold">multi-origin supply chains</strong>, cross-border logistics, <a href="https://www.wto.org/english/tratop_e/tradfa_e/tradfa_e.htm" target="_blank" rel="noopener noreferrer" className="text-[#a8d5b5] underline underline-offset-[3px] font-semibold hover:text-white transition-colors duration-200">WTO trade compliance</a>, INCOTERMS negotiation, letters of credit, and <strong className="text-[#a8d5b5] font-semibold">project cargo coordination</strong> for oversized and heavy-lift items — ensuring your supply chain is as cost-optimised as it is reliable. Our logistics partners hold Authorised Economic Operator (AEO) status in key trade corridors, reducing customs delays on critical deliveries.
          </p>

          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-[#438e64] text-white px-8 py-3.5 rounded-full font-sans text-[1rem] font-bold tracking-wide shadow-[0_8px_20px_rgba(67,142,100,0.2)] transition-all duration-300 hover:bg-[#a8d5b5] hover:text-[#1a3a2a] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(168,213,181,0.25)] group"
          >
            Discuss Your Sourcing Strategy
            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* ── Right Column: Region Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {regionsData.map((region, index) => (
            <div 
              key={index} 
              className="bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(168,213,181,0.12)] p-8 rounded-[20px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(168,213,181,0.3)] hover:-translate-y-1"
            >
              <div className="text-[2.2rem] mb-4 drop-shadow-md">
                {region.icon}
              </div>
              <h4 className="font-['Cormorant_Garamond',serif] text-[1.3rem] font-bold text-white mb-3 tracking-wide">
                {region.title}
              </h4>
              <p className="text-[0.88rem] leading-[1.65] text-[rgba(255,255,255,0.65)]">
                {region.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;