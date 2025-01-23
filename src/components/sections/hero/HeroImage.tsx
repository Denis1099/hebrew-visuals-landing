const HeroImage = () => {
  return (
    <div className="w-full space-y-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-center mb-8">
        פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
      </h2>
      <div className="block md:hidden w-full mb-6">
        <img 
          src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
          alt="תמונת גיבור"
          className="w-[90%] sm:w-[80%] h-auto rounded-2xl shadow-xl mx-auto"
        />
      </div>
      <div className="hidden md:block w-full animate-fade-in">
        <img 
          src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
          alt="תמונת גיבור"
          className="w-[90%] lg:w-[85%] h-auto rounded-2xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default HeroImage;