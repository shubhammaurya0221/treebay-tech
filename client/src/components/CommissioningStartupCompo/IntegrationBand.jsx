import React from 'react';
import './IntegrationBand.css';

const IntegrationBand = () => {
  const links = [
    {
      icon: "📐",
      title: "Engineering & Design",
      sub: "P&IDs, loop diagrams and cause-and-effect matrices used directly in commissioning"
    },
    {
      icon: "🏗️",
      title: "Construction & Installation",
      sub: "Systems turnover packages and punch-list data handed over directly to our commissioning system"
    },
    {
      icon: "📦",
      title: "Procurement & Supply Chain",
      sub: "Vendor documentation, FAT records and spare parts lists integrated into commissioning readiness review"
    },
    {
      icon: "⚗️",
      title: "Technology & Process",
      sub: "Process design knowledge and technology licensor interfaces managed through our commissioning team"
    }
  ];

  return (
    <section className="integration-band">
      <div className="int-inner">
        <div className="int-left">
          <h3>Connected to Every Project Phase</h3>
          <p>
            Commissioning doesn't happen in isolation. Our services integrate 
            seamlessly with every upstream phase — ensuring the knowledge built 
            during engineering and construction is fully present when your plant 
            comes to life.
          </p>
        </div>

        <div className="int-links">
          {links.map((item, index) => (
            <a href="#" className="int-link" key={index}>
              <div className="il-ico">{item.icon}</div>
              <div className="il-content">
                <span className="il-title">{item.title}</span>
                <span className="il-sub">{item.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationBand;