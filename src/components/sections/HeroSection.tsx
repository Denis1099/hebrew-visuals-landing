
import HeroTitle from './hero/HeroTitle';
import HeroForm from './hero/HeroForm';
import AnimatedHeroShapes from './hero/AnimatedHeroShapes';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#ffffff,#abaaaa)]">
      {/* SVG shapes container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <AnimatedHeroShapes />
      </div>
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Logo Container */}
        <div className="w-full px-4 mt-4">
          <img 
            src="/lovable-uploads/gg-logo.webp" 
            alt="Logo" 
            className="h-10 md:h-14 w-auto mx-auto md:mr-6 md:ml-auto"
            width="64"
            height="64"
            loading="eager"
          />
        </div>

        {/* Main content area - CONDITIONAL LAYOUT */}
        <div className="flex-grow container mx-auto px-4 flex flex-col justify-between h-full">
          {/* Mobile/Tablet Layout (flex column) - Only visible below md breakpoint */}
          <div className="w-full flex flex-col items-center justify-between h-full md:hidden">
            <div className="w-full text-center space-y-4 text-black mt-8">
              <HeroTitle />
              <HeroForm />
            </div>
            
            <div className="w-full flex justify-center mt-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img 
                  src="/lovable-uploads/gabriel-image.webp"
                  alt="תמונה של גבריאל גלמן"
                  className="
                    h-auto
                    max-h-[40vh] sm:max-h-[45vh]
                    max-w-[200px] sm:max-w-[240px]
                    object-contain
                  "
                  width="240"
                  height="240"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Desktop Layout (grid) - Only visible at md breakpoint and above */}
          <div className="hidden md:grid w-full grid-cols-12 h-full">
            {/* Text Content Column */}
            <div className="col-span-9 order-1 w-full text-center space-y-6 text-black self-center">
              <HeroTitle />
              <HeroForm />
            </div>
            
            {/* Person Image Column */}
            <div className="col-span-3 order-2 w-full h-full relative -left-[12%] md:left-[0%] lg:left-[6%] z-10">
              <motion.div 
                className="absolute bottom-0 left-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <img 
                  src="/lovable-uploads/gabriel-image.webp"
                  alt="תמונה של גבריאל גלמן"
                  className="
                    h-auto
                    max-h-[70vh] lg:max-h-[80vh]
                    max-w-[380px] md:max-w-[300px] lg:max-w-[480px]
                    object-contain
                  "
                  width="400"
                  height="400"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
