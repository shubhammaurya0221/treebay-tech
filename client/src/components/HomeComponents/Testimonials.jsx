import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      stars: '★★★★★',
      text: 'Treebay Technology delivered our green hydrogen plant on schedule and within budget. Their understanding of hydrogen production systems was exceptional.',
      author: 'Rajiv Mehta',
      role: 'Director, RenewPower India Ltd.',
      avatar: 'R'
    },
    {
      stars: '★★★★★',
      text: 'The food processing unit they engineered for us transformed our production capacity. Their knowledge of FSSAI requirements meant zero compliance issues.',
      author: 'Sunita Agarwal',
      role: 'MD, Fresh Foods Processing Co.',
      avatar: 'S'
    },
    {
      stars: '★★★★★',
      text: "As machine manufacturers, Treebay's team truly understands precision. The cutting machines they delivered reduced material waste by 28%.",
      author: 'Arvind Sharma',
      role: 'Plant Head, Indo Steel Fabrication Ltd.',
      avatar: 'A'
    }
  ];

  return (
    <section className="section alt" id="testimonials">
      <div className="section-tag">Client Stories</div>
      <h2>What Our Clients Say About <em>Treebay Technology</em></h2>
      <p className="section-lead">Trusted by leading companies in hydrogen energy, food processing, and machine manufacturing sectors.</p>
      
      <div className="testimonials-grid-home">
        {testimonials.map((testi, idx) => (
          <div className="testi-card" key={idx}>
            <div className="testi-stars">{testi.stars}</div>
            <p className="testi-text">{testi.text}</p>
            <div className="testi-author">
              <div className="testi-status-avatar">{testi.avatar}</div>
              <div className="testi-info">
                <div className="testi-name">{testi.author}</div>
                <div className="testi-role">{testi.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
