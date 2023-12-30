"use client";

import projects from "@/lib/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className="feed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.title} />;
      })}
    </motion.div>
  );
};

export default Projects;
