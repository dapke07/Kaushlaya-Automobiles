import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Gallery from "./components/Gallery.jsx";
import ProductCategories from "./components/ProductCategories.jsx";
import VehicleBrands from "./components/VehicleBrands.jsx";
import Lubricants from "./components/Lubricants.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import ProductEnquiry from "./components/ProductEnquiry.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import FloatingButtons from "./components/FloatingButtons.jsx";
import { useLanguage } from "./i18n/LanguageContext.jsx";

export default function App() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
  }, [lang]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Gallery />
        <ProductCategories />
        <VehicleBrands />
        <Lubricants />
        <WhyChooseUs />
        <ProductEnquiry />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
