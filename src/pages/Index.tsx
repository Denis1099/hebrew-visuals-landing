import Navbar from "@/components/Navbar";
import { Camera, Video, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-start pt-32 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
            <div className="w-full md:w-1/2 text-right space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-light mb-4 animate-slide-up">
                אני כאן כדי לקחת את התוכן שלך לרמה הבאה עם אסטרטגיה שיווקית, צילום מקצועי ועריכת סרטונים שמייצרים תוצאות.
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
                אני האמיתי בעסק שלך!
              </h1>
              <a href="#contact" className="inline-block bg-white text-primary-pink px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                צור קשר
              </a>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in">
              <img 
                src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
                alt="תמונת גיבור"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
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