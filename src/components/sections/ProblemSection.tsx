const ProblemSection = () => {
  return (
    <section className="py-8 md:py-12 relative pb-[250px] md:pb-8">
      {/* Mobile image absolute positioned at the bottom - visible on mobile, hidden on md and up */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center z-10">
        <img 
          src="/lovable-uploads/gabriel-selfie.svg" 
          alt="Gabriel with camera" 
          className="w-auto h-[250px]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.87),rgba(226,206,255,0.87))]"></div>
      
      {/* SVG positioned in the top right corner */}
      <div className="absolute top-0 right-0 z-10">
        <img 
          src="/lovable-uploads/bottom_arrow.svg" 
          alt="Arrow" 
          className="w-[45%] md:w-[45%] lg:w-[50%] h-auto transform rotate-180"
        />
      </div>
      
      {/* Desktop image - hidden on mobile, visible on md and up */}
      <div className="hidden md:block absolute bottom-0 right-0 z-10">
        <img 
          src="/lovable-uploads/gabriel-selfie.svg" 
          alt="Gabriel with camera" 
          className="w-auto h-[300px] lg:h-[350px]"
        />
      </div>
      
      <div className="mx-auto px-4 relative z-10 md:pl-8 md:pr-32 lg:pl-12 lg:pr-40">
        <h2 className="text-4xl md:text-5xl text-center mb-4 md:mb-8 text-[#410175] font-migdal">מרגיש תקוע עם יצירת תוכן לעסק שלך?</h2>
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
          <p className="text-xl md:text-3xl font-bold text-[#c6008a] font-gveretlevin">אני לגמרי מבין את זה!</p>
          <p className="text-lg md:text-2xl text-[#410175] font-assistant">
            המון בעלי עסקים מגיעים אליי כשהם בדיוק במקום הזה – רוצים להפיק תוכן איכותי אבל לא יודעים איך להתחיל, או פשוט פוחדים מלעמוד מול המצלמה.
          </p>
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-medium text-[#c6008a] font-gveretlevin">אתה בטח אומר:</p>
            <ul className="text-lg md:text-xl space-y-0 font-assistant text-[#410175]">
              <li>איך עושים את זה נכון?</li>
              <li>מה יגידו עליי?</li>
              <li>מה אם אני אשקיע המון זמן וכסף ולא אראה תוצאות?</li>
            </ul>
          </div>
          <p className="text-lg md:text-xl font-assistant text-[#c6008a]">
            אז אחרי שעזרתי לעשרות בעלי עסקים לפרוץ ולהתגבר על המכשולים האלו
          </p>
          <p className="text-xl md:text-2xl font-assistant font-extrabold text-[#c6008a]">אני יכול להבטיח לך דבר אחד:</p>
          <p className="text-3xl md:text-4xl text-[#410175] font-migdal">ליצור תוכן יכול להיות פשוט, קליל ואפילו מהנה.</p>
          <p className="text-lg md:text-2xl font-assistant text-[#410175]">רוצה ללמוד איך לעשות את זה?</p>
          <div className="pt-4 md:pt-6">
            <a href="#contact" className="inline-block bg-gradient-primary text-white px-12 py-3 rounded-full font-medium hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out w-auto sm:w-auto text-base sm:text-lg">
              תראה לי איך עושים את זה!
            </a>
          </div>
          
          {/* Mobile image positioned at the very bottom - visible on mobile, hidden on md and up */}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;