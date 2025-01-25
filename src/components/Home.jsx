import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "./Typewriter";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] md:pt-0 sm:pt-16 pt-24"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sidrah Zahoor
        </h1>

        <h3 className="text-xs sm:text-sm md:text-sm lg:text-sm">
          <Typewriter text="I'm a Frontend Developer" speed={100} />
        </h3>

        <p className="text-[#a0a8be] py-4 max-w-[500px]">
          I'm ambitious in my work with appreciated skills and confidence, even
          under pressure circumstances. I like to learn and work with new
          technologies.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
