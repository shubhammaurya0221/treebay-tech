import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#a8d5b5] border-t border-[rgba(106,170,125,0.12)] py-16 px-[6%] grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
        <div className="foot-brand">
          <div className="font-bold text-[#1a3a2a]" style={{ fontSize: "1.5rem" }}>
            <img src={logo} className="h-16" alt="Treebay Technology" />
          </div>
          <p className="text-[#6b8378] text-[0.875rem] leading-[1.75] mt-[0.8rem]">
            Advanced technology and process solutions for the sustainable
            industrial transition — delivering cleaner chemistry, greener
            energy, and circular process systems worldwide.
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#3d8b5a] mb-[1.1rem]">Our Solutions</h5>
          <a href="#services" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Fermentation &amp; Distillation</a>
          <a href="#services" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Anaerobic Digestion &amp; Biogas</a>
          <a href="#green-chem" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Green Chemical Development</a>
          <a href="#co2-service" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">CO₂ Recovery &amp; Utilization</a>
          <a href="#energy-service" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Energy Optimization</a>
        </div>
        <div className="flex flex-col">
          <h5 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#3d8b5a] mb-[1.1rem]">Industries</h5>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Biofuels &amp; Biorefining</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Pharmaceuticals</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Food &amp; Beverage</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Specialty Chemicals</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Waste Treatment</a>
        </div>
        <div className="flex flex-col">
          <h5 className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[#3d8b5a] mb-[1.1rem]">Company</h5>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">About Us</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Project Portfolio</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Sustainability Report</a>
          <a href="#" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Careers</a>
          <a href="#contact" className="block text-[#6b8378] no-underline text-[0.875rem] mb-[0.55rem] transition-colors duration-200 hover:text-[#a8d5b5]">Contact</a>
        </div>
      </footer>
      <div className="bg-[#a8d5b5] border-t border-[rgba(106,170,125,0.07)] py-[1.4rem] px-[6%] flex justify-between items-center max-[640px]:flex-col max-[640px]:gap-4 max-[640px]:text-center">
        <p className="text-[#6b8378] text-[0.78rem]">© 2025 GreenProcess. All rights reserved.</p>
        <div className="flex items-center gap-2">
          <a href="#" className="text-[#6b8378] text-[0.78rem] no-underline transition-colors duration-200 hover:text-[#3d8b5a]">Privacy Policy</a>
          <span className="text-[#6b8378] text-[0.78rem]">·</span>
          <a href="#" className="text-[#6b8378] text-[0.78rem] no-underline transition-colors duration-200 hover:text-[#3d8b5a]">Terms of Use</a>
          <span className="text-[#6b8378] text-[0.78rem]">·</span>
          <a href="#" className="text-[#6b8378] text-[0.78rem] no-underline transition-colors duration-200 hover:text-[#3d8b5a]">Cookie Policy</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
