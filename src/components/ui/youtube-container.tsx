
import { useRef, useEffect, useState } from "react";
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
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Optimized thumbnail loading strategy
  useEffect(() => {
    // Immediately set standard quality thumbnail for fast initial load
    setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`);
    
    // Reset isLoaded when videoId changes
    setIsLoaded(false);
    
    // Try preloading high quality image without blocking
    const img = new Image();
    img.onload = () => {
      if (img.width > 120) { // Check if it's not a default image
        setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
      }
    };
    img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  }, [videoId]);

  // Direct play handling without facade
  const playVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{ 
        backgroundColor: '#000',
        borderRadius: '0.5rem',
        maxWidth: '100%',
        margin: '0 auto',
        aspectRatio: '9/16', // Maintaining YouTube Shorts format
      }}
    >
      {!isLoaded ? (
        <YouTubeThumbnail 
          thumbnailUrl={thumbnailUrl} 
          onPlay={playVideo}
        />
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          {/* YouTube iframe with proper centering */}
          <div className="aspect-[9/16] absolute inset-0 w-full h-full flex items-center justify-center">
            <iframe
              ref={iframeRef}
              data-video-id={videoId}
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&playsinline=1&controls=1&enablejsapi=1&origin=${window.location.origin}&autoplay=1`}
              title="YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              loading="lazy"
            />
          </div>
        </div>
      )}

      <YouTubeControls
        onNext={onNext}
        onPrev={onPrev}
        showControls={showControls}
        isLoaded={isLoaded}
      />

      {/* Improved dot indicator spacing with exact gap value */}
      {totalVideos > 1 && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center gap-6 z-20">
          {Array.from({ length: totalVideos }).map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick && onDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-[#c0017e] scale-110' 
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
