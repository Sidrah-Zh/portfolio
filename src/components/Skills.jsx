import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Gitlab from "../assets/Gitlab.png";
import Typescript from "../assets/TypeScript.png";
import AntD from "../assets/Antd.jpg";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Clickup from "../assets/Clickup.png";
import Nodejs from "../assets/Node.js_logo.svg.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-32 sm:pt-24"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Nodejs} alt="Node.js icon" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AntD} alt="Ant Design icon" />
            <p className="my-4">Ant Design</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={Typescript}
              alt="TypeScript icon"
            />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Gitlab} alt="GitLab icon" />
            <p className="my-4">GitLab</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Clickup} alt="ClickUp icon" />
            <p className="my-4">ClickUp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
