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
    <section className="services" id="services">
      <div className="svc-header">
        <div className="section-tag" style={{ justifyContent: 'center' }}>
          Compressed Biogas Solutions
        </div>

        <h2>
          How Our <em>CBG Plants Work & Deliver Value</em>
        </h2>

        <p>
          <strong>Treebay Technology</strong> delivers advanced <strong>compressed biogas (CBG)</strong> plant solutions 
          covering the complete lifecycle — from <strong>biogas generation</strong> and purification 
          to <strong>compression, storage</strong>, and real-world industrial applications.
        </p>
      </div>

      <div className="services-grid-home">
        {services.map((svc, idx) => (
          <div className="srv-card" key={idx}>
            <div className="srv-num">{svc.num}</div>
            <div className="srv-icon">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>

            <div className="srv-tags">
              {svc.tags.map((tag, tIdx) => (
                <span className="srv-tag" key={tIdx}>{tag}</span>
              ))}
            </div>

            <a href={svc.link} className="srv-link">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;