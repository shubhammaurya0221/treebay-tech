import React from 'react';

const HomeHero = () => {
  return (
    <section className="min-h-screen bg-[#a8d5b5] relative overflow-hidden flex items-center px-[6%] pt-36 pb-24 max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:text-center max-[1100px]:pt-[7rem] max-[640px]:px-6 max-[640px]:pt-[7rem] max-[640px]:pb-16">
      <svg
        className="absolute -right-[5%] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] opacity-[0.06] pointer-events-none max-[640px]:right-1/2 max-[640px]:translate-x-1/2 max-[640px]:w-[140vw] max-[640px]:h-[140vw] max-[640px]:opacity-[0.04]"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="100" strokeWidth="1" fill="none" stroke="#6aaa7d" />
        <circle cx="400" cy="400" r="180" strokeWidth="1" fill="none" stroke="#6aaa7d" />
        <circle cx="400" cy="400" r="260" strokeWidth="1" fill="none" stroke="#6aaa7d" />
        <circle cx="400" cy="400" r="340" strokeWidth="0.5" fill="none" stroke="#6aaa7d" />
        <circle cx="400" cy="400" r="390" strokeWidth="0.5" fill="none" stroke="#6aaa7d" />
      </svg>

      <div className="relative max-w-[720px]">
        <div className="inline-flex items-center gap-[0.6rem] text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#3d8b5a] mb-[1.6rem] before:content-[''] before:block before:w-[28px] before:h-[1.5px] before:bg-[#6aaa7d]">
          Biogas Engineering · Renewable Energy · Sustainability
        </div>

        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.4rem,6.5vw,4.5rem)] font-semibold leading-[1.06] text-[#1a3a2a] mb-[1.6rem] tracking-[-0.01em]">
          <em className="italic text-[#3d8b5a]">Compressed Biogas Plant</em> Manufacturers in India
        </h1>

        <h2 className="text-[1.4rem] font-medium text-[#3d8b5a] mb-[1.2rem] leading-[1.4]">
          Advanced CBG & Biogas Solutions for Sustainable Energy Generation
        </h2>

        <p className="text-[1.1rem] leading-[1.8] text-[#1a3a2a] max-w-[580px] mb-[2.8rem] max-[1100px]:mx-auto">
          <strong className="font-bold">Treebay Technology</strong> provides <strong className="font-bold">high-efficiency CBG plant</strong>
          solutions that convert <strong className="font-bold">organic waste</strong> into <strong className="font-bold">high-purity fuel</strong>. Engineered for <strong className="font-bold">maximum methane</strong> recovery, our systems support diverse <strong className="font-bold">feedstocks</strong> including <strong className="font-bold">agri-residue</strong>, <strong className="font-bold">distillery waste</strong>, and <strong className="font-bold">municipal waste</strong>.
        </p>

        <div className="flex gap-4 flex-wrap max-[1100px]:flex-col max-[1100px]:w-full">
          <a href="/services/compressed-biogas-plant" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] max-[1100px]:w-full max-[1100px]:text-center">
            Explore CBG Solutions
          </a>
          <a href="/contact-us" className="border border-[#3d8b5a] text-[#3d8b5a] px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#3d8b5a] hover:text-white max-[1100px]:w-full max-[1100px]:text-center">
            Request Consultation
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-[6%] flex items-center gap-[0.6rem] text-[rgba(168,213,181,0.5)] text-[0.75rem] tracking-[0.1em]">
        <div className="w-10 h-[1px] bg-[rgba(168,213,181,0.3)] animate-pulse"></div>
        Scroll to explore
      </div>
    </section>
  );
};

export default HomeHero;