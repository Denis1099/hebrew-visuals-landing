import HeroTitle from './hero/HeroTitle';
import HeroForm from './hero/HeroForm';
import HeroImage from './hero/HeroImage';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 md:pt-32 bg-gradient-to-b from-[#6b46c1] via-[#805ad5] to-white text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center space-y-6 md:space-y-8 lg:space-y-12 animate-fade-in order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 animate-slide-up leading-relaxed md:hidden">
              פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
            </h2>
            <HeroTitle />
            <HeroForm />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;