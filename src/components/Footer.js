import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-gray-300 text-center py-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Sidrah Zahoor. All Rights Reserved.
      </p>
      <div className="mt-3 flex justify-center space-x-6">
        <a
          href="https://github.com/Sidrah-Zh"
          className="hover:text-pink-500 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sidzh/"
          className="hover:text-pink-500 transition text-2xl"
        >
          <FaLinkedin />
        </a>
        <a href="#home" className="hover:text-pink-500 transition text-2xl">
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
