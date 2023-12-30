"use client";

import ExperienceCard from "./ExperienceCard";
import experiences from "@/lib/experiences";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      className="feed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
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
