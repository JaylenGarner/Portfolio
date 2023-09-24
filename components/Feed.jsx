import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import Projects from "./Projects";
import Certs from "./Certs";
import { motion } from "framer-motion";

const Feed = () => {
  return (
    <Tabs defaultValue="experience" className="tablet:pt-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 80,
        }}
      >
        <TabsList className="text-center">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
      </motion.div>

      <TabsContent value="experience">
        <Experience />
      </TabsContent>

      <TabsContent value="projects">
        <Projects />
      </TabsContent>

      <TabsContent value="certifications">
        <Certs />
      </TabsContent>
    </Tabs>
  );
};

export default Feed;
