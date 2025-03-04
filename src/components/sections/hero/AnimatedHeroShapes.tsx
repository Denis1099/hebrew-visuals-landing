import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroShapes = () => {
  return (
    <div className="w-full h-full">
      {/* Top Arrow */}
      <motion.img 
        src="/lovable-uploads/top_arrow.svg" 
        alt=""
        className="
          absolute
          w-[250px] md:w-[650px] lg:w-[850px]
          top-[70%] md:top-[0%] lg:top-[0%]
          left-[32%] md:-left-[10%] lg:-left-[0%]
          h-auto
          z-5
        "
        style={{ maxWidth: 'none' }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Middle Arrow */}
      <motion.img 
        src="/lovable-uploads/middle_arrow.svg" 
        alt=""
        className="
          absolute
          w-[250px] md:w-[650px] lg:w-[850px]
          top-[66%] md:top-[10%] lg:top-[0%]
          left-[10%] md:-left-[10%] lg:-left-[8%]
          h-auto
          z-5
        "
        style={{ maxWidth: 'none' }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Bottom Arrow */}
      <motion.img 
        src="/lovable-uploads/bottom_arrow.svg" 
        alt=""
        className="
          absolute
          w-[300px] md:w-[725px] lg:w-[925px]
          bottom-[4%] md:bottom-[0%] lg:bottom-[0%]
          -left-[0%] md:-left-[0%] lg:left-[0%]
          h-auto
          z-5
        "
        style={{ maxWidth: 'none' }}
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