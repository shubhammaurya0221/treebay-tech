import React from 'react';

const Intro = () => {
  const points = [
    "Technology-independent selection — we recommend what works for your feedstock, not what we're licenced to sell",
    "Full-spectrum bioprocess design from laboratory and pilot scale through commercial plant",
    "Integrated green chemistry and sustainable process development capabilities",
    "CO₂ recovery systems aligned with carbon credit and net-zero frameworks",
    "Energy pinch analysis, heat integration, and utility optimisation in every design",
    "Regulatory compliance — EU Taxonomy, ISCC+, RED II, and regional permitting",
    "End-to-end support from feasibility through commissioning and operational training"
  ];

  return (
    <section className="py-28 px-[6%] bg-white" id="about">
      <div className="grid grid-cols-2 gap-24 items-center max-w-[1240px] mx-auto max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
            Why Technology Choices Define Outcomes
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#1a3a2a] mb-6 font-semibold leading-[1.12]">
            The Right Process Technology Is the Foundation of Every Sustainable
            Plant
          </h2>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            The industrial transition to sustainability isn't happening through
            good intentions — it's happening through better engineering. Our{" "}
            <strong className="font-bold text-[#1a3a2a]">technology and process solutions</strong> team combines deep
            scientific knowledge with hands-on implementation experience across{" "}
            <a href="#" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">
              fermentation, biogas upgrading, green chemistry, CO₂ recovery, and
              energy systems
            </a>
            .
          </p>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            Whether you're scaling a precision fermentation process, upgrading
            raw biogas to biomethane grid quality, developing a{" "}
            <a href="#green-chem" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">sustainable chemical production route</a>, or
            reducing your plant's energy consumption by 30–40%, we bring the
            process rigour, technology independence, and engineering credibility
            to make it happen — on time and on budget.
          </p>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            We don't just study these technologies — we've designed,
            commissioned, and optimised them across dozens of live industrial
            plants. See our <a href="#" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">full project portfolio</a> or{" "}
            <a href="#contact" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">speak with our process technology team</a> today.
          </p>
        </div>
        <div className="bg-[#e8f5ed] rounded-[12px] p-[2.8rem] border border-[rgba(61,139,90,0.18)] relative overflow-hidden before:content-[''] before:absolute before:-top-[30px] before:-right-[30px] before:w-[180px] before:h-[180px] before:rounded-full before:bg-[radial-gradient(circle,rgba(61,139,90,0.12)_0%,transparent_70%)] text-left">
          <ul className="list-none">
            {points.map((pt, i) => (
              <li key={i} className="flex items-start gap-[0.9rem] py-[0.9rem] border-b border-[rgba(61,139,90,0.1)] last:border-b-0 text-[0.9rem] text-[#4a6157] leading-[1.5]">
                <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#3d8b5a]"></span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
