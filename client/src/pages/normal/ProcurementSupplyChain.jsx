import React from 'react'
import Navbar from '../../components/commonComponent/Navbar';
import ContactForm from '../../components/commonComponent/ContactForm';
import Footer from '../../components/commonComponent/Footer';

import Hero from '../../components/ProcurementSupplyChain/Hero';
import Stats from '../../components/ProcurementSupplyChain/stats';
import Intro from '../../components/ProcurementSupplyChain/Intro';
import Services from '../../components/ProcurementSupplyChain/Services';
import ProcessTimeline from '../../components/ProcurementSupplyChain/ProcessTimeLine';
import WhyUs from '../../components/ProcurementSupplyChain/WhyUs';
import GlobalReach from '../../components/ProcurementSupplyChain/GlobalReach';

function ProcurementSupplyChain() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Intro />
      <Services />
      <ProcessTimeline />
      <WhyUs />
      <GlobalReach />             
      <ContactForm />
      <Footer/>      
    </div>
  )
}

export default ProcurementSupplyChain
