const CTA = () => {
  return (
    <section className="py-[6.5rem] px-[6%] bg-[#e8f5ed] border-y border-[rgba(61,139,90,0.18)] text-center relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_60%_80%_at_20%_50%,rgba(106,170,125,0.15)_0%,transparent_65%),radial-gradient(ellipse_50%_60%_at_80%_50%,rgba(61,139,90,0.08)_0%,transparent_60%)]" id="contact">
      <div className="text-[2.5rem] mb-4 relative z-20">🌿</div>
      <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.2rem,4.5vw,3.4rem)] text-[#1a3a2a] mb-5 relative font-semibold leading-[1.1]">
        Ready to Commission <em className="not-italic text-[#3d8b5a]">With Confidence?</em>
      </h2>
      <p className="text-[#4a6157] text-[1.05rem] leading-[1.75] max-w-[720px] mx-auto mb-10 relative">
        Whether your plant is approaching mechanical completion, you're preparing for a performance guarantee test, or you need experienced support during a difficult start-up — our commissioning and start-up team is ready to engage. Most enquiries receive a detailed response within one business day.
      </p>
      <div className="flex justify-center gap-6 relative z-20 flex-wrap">
        <a
          href="/cdn-cgi/l/email-protection#177e797178577065727279676578747264643974787a"
          className="bg-[#3d8b5a] text-white px-[2.2rem] py-[0.95rem] rounded-[30px] font-semibold text-[0.92rem] tracking-[0.03em] no-underline transition-all duration-250 hover:bg-[#6aaa7d] hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(61,139,90,0.4)] inline-block"
        >
          Request a Technology Consultation
        </a>
        <a href="tel:+18000000000" className="border-[1.5px] border-[#1a3a2a] text-[#1a3a2a] px-[2.2rem] py-[0.95rem] rounded-[30px] font-medium text-[0.92rem] no-underline transition-all duration-250 hover:border-white hover:text-white hover:bg-[#a8d5b5] inline-block">
          Speak to Our Engineers
        </a>
      </div>
    </section>
  );
};

export default CTA;
