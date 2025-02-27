
import HeroTitle from './hero/HeroTitle';
import HeroForm from './hero/HeroForm';
import HeroImage from './hero/HeroImage';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col py-2 md:py-6 text-white">
      {/* Logo Container */}
      <div className="w-full px-4 mb-4 md:mb-0">
        <img 
          src="/lovable-uploads/gg-logo.webp" 
          alt="Logo" 
          className="h-10 md:h-14 w-auto mx-auto md:mr-6 md:ml-auto"
          width="64"
          height="64"
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl md:mt-4 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-0 md:gap-2">
          {/* Text Content Column */}
          <div className="w-full text-center space-y-4 md:space-y-12 animate-fade-in order-2 md:order-1">
            <HeroTitle />
            <HeroForm />
          </div>
          
          {/* Image Column */}
          <div className="w-full flex justify-center items-center order-1 md:order-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
