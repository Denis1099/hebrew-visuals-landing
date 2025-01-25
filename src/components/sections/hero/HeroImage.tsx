const HeroImage = () => {
  return (
    <>
      <div className="block md:hidden w-full mb-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold animate-slide-up leading-relaxed text-center mt-4 mb-2">
          פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
        </h2>
        <picture>
          <source media="(min-width: 768px)" srcSet="/lovable-uploads/gg-hero-image-desktop.webp" />
          <source media="(min-width: 480px)" srcSet="/lovable-uploads/gg-hero-image-tablet.webp" />
          <img 
            src="/lovable-uploads/gg-hero-image-mobile.webp"
            alt="תמונת גיבור"
            className="w-[90%] sm:w-[80%] h-auto rounded-2xl shadow-xl mx-auto"
            loading="eager"
          />
        </picture>
      </div>
      <div className="hidden md:block w-full animate-fade-in">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/lovable-uploads/gg-hero-image-desktop.webp" />
          <img 
            src="/lovable-uploads/gg-hero-image-tablet.webp"
            alt="תמונת גיבור"
            className="w-[90%] lg:w-[70%] h-auto rounded-2xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300"
            loading="eager"
          />
        </picture>
      </div>
    </>
  );
};

export default HeroImage;