
import { useState, useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section ref={sectionRef} className="py-8 md:py-12 md:pb-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-migdal text-[#6b46c1] text-center mb-16">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        <div className="relative my-8 mt-16 pb-20 mx-auto">
          {/* Container with reduced size (20% smaller on desktop, 10% smaller on mobile) */}
          <div className="w-[81%] md:w-[64%] mx-auto">
            <YouTubePlayer
              videoId={videos[currentIndex]}
              onNext={handleNext}
              onPrev={handlePrev}
              className="w-full shadow-xl mb-8" // Added bottom margin for dots
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
