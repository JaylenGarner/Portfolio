"use client";

import ExperienceCard from "./ExperienceCard";
import experiences from "@/lib/experiences";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      className="feed"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 80,
      }}
    >
      {experiences.map((experience) => {
        return (
          <ExperienceCard experience={experience} key={experience.title} />
        );
      })}
    </motion.div>
  );
};

export default Experience;
