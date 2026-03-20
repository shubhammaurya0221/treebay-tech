import React, { useEffect } from 'react';
import '../css/Home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Home Components
import HomeHero from '../components/HomeComponents/HomeHero';
import HomeStats from '../components/HomeComponents/HomeStats';
import MissionBanner from '../components/HomeComponents/MissionBanner';
import HomeServices from '../components/HomeComponents/HomeServices';
import H2Spotlight from '../components/HomeComponents/H2Spotlight';
import Industries from '../components/HomeComponents/Industries';
import Testimonials from '../components/HomeComponents/Testimonials';
import FAQ from '../components/HomeComponents/FAQ';
import HomeResources from '../components/HomeComponents/HomeResources';
import HomeCTA from '../components/HomeComponents/HomeCTA';
// import WhyUs from '../components/HomeComponents/WhyUs';
// import ProcessTimeline from '../components/HomeComponents/ProcessTimeline';

function Home() {
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
            {/* <MissionBanner /> */}
            <HomeServices />
            <H2Spotlight />
            <Industries />
            
            {/* Reusing WhyUs and ProcessTimeline from the general components, assuming they fit the design */}
            {/* <WhyUs /> */}
            
            <section className="projects-strip">
                <div className="projects-strip-content">
                    <h2>250+ Projects Delivered. Across Industries. Across India.</h2>
                    <p>From <a href="/projects/hydrogen"><strong>green hydrogen plant</strong> commissioning</a> to large-scale <a href="/projects/food-processing"><strong>food processing</strong> plant installations</a> and multi-site <a href="/projects/fabrication"><strong>fabrication works</strong></a> — our portfolio speaks for itself.</p>
                </div>
                <div className="projects-strip-ctas">
                    <a href="/projects" className="btn-green">View All Projects</a>
                    <a href="/projects/hydrogen" className="btn-ghost" style={{borderColor: 'rgba(255,255,255,0.2)', color: 'white'}}>Hydrogen Projects</a>
                </div>
            </section>

            <Testimonials />
            <HomeResources />
            {/* <ProcessTimeline /> */}
            <FAQ />
            <HomeCTA />
            <Footer />
        </div>
    );
}

export default Home;
