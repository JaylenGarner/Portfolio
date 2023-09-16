"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";

import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <motion.div
      className="pt-4 pb-20 space-y-4"
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
        <Link href="https://outreacher.app/" target="_blank">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Outreacher</CardTitle>
              <CardDescription className="text-md">
                A web app that streamlines job searching and networking by
                helping users organize job applications, track contacts, and
                create personalized outreach message templates.
              </CardDescription>
            </CardHeader>
            <CardContent className="font-medium">
              <div className="w-full flex justify-center">
                <span className="text-center font-bold text-xl">
                  Technologies
                </span>
              </div>

              <div className="flex justify-center items-center pt-2 space flex-wrap">
                <Badge variant="outline" className="m-1">
                  Next.js
                </Badge>
                <Badge variant="outline" className="m-1">
                  React
                </Badge>
                <Badge variant="outline" className="m-1">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="m-1">
                  Redux
                </Badge>
                <Badge variant="outline" className="m-1">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="m-1">
                  Next-Auth
                </Badge>
                <Badge variant="outline" className="m-1">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="m-1">
                  Prisma
                </Badge>
                <Badge variant="outline" className="m-1">
                  Bcrypt
                </Badge>
                <Badge variant="outline" className="m-1">
                  Docker
                </Badge>
                <Badge variant="outline" className="m-1">
                  Git
                </Badge>
              </div>
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
        <Link href="https://geotemp.vercel.app/" target="_blank">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>GeoTemp</CardTitle>
              <CardDescription className="text-md">
                A web app for up-to-date weather information and 5-day forecasts
                based on your location or search.
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium">
              <div className="w-full flex justify-center">
                <span className="text-center font-bold text-xl">
                  Technologies
                </span>
              </div>

              <div className="flex justify-center items-center pt-2 space flex-wrap">
                <Badge variant="outline" className="m-1">
                  Next.js
                </Badge>
                <Badge variant="outline" className="m-1">
                  React
                </Badge>
                <Badge variant="outline" className="m-1">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="m-1">
                  Recoil
                </Badge>

                <Badge variant="outline" className="m-1">
                  Git
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default Projects;
