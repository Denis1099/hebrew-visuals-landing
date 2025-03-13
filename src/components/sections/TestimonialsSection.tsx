
import { useState } from "react";
import { YouTubePlayer } from "@/components/ui/youtube-player";

const videos = [
  "P_Gz_pML_ds",
  "PGKha1BJwus",
  "aPA2KXVDcQU",
  "On6LztDDgBQ",
  "lJDDGPLqnZY"
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-8 md:py-12 md:pb-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-migdal text-[#6b46c1] text-center mb-16">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        <div className="relative my-8 mt-16 mb-20 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <div className="md:w-[80%] w-[90%] mx-auto"> {/* Container for smaller player on mobile */}
            <YouTubePlayer
              videoId={videos[currentIndex]}
              onNext={handleNext}
              onPrev={handlePrev}
              className="w-full shadow-xl"
              totalVideos={videos.length}
              currentIndex={currentIndex}
              onDotClick={handleDotClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
