import React, { useRef, useEffect } from 'react';

const DistilleryPlantFAQ = () => {
    const faqRef = useRef(null);

    useEffect(() => {
        if (!faqRef.current) return;
        const faqBtns = faqRef.current.querySelectorAll('.faq-btn');
        const handleFaqClick = (e) => {
            const btn = e.currentTarget;
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            // Close others
            faqRef.current.querySelectorAll('.faq-item.open').forEach(el => {
                if (el !== item) {
                    el.classList.remove('open');
                    el.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            } else {
                item.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        };

        faqBtns.forEach(btn => btn.addEventListener('click', handleFaqClick));

        return () => {
             faqBtns.forEach(btn => btn.removeEventListener('click', handleFaqClick));
        }
    }, []);


    return (
        <section className="section faq-section" id="faq" ref={faqRef}>
            <div className="faq-layout">
                <div className="faq-sidebar">
                    <div className="section-tag">FAQs</div>
                    <h2>Common Questions About Our <em>Engineering Services</em></h2>
                    <p>From <strong>green hydrogen</strong> feasibility to <strong>food processing unit</strong> timelines and <strong>machine manufacturing</strong> lead times — find honest, detailed answers here.</p>
                    <a href="/contact-us" className="btn-green">Ask Our Experts</a><br /><br />
                    <a href="/resources/blog" style={{ fontSize: '0.82rem', color: 'var(--leaf)', textDecoration: 'none', fontWeight: '600' }}>📖 Browse Our Resources Library →</a>
                </div>
                <div className="faq-list">

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What is the National Green Hydrogen Mission and how does Treebay Technology support it?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>The <a href="https://mnre.gov.in/national-green-hydrogen-mission" target="_blank" rel="noopener noreferrer"><strong>National Green Hydrogen Mission</strong></a> is India's flagship programme to produce 5 MMT of <strong>green hydrogen</strong> per year by 2030. Treebay Technology is an approved engineering partner. We design and build complete <strong>green hydrogen plant</strong> infrastructure — including water electrolysis systems, <strong>hydrogen gas</strong> compression and storage, and renewable energy integration. <a href="/services/green-hydrogen">Learn more →</a></p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What does a complete food processing unit project include?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Our <strong>food processing unit</strong> projects are fully turnkey — from site survey and layout design to equipment selection, civil construction, mechanical and electrical installation, commissioning, and operator training. We serve the entire <strong>food processing industry</strong> spectrum including fruits, dairy, grains, beverages, and ready-to-eat segments. All <strong>food processing</strong> plants meet FSSAI, BIS, and international food safety standards. <a href="/services/food-processing">Explore food processing services →</a></p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What types of cutting machines and industrial equipment do you manufacture?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>As registered <strong>machine manufacturers</strong>, we produce a wide range of industrial equipment. Our <strong>cutting machine</strong> range includes plasma, laser, hydraulic shearing, and CNC cutting machines. Our broader <strong>machine manufacturing</strong> portfolio covers conveyor systems, hydraulic presses, mixing and filling machines, and custom automation lines — all designed, fabricated, and tested in our own facility. <a href="/services/machine-manufacturing">Browse the machine catalogue →</a></p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What fabrication works standards and certifications do you hold?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Our <strong>fabrication works</strong> division is ISO 9001:2015 certified and compliant with ASME, IS 2062, AWS D1.1, and other standards. We perform structural steel fabrication, pressure vessel manufacturing, heat exchanger fabrication, and custom piping assemblies with CNC plasma <strong>cutting machine</strong> beds, submerged arc welding, and full NDT inspection. <a href="/services/fabrication-works">See fabrication capabilities →</a></p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">How is green hydrogen different from hydrogen peroxide or disodium hydrogen citrate syrup?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p><strong>Green hydrogen</strong> is produced through electrolysis of water powered by renewable energy — zero carbon. Regular <strong>hydrogen</strong> (grey/blue) comes from fossil fuels. <strong>Hydrogen peroxide</strong> (H₂O₂) is a different compound — an oxidising agent for industrial bleaching and disinfection. <strong>Disodium hydrogen citrate syrup</strong> is a pharmaceutical product from citric acid chemistry — unrelated to <strong>hydrogen gas</strong> for energy. Treebay Technology provides engineering for all these hydrogen-adjacent industries. <a href="/resources/hydrogen-guide">Read our Green Hydrogen Guide →</a></p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What is the typical timeline for a green hydrogen plant?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>A small-scale <strong>green hydrogen plant</strong> (100–500 kg/day <strong>hydrogen production</strong>) typically takes 8–14 months from FEED to commissioning. Larger industrial-scale <strong>hydrogen energy</strong> plants (1–10 TPD) require 18–30 months. Costs vary based on electrolyser technology, renewable power source, and site conditions. We offer free preliminary techno-economic assessments. <a href="/contact-us">Request a feasibility consultation →</a></p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">Does Treebay Technology offer after-sales support and O&M services?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>Yes. We provide comprehensive O&M support for all our projects — <strong>green hydrogen plant</strong> systems, <strong>food processing unit</strong> equipment, and <strong>machine manufacturing</strong> products. Services include preventive maintenance contracts, spare parts supply, remote monitoring, on-site troubleshooting, and operator retraining. <a href="/contact-us">Contact our support team →</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DistilleryPlantFAQ;
