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
      <h1 className={`main_heading ${permanentMarker.className}`}>
        Jaylen Garner
      </h1>
      <h2 className={`heading  ${anton.className}`}>
        Crafting Dreams, One Pixel at a Time
      </h2>
      <div className="splash_container ">
        <div className="paragraph_container">
          <p className="paragraph ">
            Having navigated the intricacies of IT, I've discovered my sweet
            spot in the dynamic world of full-stack development. The ability to
            wield the skills and tools to breathe life into visions, both mine
            and others, is a fulfillment I never thought I'd find in my work. To
            me, this is an art form, and the DOM is my canvas. This realization
            propelled me to kickstart my own freelance web development business
            as well as sink my teeth into various personal projects. In a field
            where there are endless things to learn, I'm assured that I'll never
            be bored. Feel free to stick around and explore some of my work.
            I'll be here, clacking away at my keys in the meantime.
          </p>
        </div>

        <div className="form_container">
          <ContactForm />
        </div>
      </div>
    </motion.main>
  );
};

export default Home;
