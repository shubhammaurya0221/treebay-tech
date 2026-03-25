import React from 'react';

const HomeCTA = () => {
    return (
        <section className="py-24 px-[6%] bg-[#e8f5ed] border-t border-b border-[rgba(61,139,90,0.18)] text-center relative overflow-hidden max-[640px]:py-16 max-[640px]:px-6" id="contact">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(106,170,125,0.15)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(61,139,90,0.08)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="text-[2.5rem] text-[#3d8b5a] mb-4 relative z-10">🌿</div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] mb-4 relative font-semibold">Ready to Build a <em className="italic text-[#3d8b5a] not-italic">Greener, Stronger</em> Industrial Future?</h2>
            <p className="text-[#4a6157] text-[1.1rem] leading-[1.75] max-w-[580px] mx-auto mb-10 relative">Whether you need a <strong className="font-bold">green hydrogen plant</strong>, a complete <strong className="font-bold">food processing unit</strong>, precision <strong className="font-bold">fabrication works</strong>, or specialist <strong className="font-bold">machine manufacturing</strong> — Treebay Technology is your single, accountable engineering partner.</p>
            <div className="flex justify-center gap-[1.5rem] relative z-10 flex-wrap">
                <a href="/contact-us" className="bg-[#3d8b5a] text-white px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#2d6645] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(61,139,90,0.3)]">Request a Free Consultation</a>
                <a href="/projects" className="border border-[#3d8b5a] text-[#3d8b5a] px-7 py-3.5 rounded-[30px] font-bold text-[0.9rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#3d8b5a] hover:text-white">View Our Projects</a>
            </div>
        </section>
    );
};

export default HomeCTA;
