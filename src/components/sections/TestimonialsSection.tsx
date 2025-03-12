import { YouTubeFacade } from "@/components/ui/youtube-facade";
import CardCarousel from "../ui/CardCarousel";
import { useEffect, useState } from "react";

const videos = [
  "P_Gz_pML_ds",
  "PGKha1BJwus",
  "aPA2KXVDcQU",
  "On6LztDDgBQ",
  "lJDDGPLqnZY"
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Create carousel items with active state and navigation callbacks
    const updateItems = () => {
      const items = videos.map((videoId, index) => {
        const isActive = index === currentIndex;
        
        return (
          <div key={videoId} className="w-full h-full">
            <YouTubeFacade
              videoId={videoId}
              className="w-full h-full rounded-lg overflow-hidden shadow-xl"
              isActive={isActive}
              // Only allow activation for the active card
              disableActivation={!isActive}
              onNavigationClick={() => setCurrentIndex(index)}
            />
          </div>
        );
      });
      
      setCarouselItems(items);
    };
    
    updateItems();
  }, [currentIndex]);

  // Handler for when carousel navigation happens
  const handleCarouselChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-8 md:py-12 md:pb-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-migdal text-[#410175] text-center mb-16">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        {/* Using a taller container for the YouTube Shorts */}
        <div className="h-[580px] md:h-[640px] lg:h-[700px] relative my-8 mt-16 mb-20">
          <CardCarousel 
            items={carouselItems} 
            rtl={true} 
            onChangeIndex={handleCarouselChange} 
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
