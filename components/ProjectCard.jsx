"use client";

import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
  return (
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
      <Link href={project.url} target="_blank">
        <Card className="card">
          <CardHeader>
            <div className="flex justify-between">
              <div className=" space-y-1">
                <CardTitle className="max-break-2:text-xl ">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-md max-break-2:text-sm">
                  {project.subtitle}
                </CardDescription>
              </div>
              <img
                className={`w-${project.logo.width} h-${project.logo.height}`}
                src={project.logo.path}
              ></img>
            </div>
          </CardHeader>

          <CardContent className="font-medium max-break-2:text-sm">
            {project.description}
          </CardContent>

          <CardContent className="font-medium">
            <div className="w-full flex justify-center">
              <span className="text-center font-bold text-xl max-break-2:text-lg">
                Technologies
              </span>
            </div>

            <div className="flex justify-center items-center pt-2 space flex-wrap">
              {project.technologies.map((technology) => {
                return (
                  <Badge variant="outline" className="m-1">
                    {technology}
                  </Badge>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </Link>
    </Tilt>
  );
};

export default ProjectCard;
