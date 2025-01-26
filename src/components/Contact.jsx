import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const res = await fetch("https://getform.io/f/aollpwyb", {
        method: "POST",
        body: new FormData(e.target),
      });
      if (res.ok) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center py-16 px-4"
    >
      <motion.div
        className="flex flex-col max-w-[600px] w-full bg-[#0a192f] p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact Me
          </p>
          <p className="text-gray-400 mt-4">
            Fill out the form below to reach out to me. I’ll get back to you as
            soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-700 hover:ring-1 hover:ring-pink-600 transition"
            type="text"
            placeholder="Your Name"
            name="name"
            aria-label="Your Name"
            required
          />

          <input
            className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-700 hover:ring-1 hover:ring-pink-600 transition"
            type="email"
            placeholder="Your Email"
            name="email"
            aria-label="Your Email"
            required
          />

          <textarea
            className="bg-[#ccd6f6] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-700 hover:ring-1 hover:ring-pink-600 transition"
            name="message"
            rows="6"
            placeholder="Your Message"
            aria-label="Your Message"
            required
          ></textarea>

          <motion.button
            className="text-white border-2 border-pink-600 px-6 py-3 mx-auto rounded-md hover:bg-pink-600 hover:border-pink-600 transition duration-300 ease-in-out transform hover:scale-105"
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
            aria-live="polite"
          >
            <p>Thank you for reaching out! I will get back to you soon.</p>
          </motion.div>
        )}

        {error && (
          <motion.div
            className="mt-4 text-center text-red-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            aria-live="polite"
          >
            <p>Oops! Something went wrong. Please try again later.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
