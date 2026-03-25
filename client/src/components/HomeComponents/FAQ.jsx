import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "What is the National Green Hydrogen Mission and how does Treebay Technology support it?",
            a: <>The <a href="https://mnre.gov.in/national-green-hydrogen-mission" target="_blank" rel="noopener noreferrer" className="text-[#3d8b5a] no-underline font-medium hover:underline"><strong>National Green Hydrogen Mission</strong></a> is India's flagship programme to produce 5 MMT of <strong>green hydrogen</strong> per year by 2030. Treebay Technology is an approved engineering partner. We design and build complete <strong>green hydrogen plant</strong> infrastructure — including water electrolysis systems, <strong>hydrogen gas</strong> compression and storage, and renewable energy integration. <a href="/services/green-hydrogen" className="text-[#3d8b5a] no-underline font-medium hover:underline">Learn more →</a></>
        },
        {
            q: "What does a complete food processing unit project include?",
            a: <>Our <strong>food processing unit</strong> projects are fully turnkey — from site survey and layout design to equipment selection, civil construction, mechanical and electrical installation, commissioning, and operator training. We serve the entire <strong>food processing industry</strong> spectrum including fruits, dairy, grains, beverages, and ready-to-eat segments. All <strong>food processing</strong> plants meet FSSAI, BIS, and international food safety standards. <a href="/services/food-processing" className="text-[#3d8b5a] no-underline font-medium hover:underline">Explore food processing services →</a></>
        },
        {
            q: "What types of cutting machines and industrial equipment do you manufacture?",
            a: <>As registered <strong>machine manufacturers</strong>, we produce a wide range of industrial equipment. Our <strong>cutting machine</strong> range includes plasma, laser, hydraulic shearing, and CNC cutting machines. Our broader <strong>machine manufacturing</strong> portfolio covers conveyor systems, hydraulic presses, mixing and filling machines, and custom automation lines — all designed, fabricated, and tested in our own facility. <a href="/services/machine-manufacturing" className="text-[#3d8b5a] no-underline font-medium hover:underline">Browse the machine catalogue →</a></>
        },
        {
            q: "What fabrication works standards and certifications do you hold?",
            a: <>Our <strong>fabrication works</strong> division is ISO 9001:2015 certified and compliant with ASME, IS 2062, AWS D1.1, and other standards. We perform structural steel fabrication, pressure vessel manufacturing, heat exchanger fabrication, and custom piping assemblies with CNC plasma <strong>cutting machine</strong> beds, submerged arc welding, and full NDT inspection. <a href="/services/fabrication-works" className="text-[#3d8b5a] no-underline font-medium hover:underline">See fabrication capabilities →</a></>
        },
        {
            q: "How is green hydrogen different from hydrogen peroxide or disodium hydrogen citrate syrup?",
            a: <><strong>Green hydrogen</strong> is produced through electrolysis of water powered by renewable energy — zero carbon. Regular <strong>hydrogen</strong> (grey/blue) comes from fossil fuels. <strong>Hydrogen peroxide</strong> (H₂O₂) is a different compound — an oxidising agent for industrial bleaching and disinfection. <strong>Disodium hydrogen citrate syrup</strong> is a pharmaceutical product from citric acid chemistry — unrelated to <strong>hydrogen gas</strong> for energy. Treebay Technology provides engineering for all these hydrogen-adjacent industries. <a href="/resources/hydrogen-guide" className="text-[#3d8b5a] no-underline font-medium hover:underline">Read our Green Hydrogen Guide →</a></>
        },
        {
            q: "What is the typical timeline for a green hydrogen plant?",
            a: <>A small-scale <strong>green hydrogen plant</strong> (100–500 kg/day <strong>hydrogen production</strong>) typically takes 8–14 months from FEED to commissioning. Larger industrial-scale <strong>hydrogen energy</strong> plants (1–10 TPD) require 18–30 months. Costs vary based on electrolyser technology, renewable power source, and site conditions. We offer free preliminary techno-economic assessments. <a href="/contact-us" className="text-[#3d8b5a] no-underline font-medium hover:underline">Request a feasibility consultation →</a></>
        },
        {
            q: "Does Treebay Technology offer after-sales support and O&M services?",
            a: <>Yes. We provide comprehensive O&M support for all our projects — <strong>green hydrogen plant</strong> systems, <strong>food processing unit</strong> equipment, and <strong>machine manufacturing</strong> products. Services include preventive maintenance contracts, spare parts supply, remote monitoring, on-site troubleshooting, and operator retraining. <a href="/contact-us" className="text-[#3d8b5a] no-underline font-medium hover:underline">Contact our support team →</a></>
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#e8f5ed] py-28 px-[6%] max-[640px]:py-16 max-[640px]:px-6 text-left" id="faq">
            <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
                <div className="text-left">
                    <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">FAQs</div>
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-6 font-semibold">Common Questions About Our <em className="italic text-[#3d8b5a] not-italic">Engineering Services</em></h2>
                    <p className="text-[1.1rem] text-[#4a6157] leading-[1.8] mb-10">From <strong className="font-bold text-[#1a3a2a]">green hydrogen</strong> feasibility to <strong className="font-bold text-[#1a3a2a]">food processing unit</strong> timelines and <strong className="font-bold text-[#1a3a2a]">machine manufacturing</strong> lead times — find honest, detailed answers here.</p>
                    <a href="/contact-us" className="inline-block bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] mb-8">Ask Our Experts</a><br />
                    <a href="/resources/blog" className="text-[0.82rem] text-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200">📖 Browse Our Resources Library →</a>
                </div>
                <div className="flex flex-col text-left">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-[rgba(61,139,90,0.18)] overflow-hidden first:border-t">
                            <button
                                className="w-full bg-none border-none text-left py-[1.4rem] flex justify-between items-start gap-4 cursor-pointer group"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="font-['Cormorant_Garamond',serif] font-semibold text-[1.25rem] text-[#1a3a2a] leading-[1.4] transition-colors duration-200 group-hover:text-[#3d8b5a]">{faq.q}</span>
                                <span className={`w-[26px] h-[26px] rounded-full shrink-0 mt-[0.1rem] border-[1.5px] border-[rgba(106,170,125,0.25)] flex items-center justify-center text-[1rem] text-[#3d8b5a] font-bold transition-all duration-300 ${activeIndex === index ? 'rotate-45 bg-[#3d8b5a] text-white border-[#3d8b5a]' : 'group-hover:border-[#3d8b5a]'}`}>+</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === index ? 'max-h-[600px] mb-8' : 'max-h-0'}`}
                            >
                                <div className="text-[0.93rem] text-[#4a6157] leading-[1.8]">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
