import React from 'react';

const HomeServices = () => {
  const services = [
    {
      num: '01 / 06',
      icon: '🧪',
      title: 'Biogas Generation (Anaerobic Digestion)',
      desc: 'Our advanced CSTR-based biodigesters enable efficient anaerobic digestion under controlled mesophilic conditions, converting organic waste into raw biogas with high stability and yield.',
      tags: ['CSTR Technology', 'Anaerobic Digestion', 'Mesophilic Process', 'Organic Waste'],
      link: '/services/cbg-plants'
    },
    {
      num: '02 / 06',
      icon: '🧼',
      title: 'Gas Cleaning & Upgradation',
      desc: 'We implement advanced gas purification systems to remove CO₂ and H₂S, achieving 96%+ methane purity using biochemical scrubbing, PSA/VPSA, and membrane separation technologies.',
      tags: ['Biogas Upgradation', 'PSA / VPSA', 'Membrane Tech', 'High Methane'],
      link: '/services/cbg-plants'
    },
    {
      num: '03 / 06',
      icon: '📦',
      title: 'Compression & Storage Systems',
      desc: 'Upgraded biogas is compressed up to 200 bar and stored for transport and use as fuel. Our systems ensure consistent pressure, safety, and reliable distribution.',
      tags: ['CBG Compression', 'Gas Storage', 'Fuel Bottling', '200 Bar Systems'],
      link: '/services/cbg-plants'
    },
    {
      num: '04 / 06',
      icon: '🏭',
      title: 'Turnkey CBG Plant Solutions',
      desc: 'Treebay Technology delivers complete end-to-end CBG plant execution — from design and engineering to manufacturing, automation, installation, and commissioning.',
      tags: ['Turnkey Projects', 'Plant Engineering', 'Installation', 'Commissioning'],
      link: '/services/cbg-plants'
    },
    {
      num: '05 / 06',
      icon: '🌍',
      title: 'CBG Applications',
      desc: 'Compressed biogas is widely used as a clean fuel alternative across industries — from automotive (CNG replacement) to industrial heating, power generation, and steam systems.',
      tags: ['Automotive Fuel', 'Industrial Heating', 'Power Generation', 'Thermal Energy'],
      link: '/services/cbg-plants'
    },
    {
      num: '06 / 06',
      icon: '🌱',
      title: 'Sustainability & Benefits',
      desc: 'CBG plants enable waste-to-energy conversion, reduce carbon emissions, and support government initiatives like SATAT & GOBARdhan while creating additional revenue streams.',
      tags: ['Waste to Energy', 'Low Carbon', 'SATAT', 'Circular Economy'],
      link: '/services/cbg-plants'
    }
  ];

  return (
    <section className="py-28 px-[6%] bg-[#f7fbf8] max-[640px]:py-16 max-[640px]:px-6" id="services">
      <div className="text-center max-w-[680px] mx-auto mb-20">
        <div className="inline-flex items-center text-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-3 mx-auto">
          Compressed Biogas Solutions
        </div>

        <h2 className="font-['Cormorant_Garamond',serif] text-center text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-4 font-semibold">
          How Our <em className="italic text-[#3d8b5a] ">CBG Plants Work <br /> & Deliver Value</em>
        </h2>

        <p className="text-[#4a6157] text-[1.1rem] leading-[1.8] mt-4">
          <strong className="font-bold">Treebay Technology</strong> delivers advanced <strong className="font-bold">compressed biogas (CBG)</strong> plant solutions
          covering the complete lifecycle — from <strong className="font-bold">biogas generation</strong> and purification
          to <strong className="font-bold">compression, storage</strong>, and real-world industrial applications.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-[1100px]:grid-cols-1">
        {services.map((svc, idx) => (
          <div className="bg-white border border-[rgba(61,139,90,0.18)] rounded-[12px] p-10 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:bg-[#3d8b5a] before:h-1 before:rounded-b-[12px] text-left transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(26,58,42,0.1)] hover:border-[#3d8b5a]" key={idx}>
            <div className="text-[#a8d5b5] text-[0.75rem] font-semibold mb-4">{svc.num}</div>
            <div className="text-[2rem] mb-6">{svc.icon}</div>
            <h3 className="font-['Cormorant_Garamond',serif] text-[1.35rem] text-[#1a3a2a] mb-[0.8rem] font-semibold">{svc.title}</h3>
            <p className="text-[#4a6157] text-[0.9rem] leading-[1.6] mb-6">{svc.desc}</p>

            <div className="flex flex-wrap gap-[0.4rem] mb-6">
              {svc.tags.map((tag, tIdx) => (
                <span className="border border-[rgba(106,170,125,0.4)] text-[#3d8b5a] font-medium text-[0.7rem] px-[0.6rem] py-[0.2rem] rounded-[20px] uppercase " key={tIdx}>{tag}</span>
              ))}
            </div>

            <a href={svc.link} className="text-[#3d8b5a] font-semibold text-[0.85rem] no-underline transition-colors duration-200 hover:text-[#1a3a2a]">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;