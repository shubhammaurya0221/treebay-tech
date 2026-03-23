import Navbar from "../../components/Navbar";
import "../../css/normal/ServicesRoute.css";
import Hero from "../../components/ServicesComponents/Hero";
import Stats from "../../components/ServicesComponents/Stats";
import Intro from "../../components/ServicesComponents/Intro";
import Services from "../../components/ServicesComponents/Services";
import CO2Section from "../../components/ServicesComponents/CO2Section";
import Energy from "../../components/ServicesComponents/Energy";
import WhyUs from "../../components/ServicesComponents/WhyUs";
import ProcessTimeline from "../../components/ServicesComponents/ProcessTimeline";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

const ServicesRoute = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <Intro />
    <Services />
    <CO2Section />
    <Energy />
    <WhyUs />
    <ProcessTimeline />
    <ContactForm />
    <Footer />
  </>
);

export default ServicesRoute;
