import React from 'react';

const HomeResources = () => {
    const resources = [
        {
            thumb: '⚗️',
            thumbClass: 'bg-[#3d8b5a]',
            cat: 'Green Hydrogen · Policy',
            title: "India's National Green Hydrogen Mission: What Engineering Companies Need to Know in 2025",
            desc: "A comprehensive guide to the NGHM's targets, incentives, and what the 5 MMT hydrogen production target means for EPC contractors.",
            link: "/resources/blog/national-green-hydrogen-mission-guide"
        },
        {
            thumb: '🥬',
            thumbClass: 'bg-[#6aaa7d]',
            cat: 'Food Processing · Engineering',
            title: "Top 7 Engineering Mistakes That Cost Food Processing Units Millions",
            desc: "From layout design errors to machine manufacturing mismatches — the most expensive mistakes in food processing plant setup based on 50+ real projects.",
            link: "/resources/blog/food-processing-unit-engineering-mistakes"
        },
        {
            thumb: '⚙️',
            thumbClass: 'bg-[#1a3a2a]',
            cat: 'Machine Manufacturing · Technology',
            title: "CNC vs. Plasma vs. Laser: Choosing the Right Cutting Machine for Your Application",
            desc: "Our machine manufacturers compare the three dominant cutting technologies — capital cost, precision, material compatibility, and best-use industries.",
            link: "/resources/blog/cutting-machine-comparison-cnc-plasma-laser"
        }
    ];

    return (
        <section className="py-28 px-[6%] bg-white max-[640px]:py-16 max-[640px]:px-6 text-left" id="resources">
            <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">Latest Resources</div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-tight mb-4 font-semibold">Insights on <em className="italic text-[#3d8b5a] not-italic">Hydrogen Energy</em>, Fabrication & Food Processing</h2>
            <p className="text-[#4a6157] text-[1.1rem] leading-[1.75] max-w-[680px] mb-12">
                Expert articles, case studies, and whitepapers on <a href="/resources/blog?category=green-hydrogen" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">green hydrogen production</a>, 
                the <a href="/resources/blog?category=food-processing" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">food processing industry</a>, 
                and advances in <a href="/resources/blog?category=machine-manufacturing" className="text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">machine manufacturing</a>. 
                <a href="/resources" className="ml-2 text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">View all resources →</a>
            </p>
            
            <div className="grid grid-cols-3 gap-[1.6rem] max-[1100px]:grid-cols-1">
                {resources.map((res, idx) => (
                    <div className="rounded-[14px] border border-[rgba(61,139,90,0.18)] bg-white overflow-hidden transition-all duration-300 hover:shadow-[0_8px_28px_rgba(0,95,2,0.1)] hover:-translate-y-[3px]" key={idx}>
                        <div className={`h-[160px] ${res.thumbClass} flex items-center justify-center text-[3rem]`}>{res.thumb}</div>
                        <div className="p-6">
                            <div className="font-['Outfit',sans-serif] text-[0.65rem] tracking-[0.12em] uppercase text-[#3d8b5a] mb-[0.6rem] font-semibold">{res.cat}</div>
                            <h3 className="font-['Cormorant_Garamond',serif] text-[1.25rem] text-[#1a3a2a] mb-[0.8rem] leading-[1.2] font-semibold">{res.title}</h3>
                            <p className="text-[#4a6157] text-[0.85rem] leading-[1.6] mb-[1.2rem]">{res.desc}</p>
                            <a href={res.link} className="text-[#3d8b5a] font-semibold underline underline-offset-[3px] text-[0.85rem] hover:text-[#1a3a2a] transition-colors duration-200">Read Article →</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomeResources;
