import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "@/components/ContactForm";
import ScheduleMeeting from "@/components/ScheduleMeeting";

const SchedulingArea = () => {
  return (
    // <Tabs defaultValue="email" className="w-full flex flex-col pt-4">
    // <TabsList className="self-center">
    //   <TabsTrigger value="email">Email</TabsTrigger>
    //   <TabsTrigger value="meeting">Meeting</TabsTrigger>
    // </TabsList>

    // <TabsContent value="email">
    <ContactForm />
    // {/* </TabsContent> */}

    // <TabsContent value="meeting">
    //   <ScheduleMeeting />
    // </TabsContent>
    // </Tabs>
  );
};

export default SchedulingArea;
