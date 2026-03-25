const WhyUs = () => {
  return (
    <section className="py-28 px-[6%] bg-[#e8f5ed] max-[640px]:py-16 max-[640px]:px-6">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
            Why Project Owners Choose Our Commissioning Team
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,3.8vw,3rem)] font-semibold border-none leading-[1.18] text-[#1a3a2a]">
            Commissioning Experience That Can't Be Improvised
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1">
          {[
            {
              icon: "🔬",
              title: "Engineering Continuity, Not Handover Gap",
              desc: "Our commissioning engineers work from the same documents as our design team — because in most cases, they're from the same organisation. No translation errors, no assumption gaps, no \"the drawing says X but we built Y\" surprises. The knowledge that designed your plant is present when it's commissioned."
            },
            {
              icon: "⚖️",
              title: "Commissioning Procedure Library",
              desc: "Over 300 commissioned plants have built a library of tested, proven commissioning procedures for the most common process technologies. We don't write your commissioning procedures from scratch — we adapt and customise proven templates, eliminating the procedural errors that afflict first-time commissioning efforts."
            },
            {
              icon: "🌍",
              title: "98% PGT First-Attempt Pass Rate",
              desc: "We don't schedule performance guarantee tests when a plant is \"almost ready.\" Our pre-test discipline — verifying every parameter, every instrument, every operating condition before witnesses arrive — means our plants pass their performance tests on the first attempt, 98% of the time. That record has direct commercial value for our clients."
            },
            {
              icon: "🔗",
              title: "Vendor Interface Management",
              desc: "Major equipment commissioning — compressors, turbines, DCS systems, proprietary process packages — requires coordinating manufacturer's specialists alongside your own team. We manage that interface, ensuring vendor commissioning activities are sequenced correctly, completed on schedule, and properly documented before specialist departure."
            },
            {
              icon: "📐",
              title: "Digital Commissioning Management",
              desc: "Our cloud-based commissioning management system tracks every loop check, every punch-list item, every procedure status, and every sign-off in real time — accessible to the project team and owner's engineers from anywhere. You always know exactly where commissioning stands, without needing a weekly status meeting to find out."
            },
            {
              icon: "📈",
              title: "We Stay Through Stabilization",
              desc: "Most commissioning contractors demobilise after the performance test. We stay through the stabilization period — because that's when your operations team needs technical support most. Our post-start-up presence means operational issues are resolved quickly, before they become production losses or safety incidents."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-[12px] p-[2.2rem] border border-[rgba(61,139,90,0.18)] transition-all duration-250 hover:-translate-y-[5px] hover:shadow-[0_16px_48px_rgba(26,58,42,0.1)] hover:border-[#3d8b5a]">
              <div className="text-[2.2rem] mb-4">{item.icon}</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[1.2rem] font-semibold text-[#1a3a2a] mb-2">{item.title}</h3>
              <p className="text-[0.85rem] text-[#4a6157] leading-[1.7]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
