import React, { useEffect } from 'react';
import '../../css/normal/CompressedBiogasPlant.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Home Components
import HomeHero from '../../components/CompressedBiogasPlantComponent/HomeHero';
import HomeStats from '../../components/CompressedBiogasPlantComponent/HomeStats';
import HomeServices from '../../components/CompressedBiogasPlantComponent/HomeServices';                                                                                                                                                                                                                                                                                                                                        
import H2Spotlight from '../../components/CompressedBiogasPlantComponent/H2Spotlight';
import FAQ from '../../components/CompressedBiogasPlantComponent/FAQ';
import HomeCTA from '../../components/CompressedBiogasPlantComponent/HomeCTA';
import WhyUs from '../../components/CompressedBiogasPlantComponent/WhyUs';  
import ContactForm from '../../components/ContactForm';

function CompressedBiogasPlant() {
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
            <HomeHero />
            <HomeStats />
            <HomeServices />
            <H2Spotlight />
            <WhyUs />
            <FAQ />
            <HomeCTA />
            <ContactForm/>
            <Footer />
        </div>
    );
}

export default CompressedBiogasPlant;
