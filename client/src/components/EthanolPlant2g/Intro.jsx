import React from 'react';

const Intro = () => {
  const points = [
    "High conversion efficiency through optimized pretreatment and enzymatic hydrolysis",
    "Multi-feedstock flexibility — rice straw, bagasse, corn stover, and agri-residue blends",
    "Waste-to-energy transformation at commercial scale with lignin valorisation",
    "Energy-integrated distillation systems reducing steam and utility consumption",
    "Alignment with India’s E20 ethanol blending targets and biofuel policy frameworks",
    "Zero Liquid Discharge (ZLD) ready design for sustainable water management",
    "Circular economy integration with minimal waste and maximum resource recovery"
  ];

  return (
    <section className="py-28 px-[6%] bg-white" id="about">
      <div className="grid grid-cols-2 gap-24 items-center max-w-[1240px] mx-auto max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
        <div className="text-left">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
            2G Ethanol Process Engineering
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#1a3a2a] mb-6 font-semibold leading-[1.12]">
            Engineering the Future of Waste-to-Ethanol Production
          </h2>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            <strong className="font-bold text-[#1a3a2a]">Treebay Technology</strong> delivers{" "}
            <strong className="font-bold text-[#1a3a2a]">advanced 2G ethanol plant engineering solutions</strong>{" "}
            designed to convert <strong className="font-bold text-[#1a3a2a]">lignocellulosic biomass</strong> — such
            as rice straw, bagasse, and corn stover — into{" "}
            <strong className="font-bold text-[#1a3a2a]">high-purity, fuel-grade bioethanol</strong>. Our systems are
            built on a deep understanding of <strong className="font-bold text-[#1a3a2a]">biochemical conversion pathways</strong>, integrating{" "}
            <strong className="font-bold text-[#1a3a2a]">feedstock preprocessing</strong>,{" "}
            <strong className="font-bold text-[#1a3a2a]">enzymatic hydrolysis</strong>,{" "}
            <strong className="font-bold text-[#1a3a2a]">multi-sugar fermentation</strong>, and{" "}
            <strong className="font-bold text-[#1a3a2a]">energy-optimized distillation</strong> into a seamless,
            industrial-scale process.
          </p>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            Unlike conventional ethanol production, 2G technology enables the
            utilization of <strong className="font-bold text-[#1a3a2a]">non-food agricultural residues</strong>,
            unlocking a scalable pathway for{" "}
            <strong className="font-bold text-[#1a3a2a]">waste-to-energy transformation</strong> while reducing
            dependency on first-generation feedstocks. Our engineering approach
            focuses on <strong className="font-bold text-[#1a3a2a]">maximizing sugar recovery</strong>,{" "}
            <strong className="font-bold text-[#1a3a2a]">minimizing process inhibitors</strong>, and achieving{" "}
            <strong className="font-bold text-[#1a3a2a]">high ethanol yield with lower energy consumption</strong>.
          </p>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            From <strong className="font-bold text-[#1a3a2a]">concept development and feasibility studies</strong> to{" "}
            <strong className="font-bold text-[#1a3a2a]">detailed engineering, plant integration, and commissioning</strong>,
            we deliver end-to-end solutions that are <strong className="font-bold text-[#1a3a2a]">technically robust</strong>, <strong className="font-bold text-[#1a3a2a]">economically viable</strong>, and <strong className="font-bold text-[#1a3a2a]">environmentally compliant</strong>. Every plant is designed
            to align with <strong className="font-bold text-[#1a3a2a]">India’s ethanol blending program (E20)</strong>{" "}
            and global decarbonisation goals.
          </p>
          <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
            Our integrated design philosophy ensures that 2G ethanol plants are
            not standalone units but part of a <strong className="font-bold text-[#1a3a2a]">circular industrial ecosystem</strong> — where <strong className="font-bold text-[#1a3a2a]">energy, water, and by-products</strong> are continuously
            optimized to maximize value and minimize waste.
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