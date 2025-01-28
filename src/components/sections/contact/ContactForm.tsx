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
import { contactFormSchema, type ContactFormData } from "@/lib/validations/forms";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isSubmitting: boolean;
}

const ContactForm = ({ onSubmit, isSubmitting }: ContactFormProps) => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    try {
      // Track form submission with Meta Pixel
      (window as any).fbq('track', 'Contact', {
        content_name: 'contact_form_submission',
        content_category: 'form_submission',
        value: 0,
        currency: 'ILS',
      });
      
      // Handle React form submission
      await onSubmit(data);
      
      // Submit the form data to Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact-form",
          ...data
        }).toString(),
      });
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6" 
        data-netlify="true" 
        name="contact-form" 
        method="POST"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="שם מלא"
                    autoComplete="name"
                    className={`w-full p-3 bg-white rounded-lg text-black placeholder:text-gray-500 text-right shadow-md before:content-['*'] before:mr-[-1em] before:text-red-500 before:absolute ${
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
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="מספר טלפון"
                    type="tel"
                    autoComplete="tel"
                    dir="ltr"
                    className={`w-full p-3 bg-white rounded-lg text-black placeholder:text-gray-500 text-right shadow-md before:content-['*'] before:mr-[-1em] before:text-red-500 before:absolute ${
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
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea 
                  placeholder="ספר לי קצת על העסק שלך..."
                  className="w-full p-3 bg-white rounded-lg text-black placeholder:text-gray-500 text-right shadow-md resize-none h-32"
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
              hover:bg-opacity-90 hover:transform hover:scale-105 hover:shadow-lg 
                transition-all duration-300 ease-in-out w-full sm:w-auto text-base sm:text-lg
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "שולח..." : "בוא נדבר! 📥"}
          </button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;