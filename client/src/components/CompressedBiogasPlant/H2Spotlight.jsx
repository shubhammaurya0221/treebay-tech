import React from 'react';
import './H2Spotlight.css';

const H2Spotlight = () => {
    return (
        <div className="h2-spotlight overflow-hidden" id="cbg-technology">

            {/* LEFT CONTENT */}
            <div className="h2-left">
                <div className="section-tag-h2">Compressed Biogas Technology</div>

                <h2 className="h2-spot-title">
                    Advanced <span>Biomethanation & Gas Upgradation Systems</span>
                </h2>

                <p>
                    <strong>Treebay Technology</strong> provides high-performance
                    <strong> biomethanation systems</strong> based on advanced reactor designs for
                    efficient <strong>anaerobic digestion</strong> and gas generation.
                </p>

                <p>
                    Our solutions ensure <strong>stable digestion process</strong>,
                    <strong> high gas yield</strong>, reduced retention time, and
                    efficient <strong>organic waste treatment</strong> across multiple industries.
                </p>

                <p>
                    We support seamless integration with <strong>distilleries</strong>,
                    <strong> ethanol plants</strong>, <strong>food processing units</strong>, and
                    <strong> municipal waste systems</strong> for sustainable energy generation.
                </p>

                <div className="h2-cta">
                    <a href="/services/cbg-plants" className="btn-green">
                        Explore CBG Solutions
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
                        <div className="h2-stat-val">CSTR</div>
                        <div className="h2-stat-label">
                            Continuous Stirred Tank Reactor Technology
                        </div>
                    </div>

                    <div className="h2-stat">
                        <div className="h2-stat-val">High Yield</div>
                        <div className="h2-stat-label">
                            Optimized Biogas Production Efficiency
                        </div>
                    </div>

                    <div className="h2-stat">
                        <div className="h2-stat-val">Smart Control</div>
                        <div className="h2-stat-label">
                            PLC-Based Automation & Monitoring
                        </div>
                    </div>

                    <div className="h2-stat">
                        <div className="h2-stat-val">Low O&amp;M</div>
                        <div className="h2-stat-label">
                            Reduced Operating & Maintenance Cost
                        </div>
                    </div>
                </div>

                <div className="h2-note">
                    <p><strong>⚙️ Key Technical Features:</strong></p>
                    <ul>
                        <li>Advanced agitation system for uniform digestion</li>
                        <li>Designed for high-solid organic waste</li>
                        <li>Integrated gas holders & real-time monitoring</li>
                        <li>Anti-corrosion and long-life construction</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default H2Spotlight;