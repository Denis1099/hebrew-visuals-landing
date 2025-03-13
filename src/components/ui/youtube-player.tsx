
import { YouTubeContainer } from "./youtube-container";

interface YouTubePlayerProps {
  videoId: string;
  className?: string;
  onNext?: () => void;
  onPrev?: () => void;
  showControls?: boolean;
  totalVideos?: number;
  currentIndex?: number;
  onDotClick?: (index: number) => void;
}

export const YouTubePlayer = ({ 
  videoId, 
  className = '', 
  onNext, 
  onPrev,
  showControls = true,
  totalVideos = 0,
  currentIndex = 0,
  onDotClick,
}: YouTubePlayerProps) => {
  return (
    <YouTubeContainer
      videoId={videoId}
      className={className}
      onNext={onNext}
      onPrev={onPrev}
      showControls={showControls}
      totalVideos={totalVideos}
      currentIndex={currentIndex}
      onDotClick={onDotClick}
    />
  );
};
