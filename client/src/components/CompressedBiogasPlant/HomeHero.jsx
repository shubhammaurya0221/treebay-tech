import React from 'react';
import './HomeHero.css';

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

      <div className="hero-content">
        <div className="eyebrow">
          Biogas Engineering · Renewable Energy · Sustainability
        </div>

        <h1>
          <em>Compressed Biogas Plant</em> Manufacturers in India
        </h1>

        <h2
          style={{
            fontSize: '1.4rem',
            fontWeight: '500',
            color: 'var(--leaf)',
            marginBottom: '1.2rem',
            lineHeight: '1.4',
          }}
        >
          Advanced CBG & Biogas Solutions for Sustainable Energy Generation
        </h2>

        <p className="hero-desc">
          <strong>Treebay Technology</strong> provides <strong>high-efficiency CBG plant</strong>
           solutions that convert <strong>organic waste</strong> into <strong>high-purity fuel</strong>. Engineered for <strong>maximum methane</strong> recovery, our systems support diverse <strong>feedstocks</strong> including <strong>agri-residue</strong>, <strong>distillery waste</strong>, and <strong>municipal waste</strong>.
        </p>

        <div className="btn-row">
          <a href="/services/compressed-biogas-plant" className="btn-green">
            Explore CBG Solutions
          </a>
          <a href="/contact-us" className="btn-ghost">
            Request Consultation
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>
    </section>
  );
};

export default HomeHero;