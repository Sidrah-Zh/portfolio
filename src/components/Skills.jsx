import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiAntdesign,
  SiClickup,
} from "react-icons/si";

const skillsData = [
  { icon: <FaHtml5 size={50} className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt size={50} className="text-blue-500" />, name: "CSS" },
  { icon: <FaJs size={50} className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact size={50} className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs size={50} className="text-green-500" />, name: "Node.js" },
  {
    icon: <SiTailwindcss size={50} className="text-teal-400" />,
    name: "Tailwind",
  },
  {
    icon: <SiAntdesign size={50} className="text-red-500" />,
    name: "Ant Design",
  },
  {
    icon: <SiTypescript size={50} className="text-blue-600" />,
    name: "TypeScript",
  },
  { icon: <FaGithub size={50} className="text-gray-300" />, name: "GitHub" },
  { icon: <FaGitlab size={50} className="text-orange-600" />, name: "GitLab" },
  { icon: <SiClickup size={50} className="text-pink-500" />, name: "ClickUp" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center px-6 py-16"
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
            Skills
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center py-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="shadow-md shadow-[#0d1b2a] bg-[#1b263b] p-6 rounded-lg relative overflow-hidden group flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 3 }}
            >
              <motion.div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                {skill.icon}
              </motion.div>
              <motion.p
                className="mt-4 text-lg font-semibold text-gray-200 group-hover:text-pink-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
