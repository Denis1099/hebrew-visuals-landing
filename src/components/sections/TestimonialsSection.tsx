import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const videos = [
  "P_Gz_pML_ds",
  "lJDDGPLqnZY",
  "aPA2KXVDcQU",
  "PGKha1BJwus",
  "On6LztDDgBQ"
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (api: CarouselApi | null) => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 md:mb-8 gradient-text">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={handleSlideChange}
          >
            <CarouselContent>
              {videos.map((videoId, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="aspect-[9/16] w-full">
                    {Math.abs(activeIndex - index) <= 1 && (
                      <iframe
                        className="w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                        title={`Testimonial video ${index + 1}`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {videos.map((videoId, index) => (
            <div key={index} className="aspect-[9/16]">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
                title={`Testimonial video ${index + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;