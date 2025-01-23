import { SparklesText } from "@/components/ui/sparkles-text";

const HeroTitle = () => {
  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-12">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 animate-slide-up leading-relaxed">
        פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
      </h2>
      <SparklesText 
        text="אני האמיתי בעסק שלך!"
        className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-12 animate-slide-up gradient-text md:bg-gradient-to-r from-white via-primary-blue to-white bg-clip-text text-transparent"
        colors={{ first: "#c0017e", second: "#5797ef" }}
        sparklesCount={15}
      />
      <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 animate-slide-up">
        אני מזמין אותך לשיחת אפיון לעסק במתנה 🎁
        במודל ״ אני האמיתי ״
      </p>
      <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 md:mb-10 animate-slide-up">
        הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
      </p>
    </div>
  );
};

export default HeroTitle;