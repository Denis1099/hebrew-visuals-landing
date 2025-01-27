import React from "react";

const testimonials = [
  {
    id: 1,
    content: `כבר שלוש שנים שיצירת תוכן גורמת לי בדד, מאז שאני זוכר את עצמי או אם לדייק מאז גיל 10 שלקחתי את המצלמה הישנה של אחי הגדול לא עברתי אותה, בשלב מסוים הבנתי שזה מאוד מעבר לזה שזה עושה לי את זה\n\nתוצאות ומשנה מציאות לבעלי עסקים!`,
    author: "יוסי כהן",
  },
  {
    id: 2,
    content: `העבודה עם הצוות הייתה מדהימה! הם הבינו את הצרכים שלי ויצרו תוכן איכותי שהביא לי לקוחות חדשים.`,
    author: "מיכל לוי",
  },
  {
    id: 3,
    content: `אני ממליץ עליהם בחום! התהליך היה מקצועי והם תמיד היו זמינים לכל שאלה.`,
    author: "דוד ישראלי",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">מהלקוחות שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"{testimonial.content}"</p>
              <p className="text-right font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
