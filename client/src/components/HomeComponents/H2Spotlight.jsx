import React from 'react';

const H2Spotlight = () => {
    return (
        <div className="grid grid-cols-[1.2fr_1fr] items-stretch max-[1100px]:grid-cols-1 overflow-hidden" id="green-hydrogen">
            <div className="bg-[#1a3a2a] p-[6rem_5rem] relative overflow-hidden max-[1100px]:p-[4rem_2rem] text-left">
                {/* Background H2 text */}
                <div className="absolute -right-8 -bottom-16 font-['Cormorant_Garamond',serif] font-bold text-[18rem] text-[rgba(168,213,181,0.05)] leading-none select-none pointer-events-none">
                    H₂
                </div>

                <div className="font-['DM_Mono',monospace] text-[0.68rem] tracking-[0.2em] uppercase text-[#a8d5b5] flex items-center gap-[0.6rem] mb-[0.8rem] before:content-[''] before:w-6 before:h-[1px] before:bg-[#a8d5b5]">
                    Featured Capability
                </div>

                <h2 className="font-['Cormorant_Garamond',serif] font-semibold text-[clamp(2.5rem,4vw,3.5rem)] text-white leading-[1.1] tracking-[-0.01em] mb-[1.5rem]">
                    Leading India's <span className="text-[#a8d5b5] italic">Green Hydrogen</span> Revolution
                </h2>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-[1.5rem]">
                    <strong className="text-white font-medium">Hydrogen energy</strong> is the cornerstone of India's clean energy future. The Government of India's <a href="https://mnre.gov.in/national-green-hydrogen-mission" target="_blank" rel="noopener noreferrer" className="text-[#a8d5b5] no-underline border-b border-[rgba(168,213,181,0.35)] hover:border-[#a8d5b5] transition-colors duration-200"><strong className="text-white font-medium text-inherit">National Green Hydrogen Mission</strong></a> targets producing 5 million metric tonnes of <strong className="text-white font-medium">green hydrogen</strong> annually by 2030, creating a ₹8 lakh crore ecosystem.
                </p>

                <p className="text-[1.05rem] text-[rgba(255,255,255,0.7)] leading-[1.8] mb-[1.5rem]">
                    At Treebay Technology, we are at the forefront of this transformation. Our <strong className="text-white font-medium">green hydrogen plant</strong> solutions cover electrolysis-based <strong className="text-white font-medium">hydrogen production</strong>, <strong className="text-white font-medium">hydrogen gas</strong> storage and distribution, compression systems, and integration with renewable energy sources.
                </p>

                <div className="mt-10 flex gap-4 flex-wrap">
                    <a href="/services/green-hydrogen" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] max-[1100px]:w-full max-[1100px]:text-center">
                        Explore H₂ Solutions
                    </a>
                    <a href="/contact-us" className="border border-[rgba(255,255,255,0.3)] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:border-[#a8d5b5] hover:bg-transparent hover:text-[#a8d5b5] max-[1100px]:w-full max-[1100px]:text-center">
                        Talk to an H₂ Expert
                    </a>
                </div>
            </div>

            <div className="bg-[#a8d5b5] p-20 flex flex-col gap-[1px] w-full max-[1100px]:p-[3rem_2rem] text-left">
                <div className="grid grid-cols-2 gap-[1px] flex-1 max-[768px]:grid-cols-1 max-[768px]:gap-[14px]">
                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[22px]">5 MMT</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Target annual green hydrogen production by 2030
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[22px]">₹8L Cr</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Projected market opportunity for hydrogen in India
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[22px]">600K</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Jobs expected to be created in the sector by 2030
                        </div>
                    </div>

                    <div className="bg-[rgba(26,58,42,0.05)] p-[2.5rem_2rem] border border-[rgba(26,58,42,0.08)] transition-colors duration-300 hover:bg-[rgba(26,58,42,0.1)] max-[768px]:p-[14px]">
                        <div className="font-['Cormorant_Garamond',serif] font-bold text-[2.8rem] text-[#1a3a2a] leading-none mb-2 max-[768px]:text-[22px]">50 GW</div>
                        <div className="text-[0.85rem] text-[#4a6157] leading-[1.5] max-[768px]:text-[13px]">
                            Electrolysis capacity to be installed across India
                        </div>
                    </div>
                </div>

                <div className="bg-[rgba(255,255,255,0.4)] p-[1.8rem] border-l-[3px] border-[#1a3a2a] mt-[1px] max-[768px]:mt-4 max-[768px]:p-[14px]">
                    <p className="text-[0.85rem] text-[#1a3a2a] leading-[1.6]">
                        🔗 <strong className="font-bold">Reference:</strong> Latest updates on India's hydrogen policies at the{" "}
                        <a
                            href="https://mnre.gov.in/national-green-hydrogen-mission"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3d8b5a] font-semibold no-underline hover:text-[#1a3a2a] transition-colors duration-200"
                        >
                            MNRE — NGHM portal
                        </a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default H2Spotlight;
