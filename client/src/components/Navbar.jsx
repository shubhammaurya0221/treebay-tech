import { useState, useRef, useEffect } from "react";

/* ── Nav data ─────────────────────────────────── */
const ALL_NAV = [
  {
    label: "About",
    mega: false,
    items: [
      { label: "About Us",    href: "#about"   },
      { label: "Our Team",    href: "#team"    },
      { label: "Our History", href: "#history" },
      { label: "Our Vision",  href: "#vision"  },
      { label: "Our Mission", href: "#mission" },
      { label: "Our Values",  href: "#values"  },
    ],
  },
  {
    label: "Technology & Process",
    mega: true,
  },
  {
    label: "Engineering & Design",
    mega: false,
    items: [
      { label: "Plant Engineering",   href: "#plant-engineering"  },
      { label: "System Integration",  href: "#system-integration" },
      { label: "Feasibility Studies", href: "#feasibility"        },
      { label: "Process Simulation",  href: "#simulation"         },
      { label: "Turnkey Solutions",   href: "#turnkey"            },
    ],
  },
  {
    label: "Industries",
    mega: false,
    items: [
      { label: "Agriculture & Biomass", href: "#agriculture" },
      { label: "Municipal Waste",       href: "#municipal"   },
      { label: "Industrial Sector",     href: "#industrial"  },
      { label: "Energy Utilities",      href: "#energy"      },
      { label: "Mining & Resources",    href: "#mining"      },
    ],
  },
  {
    label: "Sustainability",
    mega: false,
    items: [
      { label: "Carbon Credits",   href: "#carbon-credits" },
      { label: "ESG Reporting",    href: "#esg"            },
      { label: "Climate Action",   href: "#climate"        },
      { label: "Circular Economy", href: "#circular"       },
      { label: "Net Zero Roadmap", href: "#net-zero"       },
    ],
  },
];

/* ── Mega dropdown data ─────────────────────────── */
const TECH_MEGA = [
  {
    heading: "Carbon Technologies", icon: "🌿",
    links: [
      { label: "CO₂ Capture & Storage",   href: "#co2-capture",    desc: "Direct air & point-source capture"          },
      { label: "Biochar Production",       href: "#biochar",        desc: "Stable carbon sequestration via pyrolysis"  },
      { label: "Carbon Credit Monitoring", href: "#carbon-monitor", desc: "MRV-ready digital carbon tracking"          },
    ],
  },
  {
    heading: "Thermal Conversion", icon: "🔥",
    links: [
      { label: "Gasification Systems",      href: "#gasification", desc: "Syngas generation from biomass & waste" },
      { label: "Pyrolysis Technology",      href: "#pyrolysis",    desc: "Low-emission thermal decomposition"     },
      { label: "Combustion Optimisation",   href: "#combustion",   desc: "High-efficiency clean burning"          },
    ],
  },
  {
    heading: "Digital & Automation", icon: "⚙️",
    links: [
      { label: "Digital Twin Modelling", href: "#digital-twin", desc: "Real-time plant simulation & control"  },
      { label: "IoT Sensor Networks",    href: "#iot",           desc: "Remote monitoring & data acquisition"  },
      { label: "AI Process Analytics",   href: "#ai-analytics",  desc: "Predictive insights & optimisation"    },
    ],
  },
  {
    heading: "Energy & Fuel", icon: "⚡",
    links: [
      { label: "Green Hydrogen",        href: "#hydrogen",     desc: "Electrolysis & biomass-H₂ pathways"    },
      { label: "Waste-to-Energy",       href: "#waste-energy", desc: "RDF, SRF & landfill gas utilisation"   },
      { label: "Renewable Integration", href: "#renewables",   desc: "Solar, wind & hybrid plant solutions"   },
    ],
  },
];

const TECH_FEATURED = {
  tag: "Case Study",
  title: "Zero-Waste Biochar Plant — 50 TPD",
  body: "Commissioned a fully integrated pyrolysis + biochar facility achieving 94% carbon conversion and 12 000 tCO₂e yr⁻¹ removal.",
  cta: { label: "Read Case Study →", href: "#case-study-biochar" },
  stat1: { val: "94%", lbl: "Carbon Conversion" },
  stat2: { val: "12k",  lbl: "tCO₂e / yr"       },
};

