import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center px-6"
    >
      <motion.div 
        className="flex flex-col justify-center items-center max-w-[1000px] w-full"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full grid grid-cols-2 gap-8 pb-8">
          <motion.div 
            className="sm:text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </motion.div>
        </div>

        <div className="w-full grid sm:grid-cols-2 gap-8">
          <motion.div 
            className="sm:text-right text-4xl font-bold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p>
              Hi. I'm Sidrah Zahoor, nice to meet you. Please take a look
              around.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p>
              I am a passionate front-end developer dedicated to creating
              innovative and user-friendly web applications. I enjoy
              transforming ideas into engaging digital experiences and pride
              myself on writing clear, maintainable code. Committed to staying
              updated on the latest design and technology trends, I am eager to
              contribute to meaningful projects that make a difference. Let’s
              connect and build something amazing together!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
