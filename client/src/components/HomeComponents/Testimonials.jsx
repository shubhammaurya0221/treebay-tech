import React from 'react';

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
    <section className="py-28 px-[6%] bg-[#e8f5ed] max-[640px]:py-16 max-[640px]:px-6 text-left" id="testimonials">
      <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">Client Stories</div>
      <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight mb-4 font-semibold">What Our Clients Say About <em className="italic text-[#3d8b5a] not-italic">Treebay Technology</em></h2>
      <p className="text-[#4a6157] text-[1.1rem] leading-[1.75] max-w-[680px] mb-12">Trusted by leading companies in hydrogen energy, food processing, and machine manufacturing sectors.</p>
      
      <div className="grid grid-cols-3 gap-6 max-[1100px]:grid-cols-1">
        {testimonials.map((testi, idx) => (
          <div className="bg-white border border-[rgba(61,139,90,0.18)] p-10 rounded-[14px] relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,58,42,0.06)] group" key={idx}>
            {/* Quote Mark */}
            <div className="font-['Cormorant_Garamond',serif] text-[6rem] text-[rgba(106,170,125,0.15)] absolute top-0 left-6 leading-none pointer-events-none select-none">"</div>
            
            <div className="text-[#f59e0b] text-[1rem] mb-2 tracking-[2px]">{testi.stars}</div>
            <p className="text-[1rem] text-[#4a6157] leading-[1.8] mb-[1.8rem] relative z-10 italic">{testi.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#3d8b5a] flex items-center justify-center font-['Outfit',sans-serif] font-semibold text-[1.1rem] text-white shrink-0 transition-transform duration-300 group-hover:scale-110">{testi.avatar}</div>
              <div className="flex flex-col">
                <div className="text-[0.95rem] font-semibold text-[#1a3a2a]">{testi.author}</div>
                <div className="text-[0.8rem] text-[#4a6157]">{testi.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
