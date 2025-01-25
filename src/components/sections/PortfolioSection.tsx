import { useState, useRef, useEffect } from "react";

const videos = [
  "3S6Y4INJErM",
  "0UemEt5qmKg",
  "15K5t4Q75ao",
  "eoOcIV1wqL8",
  "MYtRcs0J4_k"
];

const PortfolioSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<string[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const displayedVideos = showAll ? videos : videos.slice(0, 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadedVideos(displayedVideos);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [displayedVideos]);

  return (
    <section ref={sectionRef} className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 gradient-text">"גבריאל, תראה לי קצת דוגמאות"</h2>
        <p className="text-xl text-center mb-8">טוב ידעתי שתבקשו:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedVideos.map((videoId, index) => (
            <div key={videoId} className="aspect-[9/16] w-[70%] mx-auto">
              {loadedVideos.includes(videoId) ? (
                <iframe
                  className="w-full h-full rounded-lg shadow-lg"
                  src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&title=0&showsearch=0&loading=lazy`}
                  title={`Portfolio video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                  טוען...
                </div>
              )}
            </div>
          ))}
        </div>
        
        {videos.length > 3 && !showAll && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-gradient-primary text-white px-8 py-3 rounded-full text-lg font-medium
                hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              הצג עוד דוגמאות
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;