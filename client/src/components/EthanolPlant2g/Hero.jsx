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

      <div className="hero-content">
        {/* Eyebrow / Micro Tag */}
        <div className="eyebrow">Rice Straw • Bagasse • Corn Stover • Multi-Feedstock Systems</div>

        {/* Main Heading */}
        <h1>
          2G Ethanol Plant <em>Engineering</em> &amp; <em>Technology</em> Solutions
        </h1>

        {/* Subheading */}
        <p className="hero-desc">
          Convert <strong>agricultural waste</strong> into
          <strong> high-efficiency bioethanol</strong> through
          <strong> advanced lignocellulosic process engineering</strong>. Our
          solutions enable <strong>multi-feedstock processing</strong>, optimize
          <strong> conversion yields</strong>, and deliver
          <strong> energy-efficient, industrial-scale ethanol production</strong>
          aligned with modern sustainability goals.
        </p>
        {/* CTA Buttons */}
        <div className="btn-row">
          <a href="#contact" className="btn-green">
            Request Consultation
          </a>
          <a href="#projects" className="btn-ghost">
            View Projects
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-cue">
        <div className="scroll-line"></div>
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;