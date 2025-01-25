const HeroImage = () => {
  return (
    <>
      <div className="block md:hidden w-full mb-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold animate-slide-up leading-relaxed text-center mt-4 mb-2">
          פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
        </h2>
        <img 
          src="/lovable-uploads/heroimage.webp"
          alt="תמונת גיבור"
          className="w-[90%] sm:w-[80%] h-auto rounded-2xl shadow-xl mx-auto"
        />
      </div>
      <div className="hidden md:block w-full animate-fade-in">
        <img 
          src="/lovable-uploads/heroimage.webp"
          alt="תמונת גיבור"
          className="w-[90%] lg:w-[82%] h-auto rounded-2xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </>
  );
};

export default HeroImage;