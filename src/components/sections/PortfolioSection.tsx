import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const videos = [
  "3S6Y4INJErM",
  "0UemEt5qmKg",
  "15K5t4Q75ao",
  "eoOcIV1wqL8",
  "MYtRcs0J4_k"
];

const PortfolioSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 gradient-text">"גבריאל, תראה לי קצת דוגמאות"</h2>
        <p className="text-xl text-center mb-12">טוב ידעתי שתבקשו:</p>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {videos.map((videoId, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="aspect-[9/16] w-full">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`Portfolio video ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {videos.map((videoId, index) => (
            <div key={index} className="aspect-[9/16]">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Portfolio video ${index + 1}`}
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

export default PortfolioSection;