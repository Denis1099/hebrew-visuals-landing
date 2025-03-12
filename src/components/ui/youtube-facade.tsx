
import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

interface YouTubeFacadeProps {
  videoId: string;
  className?: string;
  isActive?: boolean;         
  onNavigationClick?: () => void;
  disableActivation?: boolean;
}

export const YouTubeFacade = ({ 
  videoId, 
  className = '',
  isActive = true,
  onNavigationClick,
  disableActivation = false
}: YouTubeFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const tryLoadThumbnail = async (quality: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img.src);
      img.onerror = () => reject();
      img.src = `https://i.ytimg.com/vi/${videoId}/${quality}`;
    });
  };

  const loadBestThumbnail = async () => {
    try {
      const maxres = await tryLoadThumbnail('maxresdefault.jpg');
      setThumbnailUrl(maxres as string);
    } catch {
      try {
        const sddefault = await tryLoadThumbnail('sddefault.jpg');
        setThumbnailUrl(sddefault as string);
      } catch {
        const hqdefault = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
        setThumbnailUrl(hqdefault);
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadBestThumbnail();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [videoId]);

  // Handle click based on active state
  const handleClick = (e: React.MouseEvent) => {
    // If this is not the active card and we have a navigation callback, 
    // call it regardless of disableActivation
    if (!isActive && onNavigationClick) {
      onNavigationClick();
      return;
    }
    
    // Only load the video if this is the active card 
    if (isActive && !isLoaded && !disableActivation) {
      setIsLoaded(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative ${className} ${!isActive ? 'cursor-pointer' : ''}`}
      onClick={handleClick}
      style={{ 
        pointerEvents: 'auto',
        aspectRatio: '9/16',
        backgroundColor: '#000',
        overflow: 'hidden',
        borderRadius: '0.5rem',
      }}
    >
      {!isLoaded ? (
        <div
          className={`w-full h-full bg-cover bg-center rounded-lg relative flex items-center justify-center
                    ${isActive && !disableActivation ? 'focus-within:ring-2 focus-within:ring-primary-pink' : ''}`}
          style={{ 
            backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Only show play button for active card that's not disabled */}
          {isActive && !disableActivation && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="w-16 h-16 bg-[#c0017e] rounded-full flex items-center justify-center 
                         transition-transform duration-300 hover:scale-110 shadow-lg focus:outline-none"
                aria-label={`הפעל סרטון YouTube`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLoaded(true);
                }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </button>
            </div>
          )}
        </div>
      ) : (
        // Improved solution for vertical videos to hide black bars
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden">
          {/* Wrapper for the iframe with specialized positioning */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0&playsinline=1&controls=1&fs=0`}
              title="YouTube"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute"
              style={{ 
                width: '100vw', /* Make it wide enough to crop sides */
                height: '100%',
                maxWidth: 'none',
                left: '50%',
                transform: 'translateX(-50%)',
                border: 'none',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
