
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <h1 className="text-4xl font-migdal text-[#6b46c1] text-center mb-6">
          הפורטפוליו שלי
        </h1>
        
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="h-96 flex items-center justify-center">טוען...</div>}>
            <PortfolioSection />
          </Suspense>
        </div>
      </div>
      
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
