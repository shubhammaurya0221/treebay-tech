import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Intro from "./components/Intro";
import Services from "./components/Services";
import CO2Section from "./components/CO2Section";
import Energy from "./components/Energy";
import WhyUs from "./components/WhyUs";
import ProcessTimeline from "./components/ProcessTimeline";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Landing page — all original sections
const LandingPage = () => (
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;