import React from "react";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";

import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <Image
        src="/jakub.jpg"
        alt="Jakub"
        height="400px"
        width="280px"
        quality="100"
        className="mx-auto rounded-full shadow-custom-light dark:shadow-custom-dark"
      />
      <div className="">
        <h3 className=" my-4 text-2xl font-medium  tracking-wider font-kaushan">
          Jakub Pawelski
        </h3>
        <div className=" text-xl sm:text-lg flex  justify-center items-center px-2 py-1 my-3 rounded-full">
          <HiOutlineMail className=" mr-2 w-6 h-6" /> j.pawelski.it@gmail.com
        </div>

        <div className=" flex justify-center items-center px-2  my-3 text-xl sm:text-lg rounded-full">
          <GoLocation className="mr-2 w-6 h-6" /> Poznań, Poland
        </div>
      </div>
      <div className="flex my-4 justify-center text-blue-600  md:w-full">
        <a href="https://github.com/DragoBJJ" aria-label="GitHub">
          <FiGithub className="w-10 h-10 mr-5 cursor-pointer transition duration-300 ease-in-out  transform hover:scale-150 text-dark dark:text-blue-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/jakub-pawelski-885559228/"
          aria-label="Linkedin"
        >
          <AiFillLinkedin className="w-10 h-10 cursor-pointer transition duration-300 ease-in-out transform hover:scale-150  text-dark dark:text-blue-600" />
        </a>
      </div>

      <div className=" flex flex-col justfify-content items-center  mt-100">
        <button
          onClick={() => window.open("mailto:j.pawelski.it@gmail.com")}
          className=" border-2 border-dark dark:border-blue-600  w-40 rounded-full my-2 py-2 focus:outline-none hover:bg-dark dark:hover:bg-blue-600 hover:text-ecru transition duration-300 ease-in-out"
        >
          E-mail Me
        </button>
        <button
          onClick={changeTheme}
          className="border-2 border-dark dark:border-blue-600 w-40 rounded-full my-2 py-2 hover:bg-dark dark:hover:bg-blue-600 mb-4  hover:text-ecru transition duration-300 ease-in-out"
        >
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
