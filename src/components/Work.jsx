import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Pinterest from "../assets/pinterest.JPG";
import software from "../assets/software.JPG";
import unsplash from "../assets/unsplash.JPG";
import Quick from "../assets/quickshop.JPG";
import ecommerce from "../assets/ecommerce.JPG";
import vista from "../assets/vista.JPG";

const projects = [
  {
    id: 1,
    name: "E-Commerce Website - Fully Functional Store",
    image: ecommerce,
    github: "https://github.com/Sidrah-Zh/ecommerce-project",
    live: "https://my-ecommerce-project-eight.vercel.app/",
  },
  {
    id: 2,
    name: "Pinterest UI Clone - Beautiful Grid Layout",
    image: Pinterest,
    github: "https://github.com/Sidrah-Zh/pinterest",
    live: "https://pinterest-green.vercel.app",
  },
  {
    id: 3,
    name: "Software Management Dashboard - Admin Panel",
    image: software,
    github: "https://github.com/Sidrah-Zh/SoftwareManagement",
    live: "https://software-management.vercel.app/",
  },
  {
    id: 4,
    name: "Unsplash Gallery - Search and View Images",
    image: unsplash,
    github: "https://github.com/Sidrah-Zh/unsplash-gallery",
    live: "https://unsplash-gallery-eight.vercel.app/",
  },
  {
    id: 5,
    name: "Quick Shop - Fast & Minimal Shopping Experience",
    image: Quick,
    github: "https://github.com/Sidrah-Zh/quick-shop",
    live: "https://quick-shop-tau.vercel.app/",
  },
  {
    id: 6,
    name: "Vista.One Whats Grow Page - Growth & Analytics",
    image: vista,
    github: "https://github.com/Sidrah-Zh/vista.one-whatsgrow",
    live: "https://dummy-live-link.com/",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 px-6 py-16 flex justify-center items-center"
    >
      <motion.div
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-pink-500 text-center">
            Work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg shadow-[#0d1b2a] bg-[#1b263b]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                className="w-full h-52 object-cover group-hover:opacity-30 transition duration-300"
                src={project.image}
                alt={project.name}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white mb-2 text-center max-w-[90%]">
                  {project.name}
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#282c34] text-white px-4 py-2 rounded-lg flex items-center hover:bg-pink-500 transition duration-300"
                  >
                    <FaGithub size={20} className="mr-2" /> GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#282c34] text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-500 transition duration-300"
                  >
                    <FaExternalLinkAlt size={18} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
