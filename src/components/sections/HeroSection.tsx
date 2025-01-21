import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-start pt-32 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
          <div className="w-full md:w-1/2 text-right space-y-6 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-light mb-4 animate-slide-up">
              אני כאן כדי לקחת את התוכן שלך לרמה הבאה עם אסטרטגיה שיווקית, צילום מקצועי ועריכת סרטונים שמייצרים תוצאות.
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
              אני האמיתי בעסק שלך!
            </h1>
            <p className="text-xl md:text-2xl font-light animate-slide-up">
              הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="inline-block bg-white text-primary-pink px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                צור קשר
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in">
            <img 
              src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
              alt="תמונת גיבור"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;