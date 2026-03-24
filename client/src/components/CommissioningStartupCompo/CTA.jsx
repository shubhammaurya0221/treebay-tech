import './CTA.css'
const CTA = () => {
  return (
    <section className="cta-banner" id="contact">
      <div className="cta-leaf">🌿</div>
      <h2>Ready to Commission<em>With Confidence?</em></h2>
      <p>Whether your plant is approaching mechanical completion, you're preparing for a performance guarantee test, or you need experienced support during a difficult start-up — our commissioning and start-up team is ready to engage. Most enquiries receive a detailed response within one business day.</p>
      <div className="cta-row">
        <a
          href="/cdn-cgi/l/email-protection#177e797178577065727279676578747264643974787a"
          className="btn-green"
        >
          Request a Technology Consultation
        </a>
        <a href="tel:+18000000000" className="btn-ghost">
          Speak to Our Engineers
        </a>
      </div>
    </section>
  );
};

export default CTA;
