import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="foot-brand">
          <div className="logo" style={{ fontSize: "1.5rem" }}>
            Green<span style={{ color: "var(--sage)" }}>Process</span>
          </div>
          <p>
            Advanced technology and process solutions for the sustainable
            industrial transition — delivering cleaner chemistry, greener
            energy, and circular process systems worldwide.
          </p>
        </div>
        <div className="foot-col">
          <h5>Our Solutions</h5>
          <a href="#services">Fermentation &amp; Distillation</a>
          <a href="#services">Anaerobic Digestion &amp; Biogas</a>
          <a href="#green-chem">Green Chemical Development</a>
          <a href="#co2-service">CO₂ Recovery &amp; Utilization</a>
          <a href="#energy-service">Energy Optimization</a>
        </div>
        <div className="foot-col">
          <h5>Industries</h5>
          <a href="#">Biofuels &amp; Biorefining</a>
          <a href="#">Pharmaceuticals</a>
          <a href="#">Food &amp; Beverage</a>
          <a href="#">Specialty Chemicals</a>
          <a href="#">Waste Treatment</a>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <a href="#">About Us</a>
          <a href="#">Project Portfolio</a>
          <a href="#">Sustainability Report</a>
          <a href="#">Careers</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
      <div className="foot-bottom">
        <p>© 2025 GreenProcess. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>&nbsp;·&nbsp;
          <a href="#">Terms of Use</a>&nbsp;·&nbsp;<a href="#">Cookie Policy</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
