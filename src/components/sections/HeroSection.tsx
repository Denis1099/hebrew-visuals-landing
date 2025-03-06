
import HeroTitle from './hero/HeroTitle';
import HeroForm from './hero/HeroForm';
import AnimatedHeroShapes from './hero/AnimatedHeroShapes';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 z-0"></div>
      
      {/* SVG shapes container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <AnimatedHeroShapes />
      </div>
      
      {/* Content container */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Logo Container */}
        <div className="w-full px-4 mt-10 sm:mt-8 md:mt-4">
          <img 
            src="/lovable-uploads/gg-logo.webp" 
            alt="Logo" 
            className="h-10 md:h-14 w-auto mx-auto md:mr-6 md:ml-auto"
            width="64"
            height="64"
            loading="eager"
          />
        </div>

        {/* Main content area - adjusted vertical alignment */}
        <div className="flex-grow container mx-auto px-4 sm:px-8 max-w-7xl flex items-center">
          <div className="w-full grid grid-cols-1 md:grid-cols-12 md:items-start items-center gap-0 md:gap-2 md:pt-0">
            {/* Text Content Column - moved higher on desktop */}
            <div className="md:col-span-6 md:order-1 order-1 w-full text-center space-y-4 md:space-y-6 animate-fade-in text-white">
              <HeroTitle />
              <HeroForm />
            </div>
            
            {/* Person Image Column - ensure it attaches to bottom */}
            <div className="md:col-span-6 md:order-2 order-2 w-full relative h-[35vh] md:h-auto md:-left-[12%] lg:-left-[32%] z-30 md:self-end">
              <motion.div 
                className="absolute inset-x-0 bottom-0 flex justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* For sm breakpoint and up (640px+) */}
                <img 
                  src="/lovable-uploads/gabriel-image.webp"
                  alt="תמונה של גבריאל גלמן"
                  className="
                    hidden sm:block
                    h-auto
                    max-h-[45vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[90vh]
                    max-w-[200px] sm:max-w-[280px] md:max-w-[380px] lg:max-w-[480px]
                    object-contain
                    sm:translate-y-10 md:translate-y-20
                  "
                  width="400"
                  height="400"
                />
                
                {/* For xs to sm range (375px to 639px) */}
                <img 
                  src="/lovable-uploads/gabriel-image.webp"
                  alt="תמונה של גבריאל גלמן"
                  className="
                    hidden xs:block sm:hidden
                    h-auto
                    max-h-[40vh]
                    max-w-[180px]
                    object-contain
                    translate-y-0
                  "
                  width="180"
                  height="180"
                />
                
                {/* No image rendered below 375px (iPhone SE) */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
