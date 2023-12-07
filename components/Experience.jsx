"use client";

import { anton } from "@/lib/fonts";
import experiences from "@/lib/experiences";
import { motion } from "framer-motion";
import Link from "next/link";

const WorkExperience = () => {
  let direction = "left";
  let xVal;

  return (
    <div className="flex_center flex-col pb-16">
      <h1 className={`heading pb-16 ${anton.className}`}>Work Experience</h1>
      <div className="flex flex-col space-y-16">
        {experiences.map((experience) => {
          {
            if (direction === "left") {
              xVal = 100;
              direction = "right";
            } else {
              xVal = -100;
              direction = "left";
            }

            console.log(direction, xVal);
          }
          return (
            <motion.div
              initial={{ x: xVal, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
                restDelta: 3,
              }}
              className="w-[820px]"
              key={experience.company}
            >
              <div className="flex justify-between items-center pb-8">
                <div className="space-y-4 flex flex-col ">
                  <h3 className={` text-4xl  ${anton.className}`}>
                    {experience.title}
                  </h3>

                  <span className={` text-3xl ${anton.className}`}>
                    {experience.company}
                  </span>
                  <span className={` text-2xl ${anton.className}`}>
                    {experience.timeframe}
                  </span>
                </div>

                <Link href={experience.url} target="_blank">
                  <img
                    src={experience.logo.src}
                    className={`w-[130px] mr-[80px] hover:opacity-70 transition-opacity duration-300 `}
                  />
                </Link>
              </div>
              <span className="text-2xl w-full">{experience.description}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkExperience;
