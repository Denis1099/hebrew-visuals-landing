import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@/lib/validations/forms";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "נחזור אליך בהקדם 😊",
      });
      form.reset();
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
    <section id="contact" className="py-20 bg-gradient-to-b from-[#c0017e] to-white text-white font-noto">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">בואו נדבר על העסק שלך</h2>
          <p className="text-xl md:text-2xl mb-12">
            השאירו פרטים ואחזור אליכם בהקדם כדי שנוכל להתחיל לעבוד על התוכן שלכם! 🔥
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="השם שלך *"
                          className="w-full p-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 text-right shadow-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-right text-red-200" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="המספר שלך *"
                          type="tel"
                          className="w-full p-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 text-right shadow-md"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-right text-red-200" />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="ספר לי קצת על העסק שלך... *"
                        className="w-full p-3 bg-white rounded-lg text-gray-900 placeholder:text-gray-500 text-right shadow-md resize-none h-32"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-red-200" />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-primary text-white px-12 py-4 rounded-full text-xl font-medium
                    hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 shadow-lg
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "שולח..." : "בוא נדבר! 📥"}
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;