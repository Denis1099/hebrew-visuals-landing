
import { useState } from "react";
import { YouTubeFacade } from "@/components/ui/youtube-facade";

const videos = [
  "3S6Y4INJErM",
  "0UemEt5qmKg",
  "15K5t4Q75ao",
  "eoOcIV1wqL8",
  "MYtRcs0J4_k"
];

const PortfolioSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedVideos = showAll ? videos : videos.slice(0, 3);

  return (
    <section className="py-8 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          "גבריאל, תראה לי קצת דוגמאות"
        </h2>
        <p className="text-xl text-center mb-8">טוב ידעתי שתבקשו:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedVideos.map((videoId) => (
            <YouTubeFacade
              key={videoId}
              videoId={videoId}
              className="w-[70%] mx-auto"
            />
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
