import { MessageCircle, Instagram } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="pt-20 pb-18 relative">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-migdal text-[#410175] mb-8">
            אם הגעת עד כאן, כנראה שאתה רציני לגבי העסק שלך.
          </h2>
          <div className="space-y-6 text-lg">
            <p>אני יודע שזה לא קל לעמוד מול מצלמה, ויכול להיות שאתה מרגיש שלא תמיד יש לך את הזמן או את הכלים לעשות את זה נכון.</p>
            <p className="text-2xl font-bold text-[#0EA5E9]">אבל תן לי לשאול אותך –</p>
            <p>יש שני סוגי של בעלי עסקים בעולם:</p>
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
          <div className="mt-14">
            <picture>
              <source media="(min-width: 768px)" srcSet="/lovable-uploads/gg-signature-desktop.webp" />
              <img 
                src="/lovable-uploads/gg-signature-mobile.webp" 
                alt="Gabriel Creative Signature" 
                className="max-w-[600px] w-full mx-auto object-contain h-[80px] brightness-0"
                width="600"
                height="80"
              />
            </picture>
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://www.instagram.com/_gabrielgelman?igsh=MW5oMWZuaHdmZnhjZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-[#E4405F] rounded-full hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out"
                aria-label="עקוב אחרינו באינסטגרם"
              >
                <Instagram className="w-6 h-6 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
