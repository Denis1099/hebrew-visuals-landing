import React from 'react';
import { Presentation, Lightbulb, Camera, Video } from "lucide-react";

const ProcessCard = ({ title, description, icon: Icon }) => (
  <div className="p-6 rounded-xl text-center relative z-10 bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-sm shadow-md border border-white/50">
    <div className="flex justify-center mb-4">
      <Icon className="w-8 h-8 text-[#410175]" />
    </div>
    <h3 className="text-xl font-assistant font-bold mb-4 text-[#410175]">{title}</h3>
    <p className="text-[#410175] leading-relaxed">{description}</p>
  </div>
);

const ProcessSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.87),rgba(171,170,170,0.87))]">
      {/* Feather background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 z-0 opacity-60">
        <img src="/lovable-uploads/feather-bg.svg" alt="" className="w-full h-full transform rotate-12" />
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 z-0 opacity-60">
        <img src="/lovable-uploads/feather-bg.svg" alt="" className="w-full h-full transform rotate-190" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-migdal text-[#410175] text-center mb-8 md:mb-12">
          "מגניב, איך בעצם זה עובד?"
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ProcessCard
            icon={Presentation}
            title="שיחת אפיון לעסק"
            description="שבה נבין בדיוק מה העסק שלך ומי קהל היעד שאליו אנחנו מכוונים"
          />
          
          <ProcessCard
            icon={Lightbulb}
            title="פגישת אסטרטגיה"
            description="שבה נצלול לשיטה מדוייקת של יצירת תוכן מתואם אישית לעסק שלך וכזה שמוציא את 'האני האמיתי שבך' ובסוף ממיר צופים ללקוחות משלמים"
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