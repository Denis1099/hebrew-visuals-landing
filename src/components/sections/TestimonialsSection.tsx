
import { useState, useRef, useEffect } from "react";
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
  const [playerMounted, setPlayerMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Reset player mounted state when video changes
  useEffect(() => {
    setPlayerMounted(false);
    // Small delay to ensure clean remount
    const timer = setTimeout(() => {
      setPlayerMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
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
    <section ref={sectionRef} className="py-8 md:py-12 md:pb-8 bg-[radial-gradient(circle_at_50%_50%,#ffffff,#abaaaa)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-migdal text-[#6b46c1] text-center mb-16">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        <div className="relative my-8 mt-16 pb-20 mx-auto">
          {/* Optimized container size for YouTube Shorts format */}
          <div className="w-[45%] md:w-[35%] lg:w-[31.5%] mx-auto">
            {playerMounted && (
              <YouTubePlayer
                videoId={videos[currentIndex]}
                onNext={handleNext}
                onPrev={handlePrev}
                className="w-full shadow-xl mb-8"
                totalVideos={videos.length}
                currentIndex={currentIndex}
                onDotClick={handleDotClick}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
