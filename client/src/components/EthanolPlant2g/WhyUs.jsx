import React from 'react';
import './WhyUs.css';

const whyData = [
  {
    icon: "🔬",
    title: "Scientific Rigour from Lab to Plant",
    desc: "Our team includes PhDs, biochemical engineers, and process chemists who've worked at bench scale and commercial scale — understanding both the science and the engineering compromises that turn theory into operational reality."
  },
  {
    icon: "⚖️",
    title: "Technology-Neutral Recommendations",
    desc: "We're not licenced to sell any particular technology. We evaluate every viable solution on technical and commercial merits — then recommend and implement what's genuinely best for your plant and your sustainability goals."
  },
  {
    icon: "🌍",
    title: "Sustainability as an Engineering Discipline",
    desc: "We treat sustainability metrics — carbon intensity, water footprint, waste generation — with the same rigour as yield and throughput. LCA is part of our design process, not a post-hoc compliance exercise."
  },
  {
    icon: "🔗",
    title: "Circular Economy Integration",
    desc: "We design systems that close loops — where one plant's waste becomes another's feedstock. Our integrated approach across fermentation, biogas, CO₂ recovery, and green chemistry creates genuine circularity, not just compliance."
  },
  {
    icon: "📐",
    title: "Seamless Engineering Handover",
    desc: "Our process technology work flows directly into detailed engineering — PFDs, P&IDs, equipment specs, and plant layout — eliminating the costly errors that occur when technology consultants hand off to separate engineering firms."
  },
  {
    icon: "📈",
    title: "Bankable Techno-Economic Analysis",
    desc: "Every technology recommendation is underpinned by rigorous techno-economic modelling. Our feasibility studies and investment cases are designed to withstand lender scrutiny and board-level due diligence."
  }
];

const WhyUs = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-header">
          <span className="sec-tag">WHY TECHNOLOGY LEADERS CHOOSE US</span>
          <h2 className="sec-title">
            Deep Science. Real Engineering. Commercial Results.
          </h2>
        </div>
        
        <div className="why-grid">
          {whyData.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;