import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Intro from "../components/Intro";
import Services from "../components/Services";
import CO2Section from "../components/CO2Section";
import Energy from "../components/Energy";
import WhyUs from "../components/WhyUs";
import ProcessTimeline from "../components/ProcessTimeline";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => (
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

export default Home;
