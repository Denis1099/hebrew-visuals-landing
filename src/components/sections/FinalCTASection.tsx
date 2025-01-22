const FinalCTASection = () => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-b from-[#333] via-[#805ad5] to-[#6b46c1] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">אם הגעת עד כאן, כנראה שאתה רציני לגבי העסק שלך.</h2>
          <div className="space-y-6 text-lg">
            <p>אני יודע שזה לא קל לעמוד מול מצלמה, ויכול להיות שאתה מרגיש שלא תמיד יש לך את הזמן או את הכלים לעשות את זה נכון.</p>
            <p className="text-2xl font-bold text-[#0EA5E9]">אבל תן לי לשאול אותך –</p>
            <p>יש שני סוגי בעלי עסקים בעולם:</p>
            <ul className="space-y-4">
              <li>אלו שלוקחים את העסק שלהם ברצינות, משקיעים בתוכן איכותי, ומשדרגים את עצמם ואת העסק שלהם.</li>
              <li>ויש את אלו שמניחים לפחדים ולחששות להחזיק אותם במקום.</li>
            </ul>
            <p>(ואת מי אתה חושב שהלקוחות יבחרו? את המותג המוביל או את זה שנשאר מאחור?)</p>
            <p className="text-2xl font-bold text-[#0EA5E9]">אני שואל אותך,</p>
            <p>איזה סוג של בעל עסק אתה רוצה להיות?</p>
            <p>האם אתה מוכן לשים את הפחדים בצד ולהפוך למוביל בשוק שלך?</p>
            <p className="text-2xl font-bold text-[#0EA5E9]">הבחירה בידיים שלך.</p>
            <p>אני משאיר לך הזדמנות אחרונה להשאיר את הפרטים שלך לשיחת ייעוץ והכרת העסק במתנה!</p>
          </div>
          <div className="mt-4">
            <img 
              src="/lovable-uploads/14f251e4-09a7-46f5-8fb9-037806c3c286.png" 
              alt="Gabriel Creative Signature" 
              className="max-w-[600px] w-full mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;