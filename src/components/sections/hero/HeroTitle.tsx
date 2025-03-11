
import { SparklesText } from "@/components/ui/sparkles-text";

const HeroTitle = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0 md:mb-6 md:mt-0 animate-slide-up leading-relaxed text-[#7105a3] font-assistant hidden md:block">
        אסטרטגיה, צילום ועריכת<br />וידאו מקצועיים!
      </h2>
      
      <div className="relative mb-4 md:mb-6 flex justify-center">
        <div className="flex items-start">
          <span className="text-5xl leading-none text-[#c6008a]">"</span>
          <div className="mx-1">
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#c6008a] font-migdal">
              אני האמיתי
            </div>
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#004aad] font-migdal">
              בעסק שלך
            </div>
          </div>
          <span className="text-5xl leading-none text-[#c6008a]">"</span>
        </div>
      </div>
      
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-2 animate-slide-up text-[#7105a3] font-assistant">
        הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
      </p>
      
      <p className="text-lg sm:text-xl md:text-xl font-bold mb-4 sm:mb-8 md:mb-8 animate-slide-up text-[#7105a3] font-assistant">
        אני מזמין אותך לשיחת אפיון לעסק במתנה 🎁
      </p>
    </div>
  );
};

export default HeroTitle;
