import React from 'react';

const DistilleryPlantHero = () => {
  return (
    <section className="hero">
      <svg
        className="hero-rings"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="100" strokeWidth="1" />
        <circle cx="400" cy="400" r="180" strokeWidth="1" />
        <circle cx="400" cy="400" r="260" strokeWidth="1" />
        <circle cx="400" cy="400" r="340" strokeWidth="0.5" />
        <circle cx="400" cy="400" r="390" strokeWidth="0.5" />
      </svg>
      {/* <div className="hero-grid"></div> */}
      <div className="hero-content">
        <div className="eyebrow">Distillery Plant Manufacturers in India</div>
        <h1>
          <em>Ethanol</em> & Distillation Solutions for Maximum Efficiency & Sustainability
        </h1>
        <p className="hero-desc">
          <strong>Treebay Technology</strong> delivers next-generation <strong>distillery 
            and ethanol plant solutions</strong> designed for <strong>maximum alcohol yield</strong>, 
            <strong>energy efficiency</strong>, and <strong>operational reliability</strong>. 
            Our systems are engineered to support <strong>multi-feedstock processing</strong>, 
            including molasses, cane syrup, and <strong>grain-based distilleries</strong>.          
        </p>
        <div className="btn-row">
          <a href="/contact-us" className="btn-green">
            Request a Proposal
          </a>
          <a href="/services" className="btn-ghost">
            Explore Services
          </a>
        </div>
      </div>
      <div className="scroll-cue">
        <div className="scroll-line"></div>Scroll to explore
      </div>
    </section>
  );
};

export default DistilleryPlantHero;
