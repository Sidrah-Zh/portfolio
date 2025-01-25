import React from "react";

const About = () => {
  return (
    <div
    name="about"
    className="w-full h-screen bg-[#0a192f] text-gray-300 pt-16"
  >
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </p>
        </div>
        <div></div>
      </div>
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="sm:text-right text-4xl font-bold">
          <p>
            Hi. I'm Sidrah Zahoor, nice to meet you. Please take a look
            around.
          </p>
        </div>
        <div>
          <p>
            I am a passionate front-end developer dedicated to creating
            innovative and user-friendly web applications. I enjoy
            transforming ideas into engaging digital experiences and pride
            myself on writing clear, maintainable code. Committed to staying
            updated on the latest design and technology trends. I am eager to
            contribute to meaningful projects that make a difference. Let’s
            connect and build something amazing together!
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
