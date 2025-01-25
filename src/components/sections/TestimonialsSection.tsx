import { useState, useEffect } from "react";
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
              align: "center",
              loop: true,
              dragFree: false,
              containScroll: false,
              direction: "rtl"
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((videoId, index) => (
                <CarouselItem key={videoId} className="basis-full">
                  <div className="aspect-[9/16] w-full">
                    <iframe
                      key={videoId}
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&enablejsapi=1`}
                      title={`Testimonial video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
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
            <div key={videoId} className="aspect-[9/16]">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&enablejsapi=1`}
                title={`Testimonial video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;