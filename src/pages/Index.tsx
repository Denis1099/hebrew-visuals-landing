import Navbar from "@/components/Navbar";
import { Camera, Video, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-start pt-32 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
            <div className="w-full md:w-1/2 text-right space-y-6 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-light mb-4 animate-slide-up">
                אני כאן כדי לקחת את התוכן שלך לרמה הבאה עם אסטרטגיה שיווקית, צילום מקצועי ועריכת סרטונים שמייצרים תוצאות.
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold animate-slide-up">
                אני האמיתי בעסק שלך!
              </h1>
              <p className="text-xl md:text-2xl font-light animate-slide-up">
                הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
              </p>
              <div className="flex justify-center">
                <a href="#contact" className="inline-block bg-white text-primary-pink px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                  צור קשר
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 animate-fade-in">
              <img 
                src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
                alt="תמונת גיבור"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3].map((index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">"מרגיש תקוע עם יצירת תוכן לעסק שלך?"</h2>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl">אני לגמרי מבין את זה!</p>
            <p className="text-lg">
              המון בעלי עסקים מגיעים אליי כשהם בדיוק במקום הזה – רוצים להפיק תוכן איכותי אבל לא יודעים איך להתחיל, או פשוט פוחדים מלעמוד מול המצלמה.
            </p>
            <div className="space-y-4">
              <p className="text-lg font-medium">אתה בטח אומר:</p>
              <ul className="space-y-2">
                <li>איך עושים את זה נכון?</li>
                <li>מה יגידו עליי?</li>
                <li>מה אם אני אשקיע המון זמן וכסף ולא אראה תוצאות?</li>
              </ul>
            </div>
            <p className="text-lg">
              אז אחרי שעזרתי לעשרות בעלי עסקים לפרוץ ולהתגבר על המכשולים האלו, אני יכול להבטיח לך דבר אחד:
            </p>
            <p className="text-xl font-bold">ליצור תוכן יכול להיות פשוט, קליל ואפילו מהנה.</p>
            <p className="text-lg">רוצה ללמוד איך לעשות את זה?</p>
            <div className="pt-6">
              <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300">
                צור קשר
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">"גבריאל, תראה לי קצת דוגמאות"</h2>
          <p className="text-xl text-center mb-12">טוב ידעתי שתבקשו:</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">"מגניב, איך בפועל זה עובד?"</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessCard
              title="שיחת אפיון לעסק"
              description="שבה נבין בדיוק מה העסק שלך ומי קהל היעד שאליו אנחנו מכוונים"
            />
            <ProcessCard
              title="פגישת אסטרטגיה"
              description="שבה נצלול לשיטה מדוייקת של ייצרת תוכן מתואם אישית לעסק שלך וכזה שמוציא את 'האני האמיתי שבך' ובסוף ממיר צופים ללקוחות משלמים"
            />
            <ProcessCard
              title="יום צילום"
              description="עם צלם מקצועי ומפיק שפשוט ידבר איתך כדי שזה ירגיש כמו שיחה רגילה ולך יהיה קל להתרכז ולהוציא את התוכן הכי טוב שלך"
            />
            <ProcessCard
              title="עריכת סרטונים"
              description="ששמה פוקוס עליך ומשלבת עריכה מתקדמת שמבליטה אותך משאר המתחרים כדי שנמשוך קהל איכותי ורלוונטי ושייפרש את איכות התוכן לטיב השירות שלכם"
            />
          </div>
          <div className="text-center mt-12">
            <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300">
              צור קשר
            </a>
          </div>
        </div>
      </section>

      {/* More Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">עוד קצת ממה שהלקוחות שלי אומרים:</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((index) => (
              <div key={index} className="aspect-video bg-gray-200 rounded-lg"></div>
            ))}
          </div>
          <div className="text-center">
            <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300">
              צור קשר
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">אז היי, אני גבריאל גלמן</h2>
            <div className="space-y-6 text-lg">
              <p>ואני כאן כדי לעזור לך להצליח עם תוכן שיווקי לעסק שלך!</p>
              <p>אני איש תוכן אסטרטג וצלם מאז שאני זוכר את עצמי. מאז גיל 12 שלקחתי את המצלמה הישנה של אחי הגדול לא עזבתי אותה, בשלב מסוים הבנתי שהתמונה לא רק מושכת תשומת לב, אלא גם מביאה לקוחות. כשליוויתי בעלי עסקים, הבנתי את האתגרים – חוסר זמן, פחד ממצלמה, ותחושת חוסר ידע איך להתחיל.</p>
              <p>הייתי גם אני שם – ביישן, לא יודע איך לעמוד מול המצלמה, אבל כל זה השתנה. אז היום אני לא רק צלם, אלא גם אסטרטג שמבין איך ליצור תוכן שמניב תוצאות.</p>
              <p>אני עובד עם כל לקוח באופן אישי ומותאם, ומטפל בתהליך כולו – מאסטרטגיה ועד עריכה. בגדול דואג שתמשיך לעשות את מה שאתה טוב בו ודואג לכל המעטפת שאתה צריך בשביל ליצור תוכן שממיר צופים ללקוחות משלמים.</p>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-6">גבריאל בוא נדבר:</h3>
              <a href="#contact" className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300">
                צור קשר
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">אם הגעת עד כאן, כנראה שאתה רציני לגבי העסק שלך.</h2>
            <div className="space-y-6 text-lg">
              <p>אני יודע שזה לא קל לעמוד מול מצלמה, ויכול להיות שאתה מרגיש שלא תמיד יש לך את הזמן או את הכלים לעשות את זה נכון.</p>
              <p>אבל תן לי לשאול אותך –</p>
              <p>יש שני סוגי בעלי עסקים בעולם:</p>
              <ul className="space-y-4">
                <li>אלו שלוקחים את העסק שלהם ברצינות, משקיעים בתוכן איכותי, ומשדרגים את עצמם ואת העסק שלהם.</li>
                <li>ויש את אלו שמניחים לפחדים ולחששות להחזיק אותם במקום.</li>
              </ul>
              <p>(ואת מי אתה חושב שהלקוחות יבחרו? את המותג המוביל או את זה שנשאר מאחור?)</p>
              <p className="font-bold">אני שואל אותך,</p>
              <p>איזה סוג של בעל עסק אתה רוצה להיות?</p>
              <p>האם אתה מוכן לשים את הפחדים בצד ולהפוך למוביל בשוק שלך?</p>
              <p className="font-bold">הבחירה בידיים שלך.</p>
              <p>אני משאיר לך הזדמנות אחרונה להשאיר את הפרטים שלך לשיחת ייעוץ והכרת העסק במתנה!</p>
            </div>
            <div className="mt-12">
              <a href="#contact" className="inline-block bg-white text-primary-pink px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300">
                צור קשר
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">צור קשר</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ContactInfo icon={<Phone />} text="050-1234567" />
              <ContactInfo icon={<Mail />} text="info@creatives.com" />
            </div>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="שם מלא"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary-pink"
              />
              <input
                type="email"
                placeholder="אימייל"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary-pink"
              />
              <textarea
                placeholder="הודעה"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary-pink"
              />
              <button
                type="submit"
                className="w-full bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300"
              >
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProcessCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 rounded-xl glass-card">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactInfo = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center space-x-4 space-x-reverse">
    <div className="text-primary-pink">{icon}</div>
    <span>{text}</span>
  </div>
);

export default Index;