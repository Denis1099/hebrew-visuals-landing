import { useEffect } from 'react';

const BackgroundAnimation = () => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');
    if (!interBubble) return;
    
    // Check if it's a touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    
    if (isTouchDevice) {
      // For touch devices, add animation class
      interBubble.classList.add('animated-fallback');
    } else {
      // For mouse devices, ensure animation class is removed
      interBubble.classList.remove('animated-fallback');
      
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;
      
      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        if (interBubble) {
          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        }
        requestAnimationFrame(() => {
          move();
        });
      }
      
      const handleMouseMove = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      move();
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  return (
    <div className="gradient-bg fixed inset-0 -z-10">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="g6"></div>
        <div className="g7"></div>
        <div className="g8"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
};

export default BackgroundAnimation;