import ServiceCard from "../components/ServiceCard";
import { IService } from "../type";
import { services } from "../data";
import { Fade } from "react-reveal";
import { BsCodeSlash } from "react-icons/bs";

import { motion } from "framer-motion";
import { routerAnimation } from "../animation";

import Head from "next/head";

const index = () => {
  return (
    <motion.div
      className="flex flex-col px-6 pt-1 align-center flex-grow"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Portfolio | React</title>
      </Head>
      <Fade top>
        <h5 className="text-center my-3 text-lg  max-w-xl m-auto">
          I am currently a 3rd year computer science student with a
          specialization in
          <span className="text-blue-600"> BigData & Cloud Computing.</span> I
          have <span className="text-blue-600">One year</span> of experience
          as a Front-end Developer at{" "}
          <span className="text-blue-600">Accenture.</span>
        </h5>
      </Fade>
      <div
        className=" p-4 mt-5 bg-ecru border-t-2 border-blue-600 flex-grow dark:bg-black"
        style={{ margin: "0 -1.5rem" }}
      >
        <div className="flex justify-center  items-center">
          <h6 className="text-center my-3 text-xl font-bold tracking-wide z-index-999">
            In these technologies, I deepen my knowledge
          </h6>
          <BsCodeSlash size="40px" className="ml-2" />
        </div>

        <div className="relative mt-10 grid lg:grid-cols-2 gap-4">
          {services &&
            services.map((service: IService) => {
              return (
                <Fade top key={service.title}>
                  <div className="lg:col-span-1 bg-ecru rounded-lg p-2 border-2 border-dark dark:border-blue-600 dark:bg-black">
                    <ServiceCard service={service} />
                  </div>
                </Fade>
              );
            })}
        </div>
      </div>
    </motion.div>
  );
};

export default index
