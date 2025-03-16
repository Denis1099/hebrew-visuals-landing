
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 relative">
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold font-assistant text-center mb-8 gradient-text">אז היי, אני גבריאל גלמן</h2>
          <div className="space-y-4 md:space-y-6 text-center text-lg">
            <p className="font-bold text-xl">ואני כאן כדי לעזור לך לקחת את העסק שלך לשלב הבא!</p>
            <p>הרבה אנשים עושים סרטונים אבל לא הרבה מממשים את המשוואה:</p>
            
            <motion.div 
              className="font-gveretlevin text-3xl md:text-4xl my-6 text-primary-pink"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              סרטונים = כסף
            </motion.div>
            
            <p>
              בעזרת תוכנית שתפורה במיוחד עבורך, וכוללת את הבידול שלך, {" "}
              <Link to="/about" className="relative inline-block font-medium text-primary-pink hover:text-primary-blue transition-colors duration-300">
                אנחנו בגבריאל קריאטיבס
              </Link>
              {" "}ניצור עבורך תוכן שלא רק נכון ומדויק שיווקית אלה גם מדוייק לקהל הלקוחות שהכי מתאימים עבורך.
            </p>
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link 
              to="/about" 
              className="inline-block bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                  transition-all duration-300 ease-in-out w-full sm:w-auto text-base sm:text-lg"
            >
              קרא עוד
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
