import React from 'react';
import './DistilleryPlantCTA.css';

const DistilleryPlantCTA = () => {
    return (
        <section className="cta-banner" id="contact">
            <div className="cta-leaf">🌿</div>

            <h2>
                Ready to Build a <em>High-Efficiency Distillery Plant</em>?
            </h2>

            <p>
                <strong>Treebay Technology</strong> is a leading 
                <strong> distillery plant manufacturer in India</strong> delivering 
                next-generation <strong>ethanol and distillation solutions</strong> 
                focused on <strong>maximum alcohol yield</strong>, 
                <strong> energy efficiency</strong>, and 
                <strong> operational reliability</strong>. 

                Our systems are engineered for 
                <strong> multi-feedstock processing</strong>, including 
                <strong> molasses</strong>, <strong> cane syrup</strong>, and 
                <strong> grain-based distilleries</strong>.
            </p>

            <div className="cta-row">
                <a href="/contact-us" className="btn-green">
                    Request a Distillery Consultation
                </a>
                <a href="/projects" className="btn-ghost">
                    View Distillery Projects
                </a>
            </div>
        </section>
    );
};

export default DistilleryPlantCTA;