import React from "react";
import './HomeServices.css';

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
    <section className="services" id="services">
      <div className="svc-header">
        <span className="sec-tag">Our Core Capabilities</span>
        <h2 className="sec-title">
          Integrated Engineering Solutions for Modern Industry
        </h2>
        <p>
          From green hydrogen to fabrication and industrial systems, our services
          are designed to work independently or as a fully integrated engineering
          ecosystem — delivering performance, reliability, and sustainability.
        </p>
      </div>

      {services.map((srv, i) => (
        <div
          className={`svc-block ${i % 2 !== 0 ? "flip" : ""}`}
          key={i}
        >
          {/* LEFT CONTENT */}
          <div className="svc-copy">
            <div className="svc-num">{srv.num}</div>
            <h2>
              {srv.icon} {srv.title}
            </h2>

            <p>{srv.desc}</p>

            <div className="svc-kw">
              {srv.tags.map((tag, idx) => (
                <span className="kw" key={idx}>
                  {tag}
                </span>
              ))}
            </div>

            <a href={srv.link} className="svc-cta">
              {srv.cta} <span>→</span>
            </a>
          </div>

          {/* RIGHT PANEL */}
          <div className="svc-panel">
            <div className="panel-icon">{srv.icon}</div>
            <h3>What We Deliver</h3>

            <ul className="panel-points">
              <li>Concept to commissioning execution</li>
              <li>Custom engineering tailored to application</li>
              <li>Compliance with industry standards</li>
              <li>High efficiency & long-term reliability</li>
              <li>Scalable and future-ready systems</li>
              <li>End-to-end technical support</li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeServices;