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
    <section id="home" className="min-h-screen flex items-start pt-20 md:pt-32 bg-gradient-to-b from-[#6b46c1] via-[#805ad5] to-white text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-3/4 mx-auto text-center space-y-6 md:space-y-8 lg:space-y-12 animate-fade-in">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-4 animate-slide-up leading-relaxed">
              פתרון מלא לתוכן שלך: אסטרטגיה, צילום ועריכת וידאו מקצועיים.
            </h2>
            <div className="block md:hidden">
              <img 
                src="/lovable-uploads/99678c18-5979-4632-b796-295b97f52ed2.png"
                alt="תמונת גיבור"
                className="w-[90%] sm:w-[80%] h-auto rounded-2xl shadow-xl mx-auto mb-6 sm:mb-8"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 md:mb-10 animate-slide-up">
              אני מזמין אותך לשיחת אפיון לעסק במתנה 🎁
              במודל ״ אני האמיתי ״
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 md:mb-12 animate-slide-up gradient-text md:bg-gradient-to-r from-white via-primary-blue to-white bg-clip-text text-transparent ">
              אני האמיתי בעסק שלך!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 md:mb-10 animate-slide-up">
              הגיע הזמן שהעסק שלך יבלוט ויביא תוצאות אמיתיות!
            </p>
            <div className="space-y-6 mb-10 md:mb-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="w-full md:w-[300px]">
                          <FormControl>
                            <Input 
                              placeholder="שם מלא" 
                              className="text-right bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500 h-12 text-lg rounded-lg shadow-md"
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
                        <FormItem className="w-full md:w-[300px]">
                          <FormControl>
                            <Input 
                              placeholder="מספר טלפון" 
                              type="tel"
                              className="text-right bg-white/90 backdrop-blur-sm border-white/20 placeholder:text-gray-500 h-12 text-lg rounded-lg shadow-md"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-block bg-primary-pink text-white px-6 sm:px-8 py-3 rounded-full font-medium 
                        hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                        transition-all duration-300 ease-in-out w-full sm:w-auto text-base sm:text-lg"
                    >
                       בוא נדבר!  📥
                    </button>
                    <button 
                      type="button"
                      onClick={scrollToFinalCTA}
                      className="inline-block bg-[#5797ef] text-white px-6 sm:px-8 py-3 rounded-full font-medium 
                        hover:bg-primary-blue/90 hover:transform hover:scale-105 hover:shadow-lg 
                        transition-all duration-300 ease-in-out w-full sm:w-auto text-base sm:text-lg"
                    >
                      אני רוצה פרטים נוספים
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
              className="w-[90%] lg:w-[85%] h-auto rounded-2xl shadow-xl mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;