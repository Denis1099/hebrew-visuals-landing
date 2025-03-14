import { useEffect, useState } from "react";

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

// Split logos between two rows
const topRowLogos = allLogos.slice(0, 8);
const bottomRowLogos = allLogos.slice(8);

const LogoShowcaseSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Duplicate logos for smooth scrolling
  const createDuplicates = (logos) => [...logos, ...logos];
  
  const topLogos = createDuplicates(topRowLogos);
  const bottomLogos = createDuplicates(bottomRowLogos);
  
  return (
    <section className="py-16 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-migdal text-[#6b46c1] text-center mb-12">
          מבין לקוחותינו
        </h2>
        
        {/* Top row - right to left */}
        <div className="mb-8 overflow-hidden" style={{ height: '100px' }}>
          <div className="whitespace-nowrap animate-marquee-rtl">
            {topLogos.map((logo, index) => (
              <div 
                key={`top-${index}`} 
                className="inline-flex h-20 items-center justify-center mx-4 md:mx-6"
                style={{ width: isMobile ? '120px' : '160px' }}
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${index % topRowLogos.length + 1}`} 
                  className="h-full w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  style={{ maxWidth: '90%', maxHeight: '90%' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom row - left to right */}
        <div className="overflow-hidden" style={{ height: '100px' }}>
          <div className="whitespace-nowrap animate-marquee-ltr">
            {bottomLogos.map((logo, index) => (
              <div 
                key={`bottom-${index}`} 
                className="inline-flex h-20 items-center justify-center mx-4 md:mx-6"
                style={{ width: isMobile ? '120px' : '160px' }}
              >
                <img 
                  src={logo} 
                  alt={`Client Logo ${(index % bottomRowLogos.length) + topRowLogos.length + 1}`} 
                  className="h-full w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  style={{ maxWidth: '90%', maxHeight: '90%' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Inline animations - better browser support */}
      <style jsx global>{`
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee-rtl {
          display: inline-block;
          animation: marquee-rtl 40s linear infinite;
        }
        
        .animate-marquee-ltr {
          display: inline-block;
          animation: marquee-ltr 40s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-marquee-rtl {
            animation-duration: 50s;
          }
          
          .animate-marquee-ltr {
            animation-duration: 50s;
          }
        }
      `}</style>
    </section>
  );
};

export default LogoShowcaseSection;