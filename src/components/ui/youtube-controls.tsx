
import { ChevronLeft, ChevronRight } from "lucide-react";

interface YouTubeControlsProps {
  onNext?: () => void;
  onPrev?: () => void;
  showControls?: boolean;
  isLoaded: boolean;
}

export function YouTubeControls({
  onNext,
  onPrev,
  showControls = true,
  isLoaded
}: YouTubeControlsProps) {
  return (
    <>
      {/* Navigation controls - Positioned outside the player */}
      {showControls && onPrev && (
        <button
          onClick={onPrev}
          className="absolute -left-16 md:-left-20 top-1/2 -translate-y-1/2 z-30
                   bg-[#6b46c1] p-3 rounded-full shadow-lg
                   transition-transform hover:scale-110 focus:outline-none"
          aria-label="Previous video"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}
      
      {showControls && onNext && (
        <button
          onClick={onNext}
          className="absolute -right-16 md:-right-20 top-1/2 -translate-y-1/2 z-30
                   bg-[#6b46c1] p-3 rounded-full shadow-lg
                   transition-transform hover:scale-110 focus:outline-none"
          aria-label="Next video"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}
    </>
  );
}
