import { useState, useRef, useEffect } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  className?: string;
}

export const YouTubeFacade = ({ videoId, className = '' }: YouTubeFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Load thumbnail first
          const img = new Image();
          img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          img.onload = () => {
            if (containerRef.current) {
              containerRef.current.style.backgroundImage = `url(${img.src})`;
            }
          };
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [videoId]);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative aspect-[9/16] ${className}`}>
      {!isLoaded ? (
        <div
          ref={containerRef}
          onClick={loadVideo}
          className="w-full h-full bg-gray-200 bg-cover bg-center cursor-pointer rounded-lg relative"
          aria-label="Load YouTube video"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};