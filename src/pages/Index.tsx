
import { lazy, Suspense, useEffect } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Navbar from "@/components/Navbar";

// Lazy load sections that are not immediately visible
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const ProblemSection = lazy(() => import("@/components/sections/ProblemSection"));
const PortfolioSection = lazy(() => import("@/components/sections/PortfolioSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

// Import HeroSection normally since it's above the fold
import HeroSection from "@/components/sections/HeroSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    let scrollTracked = {
      25: false,
      50: false,
      75: false,
      90: false
    };

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercent >= 25 && !scrollTracked[25]) {
        (window as any).fbq('track', 'ScrollMilestone', { milestone: '25%' });
        scrollTracked[25] = true;
      }
      if (scrollPercent >= 50 && !scrollTracked[50]) {
        (window as any).fbq('track', 'ScrollMilestone', { milestone: '50%' });
        scrollTracked[50] = true;
      }
      if (scrollPercent >= 75 && !scrollTracked[75]) {
        (window as any).fbq('track', 'ScrollMilestone', { milestone: '75%' });
        scrollTracked[75] = true;
      }
      if (scrollPercent >= 90 && !scrollTracked[90]) {
        (window as any).fbq('track', 'ScrollMilestone', { milestone: '90%' });
        scrollTracked[90] = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Global Animated Background */}
      <BackgroundAnimation />
      
      {/* Navbar */}
      <Navbar />
      
      <HeroSection />
      
      <Suspense fallback={
        <div className="h-96 flex items-center justify-center" role="status" aria-label="טוען...">
          טוען...
        </div>
      }>
        <ProblemSection />
        <TestimonialsSection />
        <ProcessSection />
        <PortfolioSection />
        <AboutSection />
        <FinalCTASection />
        <ContactSection />
      </Suspense>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
