
import { SparklesText } from "@/components/ui/sparkles-text";

const HeroTitle = () => {
  return (
    <div className="text-center">
      <h2 className="text-xl sm:text-xl md:text-2xl animate-slide-up leading-relaxed text-[#7105a3] font-assistant">
        אסטרטגיה, צילום ועריכת
      </h2>
      <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-2 md:mb-8 md:mt-0 animate-slide-up leading-relaxed text-[#7105a3] font-assistant">
        וידאו מקצועיים!
      </h2>
      
      <div className="relative mb-4 md:mb-8 flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <span className="text-5xl md:text-6xl lg:text-8xl leading-none text-[#c6008a]">"</span>
            <div className="flex flex-col items-center mx-1">
              <span className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl text-[#c6008a] font-migdal">
                אני האמיתי
              </span>
              <span className="text-5xl sm:text-4xl md:text-6xl lg:text-8xl text-[#004aad] font-migdal">
                בעסק שלך
              </span>
            </div>
            <span className="text-5xl md:text-6xl lg:text-8xl leading-none text-[#c6008a]">"</span>
          </div>
        </div>
      </div>
      
      <p className="text-lg sm:text-xl md:text-2xl mb-0 md:mb-2 animate-slide-up text-[#7105a3] font-assistant">
        הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
      </p>
      
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-8 md:mb-8 animate-slide-up text-[#7105a3] font-assistant">
        אני מזמין אותך לשיחת אפיון לעסק במתנה 🎁
      </p>
    </div>
  );
};

export default HeroTitle;
