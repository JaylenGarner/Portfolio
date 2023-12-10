"use client";

import { motion } from "framer-motion";
import WorkExperience from "@/components/Experience";
import Certifications from "@/components/Certifications";

const Experience = () => {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <WorkExperience />
      <Certifications />
      <div className="flex flex-col items-center max-sm:max-w-screen"></div>
    </motion.main>
  );
};

export default Experience;
