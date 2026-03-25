import React from "react";

const services = [
  {
    num: "01 / 06",
    icon: "⚗️",
    title: "Green Hydrogen Plant & Systems",
    desc: "We design, engineer, and commission complete green hydrogen production facilities — from electrolysers and hydrogen gas storage systems to distribution infrastructure. Built to support India’s clean energy transition.",
    tags: ["Hydrogen Energy", "H₂ Production", "Electrolyser Systems", "Hydrogen Storage"],
    link: "/services/green-hydrogen",
    cta: "Build Your Hydrogen Plant"
  },
  {
    num: "02 / 06",
    icon: "🔩",
    title: "Fabrication Works",
    desc: "End-to-end structural and custom fabrication including pressure vessels, piping assemblies, and modular skids — delivered with precision, durability, and global compliance standards.",
    tags: ["Structural Fabrication", "Pressure Vessels", "Modular Skids", "Custom Fabrication"],
    link: "/services/fabrication-works",
    cta: "Start Fabrication Project"
  },
  {
    num: "03 / 06",
    icon: "🥬",
    title: "Food Processing Units & Plants",
    desc: "We design and build complete food processing infrastructure — from raw material handling to packaging and cold-chain systems — aligned with FSSAI and GMP standards.",
    tags: ["Food Processing", "Cold Chain", "Packaging Lines", "FSSAI"],
    link: "/services/food-processing",
    cta: "Plan Food Processing Unit"
  },
  {
    num: "04 / 06",
    icon: "⚙️",
    title: "Machine Manufacturing",
    desc: "Custom industrial machine manufacturing including conveyors, cutting machines, hydraulic systems, and automation solutions tailored to your production needs.",
    tags: ["Industrial Machines", "Automation", "Custom Equipment", "Hydraulic Systems"],
    link: "/services/machine-manufacturing",
    cta: "Develop Custom Machine"
  },
  {
    num: "05 / 06",
    icon: "📐",
    title: "Engineering & Design",
    desc: "From concept studies to detailed engineering, we deliver multidisciplinary design across civil, mechanical, electrical, and process engineering with full compliance.",
    tags: ["FEED", "3D Modeling", "Process Design", "HSE"],
    link: "/services/engineering",
    cta: "Start Engineering Design"
  },
  {
    num: "06 / 06",
    icon: "📦",
    title: "Procurement & Supply Chain",
    desc: "Complete procurement solutions including vendor sourcing, logistics, inspection, and supply chain optimization — ensuring your project runs without delays.",
    tags: ["Global Sourcing", "Logistics", "Vendor Management", "Inspection"],
    link: "/services/procurement",
    cta: "Optimize Procurement"
  }
];

const HomeServices = () => {
  return (
    <section className="py-28 px-[6%] bg-[#f7fbf8] max-[640px]:py-16 max-[640px]:px-6" id="services">
      <div className="text-center max-w-[680px] mx-auto mb-20">
        <span className="inline-flex justify-center items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a] after:content-[''] after:block after:w-[20px] after:h-[1.5px] after:bg-[#3d8b5a]">Our Core Capabilities</span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-4 font-semibold">
          Integrated Engineering Solutions for Modern Industry
        </h2>
        <p className="text-[#4a6157] text-base leading-[1.8] mt-4">
          From green hydrogen to fabrication and industrial systems, our services
          are designed to work independently or as a fully integrated engineering
          ecosystem — delivering performance, reliability, and sustainability.
        </p>
      </div>

      {services.map((srv, i) => (
        <div
          className={`grid grid-cols-[5fr_4fr] max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1 ${i % 2 !== 0 ? "md:grid-cols-[4fr_5fr]" : ""}`}
          key={i}
        >
          {/* LEFT CONTENT */}
          <div className={`bg-white p-[3.5rem_4rem] text-left ${i % 2 !== 0 ? "md:order-2" : ""}`}>
            <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-[0.1rem]">{srv.num}</div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">
              {srv.icon} {srv.title}
            </h2>

            <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">{srv.desc}</p>

            <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
              {srv.tags.map((tag, idx) => (
                <span className="bg-[#e8f5ed] text-[#2d6645] text-[0.72rem] font-semibold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]" key={idx}>
                  {tag}
                </span>
              ))}
            </div>

            <a href={srv.link} className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-[2px] hover:gap-3.5 hover:text-[#2d6645] group">
              {srv.cta} <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* RIGHT PANEL */}
          <div className={`bg-[#e8f5ed] p-[3.5rem] flex flex-col justify-center relative overflow-hidden text-left ${i % 2 !== 0 ? "md:order-1" : ""}`}>
             {/* Background Circles */}
            <div className="absolute -bottom-10 -right-10 w-[200px] h-[200px] rounded-full border-[40px] border-[rgba(106,170,125,0.08)] pointer-events-none" />
            <div className="absolute -top-[60px] -left-[60px] w-[240px] h-[240px] rounded-full border-[50px] border-[rgba(106,170,125,0.05)] pointer-events-none" />

            <div className="text-[3.2rem] mb-[1.5rem] relative z-10">{srv.icon}</div>
            <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-[1.1rem] relative z-10">What We Deliver</h3>

            <ul className="list-none relative z-10">
              {[
                "Concept to commissioning execution",
                "Custom engineering tailored to application",
                "Compliance with industry standards",
                "High efficiency & long-term reliability",
                "Scalable and future-ready systems",
                "End-to-end technical support"
              ].map((point, pIdx) => (
                <li key={pIdx} className="text-[#1a3a2a] text-[0.85rem] py-[0.45rem] flex items-start gap-[0.7rem] leading-[1.5] border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeServices;