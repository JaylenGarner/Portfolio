"use client";

import { motion } from "framer-motion";
import WorkExperience from "@/components/Experience";

const Experience = () => {
  return (
    <motion.main
      className="page_container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <WorkExperience />
    </motion.main>
  );
};

export default Experience;
