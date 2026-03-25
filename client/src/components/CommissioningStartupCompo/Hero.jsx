const Hero = () => {
  return (
    <section className="min-h-screen bg-[#a8d5b5] relative overflow-hidden flex items-center px-[6%] pt-[9rem] pb-[6rem]">
      <svg
        className="absolute -right-[5%] top-1/2 -translate-y-1/2 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] opacity-[0.06] pointer-events-none"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="100" fill="none" stroke="#6aaa7d" strokeWidth="1" />
        <circle cx="400" cy="400" r="180" fill="none" stroke="#6aaa7d" strokeWidth="1" />
        <circle cx="400" cy="400" r="260" fill="none" stroke="#6aaa7d" strokeWidth="1" />
        <circle cx="400" cy="400" r="340" fill="none" stroke="#6aaa7d" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="390" fill="none" stroke="#6aaa7d" strokeWidth="0.5" />
      </svg>
      {/* <div className="hero-grid"></div> */}
      <div className="relative max-w-[720px]">
        <div className="inline-flex items-center gap-[0.6rem] text-[0.7rem] font-semibold tracking-[0.22em] uppercase text-[#3d8b5a] mb-[1.6rem] before:content-[''] before:block before:w-[28px] before:h-[1.5px] before:bg-[#6aaa7d]">Commissioning & Start-Up Services</div>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(3rem,6.5vw,5.5rem)] font-semibold leading-[1.06] text-[#1a3a2a] mb-[1.6rem] tracking-[-0.01em]">
          The Moment Your Plant <em className="not-italic text-[#3d8b5a]">Comes to Life</em> Demands Perfection.
        </h1>
        <p className="text-[1.1rem] leading-[1.8] text-[#1a3a2a] max-w-[580px] mb-[2.8rem]">
          Our commissioning teams work in direct continuity with the project's <a href="#" className="text-[#3d8b5a] underline underline-offset-[3px]">engineering and design</a> and <a href="#" className="text-[#3d8b5a] underline underline-offset-[3px]">construction and installation</a> functions — eliminating the knowledge gap that typically opens between construction teams handing over and commissioning teams taking over. When our commissioning engineer reviews a loop diagram on site, they're looking at a document our own instrumentation engineers wrote. That continuity is commercially significant, and it shows in our results.
        </p>
        <div className="flex gap-[1rem] flex-wrap">
          <a href="#services" className="bg-[#3d8b5a] text-white px-[2.2rem] py-[0.95rem] rounded-[30px] font-semibold text-[0.92rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#6aaa7d] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(61,139,90,0.4)] inline-block">
            Explore All 4 Phases
          </a>
          <a href="#contact" className="border-[1.5px] border-[#1a3a2a] text-[#1a3a2a] px-[2.2rem] py-[0.95rem] rounded-[30px] font-medium text-[0.92rem] no-underline transition-all duration-250 hover:border-white hover:text-white hover:bg-[#a8d5b5] inline-block">
            Speak to Commissioning Engineer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
