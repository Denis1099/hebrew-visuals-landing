import { SparklesText } from "@/components/ui/sparkles-text";

const HeroTitle = () => {
  return (
    <div className="space-y-8 md:space-y-8 lg:space-y-10">
      <p className="text-xl sm:text-2xl md:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 animate-slide-up">
        אני מזמין אותך לשיחת אפיון לעסק במתנה 🎁
        <br />
        במודל ״ אני האמיתי ״
      </p>
      <SparklesText 
        text={`אני האמיתי
          בעסק שלך!`}
        className="whitespace-pre-line text-5xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-12 animate-slide-up text-primary-blue"
        colors={{ first: "#c0017e", second: "#5797ef" }}
        sparklesCount={15}
      />
    </div>
  );
};

export default HeroTitle;