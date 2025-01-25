import { useState } from "react";
import { YouTubeFacade } from "@/components/ui/youtube-facade";

const videos = [
  "P_Gz_pML_ds",
  "PGKha1BJwus",
  "aPA2KXVDcQU",
  "On6LztDDgBQ",
  "lJDDGPLqnZY"
];

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedVideos = showAll ? videos : videos.slice(0, 3);

  return (
    <section className="py-8 md:py-12 md:pb-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 md:mb-14 gradient-text">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedVideos.map((videoId, index) => (
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
              הצג עוד המלצות
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;