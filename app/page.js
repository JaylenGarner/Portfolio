"use client";

import Bio from "@/components/Bio";
import Feed from "@/components/Feed";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="grid grid-cols-2 max-tablet:grid-cols-1 gap-x-10 pr-4 pl-4 main"
    >
      <div className="max-tablet:justify-center  w-full flex justify-end items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar">
        <Bio />
      </div>

      <div className="flex tablet:hidden pt-8 items-center flex-col">
        <button className="button glass" onClick={() => setFormOpen(!formOpen)}>
          {!formOpen ? "Contact Me" : "Cancel"}
        </button>

        {formOpen && <ContactForm />}
      </div>

      <div className="max-tablet:justify-center w-full flex justify-start items-start pt-8 tablet:h-screen tablet:overflow-scroll no-scrollbar ">
        <Feed />
      </div>
    </motion.main>
  );
};

export default Home;
