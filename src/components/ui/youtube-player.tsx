
import { YouTubeContainer } from "./youtube-container";

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
  return (
    <YouTubeContainer
      videoId={videoId}
      className={className}
      onNext={onNext}
      onPrev={onPrev}
      showControls={showControls}
    />
  );
};
