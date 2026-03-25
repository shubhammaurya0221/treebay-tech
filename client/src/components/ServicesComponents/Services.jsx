import React from 'react';

const Services = () => {
  return (
    <section className="py-28 px-[6%] bg-[#f8f9fa] max-[640px]:py-16 max-[640px]:px-6 text-left" id="services">
      <div className="text-center max-w-[680px] mx-auto mb-20">
        <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:hidden">
          Our Technology &amp; Process Capabilities
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
          Five Integrated Solutions. One Circular Vision.
        </h2>
        <p className="text-[#4a6157] text-[1rem] leading-[1.8] mt-4">
          All five technology services are available independently or as a fully
          integrated platform — with the flexibility to engage where you need us
          most and the assurance of a team that understands exactly how every
          system interconnects with the next.
        </p>
      </div>

      {/* 01 FERMENTATION & DISTILLATION */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">01</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Fermentation &amp; Distillation Systems</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Precision fermentation is redefining how industry produces fuels,
            chemicals, pharmaceuticals, and bio-based ingredients. Our{" "}
            <strong className="font-bold text-[#1a3a2a]">fermentation and distillation system design</strong>{" "}
            capability spans the full process chain — from strain selection and
            culture media optimisation through bioreactor engineering,
            downstream processing, and high-purity industrial distillation.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We design and engineer{" "}
            <strong className="font-bold text-[#1a3a2a]">
              batch, fed-batch, and continuous fermentation systems
            </strong>{" "}
            for ethanol, organic acids, amino acids, enzymes, and specialty
            biochemicals. Our distillation engineering integrates
            energy-efficient column design, azeotropic separation, molecular
            sieve drying, and heat pump configurations to maximise product
            purity while cutting utility costs. See how our{" "}
            <a href="#energy" className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a] transition-colors duration-200">energy optimisation solutions</a> integrate with
            fermentation plant design to reduce operating costs by up to 35%.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Bioreactor Design", "Ethanol Production", "Downstream Processing", "Fractional Distillation", "Molecular Sieve", "Fed-Batch Fermentation", "Scale-Up Engineering"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Design Your Fermentation System <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🧬</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Key Deliverables</h3>
          <ul className="list-none relative z-10">
            {[
              "Fermentation process design & mass balances",
              "Bioreactor sizing, specification & procurement support",
              "Distillation column simulation & design",
              "Azeotropic & extractive distillation systems",
              "Product recovery & purification design",
              "CIP/SIP and GMP-compliant layouts",
              "Scale-up from pilot to commercial plant"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 02 ANAEROBIC DIGESTION & BIOGAS */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[1024px]:order-last max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">♻️</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">AD &amp; Biogas Scope</h3>
          <ul className="list-none relative z-10">
            {[
              "Feedstock assessment & substrate mapping",
              "CSTR, UASB & plug-flow digester design",
              "H₂S & siloxane removal systems",
              "PSA, membrane & water-wash upgrading",
              "Grid injection & CNG/LNG compression",
              "Digestate post-treatment & nutrient recovery",
              "GHG accounting & carbon credit strategy"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">02</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Anaerobic Digestion &amp; Biogas Upgradation</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Anaerobic digestion is one of the most versatile and commercially
            proven technologies in the circular bioeconomy — simultaneously
            converting organic wastes into renewable energy, biomethane, and
            biofertiliser. Our{" "}
            <strong className="font-bold text-[#1a3a2a]">AD system design and biogas upgradation</strong> services
            have delivered successful plants across agricultural, municipal,
            food &amp; beverage, and industrial wastewater sectors.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We engineer complete <strong className="font-bold text-[#1a3a2a]">anaerobic digestion systems</strong> —
            from feedstock characterisation and pre-treatment through digester
            design, biogas collection, H₂S removal, and{" "}
            <strong className="font-bold text-[#1a3a2a]">biogas upgrading to biomethane</strong> via pressure swing
            adsorption (PSA), water scrubbing, or membrane separation. Our
            biomethane plants consistently meet{" "}
            <a
              href="https://www.europarl.europa.eu/topics/en/article/20221013STO44927/what-is-biomethane-and-why-is-the-eu-pushing-for-more-of-it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]"
            >
              EU grid injection quality standards
            </a>
            , unlocking access to green gas certificates and{" "}
            <a
              href="https://www.iscc-system.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]"
            >
              ISCC sustainability certification
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Anaerobic Digestion", "Biogas Upgrading", "Biomethane Production", "PSA Technology", "CSTR & UASB Digesters", "Digestate Management"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Explore AD System Design <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* 03 GREEN CHEMICAL PROCESS DEVELOPMENT */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1" id="green-chem">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">03</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Green Chemical Process Development</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            The shift from petrochemical feedstocks to bio-based, renewable, and
            waste-derived raw materials is accelerating — driven by policy,
            investor expectation, and genuine commercial opportunity. Our{" "}
            <strong className="font-bold text-[#1a3a2a]">green chemical process development</strong> service helps
            manufacturers and innovators design, scale, and commercialise
            sustainable chemical production routes that are not just
            environmentally sound, but economically superior.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We apply the{" "}
            <a
              href="https://www.acs.org/greenchemistry/principles/12-principles-of-green-chemistry.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]"
            >
              12 Principles of Green Chemistry
            </a>{" "}
            as an engineering framework — systematically identifying
            opportunities to eliminate hazardous solvents, replace petrochemical
            inputs with bio-derived alternatives, improve atom economy, and
            reduce process waste at source. From{" "}
            <strong className="font-bold text-[#1a3a2a]">continuous flow chemistry</strong> and catalytic process
            development to solvent substitution and process intensification, we
            design routes that are cleaner by design. This integrates directly
            with our engineering and design and{" "}
            <a href="#energy" className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]">energy optimisation services</a> for end-to-end
            delivery.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Green Chemistry", "Bio-based Chemicals", "Solvent Substitution", "Flow Chemistry", "Catalytic Processes", "Atom Economy", "Process Intensification"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Develop Your Green Process Route <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🌿</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Process Development Scope</h3>
          <ul className="list-none relative z-10">
            {[
              "Bio-based feedstock feasibility & sourcing",
              "Green solvent selection & substitution",
              "Reaction pathway optimisation",
              "Continuous flow chemistry design",
              "Catalyst development & screening support",
              "Life cycle assessment (LCA) integration",
              "Regulatory compliance (REACH, GHS, COSHH)"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 04 CO₂ RECOVERY & UTILIZATION */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1" id="co2-service">
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[1024px]:order-last max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🌐</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">CO₂ Recovery Scope</h3>
          <ul className="list-none relative z-10">
            {[
              "Post-combustion & biogenic CO₂ capture",
              "Amine scrubbing & PSA system design",
              "Cryogenic purification & liquefaction",
              "Food-grade & industrial CO₂ supply systems",
              "CO₂-to-methanol & utilisation pathways",
              "Carbon credit & EU ETS revenue modelling",
              "Net-zero & decarbonisation roadmap integration"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">04</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">CO₂ Recovery &amp; Utilization</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Most industrial plants are sitting on an untapped carbon asset — and
            don't know it. Our <strong className="font-bold text-[#1a3a2a]">CO₂ recovery and utilisation</strong>{" "}
            engineering transforms captured carbon dioxide from a compliance
            cost into a genuine revenue stream. Whether you're in fermentation,
            biogas, cement, or chemical manufacturing, your CO₂ has commercial
            value — if it's properly captured, purified, and directed to the
            right application.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We engineer complete <strong className="font-bold text-[#1a3a2a]">post-combustion CO₂ capture systems</strong>, amine
            scrubbing units, pressure swing adsorption (PSA) plants, and
            cryogenic CO₂ liquefaction for food-grade or industrial supply. Our
            utilisation pathway design spans <strong className="font-bold text-[#1a3a2a]">CO₂-to-methanol synthesis</strong>, mineral carbonation,
            enhanced greenhouse cultivation, and industrial offtake agreements —
            all supported by carbon credit revenue modelling aligned with{" "}
            <a
              href="https://iea.org/reports/carbon-capture-utilisation-and-storage-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]"
            >
              IEA CCUS frameworks
            </a>
            . Every system integrates with our <a href="#energy-service" className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]">energy optimisation methodology</a> to
            minimise the capture energy penalty and maximise net GHG reduction.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["CO₂ Capture", "Amine Scrubbing", "PSA Purification", "CO₂ Liquefaction", "CO₂-to-Methanol", "Carbon Credits", "CCUS Engineering"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Monetise Your Carbon Streams <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* 05 ENERGY OPTIMIZATION SOLUTIONS */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1" id="energy-service">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">05</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Energy Optimization Solutions</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Energy is typically the single largest operational cost in process
            plants — and the most actionable lever for both margin recovery and
            decarbonisation. Yet most plants are running 25–40% above their
            theoretical minimum energy consumption, simply because no one has
            applied a rigorous, systematic approach to finding and fixing the
            losses. That's exactly what we do.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Our <strong className="font-bold text-[#1a3a2a]">energy optimisation solutions</strong> use advanced <strong className="font-bold text-[#1a3a2a]">
              pinch analysis, heat exchanger network (HEN) redesign, steam
              system optimisation
            </strong>, and dynamic process simulation to locate precisely where energy is
            being destroyed and engineer cost-effective solutions to recover it.
            From distillation column retrofits and heat pump integration to
            combined heat and power (CHP) design and process scheduling changes,
            we implement — not just recommend. Our work follows{" "}
            <a
              href="https://www.iso.org/iso-50001-energy-management.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]"
            >
              ISO 50001 Energy Management
            </a>{" "}
            standards and aligns with the{" "}
            <a
              href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]"
            >
              EU Energy Efficiency Directive
            </a>
            . Since every unit of energy you don't use is also carbon you don't
            emit, this service links directly to our <a href="#co2-service" className="text-[#3d8b5a] underline underline-offset-[3px] font-semibold hover:text-[#1a3a2a]">CO₂ recovery and utilisation work</a>.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Pinch Analysis", "Heat Integration", "HEN Optimisation", "Steam System Design", "CHP Engineering", "Energy Audit", "ISO 50001", "Decarbonisation"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Start Your Energy Optimisation Audit <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">⚡</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Typical Savings We Deliver</h3>
          <ul className="list-none relative z-10 mb-8 overflow-hidden">
            {[
              "Distillation & separation — up to 40% energy reduction",
              "Fermentation utility systems — up to 35% savings",
              "Steam & heat recovery networks — up to 45% improvement",
              "Biogas plant parasitic load — up to 28% reduction",
              "CO₂ capture energy penalty — up to 25% reduction"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-2 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
          
          {/* Mini interactive bar chart */}
          <div className="bg-[#f8f9fa] rounded-[14px] p-8 border border-[rgba(61,139,90,0.18)] relative z-10 max-[640px]:p-6">
            <h3 className="font-['Cormorant_Garamond',serif] text-[1.2rem] font-semibold text-[#1a3a2a] mb-6">Typical Energy Savings Per Sector</h3>

            {[
              { label: "Distillation", val: "40%", width: "82%" },
              { label: "Heat Recovery", val: "45%", width: "88%" },
              { label: "Fermentation", val: "35%", width: "70%" },
              { label: "Biogas Load", val: "28%", width: "60%" },
              { label: "CO₂ Capture", val: "25%", width: "55%" }
            ].map(metric => (
              <div key={metric.label} className="flex items-center justify-between py-3 border-b border-[rgba(61,139,90,0.1)] last:border-b-0 max-[640px]:flex-wrap max-[640px]:gap-2">
                <span className="text-[0.83rem] text-[#4a6157] w-[120px] shrink-0 max-[640px]:w-full">{metric.label}</span>
                <div className="flex-1 mx-4 max-[640px]:mx-0 max-[640px]:mr-3">
                  <div className="h-1.5 rounded-full bg-[linear-gradient(90deg,#3d8b5a,#6aaa7d)]" style={{ width: metric.width }}></div>
                </div>
                <span className="text-[0.85rem] font-semibold text-[#3d8b5a] whitespace-nowrap">{metric.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
