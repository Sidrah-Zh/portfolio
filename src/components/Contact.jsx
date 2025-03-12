import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);
    setShowPopup(false);

    try {
      const res = await fetch("https://getform.io/f/aollpwyb", {
        method: "POST",
        body: new FormData(e.target),
      });
      if (res.ok) {
        setSubmitted(true);
        setPopupMessage("Thank you! Your message has been sent.");
        setPopupType("success");
        setShowPopup(true);
        e.target.reset();
      } else {
        setError(true);
        setPopupMessage("Oops! Something went wrong. Please try again later.");
        setPopupType("error");
        setShowPopup(true);
      }
    } catch {
      setError(true);
      setPopupMessage("Oops! Something went wrong. Please try again later.");
      setPopupType("error");
      setShowPopup(true);
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <section id="contact" className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center py-20 px-6 relative">
        <motion.div
          className="max-w-lg w-full bg-[#1b263b] p-10 rounded-lg shadow-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="pb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 pb-2">Contact Me</p>
            <p className="text-gray-400 mt-4">Let's collaborate! Fill out the form below, and I'll get back to you soon.</p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.input
              className="bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-700 hover:ring-1 hover:ring-pink-600 transition"
              type="text"
              placeholder="Your Name"
              name="name"
              required
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              className="bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-700 hover:ring-1 hover:ring-pink-600 transition"
              type="email"
              placeholder="Your Email"
              name="email"
              required
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              className="bg-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 placeholder-gray-700 hover:ring-1 hover:ring-pink-600 transition"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <motion.div className="flex justify-center">
              <motion.button
                className="w-[200px] text-center text-white bg-pink-600 px-6 py-3 rounded-md hover:bg-pink-700 transition duration-300 ease-in-out transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </section>

     
    </>
  );
};

export default Contact;
