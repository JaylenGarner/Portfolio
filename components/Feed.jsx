import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Experience from "./Experience";
import Projects from "./Projects";
import Certs from "./Certs";

const Feed = () => {
  return (
    <Tabs defaultValue="experience" className="tablet:pt-4">
      <div className="text-center">
        <TabsList className="text-center glass">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>
      </div>

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
