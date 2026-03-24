import React from 'react';
import './DistilleryPlantH2Spotlight.css';

const DistilleryPlantH2Spotlight = () => {
    return (
        <div className="h2-spotlight overflow-hidden" id="evaporation-zld">

            {/* LEFT CONTENT */}
            <div className="h2-left">
                <div className="section-tag-h2">Evaporation & ZLD Technology</div>

                <h2 className="h2-spot-title">
                    Advanced <span>Vapor Evaporation Solutions</span> for ZLD Compliance
                </h2>

                <p>
                    <strong>Treebay Technology</strong> delivers a robust <strong>evaporation platform</strong> engineered to achieve
                    <strong> complete Zero Liquid Discharge (ZLD)</strong>. Designed to handle
                    <strong> high-TDS and complex effluent streams</strong>, our systems ensure
                    <strong> environmental compliance</strong> with high operational reliability.
                </p>

                <p>
                    Our solution supports <strong>molasses-based</strong>, <strong>grain-based</strong>, and
                    <strong> multi-feed distillery operations</strong>, offering flexibility,
                    <strong> sustainability</strong>, and optimized resource utilization across plant configurations.
                </p>

                <div className="h2-cta">
                    <a href="/services/evaporation-zld" className="btn-green">
                        Explore ZLD Solutions
                    </a>
                    <a href="/contact-us" className="btn-ghost">
                        Talk to an Expert
                    </a>
                </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="h2-right">

                <div className="h2-stat-grid">
                    <div className="h2-stat">
                        <div className="h2-stat-val">ZLD</div>
                        <div className="h2-stat-label">
                           Assured Zero Liquid Discharge Compliance
                        </div>
                    </div>

                    <div className="h2-stat">
                        <div className="h2-stat-val">Multi-Feed</div>
                        <div className="h2-stat-label">
                            Compatible with Molasses & Grain Operations
                        </div>
                    </div>

                    <div className="h2-stat">
                        <div className="h2-stat-val">High Efficiency</div>
                        <div className="h2-stat-label">
                            Optimized Thermal Performance with Low Fouling
                        </div>
                    </div>

                    <div className="h2-stat">
                        <div className="h2-stat-val">Low O&amp;M</div>
                        <div className="h2-stat-label">
                           Reduced Maintenance & Long-Term Reliability
                        </div>
                    </div>
                </div>

                {/* TECH FEATURES BLOCK */}
                <div className="h2-note tech-features">
                    <p className="tech-title">
                        ⚙️ <strong>Engineered for Performance & Reliability</strong>
                    </p>

                    <ul className="tech-list">
                        <li>
                            <span>🛡️</span>
                            Corrosion-resistant design built to handle high-TDS and aggressive effluents
                        </li>
                        <li>
                            <span>💨</span>
                            Integrated degasser & ammonia stripper for efficient gas removal
                        </li>
                        <li>
                            <span>🔧</span>
                            Modular and configurable for seamless integration across plant operations
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DistilleryPlantH2Spotlight;

 


