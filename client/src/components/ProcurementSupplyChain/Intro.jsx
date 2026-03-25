import React from 'react';

const Intro = () => {
    const points = [
        "Independent procurement — we work for you, not the vendor",
        "Early procurement strategy integrated with FEED and detailed engineering",
        "Approved vendor list (AVL) development and global prequalification",
        "Competitive bidding on every package — no preferred supplier bias",
        "Technical bid evaluation (TBE) aligned with project specifications",
        "In-plant expediting and third-party inspection at manufacturer facilities",
        "Integrated freight, customs, and last-mile logistics management",
        "Supply chain risk identification and contingency planning from day one"
    ];

    return (
        <section className="py-28 px-[6%] bg-white" id="about">
            <div className="grid grid-cols-2 gap-24 items-center max-w-[1240px] mx-auto max-[1024px]:grid-cols-1 max-[1024px]:gap-12">
                <div className="text-left">
                    <span className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">
                        Why Procurement Discipline Defines Project Outcomes
                    </span>
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#1a3a2a] mb-6 font-semibold leading-[1.12]">
                        Poor Procurement Costs More Than It Saves. Every Single Time.
                    </h2>
                    <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] mb-4">
                        Procurement failure—not bad engineering—is the leading cause of industrial project
                        delays. Missed expediting milestones, underqualified vendors, and supply chain disruptions can easily cascade into months of schedule slip and millions in standby costs. <strong className="font-bold text-[#1a3a2a]">ApexPSC embeds itself directly into project engineering</strong> from the
                        outset to manage the complete cycle. By integrating our strategy with your technical team early on, we build genuine vendor competition, ensure quality at the source, and{" "}
                        <a href="#services" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">
                            eliminate blind spots from specification to site delivery.
                        </a>
                    </p>
                </div>
                <div className="bg-[#e8f5ed] rounded-[12px] p-[2.8rem] border border-[rgba(61,139,90,0.18)] relative overflow-hidden before:content-[''] before:absolute before:-top-[30px] before:-right-[30px] before:w-[180px] before:h-[180px] before:rounded-full before:bg-[radial-gradient(circle,rgba(61,139,90,0.12)_0%,transparent_70%)] text-left">
                    <ul className="list-none">
                        {points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-[0.9rem] py-[0.9rem] border-b border-[rgba(61,139,90,0.1)] last:border-b-0 text-[0.9rem] text-[#4a6157] leading-[1.5]">
                                <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-[#3d8b5a]"></span>
                                {pt}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Intro;
