"use client";

import { useState } from "react";
import { anton, permanentMarker } from "@/lib/fonts";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  const currentForm = useState("none");

  return (
    <motion.main
      className="bg-ice bg-cover min-h-screen  bg-blend-darken bg-black bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="pt-[180px] flex flex-col items-center p-16">
        <h1
          className={`text-8xl font-bold pb-16 text-center ${permanentMarker.className}`}
        >
          Jaylen Garner
        </h1>
        <h2
          className={`text-5xl font-bold pb-16 text-center tracking-wide ${anton.className}`}
        >
          Crafting Dreams, One Pixel at a Time
        </h2>

        <p className="w-[820px] text-2xl font-semibold pb-16">
          Having navigated the intricacies of IT, I've discovered my sweet spot
          in the dynamic world of full-stack development. The ability to wield
          the skills and tools to breathe life into visions, both mine and
          others, is a fulfillment I never thought I'd find in my work. To me,
          this is an art form, and the DOM is my canvas. This realization
          propelled me to kickstart my own freelance web development business as
          well as sink my teeth into various personal projects. In a field where
          there are endless things to learn, I'm assured that I'll never be
          bored. Feel free to stick around and explore some of my work. I'll be
          here, clacking away at my keys in the meantime.
        </p>

        <h2 className={`text-5xl font-bold tracking-wide ${anton.className} `}>
          Lets get in touch
        </h2>

        <ContactForm />
      </div>
    </motion.main>
  );
};

export default Home;
