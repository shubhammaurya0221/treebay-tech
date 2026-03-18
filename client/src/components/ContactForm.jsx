import { useState } from "react";

const initialForm = { name: "", email: "", phone: "", service: "", message: "" };
const initialErrors = { name: "", email: "", phone: "", service: "", message: "" };

const validate = (fields) => {
  const errs = { ...initialErrors };
  if (!fields.name.trim()) errs.name = "Full name is required.";
  if (!fields.email.trim()) {
    errs.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = "Please enter a valid email address.";
  }
  if (fields.phone && !/^[+\d\s\-().]{7,20}$/.test(fields.phone)) {
    errs.phone = "Please enter a valid phone number.";
  }
  if (!fields.service) errs.service = "Please select a service.";
  if (!fields.message.trim()) {
    errs.message = "Message is required.";
  } else if (fields.message.trim().length < 20) {
    errs.message = "Please provide at least 20 characters.";
  }
  return errs;
};

const hasErrors = (errs) => Object.values(errs).some(Boolean);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{width:18,height:18}}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false, serverError: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) {
      const errs = validate(updated);
      setErrors((prev) => ({ ...prev, [name]: errs[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: errs[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(formData).map((k) => [k, true]));
    setTouched(allTouched);
    const errs = validate(formData);
    setErrors(errs);
    if (hasErrors(errs)) return;

    setStatus({ loading: true, success: false, serverError: "" });
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ loading: false, success: true, serverError: "" });
        setFormData(initialForm);
        setTouched({});
        setErrors(initialErrors);
        setTimeout(() => setStatus((s) => ({ ...s, success: false })), 6000);
      } else {
        setStatus({ loading: false, success: false, serverError: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ loading: false, success: false, serverError: "Unable to reach the server. Please try again later." });
    }
  };

  const field = (name) => ({
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    className: `form-control${errors[name] && touched[name] ? " error" : ""}`,
  });

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">

        {/* ── Left: info panel ── */}
        <div className="contact-info">
          <span className="sec-tag">Get in Touch</span>
          <h2 className="sec-title">Let's Build Something Sustainable Together</h2>
          <p className="sec-body">
            Whether you have a fully scoped project or an early-stage concept, our technology and process
            solutions team is ready to assess, design, and deliver. Tell us about your challenge and we'll
            respond within <strong style={{color:"var(--mint)"}}>2 business days</strong>.
          </p>
          <p className="sec-body">
            Most initial consultations are structured and delivered within 5 working days — at no obligation.
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <div className="contact-detail-text">
                <h5>Email Us</h5>
                <a href="mailto:hello@greenprocess.com">hello@greenprocess.com</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📞</div>
              <div className="contact-detail-text">
                <h5>Call Us</h5>
                <a href="tel:+18000000000">+1 800 000 0000</a>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">⏱️</div>
              <div className="contact-detail-text">
                <h5>Response Time</h5>
                <p>Within 2 business days</p>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">🌍</div>
              <div className="contact-detail-text">
                <h5>Global Coverage</h5>
                <p>EU · UK · North America · APAC</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form card ── */}
        <div className="contact-form-card">

          {/* Alerts */}
          {status.success && (
            <div className="alert alert-success">
              <CheckIcon />
              Thank you! Your message has been sent. We'll be in touch within 2 business days.
            </div>
          )}
          {status.serverError && (
            <div className="alert alert-error">
              ⚠️ {status.serverError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>

            {/* Row 1 — Name + Email */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Full Name <span>*</span></label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  {...field("name")}
                />
                {errors.name && touched.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email Address <span>*</span></label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  {...field("email")}
                />
                {errors.email && touched.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            {/* Row 2 — Phone + Service */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-phone">Phone <span style={{color:"var(--ltxt)",fontSize:"0.7rem",fontWeight:400,letterSpacing:0}}>(optional)</span></label>
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  autoComplete="tel"
                  {...field("phone")}
                />
                {errors.phone && touched.phone && <span className="form-error">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cf-service">Service of Interest <span>*</span></label>
                <select id="cf-service" {...field("service")}>
                  <option value="">Select a service…</option>
                  <option value="fermentation">Fermentation &amp; Distillation</option>
                  <option value="biogas">Anaerobic Digestion &amp; Biogas</option>
                  <option value="green-chem">Green Chemical Development</option>
                  <option value="co2">CO₂ Recovery &amp; Utilization</option>
                  <option value="energy">Energy Optimization</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
                {errors.service && touched.service && <span className="form-error">{errors.service}</span>}
              </div>
            </div>

            {/* Message */}
            <div className="form-group">
              <label htmlFor="cf-message">Your Message <span>*</span></label>
              <textarea
                id="cf-message"
                placeholder="Tell us about your project, feedstock, scale, timeline, or any questions you have…"
                {...field("message")}
              />
              {errors.message && touched.message && <span className="form-error">{errors.message}</span>}
            </div>

            {/* Submit */}
            <button type="submit" className="contact-submit" disabled={status.loading}>
              {status.loading ? (
                <>Sending…</>
              ) : (
                <>Send Message <SendIcon /></>
              )}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
