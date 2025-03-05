
import HeroTitle from './hero/HeroTitle';
import HeroForm from './hero/HeroForm';
import AnimatedHeroShapes from './hero/AnimatedHeroShapes';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex flex-col py-2 md:py-6 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 opacity-100 z-0"></div>
      
      {/* SVG shapes - placed BEHIND the person */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <AnimatedHeroShapes />
      </div>
      
      {/* Logo Container - Adjusted for mobile to appear above navbar with margin */}
      <div className="w-full px-4 mt-16 sm:mt-8 md:mt-4 relative z-20">
        <img 
          src="/lovable-uploads/gg-logo.webp" 
          alt="Logo" 
          className="h-10 md:h-14 w-auto mx-auto md:mr-6 md:ml-auto"
          width="64"
          height="64"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl flex items-center relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-0 md:gap-2">
          {/* Text Content Column */}
          <div className="md:col-span-6 md:order-1 order-1 w-full text-center space-y-4 md:space-y-12 animate-fade-in">
            <HeroTitle />
            <HeroForm />
          </div>
          
          {/* Person Image Column */}
          <div className="md:col-span-6 md:order-2 order-2 w-full relative min-h-[300px] z-30">
            {/* PERSON IMAGE - on top of shapes */}
            <motion.img 
              src="/lovable-uploads/gabriel-image.webp"
              alt="תמונה של גבריאל גלמן"
              className="
                absolute
                w-auto 
                h-auto
                max-h-[80vh] md:max-h-[80vh] lg:max-h-[95vh]
                max-w-[280px] md:max-w-[400px] lg:max-w-[600px]
                top-[10px] md:top-[0px] lg:top-[0px]
                left-[50px] md:left-[0px] lg:left-[10px]
                object-contain
                z-30
              "
              width="500"
              height="600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
