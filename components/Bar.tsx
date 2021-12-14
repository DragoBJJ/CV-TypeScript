import { FC } from "react";
import { ISkill } from "../type";

import { motion } from "framer-motion";

const Bar: FC<{ data: ISkill }> = ({ data: { Icon, level, name } }) => {
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: level,
      transition: {
        duration: 1.5
      }
    }
  };
  return (
    <div className="my-2 bg-ecru  rounded-full border-2 border-blue-600 dark:bg-black">
      <motion.div
        className="px-4 py-1 flex  text-black  dark:text-white font-bold items-start rounded-full bg-blue-600"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="flex justify-center items-center">
          <Icon className=" ml-1 mr-3" size="15px" />
          {name}
        </div>
      </motion.div>
    </div>
  );
};

export default Bar;
