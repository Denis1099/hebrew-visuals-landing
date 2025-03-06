
import { SparklesText } from "@/components/ui/sparkles-text";

const HeroTitle = () => {
  return (
    <div className=" ">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-0 md:mb-6 md:mt-16 animate-slide-up leading-relaxed hidden md:block">
        פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
      </h2>
      <p className="text-xl sm:text-xl md:text-xl font-bold mb-2 sm:mb-4 md:mb-2 mt-0 animate-slide-up">
        אני מזמין אותך לשיחת אפיון לעסק במתנה 🎁
        <br />
        במודל ״ אני האמיתי ״
      </p>
      <SparklesText 
        text={`אני האמיתי
          בעסק שלך!`}
        className="whitespace-pre-line text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 md:mb-10 animate-slide-up text-primary-pink md:text-primary-pink"
        colors={{ first: "#c0017e", second: "#5797ef" }}
        sparklesCount={15}
      />
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-8 md:mb-8 animate-slide-up">
        הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
      </p>
    </div>
  );
};

export default HeroTitle;
