"use client";

import { anton, permanentMarker } from "@/lib/fonts";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <motion.main
      className="page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center max-sm:max-w-screen">
        <h1
          className={`text-8xl max-sm:text-7xl  font-bold pb-16 pr-4 pl-4 text-center ${permanentMarker.className}`}
        >
          Jaylen Garner
        </h1>

        <div className="flex justify-center items-start max-2xl:flex-col 2xl:space-x-40 max-2xl:space-y-16  pr-8 pl-8">
          <div className="flex flex-col flex_center flex-wrap w-[600px] max-sm:w-full">
            <h2 className={`heading pb-16 ${anton.className}`}>
              Crafting Dreams, One Pixel at a Time
            </h2>

            <p className="sm:w-[600px] max-sm:w-full text-2xl max-sm:text-xl 2xl:pb-16 ">
              Having navigated the intricacies of IT, I've discovered my sweet
              spot in the dynamic world of full-stack development. The ability
              to wield the skills and tools to breathe life into visions, both
              mine and others, is a fulfillment I never thought I'd find in my
              work. To me, this is an art form, and the DOM is my canvas. This
              realization propelled me to kickstart my own freelance web
              development business as well as sink my teeth into various
              personal projects. In a field where there are endless things to
              learn, I'm assured that I'll never be bored. Feel free to stick
              around and explore some of my work. I'll be here, clacking away at
              my keys in the meantime.
            </p>
          </div>

          <div className="flex flex-col flex_center sm:w-[600px]  max-sm:w-full">
            <h2 className={`heading ${anton.className} `}>
              Let's get in touch
            </h2>

            <ContactForm />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
