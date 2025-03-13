
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

declare global {
  interface Window {
    YT: {
      Player: any;
      PlayerState: any;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface YouTubePlayerProps {
  videoId: string;
  className?: string;
  onNext?: () => void;
  onPrev?: () => void;
  showControls?: boolean;
}

export const YouTubePlayer = ({ 
  videoId, 
  className = '', 
  onNext, 
  onPrev,
  showControls = true,
}: YouTubePlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Load YouTube API
  useEffect(() => {
    // Function to initialize the YouTube API
    const loadYouTubeAPI = () => {
      if (!document.getElementById('youtube-api-script')) {
        // Create script element
        const tag = document.createElement('script');
        tag.id = 'youtube-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        
        // Insert script before first script tag
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        
        // Set global callback
        window.onYouTubeIframeAPIReady = () => {
          if (playerContainerRef.current && !playerRef.current) {
            createPlayer();
          }
        };
      } else if (window.YT && window.YT.Player && playerContainerRef.current && !playerRef.current) {
        createPlayer();
      }
    };

    loadYouTubeAPI();
    loadBestThumbnail(videoId);

    return () => {
      // Clean up player on unmount
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  // Handle video ID changes
  useEffect(() => {
    if (isLoaded && playerRef.current) {
      playerRef.current.loadVideoById(videoId);
      setIsPlaying(true);
    } else {
      loadBestThumbnail(videoId);
    }
  }, [videoId, isLoaded]);

  // Initialize YouTube player when container is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded && containerRef.current) {
          if (window.YT && window.YT.Player) {
            createPlayer();
          } else {
            // If YouTube API isn't loaded yet, load it
            if (!document.getElementById('youtube-api-script')) {
              const tag = document.createElement('script');
              tag.id = 'youtube-api-script';
              tag.src = 'https://www.youtube.com/iframe_api';
              
              const firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
              
              window.onYouTubeIframeAPIReady = createPlayer;
            }
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const loadBestThumbnail = async (id: string) => {
    try {
      const img = new Image();
      img.src = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
      img.onload = () => {
        if (img.width !== 120) { // If high quality thumbnail exists
          setThumbnailUrl(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
        } else {
          setThumbnailUrl(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
        }
      };
      img.onerror = () => {
        setThumbnailUrl(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
      };
    } catch {
      setThumbnailUrl(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
    }
  };

  const createPlayer = () => {
    if (!playerContainerRef.current || playerRef.current) return;
    
    setIsLoaded(true);
    
    playerRef.current = new window.YT.Player(playerContainerRef.current, {
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        playsinline: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        iv_load_policy: 3
      },
      events: {
        onReady: (event: any) => {
          event.target.playVideo();
          setIsPlaying(true);
        },
        onStateChange: (event: any) => {
          setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
        },
        onError: (event: any) => {
          console.error("YouTube player error:", event.data);
        }
      }
    });
  };

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
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // If YouTube API isn't loaded yet, set up callback
      window.onYouTubeIframeAPIReady = createPlayer;
      
      // Load YouTube API if not already loaded
      if (!document.getElementById('youtube-api-script')) {
        const tag = document.createElement('script');
        tag.id = 'youtube-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }
    }
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
        <div
          className="w-full h-full bg-cover bg-center flex items-center justify-center"
          style={{ 
            backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : undefined,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="w-16 h-16 bg-[#c0017e] rounded-full flex items-center justify-center 
                         transition-transform duration-300 hover:scale-110 shadow-lg
                         cursor-pointer"
                 onClick={playVideo}>
              <span className="text-2xl text-white" style={{ marginLeft: "4px" }}>▶</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full overflow-hidden">
          {/* YouTube player will be inserted here */}
          <div 
            ref={playerContainerRef} 
            className="absolute inset-0 w-[114%] left-1/2 -translate-x-1/2"
          ></div>
          
          {/* Sound toggle button - Always visible when player is active */}
          {isLoaded && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 z-20 bg-black bg-opacity-60 p-2 rounded-full
                        transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-white" />
              ) : (
                <Volume2 className="w-6 h-6 text-white" />
              )}
            </button>
          )}
        </div>
      )}

      {/* Navigation controls - Moved outside the video frame */}
      {showControls && onPrev && (
        <button
          onClick={onPrev}
          className="absolute -left-14 md:-left-16 top-1/2 -translate-y-1/2 z-20
                     bg-[#6b46c1] p-3 rounded-full 
                     transition-transform hover:scale-110 focus:outline-none"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}
      
      {showControls && onNext && (
        <button
          onClick={onNext}
          className="absolute -right-14 md:-right-16 top-1/2 -translate-y-1/2 z-20
                     bg-[#6b46c1] p-3 rounded-full
                     transition-transform hover:scale-110 focus:outline-none"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};
