import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TestimonialsSection />
      <PortfolioSection />
      <ProcessSection />
      <AboutSection />
      <FinalCTASection />
      <ContactSection />
    </div>
  );
};

export default Index;