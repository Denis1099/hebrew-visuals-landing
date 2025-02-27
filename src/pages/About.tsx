
import Navbar from "@/components/Navbar";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global Animated Background */}
      <BackgroundAnimation />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center mb-12 gradient-text">אודות גבריאל קריאטיבס</h1>
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl p-6 md:p-10 shadow-xl">
              <p className="text-center text-2xl text-gray-700 mb-8">מידע נוסף יתווסף בקרוב...</p>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
    </div>
  );
};

export default About;
