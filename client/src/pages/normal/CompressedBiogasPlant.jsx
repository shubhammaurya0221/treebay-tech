import React, { useEffect } from 'react';
import Navbar from '../../components/commonComponent/Navbar';
import Footer from '../../components/commonComponent/Footer';

// Home Components
import HomeHero from '../../components/CompressedBiogasPlant/HomeHero';
import HomeStats from '../../components/CompressedBiogasPlant/HomeStats';
import HomeServices from '../../components/CompressedBiogasPlant/HomeServices';                                                                                                                                                                                                                                                                                                                                        
import H2Spotlight from '../../components/CompressedBiogasPlant/H2Spotlight';
import FAQ from '../../components/CompressedBiogasPlant/FAQ';
import HomeCTA from '../../components/CompressedBiogasPlant/HomeCTA';
import WhyUs from '../../components/CompressedBiogasPlant/WhyUs';  
import ContactForm from '../../components/commonComponent/ContactForm';

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
