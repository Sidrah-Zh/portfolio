import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "./Typewriter";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#0a192f] flex justify-center items-center"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-start">
        <p className="text-pink-600 text-lg sm:text-xl md:text-2xl">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#ccd6f6]">
          Sidrah Zahoor
        </h1>

        <span className="text-xs sm:text-sm md:text-lg lg:text-xl py-2">
          <Typewriter text="I  am a Frontend Developer" speed={100} />
        </span>

        <p className="text-[#a0a8be] py-4 max-w-[500px] sm:max-w-[600px] md:max-w-[700px]">
          I'm ambitious in my work with appreciated skills and confidence, even
          under pressure circumstances. I like to learn and work with new
          technologies.
        </p>
        <div>
          <a href="#work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
