import { projects as projectsData } from "../data";
import { ProjectCard } from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";
import { useState } from "react";
import { Category } from "../type";
import { Fade } from "react-reveal";

import { motion } from "framer-motion";
import { routerAnimation } from "../animation";
import Head from "next/head";



const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  const filterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newProjects = projectsData.filter(project =>
      project.category.includes(category)
    );
    setProjects(newProjects);
    setActive(category);
  };
  return (
    <motion.div
      className="px-4 py-2 relative"
      variants={routerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Project | React</title>
      </Head>
      <ProjectNavBar filterCategory={filterCategory} active={active} />
      <Fade top>
        <div className="grid grid-cols-12 gap-4 my-3 relative">
          {projects.map(item => {
            return (
              <div
                key={item.description}
                className="col-span-12 sm:col-span-6 p-2 lg:col-span-6"
              >
                <ProjectCard
                  project={item}
                  showDetail={showDetail}
                  setShowDetail={setShowDetail}
                />
              </div>
            );
          })}
        </div>
      </Fade>
    </motion.div>
  );
};

export default Projects;
