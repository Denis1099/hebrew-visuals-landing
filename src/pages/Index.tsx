import Navbar from "@/components/Navbar";
import { Camera, Video, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-primary text-white pt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            יצירתיות בכל פריים
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            צילום ועריכת וידאו ברמה הגבוהה ביותר
          </p>
          <a href="#contact" className="bg-white text-primary-pink px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
            צור קשר
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">השירותים שלנו</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Camera className="w-12 h-12" />}
              title="צילום מקצועי"
              description="צילום איכותי לכל מטרה - אירועים, מוצרים, תדמית ועוד"
            />
            <ServiceCard
              icon={<Video className="w-12 h-12" />}
              title="עריכת וידאו"
              description="עריכה מקצועית, אפקטים מיוחדים וצבע"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">תיק עבודות</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`https://images.unsplash.com/photo-${item + 1486312338219}`}
                  alt={`Portfolio item ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">צור קשר</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ContactInfo icon={<Phone />} text="050-1234567" />
              <ContactInfo icon={<Mail />} text="info@creatives.com" />
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="אימייל"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <textarea
                placeholder="הודעה"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-primary-pink px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-8 rounded-xl glass-card">
    <div className="text-primary-pink mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-4 space-x-reverse">
    <div className="text-white">{icon}</div>
    <span>{text}</span>
  </div>
);

export default Index;