import React from 'react';

const DistilleryPlantMissionBanner = () => {
    return (
        <div className="mission-banner" role="complementary" aria-label="Mission Alert">
            <span className="mission-badge">🇮🇳 Gov. Initiative</span>
            <div className="mission-divider" style={{ width: '1px', height: '28px', background: 'rgba(0,38,1,0.2)', flexShrink: '0' }}></div>
            <p className="mission-text">
                Treebay Technology is an approved solution partner under India's
                <a href="https://mnre.gov.in/national-green-hydrogen-mission" target="_blank" rel="noopener noreferrer">National Green Hydrogen Mission</a>
                — committed to enabling cost-effective <strong>hydrogen production</strong> and scaling <strong>green hydrogen plant</strong> capacity across India by 2030.
            </p>
            <a href="/services/green-hydrogen" className="mission-cta">Our H₂ Solutions</a>
        </div>
    );
};

export default DistilleryPlantMissionBanner;
