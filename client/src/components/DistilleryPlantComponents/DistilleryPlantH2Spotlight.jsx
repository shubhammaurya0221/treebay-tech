import React from 'react';

const DistilleryPlantH2Spotlight = () => {
    return (
        <div className="grid grid-cols-[1.2fr_1fr] max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:gap-8 max-[1100px]:px-4 max-[1100px]:max-w-[1200px] max-[1100px]:mx-auto overflow-hidden" id="evaporation-zld">

            {/* LEFT CONTENT */}
            <div className="bg-[#1a3a2a] p-24 max-[1100px]:p-16 max-[640px]:p-12 relative overflow-hidden text-left">
                <div className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-[#a8d5b5] flex items-center gap-[0.6rem] mb-3 before:content-[''] before:w-6 before:h-[1px] before:bg-[#a8d5b5]">Evaporation &amp; ZLD Technology</div>

                <h2 className="text-white text-[clamp(1.75rem,5vw,3rem)] leading-[1.2] mb-6 font-semibold break-words">
                    Advanced <span className="italic">Vapor Evaporation Solutions</span> for ZLD Compliance
                </h2>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-6">
                    <strong className="text-white font-medium">Treebay Technology</strong> delivers a robust <strong className="text-white font-medium">evaporation platform</strong> engineered to achieve
                    <strong className="text-white font-medium"> complete Zero Liquid Discharge (ZLD)</strong>. Designed to handle
                    <strong className="text-white font-medium"> high-TDS and complex effluent streams</strong>, our systems ensure
                    <strong className="text-white font-medium"> environmental compliance</strong> with high operational reliability.
                </p>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-6">
                    Our solution supports <strong className="text-white font-medium">molasses-based</strong>, <strong className="text-white font-medium">grain-based</strong>, and
                    <strong className="text-white font-medium"> multi-feed distillery operations</strong>, offering flexibility,
                    <strong className="text-white font-medium"> sustainability</strong>, and optimized resource utilization across plant configurations.
                </p>

                <div className="mt-10 flex gap-4 flex-wrap">
                    <a href="/services/evaporation-zld" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)]">
                        Explore ZLD Solutions
                    </a>
                    <a href="/contact-us" className="border border-[rgba(255,255,255,0.3)] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:border-[#a8d5b5] hover:text-[#a8d5b5] hover:bg-transparent">
                        Talk to an Expert
                    </a>
                </div>
                {/* Decoration H2 */}
                <div className="absolute -right-8 -bottom-16 font-['Cormorant_Garamond',serif] font-bold text-[18rem] text-[rgba(168,213,181,0.05)] leading-none select-none pointer-events-none">H₂</div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="bg-[#a8d5b5] p-20 max-[1100px]:p-12 max-[640px]:p-12 flex flex-col gap-[1px] text-left">

                <div className="grid grid-cols-2 gap-[1px] flex-1 max-[768px]:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] max-[768px]:gap-4">
                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-6">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[clamp(1.2rem,3vw,1.8rem)]">ZLD</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5]">
                           Assured Zero Liquid Discharge Compliance
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-6">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[clamp(1.2rem,3vw,1.8rem)] text-nowrap">Multi-Feed</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5]">
                            Compatible with Molasses &amp; Grain Operations
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-6">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[clamp(1.2rem,3vw,1.8rem)]">High Efficiency</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5]">
                            Optimized Thermal Performance with Low Fouling
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-6">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[clamp(1.2rem,3vw,1.8rem)]">Low O&amp;M</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5]">
                           Reduced Maintenance &amp; Long-Term Reliability
                        </div>
                    </div>
                </div>

                {/* TECH FEATURES BLOCK */}
                <div className="bg-[rgba(255,255,255,0.4)] p-[1.8rem] border-l-[3px] border-[#1a3a2a] mt-[1px]">
                    <p className="text-[#1a3a2a] font-bold mb-3 text-[0.85rem]">
                        ⚙️ Engineered for Performance &amp; Reliability
                    </p>

                    <ul className="m-0 p-0 list-none">
                        <li className="flex gap-2 mb-2 text-[#1a3a2a] text-[0.85rem] leading-[1.5]">
                            <span className="shrink-0">🛡️</span>
                            Corrosion-resistant design built to handle high-TDS and aggressive effluents
                        </li>
                        <li className="flex gap-2 mb-2 text-[#1a3a2a] text-[0.85rem] leading-[1.5]">
                            <span className="shrink-0">💨</span>
                            Integrated degasser &amp; ammonia stripper for efficient gas removal
                        </li>
                        <li className="flex gap-2 mb-2 text-[#1a3a2a] text-[0.85rem] leading-[1.5]">
                            <span className="shrink-0">🔧</span>
                            Modular and configurable for seamless integration across plant operations
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DistilleryPlantH2Spotlight;
