
import { useRef, useEffect, useState } from "react";
import { useYouTubePlayer } from "@/hooks/use-youtube-player";
import { loadBestThumbnail } from "@/utils/youtube-thumbnail";
import { YouTubeThumbnail } from "./youtube-thumbnail";
import { YouTubeControls } from "./youtube-controls";

interface YouTubeContainerProps {
  videoId: string;
  className?: string;
  onNext?: () => void;
  onPrev?: () => void;
  showControls?: boolean;
  totalVideos?: number;
  currentIndex?: number;
  onDotClick?: (index: number) => void;
}

export function YouTubeContainer({
  videoId,
  className = '',
  onNext,
  onPrev,
  showControls = true,
  totalVideos = 0,
  currentIndex = 0,
  onDotClick,
}: YouTubeContainerProps) {
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  const { 
    playerRef, 
    isLoaded, 
    initializePlayer, 
    setIsLoaded 
  } = useYouTubePlayer({
    videoId,
    playerContainerRef,
    onPlayerReady: (player) => {
      player.mute();
      player.playVideo();
    }
  });

  // Load thumbnail
  useEffect(() => {
    const loadThumbnail = async () => {
      const url = await loadBestThumbnail(videoId);
      setThumbnailUrl(url);
    };
    
    loadThumbnail();
  }, [videoId]);

  // Initialize YouTube player when container is visible
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded) {
          initializePlayer();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded, initializePlayer]);

  const toggleMute = () => {
    if (!playerRef.current) return;
    
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const playVideo = () => {
    setIsLoaded(true);
    initializePlayer();
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        backgroundColor: '#000',
        borderRadius: '0.5rem',
        maxWidth: '80%', // Make player 20% smaller on desktop
        margin: '0 auto',
        aspectRatio: '9/16',
      }}
    >
      {/* Black bar overlays to fix aspect ratio */}
      <div className="absolute inset-y-0 left-0 w-[7%] bg-black z-10"></div>
      <div className="absolute inset-y-0 right-0 w-[7%] bg-black z-10"></div>

      {!isLoaded ? (
        <YouTubeThumbnail 
          thumbnailUrl={thumbnailUrl} 
          onPlay={playVideo}
        />
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          {/* YouTube player will be inserted here */}
          <div 
            ref={playerContainerRef} 
            className="absolute inset-0 w-[114%] left-1/2 -translate-x-1/2"
          ></div>
        </div>
      )}

      <YouTubeControls
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onNext={onNext}
        onPrev={onPrev}
        showControls={showControls}
        isLoaded={isLoaded}
      />

      {/* Video position dots */}
      {totalVideos > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {Array.from({ length: totalVideos }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick && onDotClick(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-[#c0017e] scale-125' 
                  : 'bg-white bg-opacity-60 hover:bg-opacity-100'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
