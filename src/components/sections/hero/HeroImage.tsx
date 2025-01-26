import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroImage = () => {
  return (
    <>
      <div className="block md:hidden w-full mb-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold animate-slide-up leading-relaxed text-center mt-4 mb-2">
          פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
        </h2>
        <AspectRatio ratio={16/9} className="w-[90%] sm:w-[80%] mx-auto">
          <picture>
            <source 
              media="(min-width: 768px)" 
              srcSet="/lovable-uploads/gg-hero-image-desktop.webp"
              width="1440"
              height="810"
            />
            <source 
              media="(min-width: 480px)" 
              srcSet="/lovable-uploads/gg-hero-image-tablet.webp"
              width="1024"
              height="576"
            />
            <img 
              src="/lovable-uploads/gg-hero-image-mobile.webp"
              alt="תמונת גיבור המציגה את גבריאל גלמן"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              width="640"
              height="360"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </AspectRatio>
      </div>
      <div className="hidden md:block w-full animate-fade-in">
        <AspectRatio ratio={16/9} className="w-[90%] lg:w-[70%] mx-auto">
          <picture>
            <source 
              media="(min-width: 1024px)" 
              srcSet="/lovable-uploads/gg-hero-image-desktop.webp"
              width="1440"
              height="810"
            />
            <img 
              src="/lovable-uploads/gg-hero-image-tablet.webp"
              alt="תמונת גיבור המציגה את גבריאל גלמן"
              className="w-full h-full object-cover rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
              width="1024"
              height="576"
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </AspectRatio>
      </div>
    </>
  );
};

export default HeroImage;