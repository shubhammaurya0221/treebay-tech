import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "What is a Compressed Biogas (CBG) plant?",
            a: "A Compressed Biogas (CBG) plant converts organic waste into purified methane-rich gas that can be used as a renewable fuel alternative to CNG and LPG. It supports sustainable waste-to-energy conversion."
        },
        {
            q: "What feedstocks can be used in CBG plants?",
            a: "Our systems support a wide range of feedstocks including press mud, distillery waste, cattle dung, food waste, agricultural residues, and municipal organic waste."
        },
        {
            q: "What methane purity can be achieved?",
            a: "Our advanced biogas upgradation systems achieve 96%+ methane purity, meeting industry standards for use as a clean and efficient fuel."
        },
        {
            q: "Is the plant compliant with Indian government schemes?",
            a: "Yes, our CBG plant designs are fully aligned with SATAT and GOBARdhan initiatives, ensuring regulatory compliance and eligibility for government support."
        },
        {
            q: "Can CBG plants integrate with distilleries?",
            a: "Yes, our systems are engineered for seamless integration with ethanol plants and distilleries, enabling efficient utilization of process waste for energy generation."
        },
        {
            q: "Do you provide turnkey CBG plant solutions?",
            a: "Yes. Treebay Technology provides complete turnkey solutions — from design and engineering to installation, commissioning, and ongoing O&M support."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#e8f5ed] py-28 px-[6%] max-[640px]:py-16 max-[640px]:px-6" id="faq">
            <div className="grid grid-cols-[1fr_1.5fr] gap-24 items-start max-[1100px]:grid-cols-1 max-[1100px]:gap-12">

                {/* SIDEBAR */}
                <div className="text-left">
                    <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-[0.8rem] before:content-[''] before:block before:w-[20px] before:h-[1.5px] before:bg-[#3d8b5a]">FAQs</div>

                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] leading-[1.1] mb-4 font-semibold">
                        Common Questions About <em className="italic text-[#3d8b5a] not-italic">CBG Plants</em>
                    </h2>

                    <p className="text-[1.1rem] text-[#4a6157] leading-[1.8] mb-6">
                        Learn everything about <strong className="font-bold text-[#1a3a2a]">compressed biogas (CBG)</strong> plants — from
                        feedstock compatibility and methane purity to government compliance and
                        turnkey execution.
                    </p>

                    <a href="/contact-us" className="inline-block bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)]">
                        Ask Our Experts
                    </a>
                    <br /><br />

                    <a
                        href="/services/cbg-plants"
                        className="text-[0.82rem] color-[#3d8b5a] no-underline font-semibold hover:text-[#1a3a2a] transition-colors duration-200"
                    >
                        ⚙️ Explore CBG Solutions →
                    </a>
                </div>

                {/* FAQ LIST */}
                <div className="flex flex-col text-left">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-[rgba(61,139,90,0.18)] overflow-hidden first:border-t">
                            <button
                                className="w-full bg-none border-none text-left py-[1.4rem] flex justify-between items-start gap-4 cursor-pointer group"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={activeIndex === index}
                            >
                                <span className="font-['Cormorant_Garamond',serif] font-semibold text-[1.25rem] text-[#1a3a2a] leading-[1.4]">{faq.q}</span>
                                <span className={`w-[26px] h-[26px] rounded-full shrink-0 mt-[0.1rem] border-[1.5px] border-[rgba(106,170,125,0.25)] flex items-center justify-center text-[1rem] text-[#3d8b5a] font-bold transition-all duration-300 ${activeIndex === index ? 'rotate-45 bg-[#3d8b5a] text-white border-[#3d8b5a]' : ''}`}>+</span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === index ? 'max-h-[400px]' : 'max-h-0'}`}
                            >
                                <p className="pb-[1.4rem] text-[0.9rem] text-[#4a6157] leading-[1.8]">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;