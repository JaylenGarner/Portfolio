"use client";

import ContactForm from "./ContactForm";
import Calendly from "./Calendly";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <Tabs defaultValue="contact" className="tablet:pt-4">
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
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>
      </motion.div>

      <TabsContent value="contact">
        <ContactForm />
      </TabsContent>

      <TabsContent value="schedule">
        <Calendly />
      </TabsContent>
    </Tabs>
  );
};

export default ContactSection;
