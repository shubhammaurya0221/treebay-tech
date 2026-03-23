import React, { useEffect } from 'react';
import '../../css/normal/DistilleryPlant.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

// Home Components
import DistilleryPlantHero from '../../components/DistilleryPlantComponents/DistilleryPlantHero';
import DistilleryPlantStats from '../../components/DistilleryPlantComponents/DistilleryPlantStats';
import DistilleryPlantServices from '../../components/DistilleryPlantComponents/DistilleryPlantServices';
import DistilleryPlantH2Spotlight from '../../components/DistilleryPlantComponents/DistilleryPlantH2Spotlight';
import DistilleryPlantFAQ from '../../components/DistilleryPlantComponents/DistilleryPlantFAQ';
import DistilleryPlantCTA from '../../components/DistilleryPlantComponents/DistilleryPlantCTA';

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
            <DistilleryPlantServices />
            <DistilleryPlantH2Spotlight />
            <DistilleryPlantFAQ />   
            <DistilleryPlantCTA />
            <ContactForm/>
            <Footer />
        </div>
    );
}

export default DistilleryPlant;
