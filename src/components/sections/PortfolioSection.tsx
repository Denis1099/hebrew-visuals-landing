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
  "3S6Y4INJErM",
  "0UemEt5qmKg",
  "15K5t4Q75ao",
  "eoOcIV1wqL8",
  "MYtRcs0J4_k"
];

const PortfolioSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);
      setActiveVideo(videos[selectedIndex]);
    });
  }, [api]);

  // Initialize first video
  useEffect(() => {
    setActiveVideo(videos[0]);
  }, []);

  const renderVideoOrThumbnail = (videoId: string) => {
    const isActive = videoId === activeVideo;
    
    if (!isActive) {
      return (
        <img
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Video thumbnail"
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
        />
      );
    }

    return (
      <iframe
        key={videoId}
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&playsinline=1&origin=${window.location.origin}`}
        title={`Portfolio video ${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">"גבריאל, תראה לי קצת דוגמאות"</h2>
        <p className="text-xl text-center mb-12">טוב ידעתי שתבקשו:</p>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative px-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: false,
              containScroll: false,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((videoId, index) => (
                <CarouselItem key={videoId} className="basis-full">
                  <div className="aspect-[9/16] w-full">
                    {renderVideoOrThumbnail(videoId)}
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
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&playsinline=1&origin=${window.location.origin}`}
                title={`Portfolio video ${index + 1}`}
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

export default PortfolioSection;