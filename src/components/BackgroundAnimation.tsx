
import { memo } from 'react';

// Memoizing the BackgroundAnimation component to prevent unnecessary re-renders
const BackgroundAnimation = memo(() => {
  return (
    <div className="gradient-bg">
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
            result="goo"
          />
        </filter>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
      </div>
    </div>
  );
});

BackgroundAnimation.displayName = 'BackgroundAnimation';

export default BackgroundAnimation;
