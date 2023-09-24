"use client";

import projects from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
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
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </motion.div>
  );
};

export default Projects;
