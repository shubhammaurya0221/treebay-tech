import React, { useEffect } from 'react';
import '../css/DistilleryPlant.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Home Components
import DistilleryPlantHero from '../components/DistilleryPlantComponents/DistilleryPlantHero';
import DistilleryPlantStats from '../components/DistilleryPlantComponents/DistilleryPlantStats';
import DistilleryPlantMissionBanner from '../components/DistilleryPlantComponents/DistilleryPlantMissionBanner';
import DistilleryPlantServices from '../components/DistilleryPlantComponents/DistilleryPlantServices';
import DistilleryPlantH2Spotlight from '../components/DistilleryPlantComponents/DistilleryPlantH2Spotlight';
import DistilleryPlantIndustries from '../components/DistilleryPlantComponents/DistilleryPlantIndustries';
import DistilleryPlantTestimonials from '../components/DistilleryPlantComponents/DistilleryPlantTestimonials';
import DistilleryPlantFAQ from '../components/DistilleryPlantComponents/DistilleryPlantFAQ';
import DistilleryPlantResources from '../components/DistilleryPlantComponents/DistilleryPlantResources';
import DistilleryPlantCTA from '../components/DistilleryPlantComponents/DistilleryPlantCTA';
// import WhyUs from '../components/DistilleryPlantComponents/WhyUs';
// import ProcessTimeline from '../components/DistilleryPlantComponents/ProcessTimeline';

function DistilleryPlant() {
    useEffect(() => {
        // Intersection Observer for animations
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('visible'), i * 80);
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }, []);

    return (
        <div>
            <Navbar />
            <DistilleryPlantHero />
            <DistilleryPlantStats />
            {/* <DistilleryPlantMissionBanner /> */}
            <DistilleryPlantServices />
            <DistilleryPlantH2Spotlight />
            <DistilleryPlantIndustries />

            {/* Reusing WhyUs and ProcessTimeline from the general components, assuming they fit the design */}
            {/* <WhyUs /> */}

            <section className="projects-strip">
                <div className="projects-strip-content">
                    <h2>250+ Projects Delivered. Across Industries. Across India.</h2>
                    <p>From <a href="/projects/hydrogen"><strong>green hydrogen plant</strong> commissioning</a> to large-scale <a href="/projects/food-processing"><strong>food processing</strong> plant installations</a> and multi-site <a href="/projects/fabrication"><strong>fabrication works</strong></a> — our portfolio speaks for itself.</p>
                </div>
                <div className="projects-strip-ctas">
                    <a href="/projects" className="btn-green">View All Projects</a>
                    <a href="/projects/hydrogen" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Hydrogen Projects</a>
                </div>
            </section>

            <DistilleryPlantTestimonials />
            <DistilleryPlantResources />
            {/* <ProcessTimeline /> */}
            <DistilleryPlantFAQ />
            <DistilleryPlantCTA />
            <Footer />
        </div>
    );
}

export default DistilleryPlant;
