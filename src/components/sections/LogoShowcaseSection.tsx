
import { useEffect, useState } from "react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { useIsMobile } from "@/hooks/use-mobile";

// All logos in one array
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

const LogoShowcaseSection = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Logo component for consistent styling
  const LogoItem = ({ src, index }: { src: string; index: number }) => (
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

  // Loading state while component is mounting
  if (!mounted) {
    return (
      <section className="py-16 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-migdal text-[#6b46c1] text-center mb-12">
            מבין לקוחותינו
          </h2>
          <div className="h-[100px] flex items-center justify-center">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-migdal text-[#6b46c1] text-center mb-12">
          מבין לקוחותינו
        </h2>
        
        <div style={{ height: '100px' }}>
          <InfiniteSlider 
            gap={isMobile ? 16 : 24}
            duration={40}
            durationOnHover={120}
            reverse={true}
            className="w-full"
            key="logo-carousel"
          >
            {allLogos.map((logo, index) => (
              <LogoItem 
                key={`logo-${index}`}
                src={logo}
                index={index}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcaseSection;
