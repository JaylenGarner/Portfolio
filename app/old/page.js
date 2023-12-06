"use client";

import Bio from "@/components/Bio";
import Feed from "@/components/Feed";
import ContactForm from "@/components/ContactFormOLD";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main className="grid grid-cols-2 max-tablet:grid-cols-1 gap-x-10 pr-4 pl-4">
      <div className="max-tablet:justify-center  w-full flex justify-end items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar">
        <Bio />
      </div>

      <motion.div
        className="flex tablet:hidden pt-8 items-center flex-col"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 80,
        }}
      >
        <Button onClick={() => setFormOpen(!formOpen)}>Contact Me</Button>
        {formOpen && <ContactForm />}
      </motion.div>

      <div className="max-tablet:justify-center w-full flex justify-start items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar ">
        <Feed />
      </div>
    </main>
  );
};

export default Home;
