const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">עזוב אותך גבריאל, תן לי לשמוע מה הלקוחות מספרים:</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3].map((index) => (
            <div key={index} className="aspect-video bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;