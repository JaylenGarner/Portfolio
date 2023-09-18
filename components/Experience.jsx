"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  return (
    <motion.div
      className="pt-8 pb-20 space-y-4 pl-10 pr-10"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 80,
      }}
    >
      <Tilt
        glareEnable
        glarePosition="all"
        glareColor="#384E5C"
        glareMaxOpacity={0.5}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2000}
        scale={1.05}
      >
        <Link href="https://moonraydevelopment.com/" target="_blank">
          <Card className="break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[600px] max-mobile_lg:w-[500px] max-mobile_md:w-[400px]  max-mobile_sm:w-[300px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle className="max-break-2:text-xl">
                Full Stack Software Engineer
              </CardTitle>
              <CardDescription className="text-md max-break-2:text-sm">
                MoonRay Development • February 2023 - Current
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium max-break-2:text-sm">
              Delivered efficient, scalable full stack applications using modern
              frameworks and technologies. Collaborated closely with clients to
              translate their requirements into visually appealing websites.
              Designed databases for application support and implemented
              innovative performance optimization solutions. Prioritized
              high-quality, secure, and responsive web development while staying
              updated with industry trends.
            </CardContent>
          </Card>
        </Link>
      </Tilt>

      <Tilt
        glareEnable
        glarePosition="all"
        glareColor="#384E5C"
        glareMaxOpacity={0.5}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2000}
        scale={1.05}
      >
        <Link href="https://trsconsulting.com/" target="_blank">
          <Card className="break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[600px] max-mobile_lg:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle className="max-break-2:text-xl">
                Web Developer / IT Consultant
              </CardTitle>
              <CardDescription className="text-md max-break-2:text-sm">
                TRS Consulting • April 2022 - Current
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium max-break-2:text-sm">
              Managed user administration across various platforms and executed
              web development projects, enhancing client online presence.
              Effectively handled assigned projects and automated tasks for
              improved efficiency. Performed software, hardware, and network
              troubleshooting remotely, while staying current with industry
              trends to ensure high-quality and secure IT solutions.
            </CardContent>
          </Card>
        </Link>
      </Tilt>

      <Tilt
        glareEnable
        glarePosition="all"
        glareColor="#384E5C"
        glareMaxOpacity={0.5}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={2000}
        scale={1.05}
      >
        <Link href="https://www.easternct.edu/" target="_blank">
          <Card className="break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[600px] max-mobile_lg:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle className="max-break-2:text-xl">
                Information Technology Services
              </CardTitle>
              <CardDescription className="text-md max-break-2:text-sm ">
                Eastern Connecticut State University • May 2021 - Apr 2022
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium max-break-2:text-sm">
              Delivered efficient help desk and desktop support services,
              including configuring and installing new PCs, promptly addressing
              and resolving hardware and software issues, and actively managing
              incoming calls at the help desk. Created detailed tickets to track
              issues and ensure resolution, escalating tickets when necessary.
            </CardContent>
          </Card>
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default Experience;
