import Navbar from "../../components/Navbar";
import "../../css/normal/EthanolPlant2g.css";
import Hero from "../../components/EthanolPlant2g/Hero";
import Stats from "../../components/EthanolPlant2g/Stats";
import Intro from "../../components/EthanolPlant2g/Intro";
import Services from "../../components/EthanolPlant2g/Services";
import WhyUs from "../../components/EthanolPlant2g/WhyUs";
import ProcessTimeline from "../../components/EthanolPlant2g/ProcessTimeline";
import Footer from "../../components/Footer";
import EthanolComparison from "../../components/EthanolPlant2g/EthanolComparison";
import ContactForm from "../../components/ContactForm";

const EthanolPlant2g = () => (
  <>
    <Navbar />
    <Hero />
    <Stats />
    <Intro />
    <ProcessTimeline />
    <Services />
    <EthanolComparison />
    <WhyUs />
    <ContactForm />
    <Footer />
  </>
);

export default EthanolPlant2g;
