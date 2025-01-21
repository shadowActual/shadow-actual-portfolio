import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Let&apos;s Talk About Your Next Project</h2>
        <form className="mt-10 max-w-xl mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg text-gray-800"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg text-gray-800"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-4 rounded-lg text-gray-800"
            />
          </div>
          <button className="w-full p-4 bg-yellow-400 text-green-800 font-bold rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
