import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 pb-8">
          Contact
        </h2>
        <p className="py-6">Submit the form below to get in touch with me</p>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/byvpwwoa"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 bg-gray-700 rounded-md text-white mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 bg-gray-700 rounded-md text-white mb-4"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="p-2 bg-gray-700 rounded-md text-white mb-4"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 rounded-md text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
