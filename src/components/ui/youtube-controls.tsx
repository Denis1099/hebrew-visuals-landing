
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

interface YouTubeControlsProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  showControls?: boolean;
  isLoaded: boolean;
}

export function YouTubeControls({
  isMuted,
  onToggleMute,
  onNext,
  onPrev,
  showControls = true,
  isLoaded
}: YouTubeControlsProps) {
  return (
    <>
      {/* Sound toggle button - Always visible when player is active */}
      {isLoaded && (
        <button
          onClick={onToggleMute}
          className="absolute bottom-14 right-10 z-20 bg-black bg-opacity-60 p-2 rounded-full
                    transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" />
          )}
        </button>
      )}

      {/* Navigation controls - Outside the video frame */}
      {showControls && onPrev && (
        <button
          onClick={onPrev}
          className="absolute -left-16 md:-left-20 top-1/2 -translate-y-1/2 z-20
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
          className="absolute -right-16 md:-right-20 top-1/2 -translate-y-1/2 z-20
                     bg-[#6b46c1] p-3 rounded-full
                     transition-transform hover:scale-110 focus:outline-none"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}
