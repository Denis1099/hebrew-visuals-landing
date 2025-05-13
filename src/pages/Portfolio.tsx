
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { YouTubePlayer } from "@/components/ui/youtube-player";
import portfolioVideos from "@/data/portfolioVideos.json";

const Portfolio = () => {
  // Get just the first video from the portfolio data
  const exampleVideo = portfolioVideos[0];
  
  return (
    <div className="min-h-screen relative">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <h1 className="text-4xl font-migdal text-[#6b46c1] text-center mb-6">
          הפורטפוליו שלי
        </h1>
        
        <div className="container mx-auto px-4">
          <section className="py-8 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.81),rgba(191,135,239,0.81))]">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-migdal text-[#6b46c1] text-center mb-12">
                "גבריאל, תראה לי דוגמא"
              </h2>
              <p className="text-xl text-center mb-6">הנה דוגמא לאיך הקליפים יוצגו בפורטפוליו:</p>
              
              <div className="relative my-8 mt-14 pb-20 mx-auto">
                <div className="w-[65%] md:w-[30%] lg:w-[27%] mx-auto">
                  <div className="relative" style={{ aspectRatio: '9/16' }}>
                    <Suspense fallback={<div className="h-96 flex items-center justify-center">טוען...</div>}>
                      <YouTubePlayer
                        videoId={exampleVideo.id}
                        className="w-full shadow-xl mb-8"
                      />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