/* ── Chevron Arrow Icon────────────────────────────────────── */
const Chevron = ({ open, cls = "nav-chevron" }) => (
  <svg className={`${cls}${open ? ` ${cls}--open` : ""}`} viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Desktop Mega Dropdown ──────────────────────── */
const MegaDropdown = () => {
  const [open, setOpen] = useState(false);
  const t = useRef(null);
  const show = () => { clearTimeout(t.current); setOpen(true); };
  const hide = () => { t.current = setTimeout(() => setOpen(false), 140); };

  return (
    <li className="nav-dropdown-item" onMouseEnter={show} onMouseLeave={hide}>
      <button className="nav-dropdown-trigger">
        Technology &amp; Process <Chevron open={open} />
      </button>
      {open && (
        <div className="mega-menu">
          <div className="mega-cols">
            {TECH_MEGA.map((col) => (
              <div key={col.heading} className="mega-col">
                <p className="mega-col-heading">
                  <span className="mega-col-icon">{col.icon}</span>{col.heading}
                </p>
                <ul className="mega-col-links">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="mega-link">
                        <span className="mega-link-label">{link.label}</span>
                        <span className="mega-link-desc">{link.desc}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mega-featured">
            <span className="mega-feat-tag">{TECH_FEATURED.tag}</span>
            <h4 className="mega-feat-title">{TECH_FEATURED.title}</h4>
            <p className="mega-feat-body">{TECH_FEATURED.body}</p>
            <div className="mega-feat-stats">
              <div className="mega-feat-stat">
                <span className="mega-feat-val">{TECH_FEATURED.stat1.val}</span>
                <span className="mega-feat-lbl">{TECH_FEATURED.stat1.lbl}</span>
              </div>
              <div className="mega-feat-stat">
                <span className="mega-feat-val">{TECH_FEATURED.stat2.val}</span>
                <span className="mega-feat-lbl">{TECH_FEATURED.stat2.lbl}</span>
              </div>
            </div>
            <a href={TECH_FEATURED.cta.href} className="mega-feat-cta">{TECH_FEATURED.cta.label}</a>
          </div>
        </div>
      )}
    </li>
  );
};

/* ── Desktop Regular Dropdown ───────────────────── */
const DropdownItem = ({ nav }) => {
  const [open, setOpen] = useState(false);
  const t = useRef(null);
  const show = () => { clearTimeout(t.current); setOpen(true); };
  const hide = () => { t.current = setTimeout(() => setOpen(false), 120); };

  return (
    <li className="nav-dropdown-item" onMouseEnter={show} onMouseLeave={hide}>
      <button className="nav-dropdown-trigger">
        {nav.label} <Chevron open={open} />
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          <ul className="nav-dropdown-list">
            {nav.items.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="nav-dropdown-link">
                  <span className="nav-dropdown-dot" />{item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

/* ── Mobile Accordion Item ──────────────────────── */
const MobileAccordion = ({ nav, onClose }) => {
  const [open, setOpen] = useState(false);

  // flatten items for mega
  const items = nav.mega
    ? TECH_MEGA.flatMap((col) => col.links.map((l) => ({ label: l.label, href: l.href })))
    : nav.items;

  return (
    <div className="mob-accordion">
      <button className="mob-acc-trigger" onClick={() => setOpen((o) => !o)}>
        <span>{nav.label}</span>
        <Chevron open={open} cls="mob-chevron" />
      </button>
      {open && (
        <ul className="mob-acc-list">
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="mob-acc-link" onClick={onClose}>
                <span className="mob-acc-dot" />{item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── Hamburger Icon ─────────────────────────────── */
const HamburgerIcon = ({ open }) => (
  <svg className="ham-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="7" x2="21" y2="7" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </>
    )}
  </svg>
);

/* ── Navbar ─────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className="nav-inner">
        <div className="logo">Green<span>Process</span></div>

        {/* ── Desktop links ── */}
        <ul className="nav-links">
          <DropdownItem nav={ALL_NAV[0]} />
          <MegaDropdown />
          {ALL_NAV.slice(2).map((nav) => (
            <DropdownItem key={nav.label} nav={nav} />
          ))}
        </ul>

        {/* ── Desktop CTA ── */}
        <a href="#contact" className="btn-green nav-cta--desktop">Talk to an Expert</a>

        {/* ── Hamburger (mobile only) ── */}
        <button
          className={`ham-btn${mobileOpen ? " ham-btn--open" : ""}`}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={mobileOpen} />
        </button>
      </nav>

      {/* ── Mobile backdrop ── */}
      {mobileOpen && <div className="mob-backdrop" onClick={close} />}

      {/* ── Mobile drawer ── */}
      <div className={`mob-drawer${mobileOpen ? " mob-drawer--open" : ""}`}>
        <div className="mob-drawer-header">
          <div className="logo logo--sm">Green<span>Process</span></div>
          <button className="mob-close-btn" onClick={close} aria-label="Close menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mob-drawer-body">
          {ALL_NAV.map((nav) => (
            <MobileAccordion key={nav.label} nav={nav} onClose={close} />
          ))}
        </div>

        <div className="mob-drawer-footer">
          <a href="#contact" className="nav-cta mob-cta" onClick={close}>Talk to an Expert</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
