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
    </motion.main>
  );
};

export default Experience;
