// app/components/ContactSection.tsx
'use client';

import React from 'react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send an email, call an API, etc.)
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 font-light">
        {/* Left Column: Intro & Contact Details */}
        <div className="flex flex-col justify-start">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-md leading-relaxed">
            I’d love to hear from you! Whether you have a question about my work or are interested in collaborating, feel free to drop a message. I’m available for freelance opportunities and creative projects.
          </p>
          <div className="mb-6">
            <p className="text-md">
              Email:{' '}
              <a
                href="mailto:nehaarora@example.com"
                className="text-white hover:underline"
              >
                nehaarora@example.com
              </a>
            </p>
            <p className="text-md">
              Phone:{' '}
              <a
                href="tel:+1234567890"
                className="text-white hover:underline"
              >
                +1 234 567 890
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/neha-arora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/channel/neha-arora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="p-2 bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:border-white rounded-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="p-2 bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:border-white rounded-sm"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="p-2 bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:border-white rounded-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="self-start px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
