const Hero = () => {
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
        <div className="eyebrow">Technology &amp; Process Solutions</div>
        <h1>
          Pioneering <em>Sustainable</em> Process Technology for a Greener
          Industry
        </h1>
        <p className="hero-desc ">
          We engineer tomorrow's circular bioeconomy — delivering advanced
          fermentation systems, biogas upgrading, green chemistry platforms,
          carbon utilisation technology, and energy optimisation solutions that
          fundamentally transform how industry produces, consumes, and recovers
          value.
        </p>
        <div className="btn-row">
          <a href="#services" className="btn-green">
            Explore Our Solutions
          </a>
          <a href="#contact" className="btn-ghost">
            Request a Free Consultation
          </a>
        </div>
      </div>
      <div className="scroll-cue">
        <div className="scroll-line"></div>Scroll to explore
      </div>
    </section>
  );
};

export default Hero;
