
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroShapes = () => {
  return (
    <div className="relative w-full h-full">
      {/* Shape container */}
      <div className="absolute inset-0">
        {/* Top Arrow */}
        <motion.img 
          src="/lovable-uploads/top_arrow.svg" 
          alt=""
          className="
            absolute
            hidden sm:block
            w-[41%] md:w-[40%] lg:w-[40%]
            top-[77%] md:top-[0%] lg:top-[0%]
            -left-[26%] md:-left-[6%] lg:-left-[6%]
            h-auto
          "
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
            w-[45%] md:w-[40%] lg:w-[41%]
            top-[76%] md:top-[12%] lg:top-[19%]
            -left-[6%] md:-left-[6%] lg:-left-[6%]
            h-auto
          "
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
            w-[45%] md:w-[45%] lg:w-[40%]
            bottom-[0%] md:bottom-[0%]
            left-[0%]
            h-auto
            max-h-[14vh] md:max-h-[100vh]
          "
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="
          absolute
          w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10
          top-[20%] md:top-[25%] lg:top-[30%]
          right-[20%] md:right-[25%] lg:right-[30%]
          bg-purple-500 rounded-full opacity-70
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
        "
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};

export default AnimatedHeroShapes;
