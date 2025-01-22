const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#333] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
        <p className="mb-4">We would love to hear from you! Please fill out the form below to get in touch.</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message" className="mt-1 block w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
