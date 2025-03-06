import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { heroFormSchema, type HeroFormData } from "@/lib/validations/forms";

const HeroForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit = async (data: HeroFormData) => {
    setIsSubmitting(true);
    
    try {
      // Track form submission with Meta Pixel
      (window as any).fbq('track', 'Lead', {
        content_name: 'hero_form_submission',
        content_category: 'form_submission',
        value: 0,
        currency: 'ILS',
      });
      
      console.log('Form submitted:', data);
      
      // Submit the form data to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "hero-form",
          ...data
        }).toString(),
      });
      
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "נחזור אליך בהקדם 😊",
      });
      form.reset();
    } catch (error) {
      console.error('Form error:', error);
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
    <div className="space-y-3 sm:space-y-4 mb-6 md:mb-0 hero-form-tablet-fix">
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 sm:space-y-4" 
          data-netlify="true" 
          name="hero-form" 
          method="POST"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="hero-form" />
          <p hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center items-center">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full md:w-[280px]">
                  <FormControl>
                    <Input 
                      placeholder="שם מלא"
                      autoComplete="name"
                      className={`text-black text-right bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500 h-10 sm:h-12 text-lg rounded-lg shadow-md before:content-['*'] before:mr-[-1em] before:text-red-500 before:absolute ${
                        form.formState.errors.name ? 'border-red-500 before:opacity-100' : 'before:opacity-0'
                      }`}
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
                <FormItem className="w-full md:w-[280px]">
                  <FormControl>
                    <Input 
                      placeholder="מספר טלפון"
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      className={`text-black text-right bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500 h-10 sm:h-12 text-lg rounded-lg shadow-md before:content-['*'] before:mr-[-1em] before:text-red-500 before:absolute ${
                        form.formState.errors.phone ? 'border-red-500 before:opacity-100' : 'before:opacity-0'
                      }`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-right text-red-200" />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center form-buttons-tablet-fix">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="inline-block bg-primary-pink text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium 
                hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out w-full sm:w-auto text-base
                disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-1"
            >
              {isSubmitting ? "שולח..." : "בוא נדבר! 📥"}
            </button>
            <button 
              type="button"
              onClick={() => {
                const element = document.querySelector('#final-cta');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-[#5797ef] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium 
                hover:bg-primary-blue/90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out w-full sm:w-auto text-base order-2 sm:order-2"
            >
              אני רוצה פרטים נוספים
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default HeroForm;