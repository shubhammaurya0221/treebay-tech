import React from 'react';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-inner">
        <div className="intro-text">
          <span className="sec-tag">
            Engineering · Innovation · Sustainability
          </span>

          <h2 className="sec-title">
            Pioneering <em>Green Hydrogen</em> & Industrial Engineering Solutions
          </h2>

          <p className="sec-body">
            <strong>Treebay Technology</strong> is India's forward-thinking engineering company delivering{" "}
            <strong>green hydrogen plants</strong>, <strong>fabrication works</strong>,{" "}
            <strong>food processing units</strong>, and precision{" "}
            <strong>machine manufacturing</strong> — built for the industries of tomorrow, 
            delivered with the reliability of today.
          </p>

          <p className="sec-body">
            Our multidisciplinary expertise enables us to design and execute 
            high-performance industrial projects with a strong focus on{" "}
            <strong>efficiency, sustainability, and long-term operational excellence</strong>. 
            From concept to commissioning, we bring engineering precision and innovation 
            to every solution we deliver.
          </p>

          <p className="sec-body">
            Explore our <a href="/services">engineering services</a> or{" "}
            <a href="/contact-us">connect with our experts</a> to build your next-generation plant.
          </p>
        </div>

        <div className="intro-visual">
          <ul className="pill-list">
            <li>
              <span className="pill-dot"></span>
              End-to-end engineering from design to commissioning
            </li>
            <li>
              <span className="pill-dot"></span>
              Expertise in green hydrogen and sustainable energy systems
            </li>
            <li>
              <span className="pill-dot"></span>
              Advanced fabrication and precision manufacturing capabilities
            </li>
            <li>
              <span className="pill-dot"></span>
              Custom industrial solutions tailored to your requirements
            </li>
            <li>
              <span className="pill-dot"></span>
              Focus on efficiency, safety, and regulatory compliance
            </li>
            <li>
              <span className="pill-dot"></span>
              Proven track record across multiple industry sectors
            </li>
            <li>
              <span className="pill-dot"></span>
              Reliable execution with long-term operational support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;