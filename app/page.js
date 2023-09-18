"use client";

import Bio from "@/components/Bio";
import Feed from "@/components/Feed";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main className="grid grid-cols-2 max-tablet:grid-cols-1 gap-x-10 pr-4 pl-4">
      <div className="max-tablet:justify-center  w-full flex justify-end items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar pr-5 pl-5 ">
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

      <div className="max-tablet:justify-center w-full flex justify-start items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar pr-10">
        <Feed />
      </div>
    </main>
  );
};

export default Home;

{
  /* <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 80,
      }}
      className="flex items-center justify-center pb-2 pt-2 max-break-2:w-[400px] max-tablet:pt-8 max-tablet:w-[600px] max-mobile_md:w-[400px] max-mobile_sm:w-[320px]"
    ></motion.div> */
}
