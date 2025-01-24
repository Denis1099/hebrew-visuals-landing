const HeroImage = () => {
  return (
    <>
      <div className="block md:hidden w-full mb-4 space-y-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold animate-slide-up leading-relaxed text-center mt-20">
          פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
        </h2>
        <img 
          src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
          alt="תמונת גיבור"
          className="w-[90%] sm:w-[80%] h-auto rounded-2xl shadow-xl mx-auto"
        />
      </div>
      <div className="hidden md:block w-full animate-fade-in">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold animate-slide-up leading-relaxed mt-20 mb-8">
          פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
        </h2>
        <img 
          src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
          alt="תמונת גיבור"
          className="w-[90%] lg:w-[85%] h-auto rounded-2xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </>
  );
};

export default HeroImage;