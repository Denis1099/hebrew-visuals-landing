import { lazy, Suspense } from "react";
import AccessibilityWidget from "@/components/AccessibilityWidget";

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
  return (
    <div className="min-h-screen relative">
      {/* Logo Container */}
      <div className="w-full py-6 px-4">
        <img 
          src="/lovable-uploads/logo.webp" 
          alt="Logo" 
          className="h-16 w-auto mx-auto md:mr-6 md:ml-auto"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Main Content */}
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
      <AccessibilityWidget />
    </div>
  );
};

export default Index;