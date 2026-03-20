import React from 'react';

const DistilleryPlantServices = () => {
  const services = [
    {
      num: '01 / 06',
      icon: '⚗️',
      title: 'Treebay-Ferment',
      desc: "Achieve High Alcohol Yield with Maximum Feedstock Flexibility",
      tags: ['Hydrogen Energy', 'H₂ Production', 'Electrolyser Systems', 'Hydrogen Gas Storage', 'Hydrogen Peroxide Units'],
      link: '/services/green-hydrogen'
    },
    {
      num: '02 / 06',
      icon: '🔩',
      title: 'Fabrication Works',
      desc: 'Our structural and custom fabrication works team handles everything from pressure vessels and piping assemblies to modular skid packages. With in-house welding, forming, and quality inspection, we deliver fabrications that meet ASME, IS, and international standards.',
      tags: ['Structural Fabrication', 'Pressure Vessels', 'Modular Skids', 'Custom Fabrication'],
      link: '/services/fabrication-works'
    },
    {
      num: '03 / 06',
      icon: '🥬',
      title: 'Food Processing Units & Plants',
      desc: "We are one of India's trusted engineering partners for the food processing industry. We design and build complete food processing unit infrastructure — from raw material receiving and processing lines to packaging and cold-chain systems — meeting FSSAI and GMP standards.",
      tags: ['Food Processing Plant', 'FSSAI Compliant', 'Cold Chain Systems', 'Packaging Lines'],
      link: '/services/food-processing'
    },
    {
      num: '04 / 06',
      icon: '⚙️',
      title: 'Machine Manufacturing',
      desc: 'As specialist machine manufacturers, we design and produce industrial machines tailored to your production requirements. Our range includes cutting machines, conveyor systems, hydraulic presses, and custom automation equipment for factories across sectors.',
      tags: ['Cutting Machine', 'Machine Manufacturing', 'Custom Machinery', 'Automation Equipment'],
      link: '/services/machine-manufacturing'
    },
    {
      num: '05 / 06',
      icon: '📐',
      title: 'Engineering & Design',
      desc: 'Our multidisciplinary engineering team delivers concept studies, FEED, detailed engineering, and 3D modeling across civil, structural, mechanical, piping, electrical, and instrumentation disciplines — ensuring every project meets regulatory and performance requirements before construction begins.',
      tags: ['FEED Studies', '3D Modeling & BIM', 'Process Design', 'HSE Engineering'],
      link: '/services/engineering'
    },
    {
      num: '06 / 06',
      icon: '📦',
      title: 'Procurement & Supply Chain',
      desc: 'From global vendor sourcing and long-lead equipment management to logistics coordination and quality inspection, our procurement team ensures your project never waits for materials — whether for a food processing plant, a green hydrogen plant, or a manufacturing facility.',
      tags: ['Global Sourcing', 'Vendor Management', 'Logistics & Customs', 'Quality Inspection'],
      link: '/services/procurement'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="svc-header">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Our Core Capabilities</div>
        <h2>Engineering Services Built for <em>Real Industry Challenges</em></h2>
        <p>
          From <strong>hydrogen energy systems</strong> to precision <strong>machine manufacturing</strong>, 
          Treebay Technology delivers end-to-end engineering solutions that reduce cost, compress timelines, 
          and ensure long-term operational performance.
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
            <a href={svc.link} className="srv-link">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DistilleryPlantServices;
