
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "./contact/ContactForm";
import type { ContactFormData } from "@/lib/validations/forms";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "נחזור אליך בהקדם 😊",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative text-black font-assistant">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#ffffff,#abaaaa)] backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-gveretlevin mb-8">בואו נדבר על העסק שלך!</h2>
          <p className="text-xl md:text-2xl mb-12">
            השאירו פרטים ואחזור אליכם בהקדם כדי שנוכל להתחיל לעבוד על התוכן שלכם
          </p>
          <ContactForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
