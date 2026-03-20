import React from 'react';

const DistilleryPlantH2Spotlight = () => {
    return (
        <div className="h2-spotlight" id="green-hydrogen">
            <div className="h2-left">
                <div className="section-tag-h2">Featured Capability</div>
                <h2 className="h2-spot-title">
                    Leading India's <span>Green Hydrogen</span> Revolution
                </h2>
                <p>
                    <strong>Hydrogen energy</strong> is the cornerstone of India's clean energy future. The Government of India's <a href="https://mnre.gov.in/national-green-hydrogen-mission" target="_blank" rel="noopener noreferrer"><strong>National Green Hydrogen Mission</strong></a> targets producing 5 million metric tonnes of <strong>green hydrogen</strong> annually by 2030, creating a ₹8 lakh crore ecosystem.
                </p>
                <p>
                    At Treebay Technology, we are at the forefront of this transformation. Our <strong>green hydrogen plant</strong> solutions cover electrolysis-based <strong>hydrogen production</strong>, <strong>hydrogen gas</strong> storage and distribution, compression systems, and integration with renewable energy sources.
                </p>
                <div className="h2-cta">
                    <a href="/services/green-hydrogen" className="btn-green">Explore H₂ Solutions</a>
                    <a href="/contact-us" className="btn-ghost">Talk to an H₂ Expert</a>
                </div>
            </div>

            <div className="h2-right">
                <div className="h2-stat-grid">
                    <div className="h2-stat">
                        <div className="h2-stat-val">5 MMT</div>
                        <div className="h2-stat-label">Target annual green hydrogen production by 2030</div>
                    </div>
                    <div className="h2-stat">
                        <div className="h2-stat-val">₹8L Cr</div>
                        <div className="h2-stat-label">Projected market opportunity for hydrogen in India</div>
                    </div>
                    <div className="h2-stat">
                        <div className="h2-stat-val">600K</div>
                        <div className="h2-stat-label">Jobs expected to be created in the sector by 2030</div>
                    </div>
                    <div className="h2-stat">
                        <div className="h2-stat-val">50 GW</div>
                        <div className="h2-stat-label">Electrolysis capacity to be installed across India</div>
                    </div>
                </div>
                <div className="h2-note">
                    <p>
                        🔗 <strong>Reference:</strong> Latest updates on India's hydrogen policies at the
                        <a href="https://mnre.gov.in/national-green-hydrogen-mission" target="_blank" rel="noopener noreferrer"> MNRE — NGHM portal</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DistilleryPlantH2Spotlight;
