import React from 'react';

const HomeResources = () => {
    return (
        <section className="section" id="resources">
            <div className="section-tag">Latest Resources</div>
            <h2>Insights on <em>Hydrogen Energy</em>, Fabrication & Food Processing</h2>
            <p className="section-lead">
                Expert articles, case studies, and whitepapers on <a href="/resources/blog?category=green-hydrogen">green hydrogen production</a>, 
                the <a href="/resources/blog?category=food-processing">food processing industry</a>, 
                and advances in <a href="/resources/blog?category=machine-manufacturing">machine manufacturing</a>. 
                <a href="/resources">View all resources →</a>
            </p>
            
            <div className="resources-grid-home">
                <div className="res-card">
                    <div className="res-thumb">⚗️</div>
                    <div className="res-body">
                        <div className="res-cat">Green Hydrogen · Policy</div>
                        <h3>India's National Green Hydrogen Mission: What Engineering Companies Need to Know in 2025</h3>
                        <p>A comprehensive guide to the NGHM's targets, incentives, and what the 5 MMT hydrogen production target means for EPC contractors.</p>
                        <a href="/resources/blog/national-green-hydrogen-mission-guide" className="res-link">Read Article →</a>
                    </div>
                </div>

                <div className="res-card">
                    <div className="res-thumb t2">🥬</div>
                    <div className="res-body">
                        <div className="res-cat">Food Processing · Engineering</div>
                        <h3>Top 7 Engineering Mistakes That Cost Food Processing Units Millions</h3>
                        <p>From layout design errors to machine manufacturing mismatches — the most expensive mistakes in food processing plant setup based on 50+ real projects.</p>
                        <a href="/resources/blog/food-processing-unit-engineering-mistakes" className="res-link">Read Article →</a>
                    </div>
                </div>

                <div className="res-card">
                    <div className="res-thumb t3">⚙️</div>
                    <div className="res-body">
                        <div className="res-cat">Machine Manufacturing · Technology</div>
                        <h3>CNC vs. Plasma vs. Laser: Choosing the Right Cutting Machine for Your Application</h3>
                        <p>Our machine manufacturers compare the three dominant cutting technologies — capital cost, precision, material compatibility, and best-use industries.</p>
                        <a href="/resources/blog/cutting-machine-comparison-cnc-plasma-laser" className="res-link">Read Article →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeResources;
