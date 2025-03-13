
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: {
      Player: any;
      PlayerState: any;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface UseYouTubePlayerProps {
  videoId: string;
  playerContainerRef: React.RefObject<HTMLDivElement>;
  onPlayerReady?: (player: any) => void;
  onPlayerStateChange?: (event: any) => void;
}

export function useYouTubePlayer({
  videoId,
  playerContainerRef,
  onPlayerReady,
  onPlayerStateChange
}: UseYouTubePlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  // Function to create the YouTube player
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
          if (onPlayerReady) onPlayerReady(event.target);
        },
        onStateChange: (event: any) => {
          setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          if (onPlayerStateChange) onPlayerStateChange(event);
        },
        onError: (event: any) => {
          console.error("YouTube player error:", event.data);
        }
      }
    });
  };

  // Load YouTube API
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

  // Initialize YouTube player
  const initializePlayer = () => {
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

  // Handle video ID changes
  useEffect(() => {
    if (isLoaded && playerRef.current) {
      playerRef.current.loadVideoById(videoId);
      setIsPlaying(true);
    }
  }, [videoId, isLoaded]);

  useEffect(() => {
    loadYouTubeAPI();

    return () => {
      // Clean up player on unmount
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return {
    playerRef,
    isLoaded,
    isPlaying,
    setIsLoaded,
    initializePlayer
  };
}
