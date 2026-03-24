import React, { useRef, useEffect } from 'react';
import './DistilleryPlantFAQ.css';

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
                            <span className="faq-q">What makes Treebay Technology a leading distillery plant manufacturer in India?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                <strong>Treebay Technology</strong> is a trusted <strong>distillery plant manufacturer in India</strong> delivering
                                end-to-end ethanol and distillation solutions. Our expertise includes
                                <strong> fermentation systems</strong>, <strong>multi-pressure distillation</strong>,
                                <strong> evaporation & ZLD systems</strong>, and <strong>plant automation</strong>.
                                We focus on maximizing <strong>alcohol yield</strong>, improving
                                <strong> energy efficiency</strong>, and ensuring long-term operational reliability.
                            </p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What types of feedstock can your ethanol plants process?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Our <strong>ethanol plant solutions</strong> are designed for
                                <strong> multi-feedstock processing</strong>, including
                                <strong> molasses</strong>, <strong> cane syrup</strong>, and
                                <strong> grain-based distilleries</strong>. This flexibility allows distillery operators
                                to switch feedstock based on availability and cost, ensuring
                                <strong> consistent production</strong> and improved profitability.
                            </p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">How do your distillation systems improve energy efficiency?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Our <strong>distillation systems</strong> use advanced
                                <strong> multi-pressure column design</strong> and
                                <strong> heat integration techniques</strong> to significantly reduce
                                steam consumption. This results in
                                <strong> lower energy costs</strong>, higher throughput, and
                                improved overall <strong>process efficiency</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What is Zero Liquid Discharge (ZLD) and why is it important for distilleries?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                <strong>Zero Liquid Discharge (ZLD)</strong> ensures that no industrial wastewater is released into the environment.
                                Our <strong>evaporation and condensate recovery systems</strong> enable complete effluent recycling,
                                helping distilleries achieve <strong>environmental compliance</strong>, reduce
                                <strong> water consumption</strong>, and operate sustainably.
                            </p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">How do you ensure high alcohol yield in ethanol production?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                We optimize <strong>fermentation efficiency</strong> through advanced
                                <strong> yeast management</strong>, controlled process parameters, and
                                high-performance fermenter design. This ensures
                                <strong> maximum sugar-to-ethanol conversion</strong>, reduced losses, and
                                consistent <strong>high alcohol yield</strong>.
                            </p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">Do you provide turnkey distillery plant solutions?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Yes, we offer complete <strong>turnkey distillery solutions</strong> — from
                                <strong> feasibility studies</strong> and <strong>process design</strong> to
                                <strong> engineering</strong>, <strong>manufacturing</strong>,
                                <strong> installation</strong>, and <strong>commissioning</strong>.
                                We also provide <strong>automation systems</strong> and operator training
                                for seamless plant operation.
                            </p>
                        </div>
                    </div>

                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What kind of operational support do you offer after plant installation?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                We provide comprehensive <strong>after-sales support</strong> including
                                <strong> maintenance services</strong>, <strong>spare parts supply</strong>,
                                <strong> performance optimization</strong>, and
                                <strong> remote monitoring</strong>. Our goal is to ensure
                                <strong> uninterrupted plant operation</strong> and long-term efficiency.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DistilleryPlantFAQ;
