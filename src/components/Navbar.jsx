import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#0a192f] text-gray-300 shadow-lg z-50">
      <div className="text-2xl font-bold text-[#ccd6f6] italic">
        Sidrah Zahoor
      </div>

      <ul className="hidden md:flex space-x-6">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              containerId="main-scroll-container"
              className="text-lg cursor-pointer hover:text-pink-500 transition duration-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={handleClick} className="md:hidden z-50 cursor-pointer">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } duration-300`}
      >
        <ul>
          {["home", "about", "skills", "work", "contact"].map((item) => (
            <li key={item} className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to={item}
                smooth={true}
                duration={500}
                containerId="main-scroll-container"
                className="hover:text-pink-500 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 space-y-4">
        <ul>
          {[
            {
              icon: <FaLinkedin size={30} />,
              link: "https://www.linkedin.com/in/sidzh/",
              bg: "bg-blue-600",
              text: "Linkedin",
            },
            {
              icon: <FaGithub size={30} />,
              link: "https://github.com/Sidrah-Zh",
              bg: "bg-[#333333]",
              text: "Github",
            },
            {
              icon: <HiOutlineMail size={30} />,
              link: "mailto:sidrahzahoor0@gmail.com",
              bg: "bg-[#6fc2b0]",
              text: "Email",
            },
            {
              icon: <BsFillPersonLinesFill size={30} />,
              link: "https://drive.google.com/file/d/1cwNtjhTCG9uvgEuhR_k-UN6oFtEj2mDH/view",
              bg: "bg-[#565f69]",
              text: "Resume",
            },
          ].map((social, index) => (
            <li
              key={index}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.bg} rounded-md shadow-lg`}
            >
              <a
                className="flex justify-between items-center w-full text-gray-300 px-4"
                href={social.link}
              >
                {social.text} {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
