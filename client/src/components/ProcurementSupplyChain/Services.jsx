import React from 'react';

const Services = () => {
  return (
    <section className="py-28 px-[6%] bg-[#f8f9fa] max-[640px]:py-16 max-[640px]:px-6 text-left" id="services">
      <div className="text-center max-w-[680px] mx-auto mb-20">
        <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:hidden">
          Our Procurement & Supply Chain Services
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
          Four Disciplines. Total Supply Chain Control.
        </h2>
        <p className="text-[#4a6157] text-[1rem] leading-[1.8] mt-4">
          From the first equipment requisition to the last crate arriving on site — we manage every link in your supply chain with the same rigour your engineering team applies to the technical scope. No gaps, no hand-off errors, no surprises on site.
        </p>
      </div>

      {/* 01 MAJOR EQUIPMENT & PACKAGE PROCUREMENT */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">01</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Major Equipment &amp; Package Procurement</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
           Major rotating equipment, pressure vessels, heat exchangers, fired heaters, packaged units, and modular process skids define the critical path of any industrial project. A single misspecified or late-delivered equipment item can collapse your construction schedule and trigger millions in consequential costs. Our major equipment and package procurement service eliminates that risk — through meticulous specification management, rigorous sourcing, and relentless supplier accountability.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
           We manage the complete lifecycle of every major equipment purchase: developing detailed <strong>equipment requisitions and technical datasheets</strong> from engineering inputs, building competitive bidder lists from our global <strong>approved vendor database</strong>, issuing enquiries, managing clarification cycles, conducting technical bid evaluations (TBE), and supporting commercial negotiations. We handle <strong>compressors, turbines, pumps, reactors, columns, heat exchangers, boilers, and complete process packages</strong> — all the high-value, long-lead items where procurement errors are most costly. Our approach is fully aligned with <a href="international-procurement-best-practices" className="text-[#3d8b5a] no-underline hover:underline">international procurement best practices</a> and links directly to our <a href="#inspection" className="text-[#3d8b5a] no-underline hover:underline">inspection and expediting service</a> for seamless post-order management.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Equipment Requisitions", "Competitive Bidding", "TBE", "Commercial Negotiations", "Long-Lead Procurement"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Start a Major Equipment Enquiry <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">⚙️</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Equipment Categories</h3>
          <ul className="list-none relative z-10">
            {[
              "Compressors, turbines & rotating machinery",
              "Pressure vessels & reactors",
              "Shell & tube / plate heat exchangers",
              "Fired heaters & waste heat boilers",
              "Packaged process skids & modules",
              "Pumps, agitators & mechanical seals",
              "Columns, trays & structured packing",
              "Electrical switchgear & transformers",
              "Control systems, DCS & instrumentation"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-1.5 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 02 BULK MATERIALS & BALANCE-OF-PLANT */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[1024px]:order-last max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🏗️</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Bulk Categories</h3>
          <ul className="list-none relative z-10">
            {[
              "Piping materials (pipe, fittings, flanges & valves)",
              "Structural steel, grating & handrailing",
              "Electrical cable, cable tray & conduit",
              "Instrumentation tubing & cabling",
              "Civil, concrete & foundation materials",
              "Insulation, cladding & refractory",
              "Fireproofing & passive fire protection",
              "Construction materials & consumables"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-1.5 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">02</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Bulk Materials &amp; Balance-of-Plant</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
           The bulk materials scope — piping, structural steel, cable, electrical materials, instruments, civil materials, and insulation — typically represents 30–40% of total project CAPEX and an even greater share of procurement transactions. Managing it poorly creates warehousing chaos, installation delays, and budget overruns. Managing it well creates construction momentum.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Our <strong>bulk materials and balance-of-plant procurement</strong> service covers the full materials management cycle — from initial material take-off (MTO) quantity estimation and purchase requisition development through <strong>multi-source procurement strategies</strong>, consolidation, packing, and <a href="#inspection">inspection and logistics</a> coordination. We manage <strong>piping materials (pipe, fittings, flanges, valves), structural steelwork, cable and cable tray, civil and concrete materials, insulation, and refractory</strong> — ensuring the right quantities arrive in the right sequence to keep your construction team productive. See how this integrates with our <a href="#">detailed engineering services</a> for seamless MTO-to-procurement handover.          
         </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Material Take-Off (MTO)", "Multi-Source Strategy", "Consolidation", "Balance-of-Plant", "Piping Procurement"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Discuss Your Bulk Materials Scope <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* 03 VENDOR EVALUATION & BID MANAGEMENT */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">03</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Vendor Evaluation &amp; Bid Management</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            The quality of your vendor base and the rigour of your bid process determine not just purchase price, but delivery reliability, quality performance, and the total cost of ownership across your plant's operating life. Our vendor evaluation and bid management service builds and applies the systematic frameworks that protect your project from underperforming suppliers — before a purchase order is ever placed.
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            We develop comprehensive <strong>vendor prequalification programmes</strong> — assessing technical capability, financial stability, quality management systems, manufacturing capacity, and track record — to build and maintain an <strong>approved vendor list (AVL)</strong> that gives every future enquiry a qualified, competitive bidder pool. Our bid management covers <strong>enquiry preparation, bid clarification cycles, technical bid evaluation (TBE), commercial alignment, and recommendation reports</strong> that give your project team clear, auditable procurement decisions. This integrates with <a href="#iso9001" >ISO 9001 quality management</a> frameworks and aligns procurement decisions with the technical standards set by our <a href="#engineering">engineering and design</a> team.
          </p>

          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Vendor Prequalification", "AVL Development", "Bid Evaluation", "TBE Reports", "Commercial Tabulation"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Build Your Vendor Programme <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🔎</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Key Deliverables</h3>
          <ul className="list-none relative z-10">
            {[
              "Vendor prequalification questionnaires (VPQ)",
              "Technical & financial capability assessment",
              "Approved vendor list (AVL) development",
              "Enquiry document preparation & issue",
              "Bid clarification management",
              "Technical bid evaluation (TBE) reports",
              "Commercial bid tabulation & analysis",
              "Award recommendation reports"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-1.5 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 04 INSPECTION, EXPEDITING & LOGISTICS */}
      <div className="grid grid-cols-2 max-w-[1240px] mx-auto mb-[4.5rem] rounded-[14px] overflow-hidden shadow-[0_2px_50px_rgba(26,58,42,0.07)] max-[1024px]:grid-cols-1">
        <div className="bg-[#e8f5ed] p-14 flex flex-col justify-center relative overflow-hidden text-left max-[1024px]:order-last max-[640px]:p-8">
          <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[40px] border-[rgba(106,170,125,0.08)]"></div>
          <div className="absolute -top-14 -left-14 w-60 h-60 rounded-full border-[50px] border-[rgba(106,170,125,0.05)]"></div>
          <div className="text-[3.2rem] mb-6 relative z-10">🔬</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-4 relative z-10">Key Deliverables</h3>
          <ul className="list-none relative z-10">
            {[
              "Pre-inspection meetings (PIM) at vendor works",
              "In-process & dimensional inspection",
              "NDT witnessing (UT, RT, PT, MT)",
              "Factory acceptance testing (FAT)",
              "Proactive expediting & schedule management",
              "Export packing & preservation",
              "Sea, air & road freight management",
              "Customs clearance & import coordination"
            ].map(point => (
              <li key={point} className="text-[#1a3a2a] text-[0.85rem] py-1.5 flex items-start gap-3 leading-relaxed border-b border-[rgba(106,170,125,0.08)] last:border-b-0 before:content-['↳'] before:text-[#3d8b5a] before:shrink-0 font-medium">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-14 max-[640px]:p-8 text-left">
          <div className="font-['Cormorant_Garamond',serif] text-[4rem] font-bold text-[rgba(26,58,42,0.06)] leading-none mb-0.5">04</div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[1.75rem] font-semibold text-[#1a3a2a] mb-4 leading-[1.25]">Inspection, Expediting &amp; Logistics</h2>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
           Our certified <strong>third-party inspection (TPI) engineers</strong> work at vendor and sub-vendor facilities worldwide, conducting <strong>pre-inspection meetings, in-process inspection, non-destructive testing (NDT) witness, factory acceptance testing (FAT), and final inspection</strong> before release. Our expediting team provides proactive schedule monitoring and escalation management — identifying delays before they happen and maintaining vendor accountability throughout manufacturing. We manage all <strong>export packing, freight forwarding, customs clearance, and last-mile logistics</strong> to site, working with <a href="#iata-partners">IATA-certified freight partners</a> for air freight and globally accredited sea freight carriers. Linked directly to our <a href="#major-equip">major equipment procurement</a> and <a href="#bulk">bulk materials</a> services for seamless post-order management
          </p>
          <p className="text-[0.93rem] leading-[1.85] text-[#4a6157] mb-[1.1rem]">
            Our certified Third-Party Inspection (TPI) engineers operate at vendor facilities worldwide to witness NDT and FATs in person. Paired with proactive expediting and comprehensive global freight management, we ensure your equipment arrives right and on time.
          </p>
          <div className="flex flex-wrap gap-[0.45rem] mb-[1.8rem]">
            {["Third-Party Inspection", "FAT Witnessing", "NDT", "Proactive Expediting", "Freight Forwarding", "Customs Clearance"].map(kw => (
              <span key={kw} className="bg-[#e8f5ed] text-[#3d8b5a] text-[0.72rem] font-bold tracking-[0.04em] px-[0.8rem] py-[0.28rem] rounded-[20px] border border-[rgba(61,139,90,0.2)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[0.875rem] font-bold text-[#3d8b5a] no-underline transition-all duration-250 border-b-[1.5px] border-[rgba(61,139,90,0.3)] pb-0.5 hover:gap-3 hover:text-[#2d6645] group">
            Arrange Inspection & Expediting <span className="transition-transform duration-250 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default Services;