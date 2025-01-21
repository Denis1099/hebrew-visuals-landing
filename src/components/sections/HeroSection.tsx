import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

type FormData = {
  name: string;
  phone: string;
};

const HeroSection = () => {
  const form = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log('Form submitted:', data);
    setIsSubmitting(false);
  };

  const scrollToFinalCTA = () => {
    const element = document.querySelector('#final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-start pt-24 md:pt-32 bg-gradient-to-b from-[#6b46c1] via-[#805ad5] to-white text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-3/4 mx-auto text-center space-y-6 md:space-y-12 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-light mb-4 animate-slide-up">
              אני כאן כדי לקחת את התוכן שלך לרמה הבאה עם אסטרטגיה שיווקית, צילום מקצועי ועריכת סרטונים שמייצרים תוצאות.
            </h2>
            <div className="block md:hidden">
              <img 
                src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
                alt="תמונת גיבור"
                className="w-[85%] h-auto rounded-2xl shadow-xl mx-auto mb-8"
              />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 md:mb-12 animate-slide-up bg-gradient-to-r from-white via-primary-blue to-white bg-clip-text text-transparent">
              אני האמיתי בעסק שלך!
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 md:mb-10 animate-slide-up">
              הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
            </p>
            <div className="space-y-6 mb-16 md:mb-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full md:w-auto">
                          <FormControl>
                            <Input 
                              placeholder="שם מלא" 
                              className="text-right bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="w-full md:w-auto">
                          <FormControl>
                            <Input 
                              placeholder="מספר טלפון" 
                              type="tel"
                              className="text-right bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-block bg-white text-primary-pink px-8 py-3 rounded-full font-medium 
                        hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                        transition-all duration-300 ease-in-out w-full md:w-auto"
                    >
                      אני רוצה לבלוט ברשת!
                    </button>
                    <button 
                      type="button"
                      onClick={scrollToFinalCTA}
                      className="inline-block bg-primary-pink border-2 border-white text-white px-8 py-3 rounded-full font-medium 
                        hover:bg-primary-pink/90 hover:transform hover:scale-105 hover:shadow-lg 
                        transition-all duration-300 ease-in-out w-full md:w-auto"
                    >
                      תראה לי איך עושים את זה!
                    </button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
          <div className="hidden md:block w-full md:w-1/2 animate-fade-in">
            <img 
              src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
              alt="תמונת גיבור"
              className="w-[85%] h-auto rounded-2xl shadow-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
