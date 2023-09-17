"use client";

import { motion } from "framer-motion";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Moon } from "lucide-react";

import ContactForm from "./ContactForm";

const Bio = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8 max-break-2:w-[400px] max-tablet:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] overflow-wrap max-tablet:text-center">
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
        <span className="text-6xl font-bold max-break-2:text-4xl">
          Jaylen Garner
        </span>

        <div className="flex items-center pt-2 max-tablet:justify-center max-tablet:flex-col">
          <span className="text-3xl tablet:pr-4 max-break-2:text-2xl  font-medium">
            Software Engineer
          </span>

          <div className="flex space-x-4 items-center max-tablet:justify-center max-tablet:pt-4">
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
        </div>

        <p className=" pt-8 max-tablet:pt-4 text-lg break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] max-break-2:text-md text-muted-foreground">
          I'm a software engineer who loves crafting creative solutions. I
          specialize in developing software applications that blend design and
          functionality. With a passion for programming, I take pride in
          delivering high-quality work while continually enhancing my skillset.
        </p>
      </motion.div>

      {/* Disable on Mobile Devices */}
      <div className="max-tablet:hidden">
        <ContactForm />
      </div>
    </div>
  );
};

export default Bio;
