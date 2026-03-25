const Intro = () => {
  return (
    <section className="py-[7rem] px-[6%] bg-white">
      <div className="grid grid-cols-2 gap-[6rem] items-start max-w-[1240px] mx-auto max-[1024px]:grid-cols-1 max-[1024px]:gap-[3rem]">
        <div className="intro-text">
          <span className="inline-flex items-center gap-[0.5rem] text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
            Why Commissioning Excellence Is Non-Negotiable
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.8vw,3rem)] font-semibold border-none leading-[1.18] text-[#1a3a2a] mb-[1.2rem]">
            Three Years of Engineering. Tested in Three Weeks. There Is No Dress Rehearsal.
          </h2>
          <p className="text-[0.975rem] border-none leading-[1.85] text-[#4a6157] mb-6">
            Commissioning is the single most compressed, consequential phase of any industrial project. Within a matter of weeks, every system, every instrument, every interlock, and every process loop must be verified, proven, and transitioned to live operation — simultaneously, progressively, and under the scrutiny of owner's engineers, performance guarantee witnesses, and regulatory inspectors. There is no tolerance for ambiguity at this stage. Defects found during commissioning cost ten times more to fix than those found during construction. Defects found during operation cost a hundred times more.
          </p>
          <p className="text-[0.975rem] border-none leading-[1.85] text-[#4a6157] mb-6">
            Our <strong>commissioning and start-up services</strong> provide the structured, experienced, and independently led commissioning capability that protects your investment at its most vulnerable moment. We manage the complete transition from mechanical completion through <a href="#pre-comm" className="text-[#3d8b5a] underline underline-offset-[3px]">pre-commissioning verification</a>, <a href="#cold-hot" className="text-[#3d8b5a] underline underline-offset-[3px]">cold and hot commissioning</a>, <a href="#perf-test" className="text-[#3d8b5a] underline underline-offset-[3px]">performance guarantee testing</a>, to <a href="#startup" className="text-[#3d8b5a] underline underline-offset-[3px]">plant start-up and stabilization</a> — with our own certified commissioning engineers, vendor interface management, and a fully documented commissioning management system.
            reducing your plant's energy consumption by 30–40%, we bring the
            process rigour, technology independence, and engineering credibility
            to make it happen — on time and on budget.
          </p>
          <p className="text-[1.1rem] leading-[1.8] text-[#1a3a2a] border-t border-[rgba(61,139,90,0.15)] pt-6">Our commissioning teams work in direct continuity with the project's <a href="#" className="text-[#3d8b5a] underline underline-offset-[3px]">engineering and design</a> and <a href="#" className="text-[#3d8b5a] underline underline-offset-[3px]">construction and installation</a> functions — eliminating the knowledge gap that typically opens between construction teams handing over and commissioning teams taking over. When our commissioning engineer reviews a loop diagram on site, they're looking at a document our own instrumentation engineers wrote. That continuity is commercially significant, and it shows in our results.</p>
        </div>
        <div className="bg-[#e8f5ed] rounded-[12px] p-[2.8rem] border border-[rgba(61,139,90,0.18)] relative overflow-hidden before:content-[''] before:absolute before:-top-[30px] before:-right-[30px] before:w-[180px] before:h-[180px] before:rounded-full before:bg-[radial-gradient(circle,rgba(61,139,90,0.12)_0%,transparent_70%)]">
          <ul className="list-none flex flex-col gap-5">
            {[
              "System-agnostic commissioning — we integrate with your existing CMS and DCS, regardless of the technology vendor or licensor",
              "Seamless turnover management from mechanical completion through to first product and sustained commercial operation",
              "Risk-based process safety (PSM) ensuring every interlock and ESD logic is verified before the first drop of process fluid",
              "Performance Guarantee Testing (PGT) aligned with ASME PTC 46 and international financial acceptance standards",
              "Utilities bring-up and stabilization, including steam, cooling water, and power system integration under live load conditions",
              "Regulatory safety compliance — OSHA PSM, COMAH, and environmental permit verification during the critical first start-up",
              "Phase-gate discipline from initial system walk-downs through to final operator training and formal operational handover"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-4 text-[0.92rem] text-[#4a6157] leading-[1.6]">
                <span className="flex-shrink-0 mt-1.5 w-2.5 h-2.5 rounded-full bg-[#3d8b5a] opacity-80" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;