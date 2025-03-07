
const ProblemSection = () => {
  return (
    <section className="py-8 md:py-12 relative">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 md:mb-8 gradient-text">מרגיש תקוע עם יצירת תוכן לעסק שלך?</h2>
        <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
          <p className="text-xl font-bold">אני לגמרי מבין את זה!</p>
          <p className="text-lg">
            המון בעלי עסקים מגיעים אליי כשהם בדיוק במקום הזה – רוצים להפיק תוכן איכותי אבל לא יודעים איך להתחיל, או פשוט פוחדים מלעמוד מול המצלמה.
          </p>
          <div className="space-y-4">
            <p className="text-2xl font-medium text-[#a2066f]">אתה בטח אומר:</p>
            <ul className="space-y-2">
              <li>איך עושים את זה נכון?</li>
              <li>מה יגידו עליי?</li>
              <li>מה אם אני אשקיע המון זמן וכסף ולא אראה תוצאות?</li>
            </ul>
          </div>
          <p className="text-lg">
            אז אחרי שעזרתי לעשרות בעלי עסקים לפרוץ ולהתגבר על המכשולים האלו, אני יכול להבטיח לך דבר אחד:
          </p>
          <p className="text-xl font-bold text-[#c0017e]">ליצור תוכן יכול להיות פשוט, קליל ואפילו מהנה.</p>
          <p className="text-lg">רוצה ללמוד איך לעשות את זה?</p>
          <div className="pt-4 md:pt-6">
            <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out w-full sm:w-auto text-base sm:text-lg">
              תראה לי איך עושים את זה!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
