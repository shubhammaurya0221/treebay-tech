import Navbar from "../../components/commonComponent/Navbar";
import Footer from "../../components/commonComponent/Footer";
import ContactForm from "../../components/commonComponent/ContactForm";

import Hero from "../../components/CommissioningStartupCompo/Hero";
import Stats from "../../components/CommissioningStartupCompo/Stats";
import Intro from "../../components/CommissioningStartupCompo/Intro";
import Services from "../../components/CommissioningStartupCompo/Services";
import IntegrationBand from "../../components/CommissioningStartupCompo/IntegrationBand";
import WhyUs from "../../components/CommissioningStartupCompo/WhyUs";
import CTA from "../../components/CommissioningStartupCompo/CTA";

const CommissioningStartup = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <Intro />
    <Services />
    <WhyUs /> 
    <IntegrationBand />
    <CTA/>
    <ContactForm />
    <Footer />
  </>
);

export default CommissioningStartup;
