import React from 'react';

const DistilleryPlantServices = () => {
  const features = [
  {
    icon: '⚗️',
    title: 'Technical Features',
    highlights: [
      'Advanced agitator design ensures uniform mixing and improved fermentation efficiency',
      'High-conversion fermenter architecture optimized for sugar-to-ethanol conversion',
      'Integrated liquefaction compatibility for grain-based processing',
      'Automated CIP system for improved hygiene and reduced downtime',
      'CO₂ recovery system for additional revenue generation',
      'Spent wash recycle integration to reduce water consumption'
    ]
  },
  {
    icon: '🔥',
    title: 'Key Performance Benefits',
    highlights: [
      'Higher alcohol yield through optimized fermentation',
      'Multi-feedstock flexibility (molasses, grain, cane syrup)',
      'Reduced water consumption and environmental load',
      'Lower contamination risk with automated systems',
      'Additional revenue through CO₂ recovery',
      'High operational reliability with minimal manual intervention'
    ]
  },
  {
    icon: '🏭',
    title: 'Distillery Process Integration',
    highlights: [
      'Seamless integration with fermentation, distillation, and evaporation systems',
      'Compatibility with multi-pressure distillation for energy efficiency',
      'Integration with Zero Liquid Discharge (ZLD) systems',
      'Efficient spent wash concentration and treatment solutions',
      'Steam and energy optimization across plant operations',
      'Designed for compliance with environmental and pollution control norms'
    ]
  }
];

  return (
    <section className="py-28 px-[6%] bg-[#f8f9fa] max-[640px]:py-16 max-[640px]:px-6 text-center" id="services">
      <div className="max-w-[680px] mx-auto mb-20">
        <div className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-4">
          Ethanol &amp; Distillation Technology
        </div>

        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-4 font-semibold">
          Advanced <em className="italic text-[#3d8b5a] ">Ethanol &amp; Distillation Solutions</em> for Maximum Efficiency
        </h2>

        <p className="text-[#4a6157] text-[1.1rem] leading-[1.8] mt-4">
          <strong className="font-bold text-[#1a3a2a]">Treebay Technology</strong> delivers next-generation distillery systems focused on 
          <strong className="font-bold text-[#1a3a2a]"> high alcohol yield</strong>, <strong className="font-bold text-[#1a3a2a]"> energy efficiency</strong>, and 
          <strong className="font-bold text-[#1a3a2a]"> sustainable operations</strong>. Designed for 
          <strong className="font-bold text-[#1a3a2a]"> molasses</strong>, <strong className="font-bold text-[#1a3a2a]"> cane syrup</strong>, and 
          <strong className="font-bold text-[#1a3a2a]"> grain-based distilleries</strong>.
        </p>
      </div>

      <div className="flex justify-between gap-5 max-[768px]:flex-col">
        {features.map((item, idx) => (
          <div className="flex-1 bg-[var(--forest)] p-6 rounded-[16px] border border-[rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#22c55e] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col items-start text-left group" key={idx}>
            <div className="text-[28px] mb-3">{item.icon}</div>

            <h3 className="text-white font-semibold text-[1.25rem] mb-[15px]">{item.title}</h3>

            <div className="mt-2.5">
              {item.highlights.map((point, i) => (
                <div className="text-white text-[14px] mb-2 opacity-90 leading-relaxed flex items-start gap-2" key={i}>
                  <span className="text-[#22c55e]">✓</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistilleryPlantServices;