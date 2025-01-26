import { z } from "zod";

export const heroFormSchema = z.object({
  name: z.string().min(2, "נא להזין שם מלא").max(50),
  phone: z
    .string()
    .min(9, "מספר טלפון חייב להכיל לפחות 9 ספרות")
    .max(15, "מספר טלפון ארוך מדי")
    .regex(/^[0-9+\-\s()]*$/, "מספר טלפון לא תקין"),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "נא להזין שם מלא").max(50),
  phone: z
    .string()
    .min(9, "מספר טלפון חייב להכיל לפחות 9 ספרות")
    .max(15, "מספר טלפון ארוך מדי")
    .regex(/^[0-9+\-\s()]*$/, "מספר טלפון לא תקין"),
  message: z
    .string()
    .min(10, "ההודעה חייבת להכיל לפחות 10 תווים")
    .max(1000, "ההודעה ארוכה מדי"),
});

export type HeroFormData = z.infer<typeof heroFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;