import { MessageCircle, Instagram } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="pt-20 pb-18 bg-gradient-to-b from-[#74a9f1] to-[#c0017e] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#a2066f]">אם הגעת עד כאן, כנראה שאתה רציני לגבי העסק שלך.</h2>
          <div className="space-y-6 text-lg">
            <p>אני יודע שזה לא קל לעמוד מול מצלמה, ויכול להיות שאתה מרגיש שלא תמיד יש לך את הזמן או את הכלים לעשות את זה נכון.</p>
            <p className="text-2xl font-bold text-[#a2066f]">אבל תן לי לשאול אותך –</p>
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
            <img 
              src="/lovable-uploads/signaturewhite.webp" 
              alt="Gabriel Creative Signature" 
              className="max-w-[600px] w-full mx-auto object-contain h-[80px]"
            />
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://wa.me/message/X2HGLP3OBEWEF1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/_gabrielgelman?igsh=MW5oMWZuaHdmZnhjZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 bg-[#E4405F] rounded-full hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;