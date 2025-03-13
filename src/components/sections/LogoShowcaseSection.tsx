
import { useEffect, useRef } from "react";

// Placeholder logos - will be replaced with actual logos later
const placeholderLogos = [
  "/lovable-uploads/placeholder-logo-1.svg",
  "/lovable-uploads/placeholder-logo-2.svg",
  "/lovable-uploads/placeholder-logo-3.svg",
  "/lovable-uploads/placeholder-logo-4.svg",
  "/lovable-uploads/placeholder-logo-5.svg",
  "/lovable-uploads/placeholder-logo-6.svg",
  "/lovable-uploads/placeholder-logo-7.svg",
  "/lovable-uploads/placeholder-logo-8.svg",
  "/lovable-uploads/placeholder-logo-9.svg",
];

// Duplicate logos to ensure continuous scrolling
const logosGroup1 = [...placeholderLogos, ...placeholderLogos];
const logosGroup2 = [...placeholderLogos, ...placeholderLogos];

const LogoShowcaseSection = () => {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to animate the logos
    let animationFrameId: number;
    let topScrollPosition = 0;
    let bottomScrollPosition = 0;

    const animate = () => {
      if (topRowRef.current && bottomRowRef.current) {
        // Top row scrolls from left to right
        topScrollPosition += 0.5;
        if (topScrollPosition >= topRowRef.current.scrollWidth / 2) {
          topScrollPosition = 0;
        }
        topRowRef.current.style.transform = `translateX(${topScrollPosition}px)`;

        // Bottom row scrolls from right to left
        bottomScrollPosition -= 0.5;
        if (Math.abs(bottomScrollPosition) >= bottomRowRef.current.scrollWidth / 2) {
          bottomScrollPosition = 0;
        }
        bottomRowRef.current.style.transform = `translateX(${bottomScrollPosition}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="py-16 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-migdal text-[#6b46c1] text-center mb-12">
          מבין לקוחותינו
        </h2>

        {/* Top row - scrolling from left to right */}
        <div className="overflow-hidden mb-8">
          <div 
            ref={topRowRef} 
            className="flex items-center space-x-16 py-4"
            style={{ width: 'fit-content' }}
          >
            {logosGroup1.map((logo, index) => (
              <div 
                key={`top-${index}`} 
                className="flex-shrink-0 h-16 w-32 bg-white/80 rounded-lg shadow-md flex items-center justify-center p-4"
                style={{ marginRight: '4rem' }}
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/150x80?text=Logo+${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - scrolling from right to left */}
        <div className="overflow-hidden">
          <div 
            ref={bottomRowRef}
            className="flex items-center space-x-16 py-4"
            style={{ width: 'fit-content' }}
          >
            {logosGroup2.map((logo, index) => (
              <div 
                key={`bottom-${index}`} 
                className="flex-shrink-0 h-16 w-32 bg-white/80 rounded-lg shadow-md flex items-center justify-center p-4"
                style={{ marginRight: '4rem' }}
              >
                <img 
                  src={logo} 
                  alt={`Logo ${index + 1}`} 
                  className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/150x80?text=Logo+${index + 1}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoShowcaseSection;
