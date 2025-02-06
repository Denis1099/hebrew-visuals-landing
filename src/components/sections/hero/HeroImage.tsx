import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroImage = () => {
  return (
    <>
      <div className="block md:hidden w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-center mb-2 motion-safe:animate-slide-up">
          פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
        </h2>
        <AspectRatio ratio={1/1} className="h-[85%] md:h-[100%] w-[90%] sm:w-[80%] mx-auto">
          <picture>
            <source 
              media="(min-width: 768px)" 
              srcSet="/lovable-uploads/gg-hero-desktop.webp"
              type="image/webp"
              width="1440"
              height="1100"
            />
            <source 
              media="(min-width: 480px)" 
              srcSet="/lovable-uploads/gg-hero-tablet.webp"
              type="image/webp"
              width="1024"
              height="576"
            />
            <img 
              src="/lovable-uploads/gg-hero-mobile.webp"
              alt="תמונת גיבור המציגה את גבריאל גלמן"
              className="w-full h-full object-cover rounded-2xl shadow-xl bg-gray-100"
              width="640"
              height="360"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </AspectRatio>
      </div>
      <div className="mb-6 hidden md:block w-full motion-safe:animate-fade-in">
        <AspectRatio ratio={16/9} className="w-[90%] lg:w-[77%] mx-auto relative">
          <div className="absolute inset-0 md:scale-110 lg:scale-110 transition-transform duration-300">
            <picture>
              <source 
                media="(min-width: 1024px)" 
                srcSet="/lovable-uploads/gg-hero-desktop.webp"
                type="image/webp"
                width="1440"
                height="1118"
              />
              <img 
                src="/lovable-uploads/gg-hero-tablet.webp"
                alt="תמונת גיבור המציגה את גבריאל גלמן"
                className="w-full h-full object-cover rounded-2xl shadow-xl bg-gray-100 transform hover:scale-105 transition-transform duration-300"
                width="1024"
                height="576"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </AspectRatio>
      </div>
    </>
  );
};

export default HeroImage;