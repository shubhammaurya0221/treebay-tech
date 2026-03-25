import React, { useEffect } from 'react';
import Navbar from '../../components/commonComponent/Navbar';
import Footer from '../../components/commonComponent/Footer';

// Home Components
import HomeHero from '../../components/HomeComponents/HomeHero';
import HomeStats from '../../components/HomeComponents/HomeStats';
import HomeServices from '../../components/HomeComponents/HomeServices';
import H2Spotlight from '../../components/HomeComponents/H2Spotlight';
import Industries from '../../components/HomeComponents/Industries';
import Testimonials from '../../components/HomeComponents/Testimonials';
import FAQ from '../../components/HomeComponents/FAQ';
import HomeResources from '../../components/HomeComponents/HomeResources';
import HomeCTA from '../../components/HomeComponents/HomeCTA';
import WhyUs from '../../components/HomeComponents/WhyUs';
import Intro from '../../components/HomeComponents/Intro';
import ContactForm from '../../components/commonComponent/ContactForm';

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
            <Intro />
            <HomeServices />
            <H2Spotlight />
            <Industries />
            <WhyUs />
            
            <section className="bg-[#1a3a2a] py-20 px-[6%] flex items-center justify-between gap-12 max-[1100px]:flex-col max-[1100px]:text-center max-[640px]:py-16 max-[640px]:px-6 text-left max-[1100px]:items-center">
                <div className="max-w-[720px]">
                    <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2rem,4vw,2.8rem)] text-white leading-tight mb-4 font-semibold">250+ Projects Delivered. Across Industries. Across India.</h2>
                    <p className="text-[rgba(255,255,255,0.7)] text-[1.05rem] leading-[1.8]">From <a href="/projects/hydrogen" className="text-white no-underline hover:text-[#a8d5b5] font-bold">green hydrogen plant commissioning</a> to large-scale <a href="/projects/food-processing" className="text-white no-underline hover:text-[#a8d5b5] font-bold">food processing</a> plant installations and multi-site <a href="/projects/fabrication" className="text-white no-underline hover:text-[#a8d5b5] font-bold">fabrication works</a> — our portfolio speaks for itself.</p>
                </div>
                <div className="flex gap-4 flex-wrap shrink-0 max-[1100px]:justify-center">
                    <a href="/projects" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)]">View All Projects</a>
                    <a href="/projects/hydrogen" className="border border-[rgba(255,255,255,0.2)] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:border-[#a8d5b5] hover:text-[#a8d5b5]">Hydrogen Projects</a>
                </div>
            </section>

            <Testimonials />
            <HomeResources />
            <FAQ />
            <HomeCTA />
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Home;
