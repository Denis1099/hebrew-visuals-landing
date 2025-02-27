
import { Presentation, Lightbulb, Camera, Video } from "lucide-react";

const ProcessCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
  <div className="p-6 rounded-xl glass-card bg-gradient-to-br from-white/80 to-purple-50/30 backdrop-blur-sm text-center">
    <div className="flex justify-center mb-4">
      <Icon className="w-8 h-8 text-primary-pink animate-icon-float" />
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4" >
        <h2 className="text-4xl font-bold text-center mb-8 md:mb-12 text-[#1A1F2C]">
          "מגניב, איך בפועל זה עובד?"
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <ProcessCard
            icon={Presentation}
            title="שיחת אפיון לעסק"
            description="שבה נבין בדיוק מה העסק שלך ומי קהל היעד שאליו אנחנו מכוונים"
          />
          <ProcessCard
            icon={Lightbulb}
            title="פגישת אסטרטגיה"
            description="שבה נצלול לשיטה מדוייקת של ייצרת תוכן מתואם אישית לעסק שלך וכזה שמוציא את 'האני האמיתי שבך' ובסוף ממיר צופים ללקוחות משלמים"
          />
          <ProcessCard
            icon={Camera}
            title="יום צילום"
            description="עם צלם מקצועי ומפיק שפשוט ידבר איתך כדי שזה ירגיש כמו שיחה רגילה ולך יהיה קל להתרכז ולהוציא את התוכן הכי טוב שלך"
          />
          <ProcessCard
            icon={Video}
            title="עריכת סרטונים"
            description="ששמה פוקוס עליך ומשלבת עריכה מתקדמת שמבליטה אותך משאר המתחרים כדי שנמשוך קהל איכותי ורלוונטי ושייפרש את איכות התוכן לטיב השירות שלכם"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
