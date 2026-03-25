import React from 'react';

const Intro = () => {
  const points = [
    "End-to-end engineering from design to commissioning",
    "Expertise in green hydrogen and sustainable energy systems",
    "Advanced fabrication and precision manufacturing capabilities",
    "Custom industrial solutions tailored to your requirements",
    "Focus on efficiency, safety, and regulatory compliance",
    "Proven track record across multiple industry sectors",
    "Reliable execution with long-term operational support"
  ];

  return (
    <section className="py-28 px-[6%] bg-white" id="about">
      <div className="grid grid-cols-2 gap-24 items-center max-w-[1240px] mx-auto max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
            Engineering · Innovation · Sustainability
          </span>

          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#1a3a2a] mb-6 font-semibold leading-[1.12]">
            Pioneering <em className="italic text-[#3d8b5a] not-italic">Green Hydrogen</em> & Industrial Engineering Solutions
          </h2>

          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            <strong className="font-bold text-[#1a3a2a]">Treebay Technology</strong> is India's forward-thinking engineering company delivering{" "}
            <strong className="font-bold text-[#1a3a2a]">green hydrogen plants</strong>, <strong className="font-bold text-[#1a3a2a]">fabrication works</strong>,{" "}
            <strong className="font-bold text-[#1a3a2a]">food processing units</strong>, and precision{" "}
            <strong className="font-bold text-[#1a3a2a]">machine manufacturing</strong> — built for the industries of tomorrow, 
            delivered with the reliability of today.
          </p>

          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            Our multidisciplinary expertise enables us to design and execute 
            high-performance industrial projects with a strong focus on{" "}
            <strong className="font-bold text-[#1a3a2a]">efficiency, sustainability, and long-term operational excellence</strong>. 
            From concept to commissioning, we bring engineering precision and innovation 
            to every solution we deliver.
          </p>

          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            Explore our <a href="/services" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">engineering services</a> or{" "}
            <a href="/contact-us" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">connect with our experts</a> to build your next-generation plant.
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