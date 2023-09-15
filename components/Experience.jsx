"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

import Link from "next/link";

const Experience = () => {
  return (
    <div className="pt-4 pb-20 space-y-4">
      <div>
        <Link href="https://moonraydevelopment.com/" target="blank_">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Full Stack Software Engineer</CardTitle>
              <CardDescription className="text-md">
                MoonRay Development • February 2023 - Current
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium">
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
      </div>

      <div>
        <Link href="https://moonraydevelopment.com/" target="blank_">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Web Developer / IT Consultant</CardTitle>
              <CardDescription className="text-md">
                TRS Consulting • April 2022 - Current
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium">
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
      </div>

      <div>
        <Link href="https://moonraydevelopment.com/" target="blank_">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Full Stack Software Engineer</CardTitle>
              <CardDescription className="text-md">
                MoonRay Development • February 2023 - Current
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium">
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
      </div>
    </div>
  );
};

export default Experience;
