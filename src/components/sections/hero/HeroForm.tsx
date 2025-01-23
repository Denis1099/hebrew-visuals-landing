import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

type FormData = {
  name: string;
  phone: string;
};

const HeroForm = () => {
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
  );
};

export default HeroForm;