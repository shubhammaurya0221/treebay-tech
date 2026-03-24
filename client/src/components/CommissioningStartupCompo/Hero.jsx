import './Hero.css';

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
        <div className="eyebrow">Commissioning &amp; & Start-Up Services</div>
        <h1>
          The Moment Your Plant <em>Comes to Life</em> Demands Perfection.
        </h1>
        <p className="hero-desc ">
         Commissioning is where every engineering decision, every procurement choice, 
         and every construction detail is put to the test — simultaneously. It is the 
         highest-risk, highest-stakes phase of any industrial project. We make it the most controlled.
        </p>
        <div className="btn-row">
          <a href="#services" className="btn-green">
            Explore All 4 Phases
          </a>
          <a href="#contact" className="btn-ghost">
            Speak to Commissioning Engineer
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
