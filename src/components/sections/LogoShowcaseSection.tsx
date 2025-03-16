import React from 'react';
import { useIsMobile } from "@/hooks/use-mobile";

// First set of logos (for right-to-left carousel)
const firstSetLogos = [
  "/lovable-uploads/logos/logo1.webp",
  "/lovable-uploads/logos/logo2.webp",
  "/lovable-uploads/logos/logo3.webp",
  "/lovable-uploads/logos/logo4.webp",
  "/lovable-uploads/logos/logo5.webp",
  "/lovable-uploads/logos/logo6.webp",
  "/lovable-uploads/logos/logo7.webp",
  "/lovable-uploads/logos/logo8.webp",
];

// Second set of logos (for left-to-right carousel)
const secondSetLogos = [
  "/lovable-uploads/logos/logo9.webp",
  "/lovable-uploads/logos/logo10.webp",
  "/lovable-uploads/logos/logo11.webp",
  "/lovable-uploads/logos/logo12.webp",
  "/lovable-uploads/logos/logo13.webp",
  "/lovable-uploads/logos/logo14.webp",
  "/lovable-uploads/logos/logo15.webp",
  "/lovable-uploads/logos/logo16.webp",
];

// Reusable Logo Carousel Component
const LogoCarousel = ({ 
  logos, 
  direction = 'rtl', // 'rtl' (right-to-left) or 'ltr' (left-to-right)
  animationDuration = 172.5 
}) => {
  const isMobile = useIsMobile();
  const logoWidth = isMobile ? 120 : 160;
  const spaceBetween = 16;
  
  // Generate animation keyframes based on direction
  const keyframesName = direction === 'rtl' ? 'marquee-rtl' : 'marquee-ltr';
  
  // CSS for animations
  const animationCSS = `
    @keyframes ${keyframesName}-1 {
      0% { transform: translateX(${direction === 'rtl' ? '100%' : '-100%'}); }
      100% { transform: translateX(${direction === 'rtl' ? '-100%' : '100%'}); }
    }
    
    @keyframes ${keyframesName}-2 {
      0% { transform: translateX(${direction === 'rtl' ? '100%' : '-100%'}); }
      100% { transform: translateX(${direction === 'rtl' ? '-100%' : '100%'}); }
    }
  `;
  
  return (
    <div style={{ height: '100px', overflow: 'hidden', position: 'relative', marginTop: '2rem' }}>
      {/* First marquee */}
      <div style={{ 
        display: 'flex',
        position: 'absolute',
        width: 'max-content',
        animation: `${keyframesName}-1 ${animationDuration}s linear infinite`,
        animationDelay: '0s'
      }}>
        {logos.concat(logos).concat(logos).map((logo, index) => (
          <div 
            key={`logo1-${index}`} 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: `${logoWidth}px`,
              height: '70px',
              margin: `0 ${spaceBetween/2}px`,
              flexShrink: 0
            }}
          >
            <img 
              src={logo} 
              alt={`Client Logo ${index % logos.length + 1}`} 
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: 'all 0.5s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.7';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Second marquee - with offset */}
      <div style={{ 
        display: 'flex',
        position: 'absolute',
        width: 'max-content',
        animation: `${keyframesName}-2 ${animationDuration}s linear infinite`,
        animationDelay: `-${animationDuration / 2}s` /* Half the animation duration */
      }}>
        {logos.concat(logos).concat(logos).map((logo, index) => (
          <div 
            key={`logo2-${index}`} 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: `${logoWidth}px`,
              height: '70px',
              margin: `0 ${spaceBetween/2}px`,
              flexShrink: 0
            }}
          >
            <img 
              src={logo} 
              alt={`Client Logo ${index % logos.length + 1}`} 
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: 'all 0.5s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.7';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Inject the animation CSS */}
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
    </div>
  );
};

// Main component with both carousels
const LogoShowcaseSection = () => {
  return (
    <section style={{ padding: '4rem 0', position: 'relative' }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem'
      }}>
        <h2 className="text-3xl md:text-4xl font-migdal text-[#6b46c1] text-center mb-12">
          מבין לקוחותינו:
        </h2>
        
        {/* First carousel - right to left */}
        <LogoCarousel 
          logos={firstSetLogos} 
          direction="rtl" 
          animationDuration={172.5}
        />
        
        {/* Second carousel - left to right */}
        <LogoCarousel 
          logos={secondSetLogos} 
          direction="ltr" 
          animationDuration={172.5}
        />
      </div>
    </section>
  );
};

export default LogoShowcaseSection;