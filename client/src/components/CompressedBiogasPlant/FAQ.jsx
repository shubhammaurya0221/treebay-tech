import React, { useRef, useEffect } from 'react';
import './FAQ.css';

const FAQ = () => {
    const faqRef = useRef(null);

    useEffect(() => {
        if (!faqRef.current) return;
        const faqBtns = faqRef.current.querySelectorAll('.faq-btn');

        const handleFaqClick = (e) => {
            const btn = e.currentTarget;
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');

            faqRef.current.querySelectorAll('.faq-item.open').forEach(el => {
                if (el !== item) {
                    el.classList.remove('open');
                    el.querySelector('.faq-btn').setAttribute('aria-expanded', 'false');
                }
            });

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
                
                {/* SIDEBAR */}
                <div className="faq-sidebar">
                    <div className="section-tag">FAQs</div>

                    <h2>
                        Common Questions About <em>CBG Plants</em>
                    </h2>

                    <p>
                        Learn everything about <strong>compressed biogas (CBG)</strong> plants — from 
                        feedstock compatibility and methane purity to government compliance and 
                        turnkey execution.
                    </p>

                    <a href="/contact-us" className="btn-green">
                        Ask Our Experts
                    </a>
                    <br /><br />

                    <a 
                        href="/services/cbg-plants" 
                        style={{ fontSize: '0.82rem', color: 'var(--leaf)', textDecoration: 'none', fontWeight: '600' }}
                    >
                        ⚙️ Explore CBG Solutions →
                    </a>
                </div>

                {/* FAQ LIST */}
                <div className="faq-list">

                    {/* Q1 */}
                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What is a Compressed Biogas (CBG) plant?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                A <strong>Compressed Biogas (CBG) plant</strong> converts organic waste into 
                                purified methane-rich gas that can be used as a renewable fuel alternative 
                                to <strong>CNG</strong> and <strong>LPG</strong>. It supports sustainable 
                                waste-to-energy conversion.
                            </p>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What feedstocks can be used in CBG plants?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Our systems support a wide range of feedstocks including 
                                <strong> press mud</strong>, <strong>distillery waste</strong>, 
                                <strong> cattle dung</strong>, <strong>food waste</strong>, 
                                <strong> agricultural residues</strong>, and 
                                <strong> municipal organic waste</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">What methane purity can be achieved?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Our advanced biogas upgradation systems achieve 
                                <strong> 96%+ methane purity</strong>, meeting industry standards 
                                for use as a clean and efficient fuel.
                            </p>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">Is the plant compliant with Indian government schemes?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Yes, our CBG plant designs are fully aligned with 
                                <strong> SATAT</strong> and <strong> GOBARdhan</strong> initiatives, 
                                ensuring regulatory compliance and eligibility for government support.
                            </p>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">Can CBG plants integrate with distilleries?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Yes, our systems are engineered for seamless integration with 
                                <strong> ethanol plants</strong> and <strong>distilleries</strong>, 
                                enabling efficient utilization of process waste for energy generation.
                            </p>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="faq-item">
                        <button className="faq-btn" aria-expanded="false">
                            <span className="faq-q">Do you provide turnkey CBG plant solutions?</span>
                            <span className="faq-icon">+</span>
                        </button>
                        <div className="faq-answer">
                            <p>
                                Yes. <strong>Treebay Technology</strong> provides complete turnkey solutions 
                                — from <strong>design and engineering</strong> to 
                                <strong> installation, commissioning</strong>, and 
                                <strong> ongoing O&amp;M support</strong>.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;