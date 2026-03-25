import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#a8d5b5] relative overflow-hidden flex items-center px-[6%] pt-36 pb-24 max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:text-center max-[640px]:px-6 max-[640px]:pt-28 select-none">
      <div className="relative max-w-[720px] text-left max-[1100px]:text-center">
        <div className="inline-flex items-center gap-[0.6rem] text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#3d8b5a] mb-[1.6rem] before:content-[''] before:block before:w-[28px] before:h-[1.5px] before:bg-[#6aaa7d]">Procurement & &amp; Supply Chain</div>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.4rem,6.5vw,4.5rem)] font-semibold leading-[1.06] text-[#1a3a2a] mb-[1.6rem] tracking-[-0.01em]">
          Procure <em className="italic text-[#3d8b5a] ">Smarter</em>, <br /> Deliver <em className="italic text-[#3d8b5a]">Faster</em>
        </h1>
        <p className="text-[1.1rem] leading-[1.8] text-[#1a3a2a] max-w-[580px] mb-[2.8rem] max-[1100px]:mx-auto">
         Global procurement and supply chain management for major industrial projects — from critical long-lead equipment and bulk materials through vendor evaluation, expediting, inspection, and last-mile logistics. On spec, on budget, on time.
        </p>
        <div className="flex gap-4 flex-wrap max-[1100px]:flex-col max-[1100px]:w-full items-center">
          <a href="#services" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] max-[1100px]:w-full text-center">
            Explore Our Services 
          </a>
          <a href="#contact" className="border border-[#3d8b5a] text-[#3d8b5a] px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#3d8b5a] hover:text-white max-[1100px]:w-full text-center">
            Talk to a Procurement Specialist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
