import { languanges, tools } from "../data";
import Bar from "../components/Bar";
import { Fade } from "react-reveal";
import { GiGraduateCap } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";

import { motion } from "framer-motion";
import { routerAnimation } from "../animation";
import Head from "next/head";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routerAnimation}
      animate="animate"
      initial="initial"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Resume | React</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <Fade left>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <h4 className="my-3 text-2xl  font-bold">Education</h4>
              <GiGraduateCap size="40px" className="ml-2" />
            </div>
            <div>
              <h5 className="my-2  font-bold text-xl">
                Computer Science Engineering
              </h5>
              <p className="font-bold text-lg">Higher School of Banking</p>
              <p className="my-3">
                I am currently a 3rd year computer science student with a
                specialization in BigData & Cloud Computing.
              </p>
            </div>
          </div>
        </Fade> 
        <Fade right>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <h4 className="my-3 text-2xl  font-bold">Experience</h4>
              <IoRocketOutline size="40px" className="ml-2" />
            </div>
            <div>
              <h5 className="my-2 text-xl font-bold">Front-end Developer</h5>
              <p className="font-semibold text-lg">
                Accenture ( 07.2021 - current )
              </p>
              <p className="my-3">
                Projects for international companies, <br /> Front-end
                activities
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold text-center">
            Languages & Frameworks
          </h5>
          <div className="my-4">
            {languanges.map(item => {
              return <Bar key={item.name} data={item} />;
            })}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold text-center">
            Tools & Softwares
          </h5>
          <div className="my-2">
            {tools.map(item => {
              return <Bar key={item.name} data={item} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
