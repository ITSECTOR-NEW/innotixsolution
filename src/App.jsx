/* eslint-disable no-unused-vars */
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
// import PartnerSlider from "./components/PartnerSlider";
import Services from "./components/Services";
import FaqSection from "./components/Faqs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

// Structure:

// Navbar
// Hero section
// Partners
// About Us
// Why Choose Us
// Services
// Our process
// FAQs
// Contact Us
// Footer
export default function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <AboutUs /> */}
      <WhyChooseUs />
      <Services />
      <Process />
      <FaqSection />
      <ContactUs />
      <Footer />
    </>
  );
}
