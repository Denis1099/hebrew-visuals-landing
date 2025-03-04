
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroShapes = () => {
  const [blueButtonPosition, setBlueButtonPosition] = useState({ top: 0, left: 0, width: 0 });
  
  // Find the blue button and track its position
  useEffect(() => {
    const updateButtonPosition = () => {
      const blueButton = document.querySelector('button.bg-\\[\\#5797ef\\]');
      if (blueButton) {
        const rect = blueButton.getBoundingClientRect();
        const scrollY = window.scrollY;
        setBlueButtonPosition({
          top: rect.top + scrollY,
          left: rect.left,
          width: rect.width
        });
      }
    };
    
    // Update on load and resize
    updateButtonPosition();
    window.addEventListener('resize', updateButtonPosition);
    
    // Update when DOM changes may affect button position
    const observer = new MutationObserver(updateButtonPosition);
    observer.observe(document.body, { subtree: true, childList: true });
    
    return () => {
      window.removeEventListener('resize', updateButtonPosition);
      observer.disconnect();
    };
  }, []);

  // Calculate arrow positions based on the blue button
  const isMobile = window.innerWidth < 768;
  const arrowPositioning = isMobile ? {
    // Mobile positioning - relative to blue button
    topArrow: {
      top: blueButtonPosition.top - 120,
      left: blueButtonPosition.left - 10
    },
    middleArrow: {
      top: blueButtonPosition.top - 70,
      left: blueButtonPosition.left - 20
    },
    bottomArrow: {
      top: blueButtonPosition.top + 50,
      left: blueButtonPosition.left - 20
    }
  } : {
    // Desktop positioning - original layout
    topArrow: {},
    middleArrow: {},
    bottomArrow: {}
  };

  return (
    <div className="w-full h-full">
      {/* Top Arrow */}
      <motion.img 
        src="/lovable-uploads/top_arrow.svg" 
        alt=""
        className={`
          absolute
          w-[250px] md:w-[650px] lg:w-[850px]
          ${isMobile ? '' : 'top-[70%] md:top-[0%] lg:top-[0%] left-[32%] md:-left-[10%] lg:-left-[0%]'}
          h-auto
          z-5
        `}
        style={{ 
          maxWidth: 'none',
          ...(isMobile && {
            top: `${arrowPositioning.topArrow.top}px`,
            left: `${arrowPositioning.topArrow.left}px`,
          }) 
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Middle Arrow */}
      <motion.img 
        src="/lovable-uploads/middle_arrow.svg" 
        alt=""
        className={`
          absolute
          w-[250px] md:w-[650px] lg:w-[850px]
          ${isMobile ? '' : 'top-[66%] md:top-[10%] lg:top-[0%] left-[10%] md:-left-[10%] lg:-left-[8%]'}
          h-auto
          z-5
        `}
        style={{ 
          maxWidth: 'none',
          ...(isMobile && {
            top: `${arrowPositioning.middleArrow.top}px`,
            left: `${arrowPositioning.middleArrow.left}px`,
          }) 
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Bottom Arrow */}
      <motion.img 
        src="/lovable-uploads/bottom_arrow.svg" 
        alt=""
        className={`
          absolute
          w-[300px] md:w-[725px] lg:w-[925px]
          ${isMobile ? '' : 'bottom-[4%] md:bottom-[0%] lg:bottom-[0%] -left-[0%] md:-left-[0%] lg:left-[0%]'}
          h-auto
          z-5
        `}
        style={{ 
          maxWidth: 'none',
          ...(isMobile && {
            top: `${arrowPositioning.bottomArrow.top}px`,
            left: `${arrowPositioning.bottomArrow.left}px`,
          }) 
        }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      
      {/* Floating elements */}
      <motion.div 
        className="
          absolute
          w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10
          top-[20%] md:top-[25%] lg:top-[30%]
          right-[20%] md:right-[25%] lg:right-[30%]
          bg-purple-500 rounded-full opacity-70
          z-20
        "
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <motion.div 
        className="
          absolute
          w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8
          bottom-[30%] md:bottom-[35%] lg:bottom-[40%]
          left-[25%] md:left-[30%] lg:left-[35%]
          bg-blue-500 rounded-full opacity-60
          z-20
        "
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default AnimatedHeroShapes;
