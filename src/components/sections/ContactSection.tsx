const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#c0017e] to-white text-white font-noto text-right">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">בואו נדבר על העסק שלך</h2>
          <p className="text-xl md:text-2xl mb-12">
            השאירו פרטים ואחזור אליכם בהקדם כדי שנוכל להתחיל לעבוד על התוכן שלכם! 🔥
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
              <label htmlFor="name" className="sr-only block text-lg mb-2">שם מלא</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-3 bg-white/10 border border-gray/20 rounded-lg text-black placeholder:text-black-400"
                  placeholder="השם שלך"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only block text-lg mb-2">טלפון</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 bg-white/10 border border-gray/20 rounded-lg text-black placeholder:text-black-400"
                  placeholder="המספר שלך"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only block text-lg mb-2">איך אני יכול לעזור?</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full p-3 bg-white/10 border border-gray/20 rounded-lg text-white placeholder:text-black-400"
                placeholder="ספר לי קצת על העסק שלך..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-gradient-primary text-white px-12 py-4 rounded-full text-xl font-medium
                  hover:opacity-90 transition-opacity duration-300 transform hover:scale-105"
              >
                בוא נדבר!  📥
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;