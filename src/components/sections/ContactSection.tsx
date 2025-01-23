const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#c0017e] to-white text-white font-noto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
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
                  className="w-full p-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 text-right shadow-md"
                  placeholder="השם שלך"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only block text-lg mb-2">טלפון</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full p-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 text-right shadow-md"
                  placeholder="המספר שלך"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only block text-lg mb-2">איך אני יכול לעזור?</label>
              <textarea 
                id="message" 
                rows={3}
                className="w-full p-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 text-right shadow-md"
                placeholder="ספר לי קצת על העסק שלך..."
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-gradient-primary text-white px-12 py-4 rounded-full text-xl font-medium
                  hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 shadow-lg"
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