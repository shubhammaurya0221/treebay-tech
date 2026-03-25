import React from 'react';

const H2Spotlight = () => {
    return (
        <div className="grid grid-cols-[1.2fr_1fr] items-stretch max-[1100px]:grid-cols-1 overflow-hidden" id="cbg-technology">

            {/* LEFT CONTENT */}
            <div className="bg-[#1a3a2a] p-[6rem_5rem] relative overflow-hidden max-[1100px]:p-[4rem_2rem] text-left">
                {/* Background H2 text */}
                <div className="absolute -right-8 -bottom-16 font-['Cormorant_Garamond',serif] font-bold text-[18rem] text-[rgba(168,213,181,0.05)] leading-none select-none pointer-events-none">
                    H₂
                </div>

                <div className="font-['DM_Mono',monospace] text-[0.68rem] tracking-[0.2em] uppercase text-[#a8d5b5] flex items-center gap-[0.6rem] mb-[0.8rem] before:content-[''] before:w-6 before:h-[1px] before:bg-[#a8d5b5]">
                    Compressed Biogas Technology
                </div>

                <h2 className="font-['Cormorant_Garamond',serif] font-semibold text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-[1.1] tracking-[-0.01em] mb-[1.5rem]">
                    Advanced <span className="text-[#a8d5b5] italic">Biomethanation & Gas Upgradation Systems</span>
                </h2>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-[1.5rem]">
                    <strong className="text-white font-medium">Treebay Technology</strong> provides high-performance
                    <strong className="text-white font-medium"> biomethanation systems</strong> based on advanced reactor designs for
                    efficient <strong className="text-white font-medium">anaerobic digestion</strong> and gas generation.
                </p>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-[1.5rem]">
                    Our solutions ensure <strong className="text-white font-medium">stable digestion process</strong>,
                    <strong className="text-white font-medium"> high gas yield</strong>, reduced retention time, and
                    efficient <strong className="text-white font-medium">organic waste treatment</strong> across multiple industries.
                </p>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-[1.5rem]">
                    We support seamless integration with <strong className="text-white font-medium">distilleries</strong>,
                    <strong className="text-white font-medium"> ethanol plants</strong>, <strong className="text-white font-medium">food processing units</strong>, and
                    <strong className="text-white font-medium"> municipal waste systems</strong> for sustainable energy generation.
                </p>

                <div className="mt-10 flex gap-4 flex-wrap">
                    <a href="/services/cbg-plants" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] max-[1100px]:w-full max-[1100px]:text-center">
                        Explore CBG Solutions
                    </a>
                    <a href="/contact-us" className="border border-[rgba(255,255,255,0.3)] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:border-[#a8d5b5] hover:bg-transparent hover:text-[#a8d5b5] max-[1100px]:w-full max-[1100px]:text-center">
                        Talk to an Expert
                    </a>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="bg-[#a8d5b5] p-20 flex flex-col gap-[1px] w-full max-[1100px]:p-[3rem_2rem] text-left">

                <div className="grid grid-cols-2 gap-[1px] flex-1 max-[768px]:grid-cols-1 max-[768px]:gap-[14px]">
                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[18px]">CSTR</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Continuous Stirred Tank Reactor Technology
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[18px]">High Yield</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Optimized Biogas Production Efficiency
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[18px]">Smart Control</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            PLC-Based Automation & Monitoring
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[18px]">Low O&amp;M</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Reduced Operating & Maintenance Cost
                        </div>
                    </div>
                </div>

                <div className="bg-[rgba(255,255,255,0.4)] p-[1.8rem] border-l-[3px] border-[#1a3a2a] mt-[1px] max-[768px]:mt-4 max-[768px]:p-[14px]">
                    <p className="text-[0.85rem] text-[#1a3a2a] leading-[1.6]"><strong>⚙️ Key Technical Features:</strong></p>
                    <ul className="mt-[0.7rem] ml-4 text-[0.85rem] text-[#1a3a2a] leading-[1.6] list-disc">
                        <li>Advanced agitation system for uniform digestion</li>
                        <li>Designed for high-solid organic waste</li>
                        <li>Integrated gas holders & real-time monitoring</li>
                        <li>Anti-corrosion and long-life construction</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default H2Spotlight;