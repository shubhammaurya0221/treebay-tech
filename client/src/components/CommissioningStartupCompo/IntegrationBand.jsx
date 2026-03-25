import React from 'react';

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
    <section className="bg-[#f7fbf8] py-[5rem] px-8 border-y border-[rgba(61,139,90,0.18)] max-[600px]:py-12 max-[600px]:px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-[1fr_1.8fr] gap-16 items-center max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
        <div className="int-left">
          <h3 className="text-[2.2rem] text-[#1a3a2a] mb-6 leading-[1.2] font-['Cormorant_Garamond',serif] font-semibold">Connected to Every Project Phase</h3>
          <p className="text-[#4a6157] leading-[1.6] text-[1.05rem]">
            Commissioning doesn't happen in isolation. Our services integrate
            seamlessly with every upstream phase — ensuring the knowledge built
            during engineering and construction is fully present when your plant
            comes to life.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
          {links.map((item, index) => (
            <a href="#" className="flex gap-4 p-6 bg-white border border-[rgba(61,139,90,0.18)] no-underline transition-all duration-300 rounded-[4px] hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(26,58,42,0.1)] group" key={index}>
              <div className="text-[1.5rem] bg-[#e8f5ed] w-[45px] h-[45px] flex items-center justify-center rounded-[4px] shrink-0 transition-all duration-300 group-hover:bg-[#3d8b5a] group-hover:text-white group-hover:scale-110">
                {item.icon}
              </div>
              <div className="il-content">
                <span className="block font-semibold mb-[0.4rem] text-[#1a3a2a] transition-colors duration-300 group-hover:text-[#3d8b5a]">{item.title}</span>
                <span className="block text-[0.82rem] text-[#6b8378] leading-[1.4] transition-colors duration-300 group-hover:text-[#4a6157]">{item.sub}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationBand;