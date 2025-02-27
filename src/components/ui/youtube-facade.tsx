
import { useState, useRef, useEffect } from 'react';

interface YouTubeFacadeProps {
  videoId: string;
  className?: string;
}

export const YouTubeFacade = ({ videoId, className = '' }: YouTubeFacadeProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const containerRef = useRef<HTMLButtonElement>(null);

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

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative aspect-[9/16] ${className}`}>
      {!isLoaded ? (
        <button
          ref={containerRef}
          onClick={loadVideo}
          className="w-full h-full bg-gray-200 bg-cover bg-center rounded-lg relative focus:outline-none focus:ring-2 focus:ring-primary-pink"
          style={{ backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined }}
          aria-label={`הפעל סרטון YouTube`}
        >
          {/* YouTube play button is removed, letting the standard YouTube play button show when embedded */}
        </button>
      ) : (
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title="נגן YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};
