"use client";

import { motion } from "framer-motion";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Moon } from "lucide-react";

const Bio = () => {
  return (
    <div className=" flex w-full items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 80,
        }}
        className="flex flex-col"
      >
        <span className="text-6xl font-bold">Jaylen Garner</span>
        <div className="flex space-x-4 items-center pt-2">
          <span className="text-3xl pr-2">Software Engineer</span>
          <motion.a
            href="https://www.linkedin.com/in/jaylen-garner/"
            target="blank_"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.6 }}
          >
            <LinkedInLogoIcon width={32} height={32} />
          </motion.a>
          <motion.a
            href="https://github.com/JaylenGarner"
            target="blank_"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          >
            <GitHubLogoIcon width={30} height={30} />
          </motion.a>
          <motion.a
            href="https://moonraydevelopment.com/"
            target="blank_"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 1 }}
          >
            <Moon width={30} height={30} />
          </motion.a>
        </div>

        <p className=" pt-8 text-lg max-w-[600px] text-[#8AA3AD]">
          Hi, I'm Jaylen, a software engineer who loves crafting creative
          solutions. I specialize in developing software applications that blend
          design and functionality. With a passion for programming, I take pride
          in delivering high-quality work while continually enhancing my
          skillset.
        </p>
      </motion.div>
    </div>
  );
};

export default Bio;
