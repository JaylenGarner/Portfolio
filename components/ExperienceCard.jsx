"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

import Link from "next/link";
import Tilt from "react-parallax-tilt";

const ExperienceCard = ({ experience }) => {
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
      <Link href={experience.url} target="_blank">
        <Card className="card">
          <CardHeader>
            <CardTitle className="max-break-2:text-xl">
              {experience.title}
            </CardTitle>
            <CardDescription className="text-md max-break-2:text-sm">
              {experience.subtitle}
            </CardDescription>
          </CardHeader>

          <CardContent className="font-medium max-break-2:text-sm">
            {experience.description}
          </CardContent>
        </Card>
      </Link>
    </Tilt>
  );
};

export default ExperienceCard;
