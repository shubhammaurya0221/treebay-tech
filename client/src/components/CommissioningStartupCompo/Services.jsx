const Services = () => {
  return (
    <section className="py-28 px-[6%] bg-white" id="services">
      {/* SECTION HEADER */}
      <div className="text-center max-w-[800px] mx-auto mb-20">
        <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
          The Four Commissioning Phases
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#1a3a2a] mb-6 font-semibold leading-[1.12]">
          A Structured Path from Mechanical Completion to Guaranteed Performance
        </h2>
        <p className="text-[#4a6157] text-[1.05rem] leading-[1.75]">
          Each commissioning phase builds sequentially on the last. Skipping steps or
          rushing transitions creates defects that compound — turning manageable issues
          into extended start-up delays. Our commissioning management system enforces
          phase-gate discipline so every transition is earned, not assumed.
        </p>
      </div>

      {/* PHASE TIMELINE NAVIGATION */}
      <div className="flex justify-between max-w-[1000px] mx-auto mb-20 relative before:content-[''] before:absolute before:top-[18px] before:left-0 before:w-full before:h-[1px] before:bg-[rgba(61,139,90,0.15)] max-[768px]:flex-col max-[768px]:gap-12 max-[768px]:before:hidden">
        {[
          { num: "01", title: "Pre-Commissioning", sub: "MC → Ready-to-commission" },
          { num: "02", title: "Cold & Hot Commissioning", sub: "Utilities → Process introduction" },
          { num: "03", title: "Performance Testing", sub: "Design proof → Acceptance" },
          { num: "04", title: "Start-Up & Stabilization", sub: "First product → Sustained op" }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center relative z-10 bg-white px-4 max-[768px]:items-start max-[768px]:text-left max-[768px]:px-0">
            <div className="w-[36px] h-[36px] bg-[#3d8b5a] text-white rounded-full flex items-center justify-center text-[0.8rem] font-bold mb-3 shadow-[0_0_0_8px_white]">{step.num}</div>
            <h4 className="text-[0.95rem] font-bold text-[#1a3a2a] mb-1">{step.title}</h4>
            <span className="text-[0.75rem] text-[#6b8378] uppercase tracking-wider font-medium">{step.sub}</span>
          </div>
        ))}
      </div>

      {/* 01 PRE-COMMISSIONING */}
      <div className="flex items-center gap-20 mb-32 max-[1100px]:flex-col max-[1100px]:gap-12 scroll-mt-32" id="pre-comm">
        <div className="flex-1">
          <div className="text-[4rem] font-['Cormorant_Garamond',serif] font-bold text-[#e8f5ed] leading-none mb-2">01</div>
          <h2 className="text-[2.6rem] font-['Cormorant_Garamond',serif] font-bold text-[#1a3a2a] mb-6 border-none leading-none">Pre-Commissioning</h2>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-6">
            Pre-commissioning is the systematic verification that every installed system is
            mechanically complete, correctly installed, and ready to be commissioned — before
            a single valve is opened to process fluids. The cost of discovering a mis-installed
            instrument or an unresolved punch-list item after process introduction is
            exponentially higher than catching it during structured pre-commissioning walks.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-8">
            Our <strong>pre-commissioning management</strong> process covers: systematic
            walk-down against as-built documentation, completion of critical punch-list items,
            <strong> instrument loop checking</strong>, line flushing, and
            <strong> safety system testing</strong> (ESD logic and relief valve certification).
            We use a digital system to track every sign-off, giving the project team real-time
            visibility of turnover status.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["Mechanical Completion", "Loop Checking", "Punch-List Management", "Line Flushing", "ESD Testing", "Dry Runs", "Systems Turnover"].map(kw => (
              <span key={kw} className="bg-[#f0f7f3] text-[#3d8b5a] text-[0.75rem] font-bold py-1.5 px-3 rounded uppercase tracking-wider border border-[rgba(61,139,90,0.1)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#3d8b5a] font-bold text-[0.95rem] no-underline group">
            Discuss Pre-Commissioning Planning <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
        <div className="flex-1 w-full bg-[#fbfdfc] border border-[rgba(61,139,90,0.18)] rounded-xl p-10 relative overflow-hidden before:content-[''] before:absolute before:-top-10 before:-right-10 before:w-32 before:h-32 before:bg-[#3d8b5a] before:opacity-5 before:rounded-full">
          <div className="text-2xl mb-4">🔍</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1a3a2a] mb-6">Pre-Commissioning Checklist</h3>
          <ul className="grid grid-cols-1 gap-4 list-none">
            {[
              "System walk-downs vs. as-built drawings",
              "Punch-list A/B/C item resolution tracking",
              "Instrument loop checking (1,800+ loops typical)",
              "Control valve stroking & calibration",
              "Relief valve certification & install check",
              "ESD logic verification & interlock testing",
              "Line flushing, blowing & chemical cleaning",
              "Equipment alignment verification records"
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-4 text-[0.92rem] text-[#4a6157] leading-[1.5]">
                <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#3d8b5a]" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 02 COLD & HOT COMMISSIONING */}
      <div className="flex items-center gap-20 mb-32 max-[1100px]:flex-col-reverse max-[1100px]:gap-12 scroll-mt-32" id="cold-hot">
        <div className="flex-1 w-full bg-[#fbfdfc] border border-[rgba(61,139,90,0.18)] rounded-xl p-10">
          <div className="text-2xl mb-4">🌡️</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1a3a2a] mb-6">Cold & Hot Comm. Scope</h3>
          <ul className="grid grid-cols-1 gap-4 list-none">
            {[
              "Utility systems bring-up & verification",
              "Rotating equipment wet runs & checks",
              "Control loop tuning & DCS config",
              "Inert gas & water pressure testing",
              "Heat-up curve management",
              "First process fluid introduction",
              "Reaction system conditioning",
              "Commissioning deviation management log"
            ].map((pt, i) => (
              <li key={i} className="flex items-start gap-4 text-[0.92rem] text-[#4a6157] leading-[1.5]">
                <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#3d8b5a]" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="text-[4rem] font-['Cormorant_Garamond',serif] font-bold text-[#e8f5ed] leading-none mb-2 text-right max-[1100px]:text-left">02</div>
          <h2 className="text-[2.6rem] font-['Cormorant_Garamond',serif] font-bold text-[#1a3a2a] mb-6 border-none leading-none text-right max-[1100px]:text-left">Cold & Hot Commissioning</h2>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-6 text-right max-[1100px]:text-left">
            Cold commissioning proves process systems first with inert media or water before
            progressive introduction of real process fluids. Hot commissioning then takes
            those systems to operating temperature and pressure. These phases are where
            an experienced team makes the difference between a controlled start-up and
            an extended series of unplanned shutdowns.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-8 text-right max-[1100px]:text-left">
            Our <strong>cold commissioning</strong> scope covers utility bring-up and
            <strong> control loop tuning</strong> using model-based PID optimisation.
            <strong> Hot commissioning</strong> progresses through controlled heat-up
            and reaction system conditioning, governed by a
            <a href="#" className="text-[#3d8b5a] underline underline-offset-[3px]"> process safety performance framework</a>. The outcome is a plant
            at stable, controlled operation — ready for performance guarantee testing.
          </p>
          <div className="flex flex-wrap gap-2 mb-8 justify-end max-[1100px]:justify-start">
            {["Cold Commissioning", "Hot Commissioning", "Control Loop Tuning", "Utility Bring-Up", "Inert Commissioning", "PID Optimisation"].map(kw => (
              <span key={kw} className="bg-[#f0f7f3] text-[#3d8b5a] text-[0.75rem] font-bold py-1.5 px-3 rounded uppercase tracking-wider border border-[rgba(61,139,90,0.1)]">{kw}</span>
            ))}
          </div>
          <div className="text-right max-[1100px]:text-left">
            <a href="#contact" className="inline-flex items-center gap-2 text-[#3d8b5a] font-bold text-[0.95rem] no-underline group">
              Plan Your Commissioning Sequence <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* 03 PERFORMANCE GUARANTEE TESTING */}
      <div className="flex items-center gap-20 mb-32 max-[1100px]:flex-col max-[1100px]:gap-12 scroll-mt-32" id="performance">
        <div className="flex-1 w-full bg-[#fbfdfc] border border-[rgba(61,139,90,0.18)] rounded-xl p-10">
          <div className="text-2xl mb-4">📊</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#1a3a2a] mb-6">PGT Performance Scorecard</h3>
          <div className="flex flex-col gap-6">
            {[
              { label: "Plant Capacity", val: "102.4%", sub: "Achieved: 870 t/d (Design: 850 t/d)", width: "96%", color: "#3d8b5a" },
              { label: "Product Purity", val: "99.87%", sub: "Spec: ≥99.5% · Verified Lab Result", width: "99%", color: "#3d8b5a" },
              { label: "Energy Efficiency", val: "94.2%", sub: "6% below max consumption guarantee", width: "94%", color: "#3d8b5a" }
            ].map((m, i) => (
              <div key={i} className="energy-metric">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[0.82rem] font-bold text-[#1a3a2a] uppercase tracking-wider">{m.label}</span>
                  <span className="text-[1.1rem] font-bold text-[#3d8b5a]">{m.val}</span>
                </div>
                <div className="h-[6px] bg-[#eef3f0] rounded-full overflow-hidden mb-2">
                  <div className="h-full transition-all duration-1000" style={{ width: m.width, backgroundColor: m.color }} shadow="[0_0_10px_rgba(61,139,90,0.3)]"></div>
                </div>
                <span className="text-[0.75rem] text-[#6b8378] font-medium italic">{m.sub}</span>
              </div>
            ))}
          </div>
          <ul className="mt-8 pt-6 border-t border-[rgba(61,139,90,0.1)] list-none flex flex-col gap-3">
            {[
              "72-hour continuous performance run",
              "ASME PTC 46 compliant protocol",
              "Third-party witness verification"
            ].map((pt, i) => (
              <li key={i} className="flex items-center gap-3 text-[0.88rem] text-[#4a6157]">
                <span className="shrink-0 w-1.5 h-1.5 bg-[#3d8b5a] rounded-full" />
                {pt}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <div className="text-[4rem] font-['Cormorant_Garamond',serif] font-bold text-[#e8f5ed] leading-none mb-2 text-left">03</div>
          <h2 className="text-[2.6rem] font-['Cormorant_Garamond',serif] font-bold text-[#1a3a2a] mb-6 border-none leading-none">Performance Guarantee Testing</h2>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-6">
            Performance guarantee testing is the moment of financial truth for any process plant investment. It is the structured, witnessed, and independently verified proof that your plant delivers exactly what the technology licensor promised, the engineers designed, and the contractor built — at specified feedstock conditions, with specified utilities consumption, producing specified product quality and quantity. Failing a performance test has immediate and serious contractual consequences. Passing it — efficiently, on the first attempt — protects your investment and triggers liquidated damages or bonus clauses in your favour.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-8">
            Our <strong>performance guarantee testing</strong> scope covers <strong>capacity verification</strong> (run-rate at guaranteed throughput), <strong>yield and quality testing</strong> (product specifications under defined operating windows), and <strong>utility consumption measurement</strong> (steam, power, cooling water, and catalyst consumption against guaranteed values). We manage the entire process: test protocol development, independent witness coordination, data validation, and final acceptance certification. This structured approach minimises disputes and ensures your plant is accepted based on demonstrated performance, not assumptions.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {["ASME PTC 46", "Measurement Uncertainty", "Plant Capacity", "Data Acquisition"].map(kw => (
              <span key={kw} className="bg-[#f0f7f3] text-[#3d8b5a] text-[0.75rem] font-bold py-1.5 px-3 rounded uppercase tracking-wider border border-[rgba(61,139,90,0.1)]">{kw}</span>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#3d8b5a] font-bold text-[0.95rem] no-underline group">Discuss PGT Requirements <span className="transition-transform group-hover:translate-x-1">→</span></a>
        </div>
      </div>

      {/* 04 START-UP & STABILIZATION */}
      <div className="flex items-center gap-20 max-[1100px]:flex-col-reverse max-[1100px]:gap-12 scroll-mt-32" id="startup">
        <div className="flex-1 w-full bg-[#1a3a2a] text-[#e8f5ed] border-none rounded-xl p-10 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8 border-b border-[rgba(232,245,237,0.15)] pb-4 text-[0.85rem] uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 bg-[#4CAF50] rounded-full animate-pulse shadow-[0_0_10px_#4CAF50]"></span>
            Live Plant Parameters — Day 14
          </div>

          <div className="flex flex-col gap-8 mb-8">
            {[
              { label: "Reactor Temp", val: "340°C ✓", width: "88%", color: "#4CAF50" },
              { label: "Feed Rate", val: "98.5%", width: "95%", color: "#4CAF50" },
              { label: "Product Purity", val: "99.82% ✓", width: "99%", color: "#4CAF50" },
              { label: "Steam Usage", val: "↓ Optimising", width: "78%", color: "#FFC107" }
            ].map((m, i) => (
              <div key={i} className="energy-metric">
                <div className="flex justify-between text-[0.85rem] mb-2 font-medium">
                  <span className="opacity-80">{m.label}</span>
                  <span style={{ color: m.color }}>{m.val}</span>
                </div>
                <div className="h-1 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                  <div className="h-full transition-all duration-1000" style={{ width: m.width, backgroundColor: m.color }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-[0.75rem] opacity-60 italic mt-auto border-t border-[rgba(232,245,237,0.1)] pt-4">
            * Continuous 97.2% rolling availability achieved post-PGT.
          </div>
        </div>
        <div className="flex-1">
          <div className="text-[4rem] font-['Cormorant_Garamond',serif] font-bold text-[#e8f5ed] leading-none mb-2 text-right max-[1100px]:text-left">04</div>
          <h2 className="text-[2.6rem] font-['Cormorant_Garamond',serif] font-bold text-[#1a3a2a] mb-6 border-none leading-none text-right max-[1100px]:text-left">Start-Up & Stabilization</h2>
          <p className="text-[1.05rem] leading-[1.8] text-[#4a6157] mb-6 text-right max-[1100px]:text-left">
            Passing a performance test proves design performance under controlled conditions;
            <strong> stabilization</strong> proves it can be sustained across shift changes,
            feedstock variation, and seasonal fluctuations. The transition to a reliably
            producing plant requires operational optimisation, not just procedure execution.
          </p>
          <p className="text-[0.95rem] leading-[1.75] text-[#4a6157] mb-8 text-right max-[1100px]:text-left">
            Our <strong>start-up and stabilization</strong> service provides the experienced operational support your plant needs during the critical first weeks and months after performance testing — when the commissioning team would normally demobilise and leave your operations team managing a complex, unfamiliar process for the first time. We stay. Our process engineers and DCS specialists remain embedded with your operations team, providing <strong>on-the-job training, process optimisation support, troubleshooting assistance</strong>, and 24/7 technical backup during the stabilization period.
          </p>
          <ul className="grid grid-cols-1 gap-3 mb-8 list-none text-right max-[1100px]:text-left">
            {[
              "Process variable optimisation to design targets",
              "On-the-job operator and DCS technician training",
              "Operating procedure review and finalisation",
              "Regulatory inspection preparation (OSHA/PSM)"
            ].map((pt, i) => (
              <li key={i} className="flex items-center justify-end gap-3 text-[0.88rem] text-[#4a6157] font-medium max-[1100px]:flex-row-reverse max-[1100px]:justify-start">
                {pt} <span className="text-[#3d8b5a] font-bold">✓</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-8 justify-end max-[1100px]:justify-start">
            {["Operational Optimisation", "Troubleshooting", "OSHA PSM", "Shift Management", "Knowledge Transfer"].map(kw => (
              <span key={kw} className="bg-[#f0f7f3] text-[#3d8b5a] text-[0.75rem] font-bold py-1.5 px-3 rounded uppercase tracking-wider border border-[rgba(61,139,90,0.1)]">{kw}</span>
            ))}
          </div>
          <div className="text-right max-[1100px]:text-left">
            <a href="#contact" className="inline-flex items-center gap-2 text-[#3d8b5a] font-bold text-[0.95rem] no-underline group">
              Plan Your Start-Up Support <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;