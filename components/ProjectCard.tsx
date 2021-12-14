import { FC, useState } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

import { Fade } from "react-reveal";

import Image from "next/image";

export const ProjectCard: FC<{
  project: IProject;
  showDetail: null | number;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    deployed_url,
    description,
    github_url,
    key_techs
  },
  showDetail,
  setShowDetail
}) => {
  return (
    <div className="">
      {typeof image_path === "string" ? (
        <Image
          src={image_path}
          alt={name}
          width="300"
          height="150"
          layout="responsive"
          className="cursor-pointer h-100 w-100 transition ease-in-out duration-500 hover:scale-y-125 transform  hover:scale-x-125"
          onClick={() => setShowDetail(id)}
        />
      ) : (
        <Image
          src={image_path[0]}
          alt={name}
          width="300"
          height="150"
          layout="responsive"
          className="h-100 w-100 cursor-pointer transition ease-in-out duration-500  transform  hover:scale-y-150 hover:scale-x-150"
          onClick={() => setShowDetail(id)}
        />
      )}

      <p className="my-4 text-center">{name}</p>
      {showDetail === id && (
        <>
          <Fade top>
            <div className="absolute  grid top-0 transform -translate-y-1/2 right-0 left-0 z-10 md:grid-cols-2 gap-x-12 text-black bg-ecru dark:text-white dark:bg-black p-2 md:p-10 shadow-custom-light dark:shadow-custom-dark rounded-xl border-2 border-black dark:border-blue-600">
              <div>
                <Image
                  height={image_path[0].includes("leon") ? "400" : "150"}
                  width="300"
                  layout="responsive"
                  src={
                    typeof image_path === "string" ? image_path : image_path[1]
                  }
                  alt={name}
                />
                <div className="flex justify-center space-x-3 mt-4">
                  <a
                    href={github_url}
                    className="flex items-center px-2  py-1 space-x-3  rounded-full text-lg dark:border-blue-600 border-2 border-black  hover:bg-black hover:text-white dark:hover:bg-blue-600 transition duration-200 ease-in-out"
                  >
                    <AiFillGithub size="30px" /> <span>Github</span>
                  </a>

                  {deployed_url && (
                    <a
                      href={deployed_url}
                      className="flex items-center px-2  py-1 space-x-3 rounded-full text-lg dark:border-blue-600 border-2 border-black  hover:bg-black hover:text-white  dark:hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                      <AiFillProject size="30px" /> <span>Project</span>
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                <h3 className="mb-3 font-medium text-lg">{description}</h3>
                <div className="flex  flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                  {key_techs.map(item => (
                    <span
                      className="px-2 py-1 my-1  border-2 border-black dark:border-blue-600 rounded-full"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setShowDetail(null)}
                className="absolute top-1 right-1"
              >
                <MdClose
                  size={50}
                  className="text-black  dark:hover:text-blue-600 transition duration-200 ease-in-out dark:text-white"
                />
              </button>
            </div>
          </Fade>
        </>
      )}
    </div>
  );
};
