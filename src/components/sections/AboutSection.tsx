const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">אז היי, אני גבריאל גלמן</h2>
          <div className="space-y-4 md:space-y-6 text-center text-lg">
            <p className="font-bold text-xl">ואני כאן כדי לעזור לך לקחת את העסק שלך לשלב הבא!</p>
            <p>כבר שלוש שנים שיצירת תוכן זורמת לי בדם,
            מאז שאני זוכר את עצמי או אם לדייק מאז גיל 10 שלקחתי את המצלמה הישנה של אחי הגדול לא עזבתי אותה, בשלב מסוים הבנתי שוידאו מעבר לזה שזה עושה לי את זה
            <br />
            <span className="font-bold">זה אשכרה מביא תוצאות ומשנה מציאות לבעלי עסקים!</span></p>
            <p>אחרי שנתיים של עבודה מדוייקת רקחנו שיטה מדוייקת כזו שמביאה תוצאות לכל אחד , גם אם בחיים לא עמדתם מול מצלמה וגם אם המצלמה היא האויב שלך.</p>
            <p><span className="font-bold">הייתי גם אני שם –</span>
               ביישן, לא יודע איך לעמוד מול המצלמה ובעיקר תקוע שיווקית. מאז עברו מים בנהר ובעיקר הפסדתי המון זמן שעלה לי בהמון כסף שיכלתי להרוויח אם הייתי מבין את זה מוקדם יותר.</p>
            <p>היום אני יודע לקחת את הכלים האלו ולעזור לך , 
            אני עובד עם כל לקוח באופן אישי ומותאם, ומטפל בתהליך כולו – מאסטרטגיה ועד עריכה. בגדול דואג שתמשיך לעשות את מה שאתה טוב בו ודואג לכל המעטפת שאתה צריך בשביל ליצור תוכן שממיר צופים ללקוחות משלמים.</p>
          </div>
          <div className="text-center mt-8 md:mt-12">
            <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out w-full sm:w-auto text-base sm:text-lg">
              גבריאל, בוא נדבר
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;