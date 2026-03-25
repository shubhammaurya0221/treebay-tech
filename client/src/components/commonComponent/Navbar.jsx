import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

/* ── Nav data ─────────────────────────────────── */
const ALL_NAV = [
  {
    label: "About",
    mega: false,
    items: [
      { label: "About Us",    href: "/#about"   },
      { label: "Our Team",    href: "/#team"    },
      { label: "Our History", href: "/#history" },
      { label: "Our Vision",  href: "/#vision"  },
      { label: "Our Mission", href: "/#mission" },
      { label: "Our Values",  href: "/#values"  },
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
      { label: "Plant Engineering",   href: "/services"  },
      { label: "System Integration",  href: "/services"  },
      { label: "Feasibility Studies", href: "/services"  },
      { label: "Process Simulation",  href: "/services"  },
      { label: "Turnkey Solutions",   href: "/commissioning-startup"            },
    ],
  },
  {
    label: "Industries",
    mega: false,
    items: [
      { label: "Agriculture & Biomass", href: "/commissioning-startup" },
      { label: "Municipal Waste",       href: "/compressed-biogas-plant"   },
      { label: "Industrial Sector",     href: "/services"  },
      { label: "Energy Utilities",      href: "/ethanol-plant-2g"      },
      { label: "Mining & Resources",    href: "/services"  },
    ],
  },
  {
    label: "Sustainability",
    mega: false,
    items: [
      { label: "Carbon Credits",   href: "/commissioning-startup" },
      { label: "ESG Reporting",    href: "/services"            },
      { label: "Climate Action",   href: "/#mission" },
      { label: "Circular Economy", href: "/services"       },
      { label: "Net Zero Roadmap", href: "/commissioning-startup"       },
    ],
  },
];

/* ── Mega dropdown data ─────────────────────────── */
const TECH_MEGA = [
  {
    heading: "Carbon Technologies", icon: "🌿",
    links: [
      { label: "Commissioning & Start-Up Services",   href: "/commissioning-startup",  desc: "Direct air & point-source capture"},
      { label: "Services", href: "/services", desc: "Why Technology Choices Define Outcomes"},
      { label: "Procurement & Supply Chain", href: "/procurement-supply-chain", desc: "Real-time plant simulation & control"  },
    ],
  },
  {
    heading: "Thermal Conversion", icon: "🔥",
    links: [
      { label: "Distillery Plant",      href: "/distillery-Plant", desc: "Syngas generation from biomass & waste" },
      { label: "Compressed Biogas Plant",      href: "/compressed-biogas-plant", desc: "Low-emission thermal decomposition"     },
      { label: "Combustion Optimisation",   href: "/ethanol-plant-2g", desc: "High-efficiency clean burning"          },
    ],
  },
  {
    heading: "Administration", icon: "⚙️",
    links: [
      { label: "Admin Panel",    href: "/admin", desc: "Remote monitoring & data acquisition"  },
      { label: "Home Page",    href: "/", desc: "home page"  },
    ],
  },
  {
    heading: "Energy & Fuel", icon: "⚡",
    links: [
      { label: "Green Hydrogen",        href: "#",          desc: "Electrolysis & biomass-H₂ pathways"    },
      { label: "Waste-to-Energy",       href: "#",   desc: "RDF, SRF & landfill gas utilisation"   },
      { label: "Renewable Integration", href: "#",                  desc: "Solar, wind & hybrid plant solutions"   },
    ],
  },
];

const TECH_FEATURED = {
  tag: "Featured",
  title: "Commissioning & Startup Services",
  body: "Expert guidance on plant commissioning, performance optimization, and process integration. Get your bio-energy facility operational in record time.",
  cta: { label: "Explore Commissioning →", href: "/commissioning-startup" },
  stat1: { val: "50+", lbl: "Plants Commissioned" },
  stat2: { val: "98%", lbl: "On-Time Delivery"   },
};

