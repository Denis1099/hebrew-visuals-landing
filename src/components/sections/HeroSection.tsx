import HeroTitle from './hero/HeroTitle';
import HeroForm from './hero/HeroForm';
import HeroImage from './hero/HeroImage';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-8 md:py-12 bg-gradient-to-b from-[#6b46c1] via-[#805ad5] to-white text-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
          {/* Text Content Column */}
          <div className="w-full text-center space-y-6 md:space-y-10 animate-fade-in order-2 md:order-1">
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