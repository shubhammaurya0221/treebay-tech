import React from 'react';

const WhyUs = () => {
  const cards = [
    {
      icon: '⚙️',
      title: 'Advanced CSTR Technology',
      desc: "We implement high-performance CSTR-based biodigesters designed for stable anaerobic digestion, higher gas yield, and efficient processing of complex organic waste streams."
    },
    {
      icon: '🧪',
      title: 'High Methane Recovery',
      desc: "Our advanced biogas upgradation systems achieve 96%+ methane purity using technologies like biochemical scrubbing, PSA/VPSA, and membrane separation."
    },
    {
      icon: '🏭',
      title: 'Complete Turnkey Solutions',
      desc: "From plant design and engineering to manufacturing, installation, and commissioning, we deliver fully integrated CBG plant solutions under one roof."
    },
    {
      icon: '🔗',
      title: 'Multi-Feedstock Flexibility',
      desc: "Our systems are engineered to handle diverse feedstocks including press mud, distillery waste, agri-residues, cattle dung, and municipal organic waste."
    },
    {
      icon: '🌍',
      title: 'Government-Compliant Designs',
      desc: "All our CBG plants are aligned with SATAT and GOBARdhan initiatives, ensuring compliance, incentives, and long-term sustainability benefits."
    },
    {
      icon: '📈',
      title: 'Sustainable & Profitable',
      desc: "We design plants that convert waste into energy, reduce carbon emissions, and create additional revenue streams through circular economy integration."
    }
  ];

  return (
    <section className="py-28 px-[6%] bg-[#e8f5ed] max-[640px]:py-16 max-[640px]:px-6 text-left" id="why-us">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto after:content-[''] after:w-6 after:h-[1px] after:bg-[#3d8b5a] before:content-[''] before:w-6 before:h-[1px] before:bg-[#3d8b5a]">Why Choose Treebay Technology</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight font-semibold">
            Engineering Excellence for <em className="italic text-[#3d8b5a] not-italic">CBG & Sustainable Energy</em>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[12px] p-9 border border-[rgba(61,139,90,0.18)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,58,42,0.1)] hover:border-[#3d8b5a]">
              <div className="text-[2.2rem] mb-4">{card.icon}</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-[1.2rem] font-semibold text-[#1a3a2a] mb-2">{card.title}</h3>
              <p className="text-[0.85rem] text-[#4a6157] leading-[1.7]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;