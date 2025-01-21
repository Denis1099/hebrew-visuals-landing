const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 bg-pattern relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">אז היי, אני גבריאל גלמן</h2>
          <div className="space-y-4 md:space-y-6 text-center md:text-right text-lg">
            <p>ואני כאן כדי לעזור לך להצליח עם תוכן שיווקי לעסק שלך!</p>
            <p>אני איש תוכן אסטרטג וצלם מאז שאני זוכר את עצמי. מאז גיל 12 שלקחתי את המצלמה הישנה של אחי הגדול לא עזבתי אותה, בשלב מסוים הבנתי שהתמונה לא רק מושכת תשומת לב, אלא גם מביאה לקוחות. כשליוויתי בעלי עסקים, הבנתי את האתגרים – חוסר זמן, פחד ממצלמה, ותחושת חוסר ידע איך להתחיל.</p>
            <p>הייתי גם אני שם – ביישן, לא יודע איך לעמוד מול המצלמה, אבל כל זה השתנה. אז היום אני לא רק צלם, אלא גם אסטרטג שמבין איך ליצור תוכן שמניב תוצאות.</p>
            <p>אני עובד עם כל לקוח באופן אישי ומותאם, ומטפל בתהליך כולו – מאסטרטגיה ועד עריכה. בגדול דואג שתמשיך לעשות את מה שאתה טוב בו ודואג לכל המעטפת שאתה צריך בשביל ליצור תוכן שממיר צופים ללקוחות משלמים.</p>
          </div>
          <div className="text-center mt-8 md:mt-12">
            <h3 className="text-2xl font-bold mb-6">גבריאל בוא נדבר:</h3>
            <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300">
              צור קשר
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
