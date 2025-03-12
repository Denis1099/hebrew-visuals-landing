import { useState, useEffect, useRef, TouchEvent } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CardCarouselProps {
  items?: React.ReactNode[];
  rtl?: boolean;
  currentIndex?: number;
  onChangeIndex?: (index: number) => void;
}

const CardCarousel = ({ 
  items = [], 
  rtl = true,
  currentIndex: externalIndex,
  onChangeIndex
}: CardCarouselProps) => {
  // Use controlled or uncontrolled state based on props
  const [internalIndex, setInternalIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Determine if we're using controlled or uncontrolled mode
  const isControlled = externalIndex !== undefined && onChangeIndex !== undefined;
  const currentIndex = isControlled ? externalIndex : internalIndex;
  
  // Mount effect - must be called every render
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Safely get total items length
  const totalItems = Array.isArray(items) ? items.length : 0;
  
  // Navigation handlers with improved animation
  const handleNavigation = (newIndex: number) => {
    if (isAnimating || !mounted || totalItems === 0) return;
    
    // Start animation
    setIsAnimating(true);
    
    // Update index based on mode (controlled vs uncontrolled)
    if (isControlled) {
      onChangeIndex(newIndex);
    } else {
      setInternalIndex(newIndex);
    }
    
    // End animation after a delay
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (totalItems <= 1) return;
    const nextIndex = (currentIndex + 1) % totalItems;
    handleNavigation(nextIndex);
  };

  const handlePrev = () => {
    if (totalItems <= 1) return;
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    handleNavigation(prevIndex);
  };

  // Touch event handlers for mobile - improved sensitivity
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    // Reduced swipe threshold for better sensitivity
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30; // Reduced from 50
    const isRightSwipe = distance < -30; // Reduced from -50
    
    // For RTL, we need to invert the swipe direction
    if (rtl) {
      if (isLeftSwipe) handlePrev();
      if (isRightSwipe) handleNext();
    } else {
      if (isLeftSwipe) handleNext();
      if (isRightSwipe) handlePrev();
    }
  };

  // Get indexes for visible cards (safely)
  const prevIndex = totalItems > 1 ? (currentIndex - 1 + totalItems) % totalItems : 0;
  const nextIndex = totalItems > 1 ? (currentIndex + 1) % totalItems : 0;
  
  // Adjust navigation based on RTL
  const leftArrow = rtl ? <ChevronLeft size={32} /> : <ChevronRight size={32} />;
  const rightArrow = rtl ? <ChevronRight size={32} /> : <ChevronLeft size={32} />;

  // If no items, render a message
  if (totalItems === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center text-white">
        אין פריטים להצגה
      </div>
    );
  }

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-full flex justify-center items-center"
      dir={rtl ? "rtl" : "ltr"}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Card Container - Increased sizes for desktop */}
      <div className="relative w-full max-w-5xl mx-auto h-full flex justify-center items-center overflow-visible will-change-transform perspective-1000">
        {/* Previous Card - Only show if we have multiple items */}
        {totalItems > 1 && (
          <div
            className={`absolute w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1)
                      z-20 scale-80 opacity-50 ${rtl ? "translate-x-36" : "-translate-x-36"} h-[500px] md:h-[560px] lg:h-[620px] cursor-pointer
                      hover:opacity-70 transform-gpu hover:scale-85`}
            onClick={() => handleNavigation(prevIndex)}
            style={{ pointerEvents: 'auto' }}
          >
            {items[prevIndex]}
          </div>
        )}
        
        {/* Current Card - Increased sizes for all breakpoints */}
        <div
          className="absolute w-full max-w-[340px] md:max-w-[400px] lg:max-w-[460px] transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1)
                     z-30 scale-100 opacity-100 h-[500px] md:h-[560px] lg:h-[620px] transform-gpu rounded-xl overflow-hidden"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          {items[currentIndex]}
        </div>
        
        {/* Next Card - Only show if we have multiple items */}
        {totalItems > 1 && (
          <div
            className={`absolute w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1)
                      z-20 scale-80 opacity-50 ${rtl ? "-translate-x-36" : "translate-x-36"} h-[500px] md:h-[560px] lg:h-[620px] cursor-pointer
                      hover:opacity-70 transform-gpu hover:scale-85`}
            onClick={() => handleNavigation(nextIndex)}
            style={{ pointerEvents: 'auto' }}
          >
            {items[nextIndex]}
          </div>
        )}
      </div>

      {/* Only show navigation buttons if we have multiple items */}
      {totalItems > 1 && (
        <>
          <button
            onClick={rtl ? handleNext : handlePrev}
            className="absolute left-2 md:left-8 z-40 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full opacity-90 hover:opacity-100 transition-all shadow-lg hover:scale-110 outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Previous"
          >
            {leftArrow}
          </button>
          
          <button
            onClick={rtl ? handlePrev : handleNext}
            className="absolute right-2 md:right-8 z-40 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full opacity-90 hover:opacity-100 transition-all shadow-lg hover:scale-110 outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Next"
          >
            {rightArrow}
          </button>
        </>
      )}
    </div>
  );
};

export default CardCarousel;