import React from 'react';

const DistilleryPlantCTA = () => {
    return (
        <section className="py-24 px-[6%] bg-[#e8f5ed] border-y border-[rgba(61,139,90,0.18)] text-center relative overflow-hidden max-[640px]:py-16 max-[640px]:px-6" id="contact">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(106,170,125,0.15)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(61,139,90,0.08)_0%,transparent_60%)]"></div>
            <div className="text-[2.5rem] text-[#3d8b5a] mb-4 relative z-20">🌿</div>

            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] mb-4 relative z-10 font-semibold leading-tight">
                Ready to Build a <em className="italic text-[#3d8b5a]">High-Efficiency Distillery Plant</em>?
            </h2>

            <p className="text-[#4a6157] text-[1.1rem] leading-[1.75] max-w-[580px] mx-auto mb-10 relative z-10">
                <strong className="font-bold text-[#1a3a2a]">Treebay Technology</strong> is a leading 
                <strong className="font-bold text-[#1a3a2a]"> distillery plant manufacturer in India</strong> delivering 
                next-generation <strong className="font-bold text-[#1a3a2a]">ethanol and distillation solutions</strong> 
                focused on <strong className="font-bold text-[#1a3a2a]">maximum alcohol yield</strong>, 
                <strong className="font-bold text-[#1a3a2a]"> energy efficiency</strong>, and 
                <strong className="font-bold text-[#1a3a2a]"> operational reliability</strong>. 

                Our systems are engineered for 
                <strong className="font-bold text-[#1a3a2a]"> multi-feedstock processing</strong>, including 
                <strong className="font-bold text-[#1a3a2a]"> molasses</strong>, <strong className="font-bold text-[#1a3a2a]"> cane syrup</strong>, and 
                <strong className="font-bold text-[#1a3a2a]"> grain-based distilleries</strong>.
            </p>

            <div className="flex justify-center gap-6 relative z-20 flex-wrap">
                <a href="/contact-us" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)]">
                    Request a Distillery Consultation
                </a>
                <a href="/projects" className="border border-[#3d8b5a] text-[#3d8b5a] px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#3d8b5a] hover:text-white">
                    View Distillery Projects
                </a>
            </div>
        </section>
    );
};

export default DistilleryPlantCTA;