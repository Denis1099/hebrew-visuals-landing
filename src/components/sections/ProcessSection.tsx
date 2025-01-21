const ProcessCard = ({ title, description }: { title: string; description: string }) => (
  <div className="p-6 rounded-xl glass-card">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProcessSection = () => {
  return (
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
  );
};

export default ProcessSection;