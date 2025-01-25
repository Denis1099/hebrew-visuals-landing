import { useState } from "react";

const videos = [
  "P_Gz_pML_ds",
  "lJDDGPLqnZY",
  "aPA2KXVDcQU",
  "PGKha1BJwus",
  "On6LztDDgBQ"
];

const TestimonialsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedVideos = showAll ? videos : videos.slice(0, 3);

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 md:mb-8 gradient-text">
          עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedVideos.map((videoId, index) => (
            <div key={videoId} className="aspect-[9/16] w-[80%] mx-auto">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&controls=1&title=0&showsearch=0`}
                title={`Testimonial video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
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
              הצג עוד המלצות
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;