"use client";

import Bio from "@/components/Bio";
import Feed from "@/components/Feed";
import ContactForm from "@/components/ContactForm";
import { ExperienceFeed } from "@/components/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="grid grid-cols-2 gap-x-20">
      <div className="w-full flex justify-end items-start pt-20">
        <Bio />
      </div>

      <div className="w-full flex justify-start items-start pt-20">
        <Feed />
      </div>
    </main>
  );
};

export default Home;
