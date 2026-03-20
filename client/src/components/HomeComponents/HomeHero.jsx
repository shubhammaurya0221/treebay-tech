import React from 'react';

const HomeHero = () => {
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
        <div className="eyebrow">Engineering · Innovation · Sustainability</div>
        <h1>
          Pioneering <em>Green Hydrogen</em> & Industrial Engineering Solutions
        </h1>
        <p className="hero-desc">
          <strong>Treebay Technology</strong> is India's forward-thinking engineering company delivering 
          <strong> green hydrogen plants</strong>, <strong>fabrication works</strong>, 
          <strong> food processing units</strong>, and precision <strong>machine manufacturing</strong> — 
          built for the industries of tomorrow, delivered with the reliability of today.
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

export default HomeHero;
