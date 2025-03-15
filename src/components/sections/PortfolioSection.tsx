
import { useState, useRef, useEffect } from "react";
import { YouTubePlayer } from "@/components/ui/youtube-player";

const videos = [
  "3S6Y4INJErM",
  "0UemEt5qmKg",
  "15K5t4Q75ao",
  "eoOcIV1wqL8",
  "MYtRcs0J4_k"
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playerMounted, setPlayerMounted] = useState(false);
  const [isChangingVideo, setIsChangingVideo] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Mount player initially
  useEffect(() => {
    setPlayerMounted(true);
  }, []);
  
  const handleNext = () => {
    // Prevent UI flickering during transitions
    setIsChangingVideo(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      // Small delay to ensure clean transition
      setTimeout(() => setIsChangingVideo(false), 50);
    }, 50);
  };

  const handlePrev = () => {
    // Prevent UI flickering during transitions
    setIsChangingVideo(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
      // Small delay to ensure clean transition
      setTimeout(() => setIsChangingVideo(false), 50);
    }, 50);
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    
    // Prevent UI flickering during transitions
    setIsChangingVideo(true);
    setTimeout(() => {
      setCurrentIndex(index);
      // Small delay to ensure clean transition
      setTimeout(() => setIsChangingVideo(false), 50);
    }, 50);
  };

  return (
    <section ref={sectionRef} className="py-8 bg-[radial-gradient(circle_at_50%_50%,#ffffff,#abaaaa)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-migdal text-[#6b46c1] text-center mb-16">
          "גבריאל, תראה לי קצת דוגמאות"
        </h2>
        <p className="text-xl text-center mb-8">טוב ידעתי שתבקשו:</p>
        
        <div className="relative my-8 mt-16 pb-20 mx-auto">
          {/* Increased size for mobile screens by 15% */}
          <div className="w-[46%] md:w-[30%] lg:w-[27%] mx-auto">
            {/* Use a persistent wrapper with fixed height to prevent layout shifts */}
            <div className="relative" style={{ aspectRatio: '9/16' }}>
              {playerMounted && !isChangingVideo && (
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
      </div>
    </section>
  );
};

export default PortfolioSection;
