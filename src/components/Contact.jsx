import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center py-10"
    >
      <motion.div
        className="flex flex-col max-w-[600px] w-full bg-[#112240] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </p>
        </div>

        <form
          method="POST"
          action="https://getform.io/f/aollpwyb"
          onSubmit={handleSubmit}
          className="flex flex-col"
        >
          <input
            className="bg-[#ccd6f6] p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            type="text"
            placeholder="Your Name"
            name="name"
          />
          <input
            className="bg-[#ccd6f6] p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
            name="message"
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <motion.button
            className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-6 py-3 my-4 mx-auto rounded-md transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Let's Collaborate
          </motion.button>
        </form>

        {submitted && (
          <motion.div
            className="mt-4 text-center text-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p>Thank you for reaching out! I will get back to you soon.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
