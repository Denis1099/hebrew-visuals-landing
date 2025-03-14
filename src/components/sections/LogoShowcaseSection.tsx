
import { useEffect, useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Placeholder logos
const allLogos = [
  "/lovable-uploads/logos/logo1.webp",
  "/lovable-uploads/logos/logo2.webp",
  "/lovable-uploads/logos/logo3.webp",
  "/lovable-uploads/logos/logo4.webp",
  "/lovable-uploads/logos/logo5.webp",
  "/lovable-uploads/logos/logo6.webp",
  "/lovable-uploads/logos/logo7.webp",
  "/lovable-uploads/logos/logo8.webp",
  "/lovable-uploads/logos/logo9.webp",
  "/lovable-uploads/logos/logo10.webp",
  "/lovable-uploads/logos/logo11.webp",
  "/lovable-uploads/logos/logo12.webp",
  "/lovable-uploads/logos/logo13.webp",
  "/lovable-uploads/logos/logo14.webp",
  "/lovable-uploads/logos/logo15.webp",
  "/lovable-uploads/logos/logo16.webp",
];

// Split logos between two rows - top row will show first 8 logos, bottom row will show the remaining 8
const topRowLogos = allLogos.slice(0, 8);
const bottomRowLogos = allLogos.slice(8);

const LogoShowcaseSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile for responsive adjustments
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Logo component for consistent styling
  const LogoItem = ({ src, index, total }: { src: string; index: number; total: number }) => (
    <div 
      className="inline-flex h-20 items-center justify-center mx-4 md:mx-6"
      style={{ width: isMobile ? '120px' : '160px' }}
    >
      <img 
        src={src} 
        alt={`Client Logo ${index + 1}`} 
        className="h-full w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        style={{ maxWidth: '90%', maxHeight: '90%' }}
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="py-16 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-migdal text-[#6b46c1] text-center mb-12">
          מבין לקוחותינו
        </h2>
        
        {/* Top row - right to left */}
        <div className="mb-8" style={{ height: '100px' }}>
          <InfiniteSlider 
            gap={isMobile ? 16 : 24}
            duration={40}
            durationOnHover={120}
            reverse={true} // Right to left
            className="w-full"
          >
            {topRowLogos.map((logo, index) => (
              <LogoItem 
                key={`top-${index}`}
                src={logo}
                index={index}
                total={topRowLogos.length}
              />
            ))}
          </InfiniteSlider>
        </div>
        
        {/* Bottom row - left to right */}
        <div style={{ height: '100px' }}>
          <InfiniteSlider 
            gap={isMobile ? 16 : 24}
            duration={40}
            durationOnHover={120}
            reverse={false} // Left to right
            className="w-full"
          >
            {bottomRowLogos.map((logo, index) => (
              <LogoItem 
                key={`bottom-${index}`}
                src={logo}
                index={index + topRowLogos.length}
                total={bottomRowLogos.length}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcaseSection;
