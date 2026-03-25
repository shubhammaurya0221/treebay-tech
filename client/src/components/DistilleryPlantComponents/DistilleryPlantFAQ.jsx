import React, { useState } from 'react';

const DistilleryPlantFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "What makes Treebay Technology a leading distillery plant manufacturer in India?",
            a: <><strong>Treebay Technology</strong> is a trusted <strong>distillery plant manufacturer in India</strong> delivering end-to-end ethanol and distillation solutions. Our expertise includes <strong> fermentation systems</strong>, <strong>multi-pressure distillation</strong>, <strong> evaporation & ZLD systems</strong>, and <strong>plant automation</strong>. We focus on maximizing <strong>alcohol yield</strong>, improving <strong> energy efficiency</strong>, and ensuring long-term operational reliability.</>
        },
        {
            q: "What types of feedstock can your ethanol plants process?",
            a: <>Our <strong>ethanol plant solutions</strong> are designed for <strong> multi-feedstock processing</strong>, including <strong> molasses</strong>, <strong> cane syrup</strong>, and <strong> grain-based distilleries</strong>. This flexibility allows distillery operators to switch feedstock based on availability and cost, ensuring <strong> consistent production</strong> and improved profitability.</>
        },
        {
            q: "How do your distillation systems improve energy efficiency?",
            a: <>Our <strong>distillation systems</strong> use advanced <strong> multi-pressure column design</strong> and <strong> heat integration techniques</strong> to significantly reduce steam consumption. This results in <strong> lower energy costs</strong>, higher throughput, and improved overall <strong>process efficiency</strong>.</>
        },
        {
            q: "What is Zero Liquid Discharge (ZLD) and why is it important for distilleries?",
            a: <><strong>Zero Liquid Discharge (ZLD)</strong> ensures that no industrial wastewater is released into the environment. Our <strong>evaporation and condensate recovery systems</strong> enable complete effluent recycling, helping distilleries achieve <strong>environmental compliance</strong>, reduce <strong> water consumption</strong>, and operate sustainably.</>
        },
        {
            q: "How do you ensure high alcohol yield in ethanol production?",
            a: <>We optimize <strong>fermentation efficiency</strong> through advanced <strong> yeast management</strong>, controlled process parameters, and high-performance fermenter design. This ensures <strong> maximum sugar-to-ethanol conversion</strong>, reduced losses, and consistent <strong>high alcohol yield</strong>.</>
        },
        {
            q: "Do you provide turnkey distillery plant solutions?",
            a: <>Yes, we offer complete <strong>turnkey distillery solutions</strong> — from <strong> feasibility studies</strong> and <strong>process design</strong> to <strong> engineering</strong>, <strong>manufacturing</strong>, <strong> installation</strong>, and <strong>commissioning</strong>. We also provide <strong>automation systems</strong> and operator training for seamless plant operation.</>
        },
        {
            q: "What kind of operational support do you offer after plant installation?",
            a: <>We provide comprehensive <strong>after-sales support</strong> including <strong> maintenance services</strong>, <strong>spare parts supply</strong>, <strong> performance optimization</strong>, and <strong> remote monitoring</strong>. Our goal is to ensure <strong> uninterrupted plant operation</strong> and long-term efficiency.</>
        }
    ];

    const toggleFaq = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-28 px-[6%] bg-[#e8f5ed] max-[640px]:py-16 max-[640px]:px-6 text-left" id="faq">
            <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-w-[1240px] mx-auto max-[1100px]:grid-cols-1 max-[1100px]:gap-12">
                <div className="text-left">
                    <span className="inline-block text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-4">FAQs</span>
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-4 font-semibold">Common Questions About Our <em className="italic text-[#3d8b5a]">Engineering Services</em></h2>
                    <p className="text-[1.1rem] text-[#4a6157] leading-[1.8] mb-6">From <strong className="font-bold text-[#1a3a2a]">green hydrogen</strong> feasibility to <strong className="font-bold text-[#1a3a2a]">food processing unit</strong> timelines and <strong className="font-bold text-[#1a3a2a]">machine manufacturing</strong> lead times — find honest, detailed answers here.</p>
                    <a href="/contact-us" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)] mt-2">Ask Our Experts</a>
                    <div className="mt-8">
                        <a href="/resources/blog" className="text-[0.82rem] text-[#3d8b5a] no-underline font-semibold hover:underline">📖 Browse Our Resources Library →</a>
                    </div>
                </div>
                <div className="flex flex-col">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-[rgba(61,139,90,0.18)] overflow-hidden first:border-t first:border-[rgba(61,139,90,0.18)]">
                            <button 
                                className="w-full bg-none border-none text-left py-6 flex justify-between items-start gap-4 cursor-pointer group"
                                onClick={() => toggleFaq(idx)}
                                aria-expanded={openIndex === idx}
                            >
                                <span className="font-['Cormorant_Garamond',serif] font-semibold text-[1.25rem] text-[#1a3a2a] leading-[1.4] transition-colors duration-300 group-hover:text-[#3d8b5a]">{faq.q}</span>
                                <span className={`w-[26px] h-[26px] rounded-full shrink-0 mt-0.5 border border-[rgba(106,170,125,0.25)] flex items-center justify-center text-[1rem] text-[#3d8b5a] font-bold transition-all duration-300 ${openIndex === idx ? 'rotate-45 bg-[#3d8b5a] text-white border-[#3d8b5a]' : ''}`}>+</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === idx ? 'max-h-[400px]' : 'max-h-0'}`}>
                                <div className="pb-6 text-[0.9rem] text-[#4a6157] leading-[1.8] text-left">
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

export default DistilleryPlantFAQ;
