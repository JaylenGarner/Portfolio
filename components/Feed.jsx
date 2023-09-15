import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import { motion } from "framer-motion";

const Feed = ({ children }) => {
  return (
    <Tabs defaultValue="experience">
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
        </TabsList>
      </motion.div>

      {/* Content for the "Experience" tab */}
      <TabsContent value="experience">
        <Experience />
      </TabsContent>

      {/* Content for the "Projects" tab */}
      <TabsContent value="projects">
        {/* Include your Projects content here */}
        Change your password here.
      </TabsContent>
    </Tabs>
  );
};

export default Feed;
