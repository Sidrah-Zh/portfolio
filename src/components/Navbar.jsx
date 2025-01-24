import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="m-4">
        <span className="sm:text-2xl font-bold text-[#ccd6f6] m-4 font-serif italic">
          Sidrah Zahoor
        </span>
      </div>

      <ul className="hidden md:flex">
        <li className="group">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="relative inline-block"
          >
            Home
            <span className="absolute block h-1 w-full bg-pink-600 left-0 -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </li>
        <li className="group">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="relative inline-block"
          >
            About
            <span className="absolute block h-1 w-full bg-pink-600 left-0 -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </li>
        <li className="group">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="relative inline-block"
          >
            Skills
            <span className="absolute block h-1 w-full bg-pink-600 left-0 -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </li>
        <li className="group">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="relative inline-block"
          >
            Work
            <span className="absolute block h-1 w-full bg-pink-600 left-0 -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </li>
        <li className="group">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="relative inline-block"
          >
            Contact
            <span className="absolute block h-1 w-full bg-pink-600 left-0 -bottom-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/sidzh/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:sidzahoor33@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1cwNtjhTCG9uvgEuhR_k-UN6oFtEj2mDH/view?usp=drive_link"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
