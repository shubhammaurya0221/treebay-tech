import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-inner">
        <div className="intro-text">
          <span className="sec-tag">
            2G Ethanol Process Engineering
          </span>

          <h2 className="sec-title">
            Engineering the Future of Waste-to-Ethanol Production
          </h2>

          <p className="sec-body">
            <strong>Treebay Technology</strong> delivers{" "}
            <strong>advanced 2G ethanol plant engineering solutions</strong>{" "}
            designed to convert <strong>lignocellulosic biomass</strong> — such
            as rice straw, bagasse, and corn stover — into{" "}
            <strong>high-purity, fuel-grade bioethanol</strong>. Our systems are
            built on a deep understanding of{" "}
            <strong>biochemical conversion pathways</strong>, integrating{" "}
            <strong>feedstock preprocessing</strong>,{" "}
            <strong>enzymatic hydrolysis</strong>,{" "}
            <strong>multi-sugar fermentation</strong>, and{" "}
            <strong>energy-optimized distillation</strong> into a seamless,
            industrial-scale process.
          </p>

          <p className="sec-body">
            Unlike conventional ethanol production, 2G technology enables the
            utilization of <strong>non-food agricultural residues</strong>,
            unlocking a scalable pathway for{" "}
            <strong>waste-to-energy transformation</strong> while reducing
            dependency on first-generation feedstocks. Our engineering approach
            focuses on <strong>maximizing sugar recovery</strong>,{" "}
            <strong>minimizing process inhibitors</strong>, and achieving{" "}
            <strong>high ethanol yield with lower energy consumption</strong>.
          </p>

          <p className="sec-body">
            From <strong>concept development and feasibility studies</strong> to{" "}
            <strong>detailed engineering, plant integration, and commissioning</strong>,
            we deliver end-to-end solutions that are{" "}
            <strong>technically robust</strong>,{" "}
            <strong>economically viable</strong>, and{" "}
            <strong>environmentally compliant</strong>. Every plant is designed
            to align with <strong>India’s ethanol blending program (E20)</strong>{" "}
            and global decarbonisation goals.
          </p>

          <p className="sec-body">
            Our integrated design philosophy ensures that 2G ethanol plants are
            not standalone units but part of a{" "}
            <strong>circular industrial ecosystem</strong> — where{" "}
            <strong>energy, water, and by-products</strong> are continuously
            optimized to maximize value and minimize waste.
          </p>
        </div>

        <div className="intro-visual">
          <ul className="pill-list">
            <li>
              <span className="pill-dot"></span>
              High conversion efficiency through optimized
              pretreatment and enzymatic hydrolysis
            </li>

            <li>
              <span className="pill-dot"></span>
              Multi-feedstock flexibility — rice straw,
              bagasse, corn stover, and agri-residue blends
            </li>

            <li>
              <span className="pill-dot"></span>
              Waste-to-energy transformation at commercial
              scale with lignin valorisation
            </li>

            <li>
              <span className="pill-dot"></span>
              Energy-integrated distillation systems reducing
              steam and utility consumption
            </li>

            <li>
              <span className="pill-dot"></span>
              Alignment with India’s E20 ethanol blending targets {" "}
              and biofuel policy frameworks
            </li>

            <li>
              <span className="pill-dot"></span>
              Zero Liquid Discharge (ZLD) ready design for
              sustainable water management
            </li>

            <li>
              <span className="pill-dot"></span>
              Circular economy integration with minimal waste
              and maximum resource recovery
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;