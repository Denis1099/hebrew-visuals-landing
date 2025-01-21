import { Mail, Phone } from "lucide-react";

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-4 space-x-reverse">
    <div className="text-primary-pink">{icon}</div>
    <span>{text}</span>
  </div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContactInfo icon={<Phone />} text="050-1234567" />
            <ContactInfo icon={<Mail />} text="info@creatives.com" />
          </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="שם מלא"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary-pink text-right"
            />
            <input
              type="tel"
              placeholder="טלפון"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary-pink text-right"
            />
            <button
              type="submit"
              className="w-full bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
            >
              אני רוצה לבלוט ברשת!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;