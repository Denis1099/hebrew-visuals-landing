import { YouTubeFacade } from "@/components/ui/youtube-facade";
import CardCarousel from "../ui/CardCarousel";
import { useEffect, useState } from "react";

const videos = [
  "3S6Y4INJErM",
  "0UemEt5qmKg",
  "15K5t4Q75ao",
  "eoOcIV1wqL8",
  "MYtRcs0J4_k"
];

const PortfolioSection = () => {
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
    <section className="py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          "גבריאל, תראה לי קצת דוגמאות"
        </h2>
        <p className="text-xl text-center mb-8">טוב ידעתי שתבקשו:</p>
        
        {/* Increased height for larger players on desktop */}
        <div className="h-[580px] md:h-[640px] lg:h-[700px] relative my-8 mt-16 pb-20">
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

export default PortfolioSection;