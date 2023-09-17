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
      className="pt-8 pb-20 space-y-4"
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
          <Card className="break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[600px] max-mobile_lg:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] h-fit cursor-pointer">
            <CardHeader>
              <div className="flex justify-between">
                <div className=" space-y-1">
                  <CardTitle className="max-break-2:text-xl ">
                    Outreacher
                  </CardTitle>
                  <CardDescription className="text-md max-break-2:text-sm">
                    Web Application
                  </CardDescription>
                </div>

                <img className="w-14 h-14" src="/outreacher-logo.svg"></img>
              </div>
            </CardHeader>

            <CardContent className="font-medium max-break-2:text-sm">
              Streamlines job searching and networking by helping users organize
              job applications, track contacts, and create personalized outreach
              message templates.
            </CardContent>

            <CardContent className="font-medium">
              <div className="w-full flex justify-center">
                <span className="text-center font-bold text-xl max-break-2:text-lg">
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
          <Card className="break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[600px] max-mobile_lg:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] h-fit cursor-pointer">
            <CardHeader>
              <div className="flex justify-between">
                <div className=" space-y-1">
                  <CardTitle className="max-break-2:text-xl ">
                    GeoTemp
                  </CardTitle>
                  <CardDescription className="text-md max-break-2:text-sm">
                    Web Application
                  </CardDescription>
                </div>

                <img className="w-10 h-10" src="/geotemp-logo.png"></img>
              </div>
            </CardHeader>

            <CardContent className="font-medium max-break-2:text-sm">
              View up-to-date weather information and 5-day forecasts based on
              your location or search.
            </CardContent>

            <CardContent className="font-medium">
              <div className="w-full flex justify-center">
                <span className="text-center font-bold text-xl max-break-2:text-lg">
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
          <Card className="break-1:w-[600px] max-break-1:w-[500px] max-break-2:w-[400px] max-tablet:w-[600px] max-mobile_lg:w-[500px] max-mobile_md:w-[400px] max-mobile_sm:w-[300px] h-fit cursor-pointer">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className=" space-y-1">
                  <CardTitle className="max-break-2:text-xl ">
                    MoonRay Development
                  </CardTitle>
                  <CardDescription className="text-md max-break-2:text-sm">
                    Website
                  </CardDescription>
                </div>

                <img className="w-14 h-14" src="/moonray-logo.svg"></img>
              </div>
            </CardHeader>

            <CardContent className="font-medium max-break-2:text-sm">
              A web development company specializing in creating custom,
              high-performance websites, offering comprehensive revamp services
              to modernize online presence, and providing managed services for
              hassle-free website maintenance.
            </CardContent>

            <CardContent className="font-medium">
              <div className="w-full flex justify-center">
                <span className="text-center font-bold text-xl max-break-2:text-lg">
                  Technologies
                </span>
              </div>

              <div className="flex justify-center items-center pt-2 space flex-wrap">
                <Badge variant="outline" className="m-1">
                  WordPress
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
