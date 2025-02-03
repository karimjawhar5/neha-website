
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
