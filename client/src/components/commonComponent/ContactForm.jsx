import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const validate = (fields) => {
  const errs = { ...initialErrors };
  if (!fields.name.trim()) errs.name = "Full name is required.";
  if (!fields.email.trim()) {
    errs.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errs.email = "Please enter a valid email address.";
  }
  if (!fields.phone.trim()) {
    errs.phone = "Phone number is required.";
  } else if (!/^[+\d\s\-().]{7,20}$/.test(fields.phone)) {
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

// Updated to accept className for animations
const SendIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: 18, height: 18 }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    serverError: "",
  });

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
    const allTouched = Object.fromEntries(
      Object.keys(formData).map((k) => [k, true])
    );
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
        setStatus({
          loading: false,
          success: false,
          serverError: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        loading: false,
        success: false,
        serverError: "Unable to reach the server. Please try again later.",
      });
    }
  };

  // Fixed the Tailwind syntax errors in the className
  const field = (name) => ({
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    className: `w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl font-sans text-[0.95rem] text-[#1a3a2a] outline-none transition-all duration-300 hover:border-[#a8d5b5] focus:border-[#3d8b5a] focus:ring-4 focus:ring-[#3d8b5a]/10 placeholder:text-gray-400 shadow-sm ${
      errors[name] && touched[name]
        ? "border-red-400 focus:border-red-500 focus:ring-red-400/20 bg-red-50/30"
        : ""
    }`,
  });

  return (
    <section className="py-24 px-[6%] bg-[#f4f9f6] relative overflow-hidden" id="contact">
      {/* Background Decorative Circles */}
      <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full border-[60px] border-[#3d8b5a]/5 pointer-events-none" />
      <div className="absolute -bottom-[80px] -left-[80px] w-[320px] h-[320px] rounded-full border-[50px] border-[#3d8b5a]/5 pointer-events-none" />

      <div className="max-w-[1150px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start relative z-10">
        
        {/* ── Left: Info Panel ── */}
        <div className="pt-4 text-left">
          <span className="inline-flex items-center gap-3 text-[0.75rem] font-bold tracking-[0.2em] uppercase text-[#3d8b5a] mb-4 before:content-[''] before:block before:w-[24px] before:h-[2px] before:bg-[#3d8b5a]">
            Get in Touch
          </span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,3.5rem)] text-[#1a3a2a] mb-4 relative font-semibold text-2xl lg:text-5xl leading-tight">
            Let's Build Something Sustainable Together
          </h2>
          <p className="text-[#4a6157] text-lg leading-relaxed mb-4">
            Whether you have a fully scoped project or an early-stage concept,
            our technology and process solutions team is ready to assess,
            design, and deliver. Tell us about your challenge and we'll respond
            within <strong className="text-[#3d8b5a] font-semibold">2 business days</strong>.
          </p>
          <p className="text-[#4a6157] text-lg leading-relaxed mb-10">
            Most initial consultations are structured and delivered within 5
            working days — at no obligation.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: "✉️", h: "Email Us", v: "hello@greenprocess.com", href: "mailto:hello@greenprocess.com" },
              { icon: "📞", h: "Call Us", v: "+1 800 000 0000", href: "tel:+18000000000" },
              { icon: "⏱️", h: "Response Time", v: "Within 2 business days" },
              { icon: "🌍", h: "Global Coverage", v: "EU · UK · North America · APAC" }
            ].map((d, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="shrink-0 w-12 h-12 bg-white shadow-sm border border-[#a8d5b5]/30 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                  {d.icon}
                </div>
                <div>
                  <h5 className="font-serif text-[0.9rem] font-bold text-[#1a3a2a] uppercase tracking-wider mb-0.5">
                    {d.h}
                  </h5>
                  {d.href ? (
                    <a href={d.href} className="text-[0.95rem] text-[#4a6157] hover:text-[#3d8b5a] font-medium transition-colors duration-200">
                      {d.v}
                    </a>
                  ) : (
                    <p className="text-[0.95rem] text-[#4a6157] font-medium">{d.v}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Form Card ── */}
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(26,58,42,0.06)] rounded-[24px] p-8 lg:p-12 relative">
          
          {/* Alerts */}
          {status.success && (
            <div className="p-4 rounded-xl text-sm mb-6 flex items-start gap-3 bg-[#e6f4ea] border border-[#a8d5b5] text-[#2d6645] font-medium animate-fade-in">
              <CheckIcon className="mt-0.5 shrink-0 text-[#3d8b5a]" />
              <p>Thank you! Your message has been sent. We'll be in touch within 2 business days.</p>
            </div>
          )}
          {status.serverError && (
            <div className="p-4 rounded-xl text-sm mb-6 flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 font-medium animate-fade-in">
              <span className="text-lg leading-none">⚠️</span>
              <p>{status.serverError}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            
            {/* Row 1 — Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-name" className="text-[0.75rem] font-bold tracking-widest uppercase text-[#4a6157]">
                  Full Name <span className="text-[#3d8b5a]">*</span>
                </label>
                <input
                  id="cf-name"
                  type="text"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  {...field("name")}
                />
                {errors.name && touched.name && (
                  <span className="text-[0.8rem] text-red-500 font-medium mt-1 animate-fade-in">{errors.name}</span>
                )}
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-email" className="text-[0.75rem] font-bold tracking-widest uppercase text-[#4a6157]">
                  Email Address <span className="text-[#3d8b5a]">*</span>
                </label>
                <input
                  id="cf-email"
                  type="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  {...field("email")}
                />
                {errors.email && touched.email && (
                  <span className="text-[0.8rem] text-red-500 font-medium mt-1 animate-fade-in">{errors.email}</span>
                )}
              </div>
            </div>

            {/* Row 2 — Phone + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-phone" className="text-[0.75rem] font-bold tracking-widest uppercase text-[#4a6157]">
                  Phone Number
                </label>
                <input
                  id="cf-phone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  autoComplete="tel"
                  {...field("phone")}
                />
                {errors.phone && touched.phone && (
                  <span className="text-[0.8rem] text-red-500 font-medium mt-1 animate-fade-in">{errors.phone}</span>
                )}
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label htmlFor="cf-service" className="text-[0.75rem] font-bold tracking-widest uppercase text-[#4a6157]">
                  Service of Interest <span className="text-[#3d8b5a]">*</span>
                </label>
                <select id="cf-service" {...field("service")} className={field("service").className + " cursor-pointer"}>
                  <option value="">Select a service…</option>
                  <option value="fermentation">Fermentation &amp; Distillation</option>
                  <option value="biogas">Anaerobic Digestion &amp; Biogas</option>
                  <option value="green-chem">Green Chemical Development</option>
                  <option value="co2">CO₂ Recovery &amp; Utilization</option>
                  <option value="energy">Energy Optimization</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
                {errors.service && touched.service && (
                  <span className="text-[0.8rem] text-red-500 font-medium mt-1 animate-fade-in">{errors.service}</span>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 mb-8">
              <label htmlFor="cf-message" className="text-[0.75rem] font-bold tracking-widest uppercase text-[#4a6157]">
                Your Message <span className="text-[#3d8b5a]">*</span>
              </label>
              <textarea
                id="cf-message"
                placeholder="Tell us about your project, feedstock, scale, timeline, or any questions you have…"
                {...field("message")}
                className={field("message").className + " resize-y min-h-[140px] leading-relaxed"}
              />
              {errors.message && touched.message && (
                <span className="text-[0.8rem] text-red-500 font-medium mt-1 animate-fade-in">{errors.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#438e64] text-white font-sans text-[1rem] font-bold tracking-wide rounded-xl shadow-[0_8px_20px_rgba(67,142,100,0.25)] cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#367552] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(67,142,100,0.35)] active:translate-y-0 active:shadow-sm disabled:opacity-70 disabled:cursor-not-allowed group"
              disabled={status.loading}
            >
              {status.loading ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                <>
                  Send Message 
                  <SendIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;