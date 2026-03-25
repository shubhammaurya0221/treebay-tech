import React from 'react';

const CO2Section = () => {
    const cards = [
        {
            icon: '🏭',
            title: 'Post-Combustion CO₂ Capture',
            desc: "Amine scrubbing, PSA, and membrane-based CO₂ capture systems for process industries, cement, steel, and power generation."
        },
        {
            icon: '❄️',
            title: 'CO₂ Purification & Liquefaction',
            desc: "Food-grade and industrial CO₂ purification, liquefaction, and storage — enabling direct revenue streams from captured carbon."
        },
        {
            icon: '⚗️',
            title: 'CO₂ Utilization Pathways',
            desc: "Engineering for CO₂-to-methanol, synthetic fuels, enhanced oil recovery, greenhouse agriculture, and mineralisation applications."
        },
        {
            icon: '📊',
            title: 'Carbon Credit Strategy',
            desc: "Techno-economic modelling for EU ETS compliance, voluntary carbon market participation, and carbon credit revenue optimisation."
        }
    ];

    return (
        <section className="py-28 px-[6%] bg-white relative overflow-hidden text-left" id="co2">
            <svg className="absolute -left-[100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.05] pointer-events-none" viewBox="0 0 600 600">
                <circle cx="300" cy="300" r="80" strokeWidth="1" fill="none" stroke="#a8d5b5" />
                <circle cx="300" cy="300" r="150" strokeWidth="1" fill="none" stroke="#a8d5b5" />
                <circle cx="300" cy="300" r="220" strokeWidth="0.5" fill="none" stroke="#a8d5b5" />
                <circle cx="300" cy="300" r="280" strokeWidth="0.5" fill="none" stroke="#a8d5b5" />
            </svg>
            
            <div className="relative max-w-[1240px] mx-auto grid grid-cols-2 gap-24 items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
                <div className="text-left">
                    <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#1a3a2a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#a8d5b5]">CO₂ Recovery &amp; Utilization</span>
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight mb-6 font-semibold">
                        Turn Your Carbon Emissions Into a Commercial Asset
                    </h2>
                    <p className="text-[1.05rem] text-[#1a3a2a] leading-[1.8] mb-4">
                        Carbon dioxide is no longer simply a liability — it's an emerging
                        industrial feedstock. Our{" "}
                        <strong className="font-bold">CO₂ recovery and utilisation</strong> solutions help plants
                        capture, purify, and productively deploy their carbon dioxide
                        streams, generating real revenue from what was previously vented to
                        atmosphere.
                    </p>
                    <p className="text-[1.05rem] text-[#1a3a2a] leading-[1.8] mb-4">
                        We engineer <strong className="font-bold">post-combustion CO₂ capture systems</strong>,
                        amine scrubbing and pressure swing adsorption units, cryogenic CO₂
                        purification, and CO₂ liquefaction for food-grade or industrial
                        applications. Our utilisation pathway design covers{" "}
                        <strong className="font-bold">CO₂-to-methanol</strong>, CO₂-enhanced cultivation, mineral
                        carbonation, and supply to industrial offtakers. This work aligns
                        with{" "}
                        <a
                            href="https://iea.org/reports/carbon-capture-utilisation-and-storage-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#a8d5b5] font-semibold hover:underline"
                        >
                            IEA CCUS frameworks
                        </a>{" "}
                        and supports <a href="#" className="text-[#a8d5b5] font-semibold hover:underline">net-zero decarbonisation roadmaps</a>.
                    </p>
                    <p className="text-[1.05rem] text-[#1a3a2a] leading-[1.8] mb-4">
                        Every CO₂ recovery system we design integrates with our{" "}
                        <a href="#energy" className="text-[#a8d5b5] font-semibold hover:underline">energy optimisation methodology</a>, ensuring the
                        capture process is as energy-lean as possible — a critical factor in
                        whole-system GHG accounting and carbon credit qualification.
                    </p>
                    <a href="#contact" className="inline-block bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] mt-6">
                        Explore CO₂ Recovery Solutions
                    </a>
                </div>
                <div className="flex flex-col gap-4 text-left">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-[#f8f9fa] border border-[rgba(106,170,125,0.15)] rounded-[10px] p-[1.6rem] transition-all duration-250 flex gap-[1.2rem] items-start hover:bg-[rgba(61,139,90,0.1)] hover:border-[rgba(106,170,125,0.35)] group">
                            <div className="text-[1.75rem] shrink-0 w-[52px] h-[52px] bg-[rgba(106,170,125,0.1)] rounded-[10px] flex items-center justify-center group-hover:bg-[#3d8b5a] transition-colors duration-250 group-hover:text-white">{card.icon}</div>
                            <div className="flex flex-col">
                                <h4 className="font-['Cormorant_Garamond',serif] text-[#1a3a2a] text-[1.1rem] font-semibold mb-[0.35rem]">{card.title}</h4>
                                <p className="text-[#4a6157] text-[0.82rem] leading-[1.65]">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CO2Section;
