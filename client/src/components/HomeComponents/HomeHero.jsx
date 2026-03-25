import React from 'react';

const HomeHero = () => {
  return (
    <section className="min-h-screen bg-[#a8d5b5] relative overflow-hidden flex items-center px-[6%] pt-36 pb-24 max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:text-center max-[1100px]:pt-28 max-[640px]:px-6 max-[640px]:pt-28 max-[640px]:pb-16">
      <div className="relative max-w-[720px] text-left max-[1100px]:text-center">
        <div className="inline-flex items-center gap-[0.6rem] text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#3d8b5a] mb-[1.6rem] before:content-[''] before:block before:w-[28px] before:h-[1.5px] before:bg-[#6aaa7d]">Engineering · Innovation · Sustainability</div>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.4rem,6.5vw,4.5rem)] font-semibold leading-[1.06] text-[#1a3a2a] mb-[1.6rem] tracking-[-0.01em]">
          Pioneering <em className="italic text-[#3d8b5a]">Green Hydrogen</em> & Energy Solutions
        </h1>
        <p className="text-[1.1rem] leading-[1.8] text-[#1a3a2a] max-w-[580px] mb-[2.8rem] max-[1100px]:mx-auto">
          <strong className="font-bold">Treebay Technology</strong> is India's forward-thinking engineering company delivering 
          <strong className="font-bold whitespace-nowrap"> green hydrogen plants</strong>, <strong className="font-bold whitespace-nowrap">fabrication works</strong>, 
          <strong className="font-bold whitespace-nowrap"> food processing units</strong>, and precision <strong className="font-bold whitespace-nowrap">machine manufacturing</strong> — 
          built for the industries of tomorrow, delivered with the reliability of today.
        </p>
        <div className="flex gap-4 flex-wrap max-[1100px]:flex-col max-[1100px]:w-full items-center">
          <a href="/contact-us" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] max-[1100px]:w-full text-center">
            Request a Proposal
          </a>
          <a href="/services" className="border border-[#3d8b5a] text-[#3d8b5a] px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#3d8b5a] hover:text-white max-[1100px]:w-full text-center">
            Explore Services
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-[6%] flex items-center gap-[0.6rem] text-[rgba(168,213,181,0.5)] text-[0.75rem] tracking-[0.1em]">
        <div className="w-10 h-[1px] bg-[rgba(168,213,181,0.3)] animate-pulse"></div>Scroll to explore
      </div>
    </section>
  );
};

export default HomeHero;
