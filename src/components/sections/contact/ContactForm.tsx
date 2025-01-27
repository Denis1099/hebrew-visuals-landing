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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-netlify="true" name="contact-form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    placeholder="שם מלא *"
                    className="w-full p-3 bg-white rounded-lg text-black placeholder:text-gray-500 text-right shadow-md"
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
                    placeholder="* מספר טלפון"
                    type="tel"
                    className="w-full p-3 bg-white rounded-lg text-black placeholder:text-gray-500 text-right shadow-md"
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
              hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 shadow-lg
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