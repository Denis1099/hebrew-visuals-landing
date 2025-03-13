
import { useEffect, useRef, useState, useCallback } from "react";

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
  const apiLoadedRef = useRef(false);

  // Function to create the YouTube player
  const createPlayer = useCallback(() => {
    if (!playerContainerRef.current || playerRef.current) return;
    
    // Create a div element for the player
    const playerDiv = document.createElement('div');
    playerDiv.id = `youtube-player-${Math.random().toString(36).substring(2, 9)}`;
    playerContainerRef.current.innerHTML = '';
    playerContainerRef.current.appendChild(playerDiv);

    try {
      playerRef.current = new window.YT.Player(playerDiv.id, {
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
            event.target.mute();
            event.target.playVideo();
            setIsPlaying(true);
            if (onPlayerReady) onPlayerReady(event.target);
            console.log("YouTube player ready");
          },
          onStateChange: (event: any) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
            if (onPlayerStateChange) onPlayerStateChange(event);
            console.log("YouTube player state changed:", event.data);
          },
          onError: (event: any) => {
            console.error("YouTube player error:", event.data);
          }
        }
      });
      console.log("YouTube player created");
    } catch (error) {
      console.error("Error creating YouTube player:", error);
    }
  }, [videoId, playerContainerRef, onPlayerReady, onPlayerStateChange]);

  // Load YouTube API
  const loadYouTubeAPI = useCallback(() => {
    if (apiLoadedRef.current) {
      createPlayer();
      return;
    }

    if (!document.getElementById('youtube-api-script')) {
      console.log("Loading YouTube API script");
      apiLoadedRef.current = true;
      
      // Create script element
      const tag = document.createElement('script');
      tag.id = 'youtube-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      
      // Insert script before first script tag
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
      
      // Set global callback
      window.onYouTubeIframeAPIReady = () => {
        console.log("YouTube API ready");
        createPlayer();
      };
    } else if (window.YT && window.YT.Player) {
      console.log("YouTube API already loaded");
      createPlayer();
    }
  }, [createPlayer]);

  // Initialize YouTube player
  const initializePlayer = useCallback(() => {
    if (isLoaded) return;
    
    console.log("Initializing YouTube player");
    setIsLoaded(true);
    
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      loadYouTubeAPI();
    }
  }, [isLoaded, createPlayer, loadYouTubeAPI]);

  // Handle video ID changes
  useEffect(() => {
    if (isLoaded && playerRef.current) {
      console.log("Loading new video:", videoId);
      playerRef.current.loadVideoById(videoId);
      setIsPlaying(true);
    }
  }, [videoId, isLoaded]);

  useEffect(() => {
    return () => {
      // Clean up player on unmount
      if (playerRef.current) {
        console.log("Destroying YouTube player");
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
