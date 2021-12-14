import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="">
      <Image
        src="/jakub.jpg"
        alt="Jakub"
        height="400px"
        width="280px"
        quality="100"
        className="mx-auto rounded-full shadow-custom-light dark:shadow-custom-dark"
      />
      <h3 className=" my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-600">Jakub</span> Pawelski
      </h3>
      <p className="px-2 py-1 my-3 border-2 border-black dark:border-blue-600   rounded-full">
        Front-end Developer
      </p>
      <p className="lg:hidden xl:block px-2 py-1 my-3 border-2 border-black dark:border-blue-600   rounded-full">
        j.pawelski.it@gmail.com
      </p>
      <p className="px-2 py-1 my-3 border-2 border-black dark:border-blue-600  rounded-full">
        <div className=" flex justify-center items-center">
          <GoLocation className="mr-1" /> Poznań, Poland
        </div>
      </p>
      <div className="flex w-full my-4 justify-center text-blue-600 w-7/12 md:w-full">
        <a href="https://github.com/DragoBJJ" aria-label="GitHub">
          <FiGithub className="w-8 h-8 mr-5 cursor-pointer transition duration-300 ease-in-out  transform hover:scale-150 text-blue-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/jakub-pawelski-885559228/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer transition duration-300 ease-in-out transform hover:scale-150 text-blue-600" />
        </a>
      </div>

      <button
        onClick={() => window.open("mailto:j.pawelski.it@gmail.com")}
        className=" border-2 border-black dark:border-blue-600  w-7/12 rounded-full my-2 py-2 focus:outline-none hover:bg-black dark:hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out"
      >
        E-mail Me
      </button>
      <button
        onClick={changeTheme}
        className="border-2 border-black dark:border-blue-600 w-7/12 rounded-full my-2 py-2 hover:bg-black dark:hover:bg-blue-600 mb-4  hover:text-white transition duration-300 ease-in-out"
      >
        {theme === "dark" ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Sidebar;
