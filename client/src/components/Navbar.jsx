const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        Green<span>Process</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#" className="active">
            Technology &amp; Process
          </a>
        </li>
        <li>
          <a href="#">Engineering &amp; Design</a>
        </li>
        <li>
          <a href="#">Industries</a>
        </li>
        <li>
          <a href="#">Sustainability</a>
        </li>
      </ul>
      <a href="#contact" className="nav-cta">
        Talk to an Expert
      </a>
    </nav>
  );
};

export default Navbar;