/* ── Link Helper Component ───────────────────────── */
const NavLink = ({ href, className, children, onClick }) => {
  // Use Link for internal routes, <a> for anchors
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

/* ── Chevron Arrow Icon ───────────────────────────────────── */
const Chevron = ({ open, cls = "" }) => (
  <svg className={`w-[10px] h-[6px] transition-transform duration-300 ${open ? "rotate-180" : ""} ${cls}`} viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── Desktop Mega Dropdown ──────────────────────── */
const MegaDropdown = () => {
  const [open, setOpen] = useState(false);
  const t = useRef(null);
  const show = () => { clearTimeout(t.current); setOpen(true); };
  const hide = () => { t.current = setTimeout(() => setOpen(false), 140); };

  return (
    <li className="relative flex items-center h-full" onMouseEnter={show} onMouseLeave={hide}>
      <button className="flex items-center gap-1.5 text-[0.95rem] font-medium text-[#1a3a2a] bg-transparent border-none cursor-pointer transition-colors duration-250 hover:text-[#2d6645]">
        Technology & Process <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-[94vw] max-w-[1100px] bg-white border border-[rgba(26,58,42,0.08)] shadow-[0_20px_40px_rgba(26,58,42,0.12)] rounded-[12px] p-10 flex gap-10 animate-fade-in z-[1000] mt-4">
          <div className="flex-[3] grid grid-cols-2 gap-x-10 gap-y-12">
            {TECH_MEGA.map((col) => (
              <div key={col.heading}>
                <p className="flex items-center gap-3 text-[0.7rem] font-bold text-[#3d8b5a] uppercase tracking-widest mb-4 border-b border-[rgba(61,139,90,0.1)] pb-3">
                  <span className="text-[1.2rem] grayscale-[0.5]">{col.icon}</span>{col.heading}
                </p>
                <ul className="flex flex-col gap-5 list-none p-0">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <NavLink href={link.href} className="flex flex-col gap-1 no-underline group hover:translate-x-1 transition-transform duration-300">
                        <span className="text-[0.92rem] font-semibold text-[#1a3a2a] transition-colors duration-250 group-hover:text-[#3d8b5a]">{link.label}</span>
                        <span className="text-[0.78rem] text-[#6b8378] leading-normal">{link.desc}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex-1 bg-[#1a3a2a] rounded-[8px] p-8 text-white relative overflow-hidden flex flex-col items-start min-w-[280px]">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(168,213,181,0.15),transparent)] pointer-events-none"></div>
            <span className="bg-[rgba(255,255,255,0.1)] text-[#a8d5b5] text-[0.65rem] font-bold py-1 px-3 rounded-full uppercase tracking-wider mb-5 border border-[rgba(168,213,181,0.1)]">{TECH_FEATURED.tag}</span>
            <h4 className="text-[1.3rem] font-['Cormorant_Garamond',serif] font-bold leading-tight mb-4">{TECH_FEATURED.title}</h4>
            <p className="text-[0.85rem] leading-[1.6] text-[rgba(255,255,255,0.7)] mb-8">{TECH_FEATURED.body}</p>
            <div className="flex gap-8 mb-8 border-t border-[rgba(255,255,255,0.1)] pt-6 w-full">
              <div className="flex flex-col">
                <span className="text-[1.4rem] font-bold text-[#a8d5b5] leading-none mb-1">{TECH_FEATURED.stat1.val}</span>
                <span className="text-[0.65rem] uppercase font-bold tracking-widest opacity-60 text-white">{TECH_FEATURED.stat1.lbl}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[1.4rem] font-bold text-[#a8d5b5] leading-none mb-1">{TECH_FEATURED.stat2.val}</span>
                <span className="text-[0.65rem] uppercase font-bold tracking-widest opacity-60 text-white">{TECH_FEATURED.stat2.lbl}</span>
              </div>
            </div>
            <NavLink href={TECH_FEATURED.cta.href} className="text-[#a8d5b5] text-[0.88rem] font-bold no-underline hover:text-white transition-colors duration-250 border-b border-[#a8d5b5] pb-0.5 mt-auto">{TECH_FEATURED.cta.label}</NavLink>
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
    <li className="relative flex items-center h-full" onMouseEnter={show} onMouseLeave={hide}>
      <button className="flex items-center gap-1.5 text-[0.95rem] font-medium text-[#1a3a2a] bg-transparent border-none cursor-pointer transition-colors duration-250 hover:text-[#2d6645]">
        {nav.label} <Chevron open={open} />
      </button>
      {open && (
        <div className="absolute top-[calc(100%-8px)] left-0 min-w-[220px] bg-white border border-[rgba(26,58,42,0.08)] shadow-[0_15px_30px_rgba(26,58,42,0.1)] rounded-[8px] p-4 animate-fade-in z-[1000] mt-4">
          <ul className="flex flex-col gap-1 list-none p-0 m-0">
            {nav.items.map((item) => (
              <li key={item.label}>
                <NavLink href={item.href} className="flex items-center gap-3 px-3 py-2.5 text-[0.88rem] font-medium text-[#4a6157] no-underline rounded-[4px] transition-all duration-200 hover:bg-[#f0f7f3] hover:text-[#3d8b5a] group whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-[#3d8b5a] rounded-full opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                  {item.label}
                </NavLink>
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
  const items = nav.mega
    ? TECH_MEGA.flatMap((col) => col.links.map((l) => ({ label: l.label, href: l.href })))
    : nav.items;

  return (
    <div className="border-b border-[rgba(0,0,0,0.05)] last:border-none">
      <button className="flex items-center justify-between w-full py-5 text-[1.1rem] font-semibold text-[#1a3a2a] bg-none border-none cursor-pointer" onClick={() => setOpen((o) => !o)}>
        <span>{nav.label}</span>
        <Chevron open={open} cls="w-4 h-2 text-[#3d8b5a]" />
      </button>
      {open && (
        <ul className="flex flex-col gap-2 list-none p-0 pb-5 pl-4 m-0 animate-fade-in">
          {items.map((item) => (
            <li key={item.label}>
              <NavLink href={item.href} className="flex items-center gap-4 py-3 text-[1rem] font-medium text-[#4a6157] no-underline" onClick={onClose}>
                <span className="w-1.5 h-1.5 bg-[#a8d5b5] rounded-full" />{item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── Hamburger Icon ─────────────────────────────── */
const HamburgerIcon = ({ open }) => (
  <svg className="w-6 h-6 transition-transform duration-300 transform group" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="7" x2="21" y2="7" className="group-hover:translate-x-1 transition-transform" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="17" x2="21" y2="17" className="group-hover:-translate-x-1 transition-transform" />
      </>
    )}
  </svg>
);

/* ── Navbar ─────────────────────────────────────── */
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[76px] bg-[#a8d5b5] flex items-center justify-between px-[5%] z-[1000] shadow-sm">
        
        {/* ── Logo container (Takes up equal space on the left) ── */}
        <div className="flex-1 flex items-center justify-start shrink-0">
          <Link to="/">
            <img src={logo} alt="logo" className="h-[44px] w-auto max-[640px]:h-9 cursor-pointer hover:opacity-80 transition-opacity" />
          </Link>
        </div>

        {/* ── Desktop links (Centered) ── */}
        <ul className="hidden min-[1024px]:flex items-center justify-center gap-9 list-none p-0 m-0 h-full flex-none">
          <DropdownItem nav={ALL_NAV[0]} />
          <MegaDropdown />
          {ALL_NAV.slice(2).map((nav) => (
            <DropdownItem key={nav.label} nav={nav} />
          ))}
        </ul>

        {/* ── Desktop CTA (Takes up equal space on the right) ── */}
        <div className="flex-1 flex items-center justify-end">
          
          {/* UPDATED BUTTON HERE */}
          <NavLink 
            href="#contact" 
            className="hidden min-[1024px]:flex items-center justify-center bg-[#438e64] text-white px-8 py-3 rounded-full font-semibold text-[0.95rem] no-underline transition-colors duration-250 hover:bg-[#367552]"
          >
            Talk to an Expert
          </NavLink>

          {/* ── Hamburger (mobile only) ── */}
          <button
            className={`min-[1024px]:hidden flex items-center justify-center w-11 h-11 bg-[rgba(255,255,255,0.3)] border-none rounded-full text-[#1a3a2a] cursor-pointer transition-all duration-300 group ${mobileOpen ? "text-[#3d8b5a] bg-white rotate-90" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* ── Mobile backdrop ── */}
      {mobileOpen && <div className="fixed inset-0 bg-[rgba(26,58,42,0.4)] backdrop-blur-[4px] z-[1200] animate-fade-in" onClick={close} />}

      {/* ── Mobile drawer ── */}
      <div className={`fixed top-0 right-0 w-[85%] max-w-[380px] h-full bg-white z-[1300] shadow-[-10px_0_40px_rgba(26,58,42,0.15)] flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-7 border-b border-[rgba(0,0,0,0.05)]">
          <div className="h-9 shrink-0"><img src={logo} alt="logo" className="h-full w-auto" /></div>
          <button className="flex items-center justify-center w-10 h-10 bg-[#f7fbf8] border-none rounded-full text-[#4a6157] cursor-pointer hover:bg-[#e8f5ed] hover:text-[#3d8b5a] transition-all" onClick={close} aria-label="Close menu">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-5">
          {ALL_NAV.map((nav) => (
            <MobileAccordion key={nav.label} nav={nav} onClose={close} />
          ))}
        </div>

        <div className="p-7 border-t border-[rgba(0,0,0,0.05)]">
          {/* UPDATED MOBILE BUTTON TO MATCH STYLE */}
          <NavLink href="#contact" className="flex items-center justify-center w-full py-3.5 bg-[#438e64] text-white rounded-full font-semibold text-[1.05rem] no-underline hover:bg-[#367552] transition-colors" onClick={close}>Talk to an Expert</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;