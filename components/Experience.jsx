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
        <Link href="https://moonraydevelopment.com/" target="_blank">
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
        <Link href="https://trsconsulting.com/" target="_blank">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Web Developer / IT Consultant</CardTitle>
              <CardDescription className="text-md">
                TRS Consulting • April 2022 - Current
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium">
              Managed user administration across various platforms and executed
              web development projects, enhancing client online presence.
              Effectively handled assigned projects and automated tasks for
              improved efficiency. Performed software, hardware, and network
              troubleshooting remotely, while staying current with industry
              trends to ensure high-quality and secure IT solutions.
            </CardContent>
          </Card>
        </Link>
      </div>

      <div>
        <Link href="https://www.easternct.edu/" target="_blank">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Information Technology Services</CardTitle>
              <CardDescription className="text-md">
                Eastern Connecticut State University • May 2021 - Apr 2022
              </CardDescription>
            </CardHeader>

            <CardContent className="font-medium">
              Delivered efficient help desk and desktop support services,
              including configuring and installing new PCs, promptly addressing
              and resolving hardware and software issues, and actively managing
              incoming calls at the help desk. Created detailed tickets to track
              issues and ensure resolution, escalating tickets when necessary.
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
