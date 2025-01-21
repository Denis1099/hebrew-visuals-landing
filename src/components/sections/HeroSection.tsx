const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-start pt-24 md:pt-32 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 text-center md:text-right space-y-6 md:space-y-8 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-light mb-4 animate-slide-up">
              אני כאן כדי לקחת את התוכן שלך לרמה הבאה עם אסטרטגיה שיווקית, צילום מקצועי ועריכת סרטונים שמייצרים תוצאות.
            </h2>
            <div className="block md:hidden">
              <img 
                src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
                alt="תמונת גיבור"
                className="w-[85%] h-auto rounded-2xl shadow-xl mx-auto mb-8"
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 animate-slide-up">
              אני האמיתי בעסק שלך!
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 md:mb-10 animate-slide-up">
              הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
            </p>
            <div className="flex justify-center mb-12 md:mb-0">
              <a href="#contact" className="inline-block bg-white text-primary-pink px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                צור קשר
              </a>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 animate-fade-in">
            <img 
              src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
              alt="תמונת גיבור"
              className="w-[85%] h-auto rounded-2xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;