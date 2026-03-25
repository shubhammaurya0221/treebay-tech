import React from 'react';

const Industries = () => {
  const industries = [
    { icon: '⚗️', title: 'Green Hydrogen & Energy', desc: 'Hydrogen production, hydrogen energy storage, green hydrogen plant construction.' },
    { icon: '🥬', title: 'Food Processing Industry', desc: 'Complete food processing unit setup including processing, packaging, and cold chain.' },
    { icon: '⚙️', title: 'Machine Manufacturing', desc: 'Industrial machine manufacturers delivering cutting machines and custom automation.' },
    { icon: '🧪', title: 'Chemicals & Pharma', desc: 'Process plants for hydrogen peroxide and specialty chemical manufacturing.' },
    { icon: '⚡', title: 'Power & Renewable Energy', desc: 'Solar, wind, and hybrid power plant engineering integrated with H₂ systems.' },
    { icon: '🛢️', title: 'Oil, Gas & Refining', desc: 'Upstream, midstream, and refining plant engineering including fabrication works.' },
    { icon: '💧', title: 'Water & Wastewater', desc: 'Water treatment plant engineering, ETP/STP design, and recycling systems.' },
    { icon: '🏗️', title: 'Infrastructure & Civil', desc: 'Civil and structural engineering, fabrication works, and industrial infrastructure.' }
  ];

  return (
    <section className="py-28 px-[6%] bg-[#f8f9fa] max-[640px]:py-16 max-[640px]:px-6 text-left" id="industries">
      <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">Sectors We Serve</div>
      <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-4 font-semibold">
        Industries Powered by <em className="italic text-[#3d8b5a] not-italic">Treebay Technology</em>
      </h2>
      <p className="text-[#4a6157] text-[1.1rem] leading-[1.75] max-w-[680px] mb-12">
        Our engineering expertise spans across high-growth sectors — from hydrogen energy 
        to heavy manufacturing and process chemicals.
      </p>

      <div className="grid grid-cols-4 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
        {industries.map((ind, idx) => (
          <a href={`/industries/${ind.title.toLowerCase().replace(/ /g, '-')}`} className="border border-[rgba(61,139,90,0.18)] p-[2.2rem_1.8rem] rounded-[12px] bg-white no-underline flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,58,42,0.08)] hover:border-[#3d8b5a]" key={idx}>
            <span className="text-[2.2rem] mb-[1.2rem]">{ind.icon}</span>
            <h3 className="font-['Cormorant_Garamond',serif] font-semibold text-[1.25rem] text-[#1a3a2a] mb-[0.6rem]">{ind.title}</h3>
            <p className="text-[0.88rem] text-[#4a6157] leading-[1.6]">{ind.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Industries;
